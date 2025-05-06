const login = (username, password, callback) => {
  if (username === 'user' && password === 'password') {
    callback(null, { success: true, message: 'Login successful' });
  } else if (username === 'locked' && password === 'password') {
    callback({ success: false, message: 'Account locked' }, null);
  } else {
    callback({ success: false, message: 'Invalid credentials' }, null);
  }
};

module.exports = login;
  