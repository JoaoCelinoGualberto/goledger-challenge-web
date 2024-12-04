import apiClient from "./apiClient";
import endpoints from "./utils/endpoints";

const blockchainService = {
  getBlockByNumber: async (channelName, blockNumber) => {
    return apiClient.get(endpoints.getBlockByNumber(channelName), {
      params: { blockNumber },
    });
  },

  getChainInfo: async (channelName) => {
    return apiClient.get(endpoints.getChainInfo(channelName));
  },
};

export default blockchainService;
