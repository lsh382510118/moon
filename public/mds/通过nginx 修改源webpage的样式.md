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
| ![image.png](https://cdn.nlark.com/yuque/0/2023/png/991609/1700444960006-08f955c2-f742-4ee4-99fd-c57bd6eae1ce.png#averageHue=%23fbf8f7&clientId=u8d834c57-c4bb-4&from=paste&height=444&id=u8c0fe81b&originHeight=888&originWidth=1259&originalType=binary&ratio=2&rotation=0&showTitle=false&size=269936&status=done&style=none&taskId=u0eac850f-1625-4bfc-a36f-4f722cd37e6&title=&width=629.5) | ![image.png](https://cdn.nlark.com/yuque/0/2023/png/991609/1700444811465-82563183-fa5d-4c71-8966-5dea9a33fc72.png#averageHue=%23cd8e7d&clientId=u8d834c57-c4bb-4&from=paste&height=397&id=u8d0f4296&originHeight=793&originWidth=1311&originalType=binary&ratio=2&rotation=0&showTitle=false&size=244408&status=done&style=none&taskId=u7c170156-da33-46b9-94dd-839ef6179aa&title=&width=655.5) |

#### 字体引入
| **Before** | **After** |
| --- | --- |
| ![image.png](https://cdn.nlark.com/yuque/0/2023/png/991609/1700445037603-a2e2f7f8-5562-4130-8794-b2ed81681bb8.png#averageHue=%23dbb887&clientId=u8d834c57-c4bb-4&from=paste&height=313&id=uba8db087&originHeight=625&originWidth=1073&originalType=binary&ratio=2&rotation=0&showTitle=false&size=188216&status=done&style=none&taskId=u8c81b590-d169-41a6-be69-c9dbd262e1d&title=&width=536.5) | ![image.png](https://cdn.nlark.com/yuque/0/2023/png/991609/1700445050114-e64add2e-bfd3-4d4c-8808-abf8addcc361.png#averageHue=%23c4927d&clientId=u8d834c57-c4bb-4&from=paste&height=324&id=u28b1fe8f&originHeight=648&originWidth=971&originalType=binary&ratio=2&rotation=0&showTitle=false&size=165751&status=done&style=none&taskId=uaf6137a3-060d-4240-8ef0-05f94477d46&title=&width=485.5) |





