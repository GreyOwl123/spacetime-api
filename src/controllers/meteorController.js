import Meteor from "../models/meteor"
import { body, validationResult } from "express-validator";


exports.meteor_detail = async (req, res, next) => {
    try {
       const meteor = await Meteor.findById(req.params.id);
        res.status(200).json({
            message: "Successful",
            meteor,
        });
    } catch (err) {
        res.status(401).json({
            message: "Failure",
            error: err.message
        });  
     }
}

exports.meteor_list = (req, res, next) => {
    Meteor.find()
    .then(function (meteors) {
      res.status(200).json({
        message: "Successful",
        meteors,
      });
    })
    .catch(function (err) {
      res.status(401).json({
        message: "Failure",
        error: err.message
      })
    });
}

exports.meteor_create = [
  body("name", "name is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
  body("type", "type is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
  body("reference", "reference is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
  body("distance", "distance is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
  body("time", "time is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
  body("location", "location is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
  body("summary", "summary is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),

  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const meteor = new Meteor({
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary, 
      });
    // Check if it's never been created.
    await meteor.save()
     .then(() => {
      res.status(200).json({
        message: "Meteor created",
        meteor,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Meteor not created",
        error: err.message,
      })
     })
    }
  }
]

exports.meteor_update = [
  body("name", "name is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
  body("type", "type is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
  body("reference", "reference is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
  body("distance", "distance is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
  body("time", "time is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
  body("location", "location is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
  body("summary", "summary is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),

  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const meteor = new Meteor({
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary,
      });

    await Meteor.findByIdAndUpdate(req.params.id, meteor, {} )
     .then(() => {
      res.status(200).json({
        message: "Meteor updated",
        meteor,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Meteor update failed",
        error: err.message,
      })
     })
    }
  }
]

exports.meteor_delete =  async (req, res, next) => {
  try {
     await Meteor.findByIdAndRemove(req.params.objectid);
      res.status(200).json({
          message: "Successful",
      });
  } catch (err) {
      res.status(401).json({
          message: "Failure",
          error: err.message
      });
  }
}
