import Moon from "../models/moon"
import { body, validationResult } from "express-validator";


exports.moon_detail = async (req, res, next) => {
    try {
       const moon = await Moon.findById(req.params.id);
        res.status(200).json({
            message: "Successful",
            moon,
        });
    } catch (err) {
        res.status(401).json({
            message: "Failure",
            error: err.message
        });  
     }
}

exports.moon_list = (req, res, next) => {
    Moon.find()
    .then(function (moons) {
      res.status(200).json({
        message: "Successful",
        moons,
      });
    })
    .catch(function (err) {
      res.status(401).json({
        message: "Failure",
        error: err.message
      })
    });
}

exports.moon_create = [
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
      const moon = new Moon({
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary, 
      });
    // Check if it's never been created.
    await moon.save()
     .then(() => {
      res.status(200).json({
        message: "Moon created",
        moon,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Moon not created",
        error: err.message,
      })
     })
    }
  }
]

exports.moon_update = [
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
      const moon = new Moon({
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary,
      });

    await Moon.findByIdAndUpdate(req.params.id, moon, {} )
     .then(() => {
      res.status(200).json({
        message: "Moon updated",
        moon,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Moon update failed",
        error: err.message,
      })
     })
    }
  }
]

exports.moon_delete =  async (req, res, next) => {
  try {
     await Moon.findByIdAndRemove(req.params.objectid);
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
