const createUser = (name, password, email) => {
   return { name, password, email };
};

const greet = (name) => `Shahbaz ${name}`

export default greet;

export { createUser };