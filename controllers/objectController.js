const Object = require("../models/object");
const { body, validationResult } = require("express-validator");

// Object Functions

exports.object_detail = async (req, res, next) => {
    try {
       const object = await Object.findById(req.params.id);
        res.status(200).json({
            message: "Successful",
            object,
        });
    } catch (err) {
        res.status(401).json({
            message: "Failure",
            error: err.message
        });
    }
}

exports.object_index = (req, res, next) => {
    Object.find()
    .then(function (objects) {
      res.status(200).json({
        message: "Successful",
        objects,
      });
    })
    .catch(function (err) {
      res.status(401).json({
        message: "Failure",
        error: err.message
      })
    });
}

exports.object_create = [
  body("title", "title is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
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
      const object = new Object({
        title: req.body.title,
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary, 
      });
    // Try to check if it's never been created.
    await object.save()
     .then(() => {
      res.status(200).json({
        message: "Object created",
        object,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Object not created",
        error: err.message,
      })
     })
    }
  }
]

exports.object_update = [
  body("title", "title is required")
      .trim()
      .isLength({ min: 1 })
      .escape(),
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
      const object = new Object({
        title: req.body.title,
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary,
      });

    await Object.findByIdAndUpdate(req.params.id, object, {} )
     .then(() => {
      res.status(200).json({
        message: "Object updated",
        object,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Object update failed",
        error: err.message,
      })
     })
    }
  }
]

exports.object_delete =  async (req, res, next) => {
  try {
     await Object.findByIdAndRemove(req.params.objectid);
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
