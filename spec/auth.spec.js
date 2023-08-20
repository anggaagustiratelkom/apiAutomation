const request = require("supertest");
const config = require("../data/config.json");
const authData = require("../data/auth.json");

async function getTrueLogin() {
  const response = await request(config.baseURL)
    .post("/authentications")
    .send(authData["data-benar"]);
  return response;
}

async function getFalseLogin() {
  const response = await request(config.baseURL)
    .post("/authentications")
    .send(authData["data-salah"]);
  return response;
}

async function getToken() {
  const response = await request(config.baseURL)
    .post("/authentications")
    .send(authData["data-benar"]);
  token = (await response).body.data.accessToken;
  return token;
}

module.exports = { getTrueLogin, getFalseLogin, getToken };
