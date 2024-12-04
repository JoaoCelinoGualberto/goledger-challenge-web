const endpoints = {
    // Basic Operations
    createAsset: "/invoke/createAsset",
    readAsset: "/query/readAsset",
    updateAsset: "/invoke/updateAsset",
    deleteAsset: "/invoke/deleteAsset",
    search: "/query/search",
    getSchema: "/query/getSchema",
  
    // Blockchain
    getBlockByNumber: (channelName) => `/${channelName}/qscc/getBlockByNumber`,
    getChainInfo: (channelName) => `/${channelName}/qscc/getChainInfo`,
  };
  
  export default endpoints;
  