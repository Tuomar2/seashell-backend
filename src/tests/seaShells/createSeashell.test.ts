import request from "supertest";
import app from "../../app";

describe("POST /seashells", () => {
  it("should create a new seashell", async () => {
    const res = await request(app).post("/seashells").send({
      name: "Test Shell",
      color: "Blue",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Test Shell");
  });

  it("should return 400 without name", async () => {
    const res = await request(app).post("/seashells").send({
      color: "Red",
    });

    expect(res.statusCode).toBe(400);
  });
});