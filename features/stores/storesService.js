import axios from 'axios';
import { axiosConfig } from '../helperFuntions';

const API_URL = 'http://192.168.1.117:8000/';

const getStores = async () => {
  const res = await axios.get(API_URL + 'stores', axiosConfig());

  return res.data;
};

const createStore = async storeData => {
  console.log(storeData);
  const res = await axios.post(API_URL + 'stores', storeData, axiosConfig());
  console.log(res);
  return res.data;
};

const updateStore = async storeData => {
  const res = await axios.put(API_URL + 'stores', storeData, axiosConfig());

  return res.data;
};

const deleteStore = async storeData => {
  const res = await axios.delete(API_URL + 'stores', storeData, axiosConfig());

  return res.data;
};

const storesService = {
  getStores,
  createStore,
  updateStore,
  deleteStore
};

export default storesService;
