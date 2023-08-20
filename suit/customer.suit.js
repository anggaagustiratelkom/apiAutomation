const { expect } = require("chai");
const {
  createCustomer,
  getAllCustomer,
  getCustomerDetail,
  getFailCustomerDetail,
  updateCustomer,
  deleteCustomer,
} = require("../spec/customer.spec");

describe("Customer Feature", () => {
  it("Create Customer", async () => {
    const response = await createCustomer();
    console.log((await response).status);
    console.log((await response).body);
    expect((await response).status).to.equal(201);
    expect((await response).body.data.customerId).not.to.be.null;
  });

  it("Get All Customer", async () => {
    const response = await getAllCustomer();
    console.log((await response).status);
    console.log((await response).body.data);
    expect((await response).status).to.equal(200);
    expect((await response).body.data.customerId).not.to.be.null;
  });

  it("Get Customer by ID", async () => {
    const response = await getCustomerDetail();
    console.log((await response).status);
    console.log((await response).body.data);
    expect((await response).status).to.equal(200);
    expect((await response).body.data.customerId).not.to.be.null;
  });

  it("Fail Get Customer by ID", async () => {
    const response = await getFailCustomerDetail();
    console.log((await response).status);
    console.log((await response).body);
    expect((await response).status).to.equal(404);
  });

  it("Update Customer", async () => {
    const response = await updateCustomer();
    console.log((await response).status);
    console.log((await response).body.data);
    expect((await response).status).to.equal(200);
    expect((await response).body.data.customerId).not.to.be.null;
  });

  it("Delete Customer", async () => {
    const response = await deleteCustomer();
    console.log((await response).status);
    console.log((await response).body);
    expect((await response).status).to.equal(200);
  });
});
