import apiClient from "./apiClient";
import endpoints from "./utils/endpoints";

const transactionService = {
  getTxList: async () => {
    return apiClient.get("/query/getTx");
  },

  getTxDetails: async (txName) => {
    return apiClient.post("/query/getTx", { txName });
  },
};

export default transactionService;
