import express from "express";
const router = express.Router();

import star_controller from "../controllers/starController";
import moon_controller from "../controllers/moonController";
import comet_controller from "../controllers/cometController";
import planet_controller from "../controllers/planetController";
import galaxy_controller from "../controllers/galaxyController";
import asteroid_controller from "../controllers/asteroidController";
import meteor_controller from "../controllers/meteorController";
import satellite_controller from "../controllers/satelliteController";

// index route 
router.get('/', star_controller.index);

// star routes
router.get('/star', star_controller.star_list);
router.get('/star/:id', star_controller.star_detail);
router.post('/star/create', star_controller.star_create);
router.post('/star/:id/update', star_controller.star_update);
router.post('/star/:id/delete', star_controller.star_delete);

// moon routes
router.get('/moon', moon_controller.moon_list);
router.get('/moon/:id', moon_controller.moon_detail);
router.post('/moon/create', moon_controller.moon_create);
router.post('/moon/:id/update', moon_controller.moon_update);
router.post('/moon/:id/delete', moon_controller.moon_delete);

// comet routes
router.get('/comet', comet_controller.comet_list);
router.get('/comet/:id', comet_controller.comet_detail);
router.post('/comet/create', comet_controller.comet_create);
router.post('/comet/:id/update', comet_controller.comet_update);
router.post('/comet/:id/delete', comet_controller.comet_delete);

// planet routes
router.get('/planet', planet_controller.planet_list);
router.get('/planet/:id', planet_controller.planet_detail);
router.post('/planet/create', planet_controller.planet_create);
router.post('/planet/:id/update', planet_controller.planet_update);
router.post('/planet/:id/delete', planet_controller.planet_delete);

// galaxy routes
router.get('/galaxy', galaxy_controller.galaxy_list);
router.get('/galaxy/:id', galaxy_controller.galaxy_detail);
router.post('/galaxy/create', galaxy_controller.galaxy_create);
router.post('/galaxy/:id/update', galaxy_controller.galaxy_update);
router.post('/galaxy/:id/delete', galaxy_controller.galaxy_delete);

// asteroid routes
router.get('/asteroid', asteroid_controller.asteroid_list);
router.get('/asteroid/:id', asteroid_controller.asteroid_detail);
router.post('/asteroid/create', asteroid_controller.asteroid_create);
router.post('/asteroid/:id/update', asteroid_controller.asteroid_update);
router.post('/asteroid/:id/delete', asteroid_controller.asteroid_delete);

// meteor routes
router.get('/meteor', meteor_controller.meteor_list);
router.get('/meteor/:id', meteor_controller.meteor_detail);
router.post('/meteor/create', meteor_controller.meteor_create);
router.post('/meteor/:id/update', meteor_controller.meteor_update);
router.post('/meteor/:id/delete', meteor_controller.meteor_delete);

// satellite routes
router.get('/satellite', satellite_controller.satellite_list);
router.get('/satellite/:id', satellite_controller.satellite_detail);
router.post('/satellite/create', satellite_controller.satellite_create);
router.post('/satellite/:id/update', satellite_controller.satellite_update);
router.post('/satellite/:id/delete', satellite_controller.satellite_delete);

module.exports = router;