export const handleError = (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw new Error(error.response.data.message || "API Error");
    } else {
      console.error("Network Error:", error.message);
      throw new Error("Network Error");
    }
  };
  