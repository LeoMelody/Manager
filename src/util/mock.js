import config from './config'

const APIS = config.APIS
const mock = {} 

mock[APIS.getSessionKey] = {
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
    data: {
      'data': {
         'sessionkey': '123456' 
      },
      'retCode': '1',
      'retMsg': '成功'
    }
}

mock[APIS.login] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    'data': {
       'username': '王一衡',
       'authority': [
        { 
          index: '1-1',
          name: '角色管理',
          isParent: true,
          hasChildren: true,
          defaultIndex: 'B-1-1',
          children: [
            {
                index: 'B-1-1',
                name: '角色列表',
                isParent: false,
                hasChildren: false,
                router: '/home/table'
            },
            {
                index: 'B-1-2',
                name: '用户列表',
                isParent: false,
                hasChildren: false,
                router: '/home/form'
            }
          ]
        },
        {
          index: '1-2',
          name: '资源管理',
          isParent: true,
          hasChildren: true,
          defaultIndex: 'B-2-1',
          children: [
            {
                index: 'B-2-1',
                name: '资源列表',
                isParent: false,
                hasChildren: false,
                router: '/home/role'
            },
            {
                index: 'B-2-2',
                name: 'xx列表',
                isParent: false,
                hasChildren: false,
                router: '/home/user'
            }
          ]
        }
       ] 
    },
    'retCode': '1',
    'retMsg': '成功'
  }
}

mock[APIS.tableData] = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    'data': {
      'currentPage': 1,
      'pageSize': 10,
      'data': [{
        'id': 1,
        'name': '段娜',
        'email': 'g.rgiuory@kctbut.mw',
        'ip': '68.28.4.232'
      },
      {
        'id': 2,
        'name': '蔡洋',
        'email': 'y.mwjjoje@lpkshev.tg',
        'ip': '22.126.12.189'
      },
      {
          'id': 3,
          'name': '陈敏',
          'email': 'e.voaiiuo@mvng.sn',
          'ip': '227.89.13.37'
      },
      {
          'id': 4,
          'name': '朱平',
          'email': 'e.lduuf@nkfypn.az',
          'ip': '9.39.240.243'
      },
      {
          'id': 5,
          'name': '侯平',
          'email': 't.czqjyndts@jmwenklns.md',
          'ip': '178.162.29.113'
      },
      {
          'id': 6,
          'name': '常超',
          'email': 'd.dhysgem@uxpcutmlk.tt',
          'ip': '192.50.103.170'
      },
      {
          'id': 7,
          'name': '许平',
          'email': 'g.fiqdonvbc@wanepptw.tv',
          'ip': '73.20.99.60'
      },
      {
          'id': 8,
          'name': '毛超',
          'email': 'w.unyyejh@qus.gt',
          'ip': '10.88.135.123'
      },
      {
          'id': 9,
          'name': '周磊',
          'email': 'e.qbejguqqg@ejpxhltoak.gw',
          'ip': '244.221.237.210'
      },
      {
          'id': 10,
          'name': '胡秀英',
          'email': 's.dszo@uxaojtj.sy',
          'ip': '86.199.17.210'
      }
      ]
    },
    'retCode': '1',
    'retMsg': '成功'
  }
}

export default mock
