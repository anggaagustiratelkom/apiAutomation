const { expect } = require("chai");
const {
  createUser,
  getAllUsers,
  getUserDetail,
  updateUser,
  deleteUser,
  getFailUserDetail,
} = require("../spec/users.spec");

describe("User Feature", () => {
  it("Create User", async () => {
    const response = await createUser();
    console.log((await response).status);
    console.log((await response).body);
    expect((await response).status).to.equal(201);
    expect((await response).body.data.userID).not.to.be.null;
  });

  it("Get All Users", async () => {
    const response = await getAllUsers();
    console.log((await response).status);
    console.log((await response).body.data);
    expect((await response).status).to.equal(200);
    expect((await response).body.data.userID).not.to.be.null;
  });

  it("Get Users by ID", async () => {
    const response = await getUserDetail();
    console.log((await response).status);
    console.log((await response).body.data);
    expect((await response).status).to.equal(200);
    expect((await response).body.data.userID).not.to.be.null;
  });

  it("Fail Get User by ID", async () => {
    const response = await getFailUserDetail();
    console.log((await response).status);
    console.log((await response).body);
    expect((await response).status).to.equal(404);
  });

  it("Update User", async () => {
    const response = await updateUser();
    console.log((await response).status);
    console.log((await response).body.data);
    expect((await response).status).to.equal(200);
    expect((await response).body.data.userID).not.to.be.null;
  });

  it("Delete User", async () => {
    const response = await deleteUser();
    console.log((await response).status);
    console.log((await response).body);
    expect((await response).status).to.equal(200);
  });
});
