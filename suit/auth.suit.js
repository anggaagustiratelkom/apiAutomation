const { expect } = require("chai");
const { getTrueLogin, getFalseLogin } = require("../spec/auth.spec");

describe("Login feature", () => {
  it("Success Login", async () => {
    const response = await getTrueLogin();
    console.log((await response).status);
    expect((await response).status).to.equal(201);
  });

  it("Failed Login", async () => {
    const response = await getFalseLogin();
    console.log((await response).status);

    expect((await response).status).to.equal(401);
  });
});
