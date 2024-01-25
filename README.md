
<p align="center"><a href="http://www.boblog.com" target="_blank" rel="noopener noreferrer"><img width="234" src="https://cdn.boblog.com/boblog.png" alt="logo"></a></p>

## 一、项目介绍
一个完整的博客项目，包含服务端接口API，管理后台，前端网站，前端的项目请点击以下：

- 基于 React.js + Ant Design 实现的博客管理后台：[react-blog](https://github.com/helin0815/react-ant-blog)

### 1.1.项目模块
- 管理员模块
    - 实现权限管理，能够对其他模块进行增删改查权限
    - 登录注册模块，登录管理后台
- 用户模块
    - 实现在前台博客网站中登录注册
- 文章模块
    - 实现文章的新增，修改，删除，查询
    - 文章进行对分类，评论，回复关联
- 分类模块
    - 实现分类的新增，修改，删除，查询
    - 实现分类与文章进行关联
- 评论 / 回复模块
    - 实现评论 / 回复的新增，修改，删除，查询
    - 实现评论 / 回复与文章进行关联

## 二、使用项目
### 2.1.克隆项目
首先使克隆项目，然后进入项目根目录使用命令安装包，最后命令启动项目，代码会根据模型自动创建数据库表的。
```
# 克隆项目代码

git clone https://github.com/helin0815/nodejs-blog-backend.git
```


### 2.2.项目架构
拉取代码下来后，简单说明一下项目架构，我们简单熟悉一下，目的是为了了解清楚每个文件夹有什么作用的，好的代码结构并不仅仅是为了看上去清晰，它更像是我们对一个系统的拆解和组装。

```iterm2
.
├── _tests 单元测试
├── app *重点, 项目工程入口
    ├── api 接口
    ├── dao 数据存取对象（Data Access Objects）
    ├── lib 工具库
    ├── models 建模，把业务逻辑映射成数据模型
    ├── service 数据处理
    └── validators 数据验证
├── app.js 入口文件
├── config 配置文件，记得复制里面的config_dev.js为config.js，然后在config.js中修改成你使用的数据库的用户名和密码
├── core 核心公共工具库
├── doc 接口文档
├── jest.config.js  测试配置文件
├── middlewares 中间件
├── package-lock.json
├── package.json
└── yarn.lock
```

### 2.3.创建数据库

启动项目前一定要在创建好 boblog 数据库，如果你还没安装上数据库，请点击[MySQL 下载](https://dev.mysql.com/downloads/mysql/)，请在根目录下的 |——config/config.js 文件下修改您本地的数据库名字（boblog）和数据库密码 ( password )。以下是执行数据库命令：

```
# 登录数据库

mysql -uroot -p (回车然后输入你的本机数据库密码)

# 创建 boblog 数据库

CREATE DATABASE IF NOT EXISTS boblog DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```


### 2.4.启动项目
以下是启动服务端项目的操作命令：
```
# 进入项目根目录

cd nodejs-blog-backend

# 安装依赖包

npm install 或者 yarn install

# 启动项目

npm run dev 或者 yarn dev

```

API 端口默认是 `5000`，打开浏览器输入回车：`http://localhost:5000` 可以看到浏览器返回数据，可以查看目录下的 ./app/api/v1 下的接口或者看 doc 目录下的 markdown 接口文档，在 postman 测试接口。

Postman 下载地址：[https://www.postman.com/downloads/](https://www.postman.com/downloads/)


## 三、FAQ
1. 没有yarn环境，npm 可以吗？
> 答：可以的，建议使用 yarn，yarn 比 npm 速度快，主要是安装版本统一。
