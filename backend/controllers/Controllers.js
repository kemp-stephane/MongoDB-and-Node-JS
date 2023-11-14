const Model = require("../models/Model")

module.exports.getTasks = async(req,res)=> {
    const tasks = await Model.find()
    res.send(tasks)
};
 
module.exports.saveTask = (req,res)=> {
    const {task} = req.body

    Model.create({task})
    .then((data)=> {
        console.log("successfully Added");
        res.status(201).send(data)
    }).catch((err)=>{
        console.log(err)
        res.send({error: err, msg:"Something is wrong"})
    })
};

module.exports.updateTask = (req,res)=> {
    const {id} = req.params
    const {task} = req.body

    Model.findByIdAndUpdate(id, {task})
    .then(()=>res.send("updated successfully"))
    .catch((err)=>{
        console.log(err)
        res.send({error: err, msg:"Something is wrong"})
    })
};

module.exports.deleteTask = (req,res)=> {
    const {id} = req.params

    Model.findByIdAndDelete(id)
    .then(()=>res.send("deleted successfully"))
    .catch((err)=>{
        console.log(err)
        res.send({error: err, msg:"Something is wrong"})
    })
};



