const request = require("supertest")
const baseURL = "http://localhost:4004"

describe("GET getSubscriptions", () => {
  it("should return 200", async () => {
    const response = await request(baseURL).get("/getSubscriptions");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET getPaymentHistory", () => {
  it("should return 200", async () => {
    const response = await request(baseURL).get("/getPaymentHistory");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST getOrderHistory", () => {
  it("should return 200", async () => {
    const response = await request(baseURL).post("/getOrderHistory");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST getDashboard", () => {
  it("should return 200", async () => {
    const response = await request(baseURL).post("/getDashboard");
    expect(response.statusCode).toBe(200);
  });
});
