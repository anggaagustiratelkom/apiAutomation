const request = require("supertest");
const config = require("../data/config.json");
const custData = require("../data/customer.data.json");
const { getToken } = require("./auth.spec");

async function createCustomer() {
  token = await getToken();
  const response = await request(config.baseURL)
    .post("/customers")
    .send(custData["create-customer"])
    .set("Authorization", `Bearer ${token}`);
  customerID = (await response).body.data.customerId;
  return response;
}

async function getAllCustomer() {
  token = await getToken();
  const response = await request(config.baseURL)
    .get("/customers")
    .set("Authorization", `Bearer ${token}`);
  return response;
}

async function getCustomerDetail() {
  token = await getToken();
  console.log(customerID);
  const response = await request(config.baseURL)
    .get(`/customers/${customerID}`)
    .set("Authorization", `Bearer ${token}`);
  return response;
}

async function getFailCustomerDetail() {
  token = await getToken();
  const response = await request(config.baseURL)
    .get(`/customers/${custData["fail-get-customer"]}`)
    .set("Authorization", `Bearer ${token}`);
  return response;
}

async function updateCustomer() {
  token = await getToken();
  console.log(customerID);
  const response = await request(config.baseURL)
    .get(`/customers/${customerID}`)
    .send(custData["update-customer"])
    .set("Authorization", `Bearer ${token}`);
  return response;
}

async function deleteCustomer() {
  token = await getToken();
  console.log(customerID);
  const response = await request(config.baseURL)
    .del(`/customers/${customerID}`)
    .set("Authorization", `Bearer ${token}`);
  return response;
}

module.exports = {
  createCustomer,
  getAllCustomer,
  getCustomerDetail,
  getFailCustomerDetail,
  updateCustomer,
  deleteCustomer,
};
