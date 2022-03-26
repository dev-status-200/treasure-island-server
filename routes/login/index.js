const routes = require('express').Router();
const jwt = require('jsonwebtoken');

const { Users } = require('../../models');

routes.post("/login", async(req, res)=>{

    const { email, pass } = req.body

    if(req.body.email && req.body.pass){
      const users = await Users.findOne({where:{email:email, password:pass}})
    if(users){
      if(email==users.email && pass==users.password){

        const payload = { role_id:users.role_id, username:`${users.f_name} ${users.l_name}`,loginId:`${users.id}` }
        jwt.sign(
          payload,
          'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm',
          {expiresIn:"12h"},
          (err,token) => {
            if(err) return res.json({message: err})
            return res.json({
              message:"Success",
              token: "BearerSplit"+token
            })
          }
        )
      }else{ return res.json({message:"Invalid"}) }
    }
    else { return res.json({message:"Invalid"}) }

    } else{ return res.json({message:"Invalid"}) }

});

module.exports = routes;