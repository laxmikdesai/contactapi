import axios from "axios";
import { baseUrl } from "./baseurl";

const AdminloginApi = async (payload) => {
  try {
    const res = await axios.post(`${baseUrl}/admin/login`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.token) {
      localStorage.setItem("admin_token", res.data.token); // store JWT
    }

    console.log("Response from AdminloginApi:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error in AdminloginApi:", error.response?.data || error.message);
  }
};

export default AdminloginApi;
