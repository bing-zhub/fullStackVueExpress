# fullStackVueExpress
这是一个基于vue和express的全栈项目,目标是实现一个符合Material Design风格的CMS系统.
其应用场景可以是博客/分享网站(技术,文学,养生等)/小型公司,工作室主页 etc..

## 技术栈
### 前端 vue 使用vue-cli的webpack模板
  #### vuex 状态管理
    用户的登录状态, 页面路由状态等
  #### vue-router 前端路由
    对前端url进行解析, 指向不同界面
  #### vuetify 前端组件
    一个符合MaterialDesign的前端组件库 对vue支持甚好
  #### font awesome
    前端图标库: 图标组件库
  #### quillEditor 
    富文本编辑器: 作用户编辑用(todo)
  #### editor.md,simplemde-markdown-editor
    Markdown编辑器: 一个高生产力markdown工具(todo)
  #### video player (to do)

### 后端 express 
#### bcrypt-nodejs sha256加密工具
#### bluebird promisify工具
#### body-parser api请求解析工具
#### cors 跨域请求工具
#### joi 数据模型验证
#### jsonwebtoken 用户身份信息认证 
#### morgan 日志中间件
#### sequelize 基于promise的ORM工具,用于数据库交互

### 数据库 mysql
 
## 目录结构
--client
    --build build文件夹**vue-cli生成**
    --config webpack等配置文件**vue-cli生成**
    --node_modules 各种依赖库
    --src vue前端源码
        -- assets 放置一些静态文件
            -- highlight markdown语法高亮样式
            -- style 公用css样式库
        -- components 组件库使用大驼峰命名
            -- Blank.vue 空白模板便于创建新组件
            -- CreateSong.vue 用于创建新内容
            -- Dialog.vue 会话弹出框
            -- FloatingButton.vue 浮动按钮
            -- Footer.vue 页脚
            -- Header.vue 页眉
            -- HelloWorld.vue vue-cli自动生成的首页
            -- Login.vue 登录界面
            -- Markdown.vue Markdown编辑器
            -- Page404.vue 404页面
            -- Panel.vue 面板公用组件
            -- QuillEditor.vue 富文本编辑器
            -- Register.vue 注册页面
            -- Songs.vue 主要内容加载页
            -- ViewSong.vue 详情页
        -- config
        -- router
        -- services
        -- store
    --static 静态资源
    --test 测试文件
--server
    --
    --
    --
    --

## 示例 -- 用户注册



