process.env.Node_ENV = 'test';

import request from "supertest";
import express from "express";
const app = express();


 request(app)
    .post("/star/create", {
        json: true,
        body: {
            name: "test1",
            type: "test1",
            reference: "test1",
            distance: "test1",
            time: "test1",
            location: "test1",
            summary: "test1"
            }
        })
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function(err,res) {
                if (err) throw err;
    });
