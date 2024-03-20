import Star from "../models/star"
import { body, validationResult } from "express-validator";


exports.index = (req, res, next) => {
  res.status(200).json({
      message: "Successful",
      title: "Space Time",
  } );
}

exports.star_detail = async (req, res, next) => {
    try {
       const star = await Star.findById(req.params.id);
        res.status(200).json({
            message: "Successful",
            star,
        });
    } catch (err) {
        res.status(401).json({
            message: "Failure",
            error: err.message
        });  
     }
}

exports.star_list = (req, res, next) => {
    Star.find()
    .then(function (stars) {
      res.status(200).json({
        message: "Successful",
        stars,
      });
    })
    .catch(function (err) {
      res.status(401).json({
        message: "Failure",
        error: err.message
      })
    });
}

exports.star_create = [
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
      const star = new Star({
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary, 
      });
    // Check if it's never been created.
    await star.save()
     .then(() => {
      res.status(200).json({
        message: "Star created",
        star,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Star not created",
        error: err.message,
      })
     })
    }
  }
]

exports.star_update = [
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
      const star = new Star({
        name: req.body.name,
        type: req.body.type,
        reference: req.body.reference,
        distance: req.body.distance,
        time: req.body.time,
        location: req.body.location,
        summary: req.body.summary,
      });

    await Star.findByIdAndUpdate(req.params.id, star, {} )
     .then(() => {
      res.status(200).json({
        message: "Star updated",
        star,
      })
     })
     .catch((err) => {
      res.status(401).json({
        message: "Star update failed",
        error: err.message,
      })
     })
    }
  }
]

exports.star_delete =  async (req, res, next) => {
  try {
     await Star.findByIdAndRemove(req.params.objectid);
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
