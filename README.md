# 后台管理项目总结
    用vue框架,因为vue易上手,还考虑到团队成员的技术,vue的速度快,
    webpack搭建工程目录,webpack区分开发环境和生产环境,开发环境有利调试,
    提高开发成员的工作效率,生产环境,体积小,压缩代码,
    es6写js,es6有promise避免回调函数嵌套,
    用es6的模块,代码更加简洁,
    less编译css,易于css的编写,和后期的维护
    vuex进行状态管理,因为后台类项目数据比较多,用vuex来进行状态管理,比较方便,易于后期维护,
    vue-router搭建页面路由,
    axios进行数据请求.element-ui组件库进行前端页面的展示,
    全局路由的钩子函数进行路由的权限管理
    用路由拦截判断登录与否,登录信息存储在localStorage,
    添加广告创意是我这个项目的核心功能
    上传图片,创建创意是一个难点,创建创意时有一个tab切换,
    最开始没有封装,造成状态共享,最后封装成组件,解决了
    所有的数据用store进行状态管理,
    对store也进行了,分模块进行管理

