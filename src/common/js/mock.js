import config from './config'
var APIS = config.APIS

var mock = {}

mock[APIS.test] = {
    'retCode': '1',
    'retMsg': '成功',
    'data': {
        testNum: 10086
    }
}

export default mock
