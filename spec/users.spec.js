const request = require("supertest");
const config = require("../data/config.json");
const userData = require("../data/user.data.json");
const { getToken } = require("./auth.spec");

async function createUser() {
  token = await getToken();
  const response = await request(config.baseURL)
    .post("/users")
    .send(userData["create-user"])
    .set("Authorization", `Bearer ${token}`);
  userID = (await response).body.data.userId;
  return response;
}

async function getAllUsers() {
  token = await getToken();
  const response = await request(config.baseURL)
    .get("/users")
    .set("Authorization", `Bearer ${token}`);
  return response;
}

async function getUserDetail() {
  token = await getToken();
  console.log(userID);
  const response = await request(config.baseURL)
    .get(`/users/${userID}`)
    .set("Authorization", `Bearer ${token}`);
  return response;
}

async function getFailUserDetail() {
  token = await getToken();
  const response = await request(config.baseURL)
    .get(`/users/${userData["fail-get-user"]}`)
    .set("Authorization", `Bearer ${token}`);
  return response;
}

async function updateUser() {
  token = await getToken();
  console.log(userID);
  const response = await request(config.baseURL)
    .get(`/users/${userID}`)
    .send(userData["updateUser"])
    .set("Authorization", `Bearer ${token}`);
  return response;
}

async function deleteUser() {
  token = await getToken();
  console.log(userID);
  const response = await request(config.baseURL)
    .del(`/users/${userID}`)
    .set("Authorization", `Bearer ${token}`);
  return response;
}

module.exports = {
  createUser,
  getAllUsers,
  getUserDetail,
  getFailUserDetail,
  updateUser,
  deleteUser,
};
