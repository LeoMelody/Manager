# manager

> the manager system of wyh

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8088
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

> todo list

## What Need To Do

``` bash
# sass
在vue中安装sass

1、安装sass-loader   npm install --save-dev sass-loader

2、安装node-sass 因为sass-loader依赖于node-sass

npm install --save-dev node-sass

3、修改build文件夹下的webpack.base.config.js

    添加配置sass-loader的配置 
    {
     test: /\.sass$/,
     loaders: ['style', 'css', 'sass']
    }
        
# 使用stylus
在这个项目中，不再使用sass，而是采用stylus来完成项目样式。在vue项目中安装stylus

1、安装stylus-loader     npm install --save-dev stylus-loader

2、安装stylus  npm install --save-dev stylus

3、vue页面中使用stylus，将style部分的lang属性改为stylus

# 使用postcss
使用postcss并学习其用法

1、vue-cli构建的项目已经加有postcss的依赖。具体怎么使用还是要一步一步的学习

# 使用elementUI
构建后台管理系统，这里我使用的是ElementUI

1、引入elementUI npm install element-ui --save

2、在入口文件处引入elementUI  

    import ElementUI from 'element-ui'
    Vue.user(ElementUi)

3、上述方法是直接引入了所有的elementUI组件，实际在开发中我们只需按需引入elementUI的组件即可

4、安装 babel-plugin-component 来帮助我们引入需要引入的组件，来减小项目体积

    npm install babel-plugin-component -D   

5、然后在.babelrc中用这个组件来表示elementUI，然后就可以在页面中引入部分组件而不是全部组件。

在这个项目中我还是引入的全部组件，一是简单，二是也不知道后面具体会用到哪些其他的组件  

# 使用vue2-animate
使用这个主要是方便做动画，很多动画它帮你做自己就好省很多力气

npm install vue2-animate --save

main.js 使用import引入进去

import 'vue2-animate/dist/vue2-animate.min.css'
引入的是css

出现问题，animate无效果了。这个过渡的动画必须要存在一个动画的场景，比如从无到有，从左到右这种的
# 使用axios
axios 使用与学习

# 模拟数据使用mock.js
如何去使用mock.js来模拟数据？
```

> project build

## 项目搭建

--该项目使用vue-cli构建。一些