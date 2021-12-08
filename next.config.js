const path = require("path");

module.exports = {
  images: {
    domains: ['2.gravatar.com', '20.201.13.131'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "scss")],
    prependData: `@import "_main.scss";`,
  },
}