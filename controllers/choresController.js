const db = require("../models");


module.exports = {
  findAll: function (req, res) {
    db.Chores.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => {
        res.json(dbModel);
        console.log(dbModel);
      })

      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Chores.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    
    const houseID = req.params.id
    
    db.Chores
      .create(req.body)
      .then(({ _id }) => { 
      db.Household.findOneAndUpdate({_id:houseID}, { $push: { chores: [_id] } }, { new: true })
      .then(() => res.json({success:true}))
      })
      .catch((err) => res.status(422).json(err))
  },
  update: function (req, res) {
    db.Chores.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Chores.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
