## Version
| **版本** | **时间** | **作者** | **描述** |
| --- | --- | --- | --- |
| v0.1 | 2023-11-20 | 连俊强 | -- |
|  |  |  |  |


## Background
Nginx是一个高性能的HTTP服务器，它可以实现反向代理的功能，即将客户端的请求转发到后端的服务器，并将后端服务器的响应返回给客户端。这样可以实现负载均衡、安全防护、缓存加速等目的。但是，有时候我们不仅仅想要转发请求和响应，还想要对目标网站的内容进行一些自定义的修改，比如替换某些字符串、添加或删除某些标签、修改某些链接等。这种情况下，我们就需要使用Nginx的内容替换模块，即ngx_http_sub_module模块。

ngx_http_sub_module模块是一个过滤器，它可以修改网站响应内容中的字符串。这个模块已经内置在Nginx中，但是默认未安装，需要安装需要加上配置参数：–with-http_sub_module。如果已经安装Nginx,只需要再添加这个模块就可以了。安装完成后，我们就可以在Nginx的配置文件中使用sub_filter指令来设置需要替换的字符串和新的字符串。

## 实现
> 这里以Claro项目的Merchant Portal平台为例子来实现，目标是改变Merchant Portal的默认字体和全局默认字体颜色
> - 字体改成线上字体：https://fonts.googleapis.com/css2?family=Open+Sans
> - 字体颜色： 改成红色

### 配置nginx.conf
```nginx
server {
  listen 8085;
  server_name localhost;
  add_header Access-Control-Allow-Origin *;
  add_header Access-Control-Allow-Headers X-Requested-With;
  add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
  location / {
    proxy_pass https://merchant.manager.claro.dev.com/;
    proxy_redirect off;
    sub_filter '<head>' '<head> <link href="https://fonts.googleapis.com/css2?family=Open+Sans" rel="stylesheet">';
    sub_filter '<body>' '<body style="font-family: Open Sans,NunitoSans-Regular; color: red">';
    sub_filter_once on;
  }
}
```

- 本地服务：http://localhost:8085
- 引入远程字体：sub_filter '<head>' '<head> <link href="https://fonts.googleapis.com/css2?family=Open+Sans" rel="stylesheet">';
- 改变字体和字体颜色：sub_filter '<body>' '<body style="font-family: Open Sans,NunitoSans-Regular; color: red">';


### 通过nginx测试

- 用过nginx启动服务
#### 字体类型&字体颜色
| **Before** | **After** |
| --- | --- |
| ![image.png](http://s4lrouxtt.hn-bkt.clouddn.com/moon/article/nginx-update-font-01.jpg) | ![image.png](http://s4lrouxtt.hn-bkt.clouddn.com/moon/article/nginx-update-font-02.jpg) |

#### 字体引入
| **Before** | **After** |
| --- | --- |
| ![image.png](http://s4lrouxtt.hn-bkt.clouddn.com/moon/article/nginx-update-font-03.jpg) | ![image.png](http://s4lrouxtt.hn-bkt.clouddn.com/moon/article/nginx-update-font-04.jpg) |





