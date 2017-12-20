import mock from './mock'
import config from './config'

var utils = {
    getApi(api) {
        return config.APIS[api]
    },
    getHrefParam(key) {
        var reg = new RegExp('(^|\\?|&)' + key + '=([^&]*)(\\s|&|$)', 'i')
        if (reg.test(decodeURIComponent(location.href))) {
          return RegExp.$2
          //return RegExp.$2.replace(/\+/g, " ");
        }
        return null
    },
    sendRequest(param) {
        var that = this
        if (!config.DEBUG) {
            that.requestFun(param)
        } else {

        }
    },
    requestFun(param) {

    }
}

export default utils
