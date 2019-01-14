// config/dev.env.js

var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',< br >　　//添加
    API_ROOT: '"//192.168.1.8/api"'
})

//config/prod.env.js
module.exports = {
    NODE_ENV: '"production"',
    //添加
    API_ROOT: '"//www.baidu.com/api"'
}

axios.defaults.baseURL = process.env.API_ROOT




