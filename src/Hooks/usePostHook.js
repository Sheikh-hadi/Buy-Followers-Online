import axios from "axios";

const HandlePostData = async (path, data) => {
  try {
    const response = await axios.post(path, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Path: ", path, "data: ", data);
    console.log("Success:", response.data);
    return response; // Return the response data
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error?.response?.data  : error?.message
    );
    return error.response ? error?.response?.data : error?.message; // Return the error message
  }
};

export default HandlePostData;
