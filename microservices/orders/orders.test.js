const request = require("supertest")
const baseURL = "http://localhost:4002"

describe("GET getOrders", () => {
  it("should return 200", async () => {
    const response = await request(baseURL).get("/getOrders");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET getOrder", () => {
  it("should return 200", async () => {
    const response = await request(baseURL).get("/getOrder");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST placeOrder", () => {
  it("should return 200", async () => {
    const response = await request(baseURL).post("/placeOrder");
    expect(response.statusCode).toBe(200);
  });
});