const express = require('express');
const router = express.Router();

const index_controller = require("../controllers/indexController");

router.get('/object/:id', index_controller.object_detail);

router.get ('/objects', index_controller.object_list);

router.post('/object/create', index_controller.object_create);

router.post('/object/:id/update', index_controller.object_update);

router.post('/object/:id/delete', index_controller.object_delete);

module.exports = router;