const routes = require('express').Router();
const moment = require('moment');

const { Agents } = require('../../models');
const { Agent_Logs } = require('../../functions/associations/');

routes.post("/logout", async(req, res) => {
    try {
        await Agents.update({login_status:'0'},{where:{id:req.body.id}})
        await Agent_Logs.update( {logout:moment().tz("Pakistan/Karachi").format('dddd MMMM Do YYYY, h:mm:ss a')}, { where:{AgentId:req.body.id, login:req.body.loginTime} })
        res.send('Logout')
    }
    catch (error) {
      res.send(error)
    }
  }
)

module.exports = routes;