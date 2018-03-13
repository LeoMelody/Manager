import config from './config'
import mock from './mock'
import axios from 'axios'

var utils = {
    getUserSession(cb) {
        // 模拟session为123456
        sessionStorage.setItem('session', '123456')
        cb && cb()
    },
    sendRequest(param) {
        var that = this
        if (!config.DEBUG) {
            that.requestFun(param)
        } else { // 使用mock数据
            console.log(param)
            var result = mock[param.url]
            if (result) {
                param.callback && param.callback(result)
            } else {
                that.requestFun(param)
            }
        }
    },
    requestFun(param) {
        var that = this
        var flag = false
        // 时间戳生成
        param.data.t = new Date().getTime()
        var session = sessionStorage.getItem('session')
        // if (session) {
        //     param.data.sessionKey = session;
        // }
        if (param.method === 'POST') { // post请求数据要转成json字符串
            param.data = JSON.stringify(param.data)
            flag = true
        }
        console.log('发送请求前')
        axios({
            method: param.method,
            url: param.url,
            params: !flag ? param.data : {},
            headers: {
                'sessionKey': session,
                'Content-Type': 'application/json'
            },
            data: flag ? param.data : {}
        }).then(res => {
            console.log('发送请求成功')
            param.callback(res)
        }).catch(function (error) {
            //todo 如果sesstion失效，则重新登录
            if (error.response.status === 401 || error.response.status === 403) {
                sessionStorage.removeItem('session')
                that.refresh = true;
                console.log('如果sesstion失效，则重新登录')

                that.getUserSession()
            } else {}
        });
    },
    getApi(url) {
        return config.APIS[url]
    }
}

export default utils
