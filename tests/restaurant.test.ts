import request from "supertest";
import app from "../src/app";

describe("Restaurant API", () => {

  it("GET /restaurants should return 200", async () => {
    const res = await request(app).get("/restaurants");
    expect(res.status).toBe(200);
  });

  it("POST /restaurants should create a restaurant", async () => {
    const res = await request(app)
      .post("/restaurants")
      .send({
        name: "Test Restaurant",
        location: "Winnipeg",
        cuisineType: "Fast Food"
      });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Test Restaurant");
  });

});