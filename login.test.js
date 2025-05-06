const login = require('./login');

describe('Login Function', () => {
  it(' successfully log in with valid credentials', (done) => {
    login('user', 'password', (error, result) => {
      expect(error).toBeNull();
      expect(result).toEqual({ success: true, message: 'Login successful' });
      done();
    });
  });

  it(' return an error with invalid credentials', (done) => {
    login('wronguser', 'wrongpassword', (error, result) => {
      expect(error).toEqual({ success: false, message: 'Invalid credentials' });
      expect(result).toBeNull();
      done();
    });
  });

  it('handle a locked account', (done) => {
    login('locked', 'password', (error, result) => {
      expect(error).toEqual({ success: false, message: 'Account locked' });
      expect(result).toBeNull();
      done();
    });
  });
});