import axios from 'axios';

const API_URL = 'http://192.168.1.117:8000/';

const login = async userData => {
  const res = await axios.post(API_URL + 'login', userData);
  console.log(res);
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }

  return res.data;
};

const register = async userData => {
  const res = await axios.post(API_URL + 'register', userData);

  console.log(res);

  if (res.data) {
    localStorage.setItem('user', res.data);
  }

  return res.data;
};

const logout = async () => {
  localStorage.removeItem('user');
};

const authService = {
  login,
  logout,
  register
};

export default authService;
