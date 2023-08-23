const objectController = require("./objectController");
const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", objectController);

test("object detail route works", done => {
   request(app)
    .get("/object/:id")
    .expect("Content-Type", /json/)
    .expect(200, done);
 });


