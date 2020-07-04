export default {
  "mode": "production",
  "module": {
    "rules": [{
      "loader": "babel-loader",
      "query": {
        "babelrc": false,
        "plugins": ["transform-function-bind"],
        "presets": [
          ["env", {
            "modules": false
          }]
        ]
      }
    }]
  }
}