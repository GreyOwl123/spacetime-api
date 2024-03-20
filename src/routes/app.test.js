import * as objectController from "../controllers/objectController";
import request from "supertest";
import express from "express";
const app = express();


test("home route works", done => {
   request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect(200, done);
 });