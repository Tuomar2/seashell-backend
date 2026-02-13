import request from "supertest";
import app from "../app";

describe("Seashell API", () => {
  it("GET /health should return ok", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  it("GET /seashells should return an array", async () => {
    const res = await request(app).get("/seashells");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /seashells should create a new seashell", async () => {
    const res = await request(app).post("/seashells").send({
      name: "Test Shell",
      color: "Blue",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Test Shell");
  });

  it("POST /seashells without name should return 400", async () => {
    const res = await request(app).post("/seashells").send({
      color: "Red",
    });

    expect(res.statusCode).toBe(400);
  });

  it("Invalid ID should return 400", async () => {
  const res = await request(app).get("/seashells/abc");

  expect(res.statusCode).toBe(400);
  expect(res.body.message).toBe("Invalid seashell ID");
});

});
