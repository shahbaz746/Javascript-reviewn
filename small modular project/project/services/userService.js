// services/userService.js
const users = [];

const createUser = (name, email) => {
  const user = { name, email };
  users.push(user);
  return user;
};

const getUsers = () => users;

export { createUser, getUsers };