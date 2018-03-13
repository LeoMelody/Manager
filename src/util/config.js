var preUrl = location.origin + '/core'

var APIS = {
    getSessionKey: preUrl + '/getSessionKey',
    login: preUrl + '/login',
    tableData: preUrl + '/tableData'
}

export default {
    APIS: APIS,
    DEBUG: true
}
