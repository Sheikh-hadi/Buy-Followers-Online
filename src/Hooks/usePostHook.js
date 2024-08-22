import axios from "axios";

const HandlePostData = async (path, data) => {
  try {
    const response = await axios.post(path, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("Path: ", path, "Data: ", data);
    // console.log("Success:", response);
    // console.log("Success:", response.data);
    // console.log("Status Code:", response.status); 
    return response; // Return the response data
  } catch (error) {
    if (error.response) {
      // console.error("Status Code:", error.response.status); 
      return error.response.status; 
    } else {
      // console.error("Error:", error.message);
      return { message: error.message }; 
    }
  }
};

export default HandlePostData;
