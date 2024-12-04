import apiClient from "./apiClient.ts";
import endpoints from "./utils/endpoints.ts";

const assetService = {
  create: async (data) => {
    return apiClient.post(endpoints.createAsset, data);
  },

  read: async (id) => {
    return apiClient.post(endpoints.readAsset, { id });
  },

  update: async (data) => {
    return apiClient.put(endpoints.updateAsset, data);
  },

  delete: async (id) => {
    return apiClient.delete(endpoints.deleteAsset, { data: { id } });
  },

  search: async (query) => {
    return apiClient.post(endpoints.search, {
      query: { selector: { ...query } },
    });
  },

  getSchema: async (assetType) => {
    return assetType
      ? apiClient.post(endpoints.getSchema, { assetType })
      : apiClient.get(endpoints.getSchema);
  },
};

export default assetService;
