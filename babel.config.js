module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module:react-native-dotenv", {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": ".env",
      "blocklist": null,
      "allowlist": null,
      "blacklist": null, // DEPRECATED
      //"whitelist": null, // DEPRECATED
      "whitelist": ['MOBILE_INTEGRATION_API_URL', 'M_TRANSACTIONS_API_URL'],
      "safe": false,
      "allowUndefined": true,
      "verbose": false
    }]
  ]
};
