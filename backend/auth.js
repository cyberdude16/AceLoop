// ✅ auth.js (in the same folder as server.js)
const users = []; // Replace with DB in production

async function registerUser({ username, email, password }) {
  if (users.find(u => u.email === email)) {
    throw new Error('User already exists');
  }
  const newUser = { id: users.length + 1, username, email, password };
  users.push(newUser);
  return newUser;
}

async function loginUser({ email, password }) {
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) throw new Error('Invalid credentials');
  return user;
}

module.exports = { registerUser, loginUser };
