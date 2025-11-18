const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Users']
     mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find()
    .toArray((err, lists) => {
      if (err) {
        res.status(400).json({ message: err });
      }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Users']
    if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid contact id to find a contact.');
    }
  const userId = new ObjectId(req.params.id);
  mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId })
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result[0]);
    });
};


const createUser = async (req, res) => {
    //#swagger.tags=['Users']
    const user = {
        email: req.body.email,
        username: req.body.username,
        ipaddress: req.body.ipaddress,
        birthdate: req.body.birthdate,
        favorite_color: req.boy.favorite_color,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    };
    const response = await mongodb.getDatabase().collection('users').insertOne({ _id: userId }, user);
    if (response.modifiedCount > 0) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occured while creating the user.');
    }
};

const updateUser = async (req, res) => {
    //#swagger.tags=['Users']
    const userId = new ObjectId(req.params.id);
    if (!req.body.email || !req.body.username || !req.body.name) {
        return res.status(400).json({ message: 'One or more of the required fields are missing.' })
    }
    
    const user = {
        email: req.body.email,
        username: req.body.username,
        ipaddress: req.body.ipaddress,
        birthdate: req.body.birthdate,
        favorite_color: req.boy.favorite_color,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        };
    z
    const response = await mongodb.getDatabase().collection('users').replaceOne({ _id: userId }, user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(404).json(response.error || 'User has not been found OR no changes have been made.');
    }
};

const deleteUser = async (req, res) => {
    //#swagger.tags=['Users']
    const userId = newObjectId(req.params.id);
    const response = await mongodb.getDatabase().collection('users').deleteOne({ _id: userId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while deleting the user.');
    }
};





module.exports = {
    getAll,
    getSingle, 
    createUser,
    updateUser,
    deleteUser
};