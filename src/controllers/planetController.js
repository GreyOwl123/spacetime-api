import Planet from "../models/planet"
import { body, validationResult } from "express-validator";

exports.planet_detail = async (req, res, next) => {
    try {
       const planet = await Planet.findById(req.params.id);
        res.status(200).json({
            message: "Successful",
            planet,
        });
    } catch (err) {
        res.status(401).json({
            message: "Failure",
            error: err.message
        });  
     }
}

exports.planet_list = (req, res, next) => {
    Planet.find()
    .then(function (planets) {
      res.status(200).json({
        message: "Successful",
        planets,
      });
    })
    .catch(function (err) {
      res.status(401).json({
        message: "Failure",
        error: err.message
      })
    });
}

exports.planet_create = [
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
      const planet = new Planet({
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary, 
      });
    // Check if it's never been created.
    await planet.save()
     .then(() => {
      res.status(200).json({
        message: "Planet created",
        planet,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Planet not created",
        error: err.message,
      })
     })
    }
  }
]

exports.planet_update = [
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
      const planet = new Planet({
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary,
      });

    await Planet.findByIdAndUpdate(req.params.id, planet, {} )
     .then(() => {
      res.status(200).json({
        message: "Planet updated",
        planet,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Planet update failed",
        error: err.message,
      })
     })
    }
  }
]

exports.planet_delete =  async (req, res, next) => {
  try {
     await Planet.findByIdAndRemove(req.params.objectid);
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
