const request = require("supertest")
const baseURL = "http://localhost:4003"

describe("POST updateSubscription", () => {
  it("should return 200", async () => {
    const response = await request(baseURL).post("/updateSubscription");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET cancelSubscription", () => {
  it("should return 200", async () => {
    const response = await request(baseURL).get("/cancelSubscription");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET getSubscriptions", () => {
  it("should return 200", async () => {
    const response = await request(baseURL).get("/getSubscriptions");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST startSubscription", () => {
  it("should return 200", async () => {
    const response = await request(baseURL).post("/startSubscription");
    expect(response.statusCode).toBe(200);
  });
});