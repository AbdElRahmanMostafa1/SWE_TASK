import axios from "axios";

type Method = "post" | "get";
const baseUrl = "http://localhost:5000/api/v1";

const apiCall = async (method: Method, endpoint: string, payload: any = {}) => {
  try {
    const response = await axios[method](`${baseUrl}/${endpoint}`, payload, {
      headers: {
        "Content-Type": "application/octet-stream",
      },
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default apiCall;
