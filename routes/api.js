const express = require('express');
const router = express.Router();

const object_controller = require("../controllers/objectController");

router.get('/', object_controller.object_index)

router.get('/object/:id', object_controller.object_detail);

//router.get ('/objects', object_controller.object_list);
// left above comment alone as i'd like to refactor index for home path

router.post('/object/create', object_controller.object_create);

router.post('/object/:id/update', object_controller.object_update);

router.post('/object/:id/delete', object_controller.object_delete); 

module.exports = router;