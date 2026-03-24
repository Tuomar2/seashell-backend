import request from "supertest";
import app from "../../app";

describe("validateId middleware", () => {
  it("should return 400 for invalid ID", async () => {
    const res = await request(app).get("/seashells/abc");

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Invalid seashell ID");
  });
});