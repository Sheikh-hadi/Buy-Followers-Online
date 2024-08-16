import axios from "axios";


const handleTransformData = (res) => {
    // Initialize transformedData as an empty array
    let transformedData = null;

    // Check if res exists and is an array
    if (res && Array.isArray(res)) {
        // Map over the array to transform each item
        transformedData = res.map((item, index) => {
            // Return the transformed item
            return {
                ...item, 
            };
        });
    }

    // Return the transformed data
    return transformedData;
}



// Updated function to accept state update functions as parameters
export const UseGetHandleData = async (setLoading, setError, setHome, path) => {
  setLoading(true);
  try {
    const response = await axios.get(path);
    console.log("first: ", response.data);
    const transformedData = handleTransformData(response?.data?.data);
    console.log("data: ", response?.data?.data)
    console.log("transformedData: ", transformedData)
    setHome(response?.data?.data);
    setError(null); // Clear any previous errors
  } catch (error) {
    setError(error);
    setHome(null); // Clear any previous data
  } finally {
    setLoading(false);
  }
};

// Updated function to call the useGetHandleData function
export const fetchData = async (setLoading, setError, setHome, path) => {
  await UseGetHandleData(setLoading, setError, setHome, path);
};
