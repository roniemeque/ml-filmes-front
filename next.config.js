require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/el-tambo/promocao-teste": {
        page: "/promocao",
        query: { cliente_path: "el-tambo", promocao_path: "promocao-teste" },
      },
    };
  },
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      }),
    ];

    return config;
  },
};
