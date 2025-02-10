const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');  
const Contact = require('../models/Contact');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI); 
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("POST /contacts", () => {
  it("should create a new contact", async () => {
    const res = await request(app)
      .post("/contacts")
      .send({
        name: "Shiva",
        email: "shiva@example.com",
        phone_number: "1234567800",
        address: "123 block, Bangalore"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.name).toBe("Shiva");
  });

  it("should return 400 if required fields are missing", async () => {
    const res = await request(app)
      .post("/contacts")
      .send({
        email: "shiva@example.com" // Missing name & phone_number
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("errors");
;

  });
});
