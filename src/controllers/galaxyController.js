import Galaxy from "../models/galaxy"
import { body, validationResult } from "express-validator";



exports.galaxy_detail = async (req, res, next) => {
    try {
       const galaxy = await Galaxy.findById(req.params.id);
        res.status(200).json({
            message: "Successful",
            galaxy,
        });
    } catch (err) {
        res.status(401).json({
            message: "Failure",
            error: err.message
        });  
     }
}

exports.galaxy_list = (req, res, next) => {
    Galaxy.find()
    .then(function (galaxys) {
      res.status(200).json({
        message: "Successful",
        galaxys,
      });
    })
    .catch(function (err) {
      res.status(401).json({
        message: "Failure",
        error: err.message
      })
    });
}

exports.galaxy_create = [
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
      const galaxy = new Galaxy({
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary, 
      });
    // Check if it's never been created.
    await galaxy.save()
     .then(() => {
      res.status(200).json({
        message: "Galaxy created",
        galaxy,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Galaxy not created",
        error: err.message,
      })
     })
    }
  }
]

exports.galaxy_update = [
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
      const galaxy = new Galaxy({
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary,
      });

    await Galaxy.findByIdAndUpdate(req.params.id, galaxy, {} )
     .then(() => {
      res.status(200).json({
        message: "Galaxy updated",
        galaxy,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Galaxy update failed",
        error: err.message,
      })
     })
    }
  }
]

exports.galaxy_delete =  async (req, res, next) => {
  try {
     await Galaxy.findByIdAndRemove(req.params.objectid);
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
