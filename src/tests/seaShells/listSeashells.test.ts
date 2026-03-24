import request from "supertest";
import app from "../../app";

describe("GET /seashells", () => {
  it("should return an array", async () => {
    const res = await request(app).get("/seashells");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});