const axios = require("axios")
const qs = require("qs")

module.exports = {
    main: async function (event, context) {
        console.log("------------------")

        console.log("Values from Secret")
        console.log("------------------")
        console.log(process.env['CLIENT_ID'])
        console.log(process.env['CLIENT_SECRET'])

        console.log("------------------")

        console.log("Values from ConfigMap")
        console.log("------------------")
        console.log(process.env['CONFIG'])
        console.log(process.env['BASE_URL'])

        console.log("------------------")
        console.log("Checking if the function gets updated after push")
    }
}