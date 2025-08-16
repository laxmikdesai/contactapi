// src/api/ContactApi.js

import axios from "axios";
import base_url from "./bootapi"; // ✅ Corrected path

const getAllContactFromServer = async () => {
  try {
    const response = await axios.get(`${base_url}/contact`);
    console.log("response for fetch cotact is",response)
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

export const saveAllContactToServer = async (data) => {
  try {
    const response = await axios.post(`${base_url}/contact`,data);
    console.log("response by server:",response)
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};
export const updateAllContactToServer = async (data,id) => {
  try {
    const response = await axios.post(`${base_url}/contact/${id}`,data);
    console.log("response by server:",response)
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

export default getAllContactFromServer;
