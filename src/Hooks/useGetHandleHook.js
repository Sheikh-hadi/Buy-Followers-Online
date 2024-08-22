import axios from "axios";
export const UseGetHandleData = async (setLoading, setError, setData, path) => {
  setLoading(true);
  try {
    const response = await axios.get(path);
    // console.log("first: ", response?.data?.data[0]);
    // console.log("data: ", response?.data)
    setData(response?.data?.data[0]);
    setError(null); // Clear any previous errors
  } catch (error) {
    setError(error);
    setData(null); // Clear any previous data
  } finally {
    setLoading(false);
  }
};

// Updated function to call the useGetHandleData function
export const fetchData = async (setLoading, setError, setData, path) => {
  await UseGetHandleData(setLoading, setError, setData, path);
};
