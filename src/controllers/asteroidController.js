import Asteroid from "../models/asteroid"
import { body, validationResult } from "express-validator";


exports.asteroid_detail = async (req, res, next) => {
    try {
       const asteroid = await Asteroid.findById(req.params.id);
        res.status(200).json({
            message: "Successful",
            asteroid,
        });
    } catch (err) {
        res.status(401).json({
            message: "Failure",
            error: err.message
        });  
     }
}

exports.asteroid_list = (req, res, next) => {
    Asteroid.find()
    .then(function (asteroids) {
      res.status(200).json({
        message: "Successful",
        asteroids,
      });
    })
    .catch(function (err) {
      res.status(401).json({
        message: "Failure",
        error: err.message
      })
    });
}

exports.asteroid_create = [
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
      const asteroid = new Asteroid({
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary, 
      });
    // Check if it's never been created.
    await asteroid.save()
     .then(() => {
      res.status(200).json({
        message: "Asteroid created",
        asteroid,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Asteroid not created",
        error: err.message,
      })
     })
    }
  }
]

exports.asteroid_update = [
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
      const asteroid = new Asteroid({
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary,
      });

    await Asteroid.findByIdAndUpdate(req.params.id, asteroid, {} )
     .then(() => {
      res.status(200).json({
        message: "Asteroid updated",
        asteroid,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Asteroid update failed",
        error: err.message,
      })
     })
    }
  }
]

exports.asteroid_delete =  async (req, res, next) => {
  try {
     await Asteroid.findByIdAndRemove(req.params.objectid);
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
