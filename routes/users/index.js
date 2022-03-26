const routes = require('express').Router();

const { Users } = require('../../models');

routes.post("/addUser", async(req, res) => {
    const { f_name, l_name, password, email, ssn, shop_id, phone, gender, address, loginId } = req.body;
    console.log(req.body);
    try {
        const user = await Users.create({
            f_name:f_name, l_name:l_name, password:password, gender:gender, role_id:'Mechanic',status:'active',
            email:email, ssn:ssn, shop_id:shop_id, phone:phone, address:address, createdBy:loginId,
            profile_pic:"https://res.cloudinary.com/abdullah7c/image/upload/v1643040095/images_djois2.png"
      })
        res.send(user)
    }
    catch (error) {
      res.send(error)
    }
  }
);

routes.get("/getUsers", async(req, res) => {

    console.log(req.body);
    try {
        const user = await Users.findAll()
        res.send(user)
    }
    catch (error) {
      res.send(error)
    }
  }
);

module.exports = routes;