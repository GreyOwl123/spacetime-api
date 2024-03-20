process.env.Node_ENV = 'test';

import request from "supertest";
import express from "express";
const app = express();


request(app)
   .get('/')
   .expect('Content-Type', /json/)
   .expect(200)
   .end(function(err, res) {
      if (err) throw err;
   })