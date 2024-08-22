import axios from "axios";

const handlePUTData = async (path, data) => {
  try {
    const response = await axios.put(path, data);
    return response.data; 
  } catch (error) {
    console.error("Error:", error);
    throw error; 
  }
};

export default handlePUTData;
