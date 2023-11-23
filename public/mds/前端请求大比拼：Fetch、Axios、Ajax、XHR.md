[https://mp.weixin.qq.com/s/8b58SicOjeEXjGt766xHAg](https://mp.weixin.qq.com/s/8b58SicOjeEXjGt766xHAg)

全文约 **10000** 字，预计阅读需要 **30** 分钟。
当涉及前端网络请求时，有许多工具/技术可供选择,包括 Fetch、Axios、Ajax 和 XHR 等。这些技术在发送和处理HTTP请求方面提供了不同的功能和方法。本文将深入探讨这些技术的特点、优势和用法，帮你更好地理解并选择最适合项目需求的技术。
**1**
**基本概念**
Summer IS HERE
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606794933-3b8dd98b-0a1a-4413-9f68-b71ac82f07af.png#averageHue=%238c6c38&clientId=uc206be34-3cd5-4&from=paste&id=u2bdd14f2&originHeight=20&originWidth=78&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u075c2c4c-a20d-42a2-809b-cf877ceaaee&title=)
Fetch、Axios、Ajax 和XHR都是前端用于发送HTTP请求的工具或技术：

- **Fetch**：一种现代化的网络请求方法，通过使用 Promise 处理异步操作，简洁而直观地发送HTTP请求、处理响应，并支持各种功能和API，如设置请求头、传递参数、处理流数据、上传下载文件等。
- **Axios**：一个基于Promise的现代化HTTP客户端，是目前最流行的 HTTP 客户端，可以在浏览器和Node.js环境中发送HTTP请求，并具有拦截请求和响应、支持并发请求、提供丰富的API等功能。
- **Ajax**：通过在浏览器和服务器之间进行异步通信，实现部分页面更新和动态交互，提升用户体验；可以在不重新加载整个页面的情况下，通过JavaScript发送HTTP请求到服务器，并处理服务器返回的数据；减少带宽消耗，提高页面加载速度；提高用户交互性，实现更多的动态效果和实时更新。
- **XHR**：一种在浏览器中用于与服务器进行异步通信的API，通过发送HTTP请求并处理服务器返回的数据，实现异步获取各种格式的数据（如XML、JSON、HTML等），以实现页面的无刷新更新和动态交互。

下面就来看看这些技术都是怎么用的，以及都有什么特点！
**2**
**XHR**
Summer IS HERE
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606794881-09c23ede-588d-4dd5-b063-a550838fb8a6.png#averageHue=%238c6c38&clientId=uc206be34-3cd5-4&from=paste&id=u9d7b7d2c&originHeight=20&originWidth=78&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue3992d9a-1de3-4df6-b90c-25ad9e35526&title=)
XMLHttpRequest 是一个内置的 JavaScript 对象，XMLHttpRequest（XHR）对象用于与服务器交互。通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，获取数据。这允许网页在不影响用户操作的情况下，更新页面的局部内容。
XMLHttpRequest 在 AJAX 编程中被大量使用。尽管名称包含XML，XMLHttpRequest 也可以用于获取任何类型的数据，而不仅仅是 XML。它甚至支持 HTTP 以外的协议（包括 **file://** 和 **FTP**）。
XMLHttpRequest 存在一些缺点：

- **语法复杂性**：使用原始的 XMLHttpRequest 进行复杂的 AJAX 请求需要编写更多的代码，并手动处理状态管理、错误处理等方面的逻辑。相比之下，Axios 和 Fetch API 提供了更简单和直观的语法，使得发送和处理 HTTP 请求更加方便。
- **功能限制**：XHR 提供的功能相对较少，需要手动设置请求头、处理超时、取消请求等。而 Axios 和 Fetch API 提供了更丰富的功能，如拦截请求和响应、自动转换数据格式、请求取消等。
- **XSRF（跨站请求伪造）保护**：在 Axios 中，可以通过设置 **withCredentials** 选项来自动处理 XSRF 保护。然而，在 XMLHttpRequest 和 Fetch API 中，需要手动设置请求头来实现类似的保护。
- **错误处理**：XHR 的错误处理较为繁琐，需要在回调函数中进行错误判断。而 Axios 和 Fetch API 使用 Promise 和 async/await 语法，能够更便捷地处理请求和响应的错误。
- **仅限于浏览器环境**：XMLHttpRequest 是浏览器提供的 API，因此只能在浏览器环境中使用，无法在其他环境中（如服务器端）直接使用。

Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606794988-ff8955aa-ac28-4ca7-a090-7b6ddef9b1c5.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u3b61f503&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ua3c39bc3-666b-4cfd-aa1b-292be2b5f46&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606794889-c0896deb-9b28-4786-856d-fababb13a15a.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=ua409e965&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u7dbcc8ec-a351-4cb5-93cc-bac3325ea68&title=)
**请求步骤**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606794900-3822fd6b-6dd3-46dd-8073-5584b01f590a.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=u2bb0093c&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uead9477a-4a38-498c-8f06-dc1584aba02&title=)
使用 XMLHttpRequest 发送请求的步骤如下：

1. 创建**XMLHttpRequest**对象：
```
let xhr = new XMLHttpRequest();
```

1. 设置请求参数：
```
xhr.open('GET', 'https://example.com/api/data', true);
```

1. 设置请求头（可选）：
```
xhr.setRequestHeader('Content-Type', 'application/json');
```

1. 监听状态变化：
```
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      // 请求成功，处理响应
      console.log(xhr.responseText);
    } else {
      // 请求失败
      console.error('请求失败');
    }
  }
};
```

1. 发送请求：
```
xhr.send();
```
完整代码如下：
```
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      // 请求成功，处理响应
      console.log(xhr.responseText);
    } else {
      // 请求失败
      console.error('请求失败');
    }
  }
};

xhr.send();
```
这里创建了一个**XMLHttpRequest**对象，并使用**open()**方法设置了一个GET请求类型和URL。然后，通过监听**onreadystatechange**事件来判断请求的状态并处理响应。当**readyState**为4时，表示请求已完成，此时可以通过**status**属性判断请求是否成功（200表示成功）。如果成功，可以通过**responseText**属性获取服务器返回的数据进行处理。如果失败，将到控制台输出错误信息。
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606795507-08779be2-2e32-45e1-a688-3d3c2387cbd2.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=uc735e510&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u10260a71-cdf3-4ef1-8d02-dac18ef8f23&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606795494-a1357eeb-2db8-4739-99d0-6353b73580ba.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u58c8ad88&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u504927d9-021e-4bf9-9885-9520b6da14e&title=)
**open**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606795533-5053eb9e-e051-45a1-8d4a-0a8eb94e36f8.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=ub7342e47&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ua0e01a7f-d7b8-4cfe-b58f-d0b9abcd551&title=)
XMLHttpRequest 的 **open()** 方法用于初始化一个请求。**open()** 方法接受三个必填参数和一个可选参数，它们是：

1. **method**: 表示请求的 HTTP 方法，例如 GET、POST、PUT 等。
```
xhr.open("GET", "https://example.com/api/data", true);
```

1. **url**: 表示请求的 URL 地址。
```
xhr.open("GET", "https://example.com/api/data", true);
```

1. **async**: 表示请求是否异步执行，即是否使用异步模式。默认为 **true**，表示异步执行；f**alse** 表示同步执行。
```
javascriptCopy Codexhr.open("GET", "https://example.com/api/data", true);
```

1. **username** (可选): 表示用于进行 HTTP 认证的用户名。
```
xhr.open("GET", "https://example.com/api/data", true, "username");
```

1. **password** (可选): 表示用于进行 HTTP 认证的密码。
```
xhr.open("GET", "https://example.com/api/data", true, "username", "password");
```
综合起来，**open()** 方法的完整语法如下：
```
xhr.open(method, url, async, username, password);
```
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606795538-a5e955e0-4b57-4bfd-880b-493d1d74bb6e.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=ubd275a80&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ub5741334-78d6-4ed0-a274-8bc4be6c40e&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606795598-74d95f0f-50f2-49a9-9dcc-48855923ca3e.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u7cbec5cd&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ubd0c048f-f134-4bb4-87b1-0d5f1034e0c&title=)
**请求头和响应头**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606796106-4641a04c-f7ef-4c6a-88ca-245e52f7b124.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=u1112bc42&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uc3dda480-6dc6-4542-b840-f4b3dec392a&title=)
可以使用 **setRequestHeader()** 方法设置 XMLHttpRequest 的请求头。这个方法接受两个参数：头字段的名称和值。
```
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer token123");
```
这里使用 **setRequestHeader()** 方法设置了两个请求头：**Content-Type** 和 **Authorization**。第一个参数是头字段的名称，第二个参数是头字段的值。
可以使用 **getResponseHeader()** 方法或者 **getAllResponseHeaders()** 方法来获取 XMLHttpRequest 的响应头。

- **getResponseHeader()**：通过指定头字段的名称，可以获取指定的响应头字段的值。
```
const contentType = xhr.getResponseHeader("Content-Type");
```
这里使用 **getResponseHeader()** 方法获取了名为 **Content-Type**的响应头字段的值。

- **getAllResponseHeaders()**** **：该方法返回一个包含所有响应头信息的字符串。
```
const headers = xhr.getAllResponseHeaders();
```
这里使用 **getAllResponseHeaders()** 方法获取了所有响应头信息，并将其存储在名为 **headers** 的变量中。
这里返回的 **headers** 是一个包含所有响应头信息的字符串。该字符串中每一行表示一个响应头字段，具有以下形式：
```
HeaderName: HeaderValue
```
例如，如果响应头中包含 **Content-Type** 和 **Authorization** 字段，那么返回的 **headers** 字符串可能如下所示：
```
Content-Type: application/json
Authorization: Bearer token123
```
可以使用适当的方法（如字符串解析）将这个字符串进行进一步处理，以获取特定的响应头字段的名称和值。
注意，要在调用 **open()** 方法之后、发送请求之前使用 **setRequestHeader()** 方法来设置请求头，以确保设置能够生效。同样，要在接收到响应之后才能使用 **getResponseHeader()** 或 **getAllResponseHeaders()** 来获取响应头信息。
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606796104-7e8a3950-5380-4624-bed3-c98b8b3d3cab.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u2bb038ca&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u611c3056-bc48-4e13-80bf-1ba973ac949&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606796308-746d65ce-69a3-4a99-bd43-73182da90b4f.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u98b4935b&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u7180e77d-ea8d-412a-ba69-27e473d4237&title=)
**readyState**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606796103-dd6d4657-dd5e-4d81-af82-bf90d1368d41.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=uff83e6b3&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u204cff6b-b544-4ff5-b2ee-20c36b0884e&title=)
上面示例中的 **readyState** 是 XMLHttpRequest 对象的一个属性，用于表示请求的状态。该属性有以下五种可能的取值：

1. **0 (未初始化)**: XMLHttpRequest 对象已创建，但尚未调用 **open** 方法。
2. **1 (载入中)**: **open** 方法已调用，但尚未调用 **send** 方法。
3. **2 (载入完成)**: s**end** 方法已调用，并且响应头和响应状态已经可用。
4. **3 (交互中)**: 正在接收响应数据，此时部分响应内容可能已经可以访问了。
5. **4 (完成)**: 响应数据接收完成，整个请求过程已经完全结束。

通常情况下，我们主要关注 readyState 为 4 的状态，即请求完成状态。在这个状态下，我们可以通过检查 **status** 属性来获取请求的结果（比如响应状态码），并通过 **responseText** 或 **responseXML** 属性来获取服务器返回的数据。
注意，readyState 属性是只读的，我们不能直接修改它的值。它会在请求过程中自动更新，我们可以通过监听 readystatechange 事件来进行相应的处理。
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606796269-508b0a77-2f8c-4237-92ff-3ea70b7ac33d.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u6e6bf9b0&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ufa967d8f-88ef-441a-a8c6-dd06627d20f&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606796648-78b97885-ccc8-464a-8aca-7cd614311a42.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=uda813298&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ubd27c9fe-5d94-4f97-8867-bb892f2cf48&title=)
**status**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606796632-ad553d33-bb77-4199-9402-4398b7fc8801.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=uc6375d47&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u0737cfe8-69a3-44cc-b50a-04c67dd0451&title=)
status 是 XMLHttpRequest 对象的一个属性，用于表示 HTTP 状态码。 HTTP 状态码是服务器对请求处理的结果进行响应的标准化数字代码。常见的一些 HTTP 状态码包括：

- **200 OK**：表示请求成功并返回所请求的数据。
- **201 Created**：表示请求成功并在服务器上创建了新资源。
- **204 No Content**：表示请求成功，但响应中无返回的内容。
- **400 Bad Request**：表示请求有语法错误或参数错误，服务器无法理解。
- **401 Unauthorized**：表示请求未经授权，需要用户进行身份验证。
- **403 Forbidden**：表示服务器拒绝请求，通常是因为请求的资源没有访问权限。
- **404 Not Found**：表示请求的资源不存在。
- **500 Internal Server Error**：表示服务器内部发生错误，无法完成请求。

在使用 XMLHttpRequest 发送请求后，可以通过检查 **status** 属性来获取服务器对请求的响应状态码，并根据不同的状态码进行相应的处理。
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606796658-6a73d67c-e98b-4b2e-968e-e7abb3a5b7bb.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=uda9f2f43&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u4d521c50-ccdd-4e0d-b1f6-ef2b796ebc7&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606796685-cd837ac3-d150-453d-b3f3-91b218b8a960.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=ufc74e4a3&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u09e5c8ba-782f-425c-ac0e-7c63ad2d29f&title=)
**事件属性**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606796738-c88aeda1-2a1d-410e-8d75-674c3048569c.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=u54528a46&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uc81574a3-fe9a-49d3-b2b8-0293c02355b&title=)
XMLHttpRequest (XHR) 对象具有以下常用的事件属性：

1. **onreadystatechange**: 当 **readyState** 属性发生变化时触发该事件。可以使用 **xhr.onreadystatechange** 属性来指定处理状态变化的回调函数。在每次状态变化时都会触发该事件，可以通过检查 **xhr.readyState** 属性来确定当前的状态。
```
xhr.onreadystatechange = () => {
  if(xhr.readyState === 4) {
    // 请求已完成
    if(xhr.status === 200) {
      // 请求成功
    } else {
      // 请求失败
    }
  } else {
    // 请求进行中
  }
};
```

1. **onload:** 当请求成功完成并且响应数据完全加载时触发该事件。可以使用 **xhr.onload** 属性来指定处理成功加载的回调函数。通常在这个事件中获取和处理响应数据。
```
xhr.onload = () => {
  // 获取和处理响应数据
  const responseData = JSON.parse(xhr.responseText);
  // 其他操作...
};
```

1. **onerror**: 当请求发生错误时触发该事件。可以使用 **xhr.onerror** 属性来指定处理错误的回调函数。常见的错误包括网络错误、无法完成请求等。
```
xhr.onerror = () => {
  // 处理错误逻辑
};
```

1. **onprogress**: 在数据传输过程中持续触发，用于追踪请求的进度。可以使用 **xhr.onprogress** 属性来指定处理进度的回调函数。
```
xhr.onprogress = (event) => {
  // 处理进度逻辑
};
```

1. **ontimeout**： 当请求超时时触发该事件。可以使用 **xhr.ontimeout** 属性来指定处理超时的回调函数。
```
xhr.ontimeout = () => {
  // 处理超时逻辑
};
```
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606797013-d209f5ad-47df-4f7c-bcee-f3cf5dc525bd.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u487420bb&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u29578893-821a-4e34-9cbd-40aa5393c2a&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606797118-a8928138-cf5b-4639-9ede-56814801e4f1.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u006613bb&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ub7e1a709-a809-47ae-b8cc-bbb90d23c9c&title=)
**responseType**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606797085-dee660d8-a781-4c07-8783-cf9cc75394e6.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=ufacc0e07&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u9a7ad11f-040f-4802-ba73-fe2f6defadd&title=)
responseType 是 XMLHttpRequest 对象的属性，用于指定响应的数据类型。它决定了如何解析从服务器返回的响应数据。 常见的 responseType 值包括：

1. **"" (默认值)**: 表示响应的数据类型是字符串。
```
xhr.responseType = "";
```

1. **"text"**: 表示响应的数据类型是字符串。
```
xhr.responseType = "text";
```

1. **"json"**: 表示响应的数据类型是 JSON 对象，会自动将响应数据解析为 JavaScript 对象。
```
xhr.responseType = "json";
```

1. **"document"**: 表示响应的数据类型是 XML 文档对象，会自动将响应数据解析为 XML 文档对象。
```
xhr.responseType = "document";
```

1. **"arraybuffer"**: 表示响应的数据类型是 **ArrayBuffer** 对象，适用于二进制数据的传输和处理。
```
xhr.responseType = "arraybuffer";
```

1. **"blob"**: 表示响应的数据类型是 Blob 对象，适用于文件下载等场景。
```
xhr.responseType = "blob";
```
通过设置不同的 **responseType** 值，可以根据需要获取不同类型的响应数据。注意，在设置 **responseType** 之前，最好在调用 **open** 方法之后、发送请求之前设置，以确保设置生效。
**3**
**Ajax**
Summer IS HERE
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606797128-9577ebe0-3751-4408-a019-2dd474ac13f8.png#averageHue=%238c6c38&clientId=uc206be34-3cd5-4&from=paste&id=u9ca9cc87&originHeight=20&originWidth=78&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u45cf7185-51a1-4e1e-bd83-3df7c0803ce&title=)
AJAX（Asynchronous JavaScript and XML，异步 JavaScript 和 XML）是一种使用现有的网页技术来创建异步请求和更新页面内容的方法。Ajax 本身不是一种技术，而是一种将一些现有技术结合起来使用的方法，包括：HTML 或 XHTML、CSS、JavaScript、DOM、XML、XSLT、以及最重要的 XMLHttpRequest 对象。
当使用结合了这些技术的 Ajax 模型以后，网页应用能够快速地将增量更新呈现在用户界面上，而不需要重载（刷新）整个页面。这使得程序能够更快地回应用户的操作。Ajax 最吸引人的特性是它的“异步”性质，这意味着它可以与服务器通信、交换数据并更新页面，而无需刷新页面。
Ajax 是一种使用浏览器提供的 XMLHttpRequest 对象实现的技术，用于在不刷新整个页面的情况下进行异步请求和更新页面内容。**可以说 Ajax 是基于浏览器提供的 XMLHttpRequest 对象来实现的。**
以下是基于原生 JavaScript 的 AJAX 请求代码示例：
```
// 创建 XMLHttpRequest 对象
const xhr = new XMLHttpRequest();

// 指定请求的方法和 URL
xhr.open('GET', 'api_url', true);  // 第三个参数 true 表示异步请求

// 设置请求头（如果需要）
xhr.setRequestHeader('Content-Type', 'application/json');  // 根据实际需求设置请求头

// 注册一个回调函数来处理响应
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);  // 处理响应数据
    // 在这里执行相应的操作
    console.log(response);
  }
};

// 发送请求
xhr.send();
```
虽然 AJAX 是一种强大的技术，但相对于 Axios 和 Fetch API，它有以下一些缺点：

- **兼容性问题**：AJAX 的兼容性相对较低，尤其在旧版本的浏览器中可能会出现问题。而 Axios 和 Fetch API 使用了更现代的 JavaScript 特性，具有更好的兼容性。
- **代码冗余**：使用原生的 AJAX 需要编写较多的代码来处理不同的状态码、错误处理以及请求的拼装等。而 Axios 和 Fetch API 提供了更简洁和易用的接口，减少了代码冗余。
- **缺乏默认配置**：AJAX 不提供默认的全局配置，如请求和响应拦截器、统一的错误处理等。而 Axios 和 Fetch API 支持全局配置，并且提供了更方便的拦截器机制。
- **功能限制**：AJAX 在处理跨域请求时需要注意添加额外的处理，比如设置 CORS 头部信息或者使用 JSONP。而 Axios 和 Fetch API 提供了更直接的方式来处理跨域请求。
- **可读性较差**：由于 AJAX 使用的是回调函数来处理异步请求，可能会导致代码逻辑比较复杂，可读性较差。而 Axios 和 Fetch API 使用的是 Promise 或 async/await，使代码结构更加清晰易读。

**4**
**Fetch**
Summer IS HERE
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606797149-1c67d1b6-b252-4eae-8642-af6ee74e5a06.png#averageHue=%238c6c38&clientId=uc206be34-3cd5-4&from=paste&id=u4d9690e1&originHeight=20&originWidth=78&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ucde18d87-28ae-4c15-9485-35dafd9a65b&title=)
Fetch 是一种用于进行网络请求的现代 JavaScript API。它提供了一种简单、灵活且功能强大的方式，用于从服务器获取资源并处理响应。
Fetch API 在浏览器中原生支持，并且以 Promise 为基础，使得异步请求更加直观和易用。使用 Fetch API，可以执行各种类型的请求（如 GET、POST、PUT、DELETE 等），发送请求时可以设置请求头、请求参数，以及处理响应数据。
与传统的 AJAX 相比，Fetch API 具有以下优点：

- **Promise 支持**：Fetch API 使用 Promise 对象来处理异步操作，使得处理异步请求的流程更加清晰、易于阅读和编写。
- **更简洁的 API**：Fetch API 提供了一个简洁的 API，使发送请求变得更加直观和简单，同时提供了丰富的配置选项（如设置请求头、请求参数等）。
- **内置的 JSON 解析**：在处理响应时，Fetch API 内置了对 JSON 数据的解析，无需手动进行解析操作。
- **更好的错误处理**：Fetch API 使用了更全面的错误处理机制，允许通过检查响应状态码来确定请求是否成功，并以不同的方式处理错误。

Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606797573-92f5e6aa-781b-4135-8566-9d157c405918.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=uf54bd220&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue752a0e4-6178-4d75-afcf-d6d449013d0&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606797710-109cb436-c72a-41c1-a555-d48da7d92667.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=ub4458db4&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ufa21678b-8c78-4804-9ac9-d48fc6b1952&title=)
**fetch()**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606797707-69dda537-6858-4535-89d7-da0059693a0f.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=uf7e64dfd&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue07681cb-b11a-4f4d-8514-a1cca88378e&title=)
Fetch API 提供了一个全局的 **fetch()** 方法，该方法提供了一种简单、逻辑的方式来通过网络异步获取资源。
**fetch() **方法的语法如下：
```
fetch(url, options)
  .then(response => {
    // 在这里处理响应
  })
  .catch(error => {
    // 在这里处理错误
  });
```
这里有两个参数：

- **url**：请求的 URL 地址。
- **options**（可选）：一个包含请求选项的对象，可以指定请求的方法（method）、请求头（headers）、请求体（body）等。

注意，**fetch()**默认使用的是 GET 请求，如果需要使用其他方法（如 POST、PUT 等），需要通过 **options** 参数进行设置。
**fetch()** 方法返回一个 Promise 对象，可以使用 **.then()** 方法来处理成功的响应，使用 **.catch()** 方法来处理错误的情况。

- 在 **.then() **中，可以访问到 **response** 对象，进一步处理响应的内容。
- 在 **.catch()** 中，我们可以访问到 **error** 对象，用于处理请求过程中的任何错误。

**options** 对象包含的属性如下：
```
{
  method: 'POST', // *GET, POST, PUT, DELETE等
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: { 
    'Content-Type': 'application/json'
  },
  redirect: 'follow', // manual, *follow, error
  referrerPolicy: 'no-referrer', // no-referrer, *client
  body: JSON.stringify(data) 
   // body 数据类型必须与 "Content-Type" 请求头匹配
}
```

- **method**：请求方法，例如 GET、POST、PUT、DELETE 等。
- **mode**：请求模式，可以是 no-cors、*cors、same-origin 等。
- **cache**：缓存模式，可以是 default、no-cache、reload、force-cache、only-if-cached 等。
- **credentials**：请求的凭证模式，可以是 include、*same-origin、omit 等。
- **headers**：请求头对象，用于设置请求头的键值对。
- **redirect**：重定向模式，可以是 manual、*follow、error 等。
- **referrerPolicy**：引用页面隐私设置，可以是 no-referrer、*client 等。
- **body**：请求体数据，必须与 "Content-Type" 请求头指定的数据类型匹配。在示例中，使用**JSON.stringify()**将数据转换为 JSON 字符串。

Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606797681-7770edae-6b69-4cec-81b8-593893ff9f7a.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u745c512f&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ub1b208a1-1254-4408-87a7-af100be9c3b&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606797774-bf12d7f7-a84b-42c8-a716-280362898be4.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u0e2f953e&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u3e0ebd1c-2f63-45bc-b321-20c5292f035&title=)
**response**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606798210-197e8519-ca9c-4af4-bbd5-8a1d70aaf4b4.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=u09bcf2c6&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ucda56d60-8249-4d62-b7ef-9ef415c6298&title=)
一旦获取到响应（Response），返回的对象包含以下属性：

- **response.body**：一个简单的 getter，提供了响应内容的可读流（ReadableStream）。
- **response.bodyUsed**：一个布尔值，用于记录响应体是否已经被使用过。
- **response.headers**：与响应相关联的头部信息对象。
- **response.ok**：一个布尔值，指示响应是否成功。
- **response.redirected**：指示响应是否是重定向结果的布尔值。
- **response.status**：响应的状态码。
- **response.statusText**：与状态码对应的状态消息。
- **response.type**：响应的类型。
- **response.url**：响应的 URL。

我们可以使用 **response.type** 来确定响应的类型，并根据不同的类型采取相应的处理方法：
```
fetch(url)
  .then(response => {
    // 检查响应状态码
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // 定义一个响应类型与解析方法的映射关系
    const responseTypes = new Map([
      ['json', () => response.json()],
      ['text', () => response.text()],
      ['formData', () => response.formData()],
      ['blob', () => response.blob()],
      ['arrayBuffer', () => response.arrayBuffer()]
    ]);
    // 根据响应类型选择相应的解析方法
    const parser = responseTypes.get(response.type);
    if (parser) {
      return parser();
    } else {
      throw new Error('Unsupported response type');
    }
  })
  .then(data => {
    // 处理数据
    console.log(data);
  })
  .catch(error => {
    // 处理错误情况
    console.error('Error:', error);
  });
```
**Response** 对象提供了 5 个方法，用于从 HTTP 响应中获取不同类型的数据：

- **response.json()**：将响应体解析为 JSON 对象。如果响应的 Content-Type 是 **application/json**，则使用此方法。
- **response.text()**：将响应体解析为文本字符串。如果响应的 Content-Type 是纯文本类型，如 text/plain 或 text/html，则使用此方法。
- **response.formData()**：将响应体解析为 FormData 对象。如果响应的 Content-Type 是 multipart/form-data，则使用此方法。FormData 通常用于上传文件或提交表单数据。
- **response.blob()**：将响应体解析为 Blob 对象。Blob 对象表示二进制大对象，可以是图像、音频、视频等类型的数据。
- **response.arrayBuffer()**：将响应体解析为 ArrayBuffer 对象。ArrayBuffer 是一种表示二进制数据的固定长度缓冲区。

这些方法返回一个 Promise，当解析完成时，Promise 将被解析为相应的数据类型。
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606798061-24160557-af51-4e10-ac35-729f165f90dd.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u985d3026&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u6505c6e6-9ad5-4b52-a96c-8cd496cb86e&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606798046-2fc9f832-98be-4cec-94f9-ae1d860a1580.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u0438c09c&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u0b7a7d97-0b9a-49e9-a4a7-5485c57b78f&title=)
**请求头和响应头**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606798154-076d120d-024f-43f6-b42e-1e42a8f3e777.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=u99f1cbd6&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ud3e258b1-ba8e-4429-8bde-d8ed48f77f9&title=)
fetch 函数的请求头包含在发起 HTTP 请求时发送给服务器的信息，用于传递额外的参数和配置。可以使用 **headers** 对象来设置和操作请求头。常见的请求头字段包括：

- **Content-Type**：指定请求体的格式类型，如 **application/json**、**application/x-www-form-urlencoded** 等。
- **Authorization**：用于身份验证，通常与 Token 或用户名密码一起使用。
- **Accept**：指定客户端所能接受的响应数据类型。
- **User-Agent**：标识发起请求的用户代理（浏览器或应用程序）的信息。

在 fetch 函数中可以通过第二个参数进行配置，其中可以指定请求头：
```
fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  }
})
  .then(response => {
    // 处理响应
  })
  .catch(error => {
    // 处理错误
  });
```
响应头是服务器在响应 HTTP 请求时发送给客户端的头部信息。可以通过 **Response** 对象的 **headers** 属性访问响应头。常见的响应头字段包括：

- **Content-Type**：指定响应体的格式类型。
- **Set-Cookie**：设置或修改客户端的 Cookie。
- **Cache-Control**：控制缓存的行为，如 no-cache、max-age 等。
- **Content-Disposition**：指定响应的内容该如何展示（如文件的下载）。

在处理 **fetch** 返回的 **Response** 对象时，可以通过调用 **response.headers.get('Header-Name')** 方法来获取特定的响应头字段的值。
```
fetch(url)
  .then(response => {
    const contentType = response.headers.get('Content-Type');
    // 其他处理逻辑
  })
  .catch(error => {
    // 处理错误
  });
```
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606798150-d67f6565-720a-4b38-af4c-aeb67ed2982d.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u66213532&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ud3dcb388-181a-444b-acf2-278d7b153b6&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606798389-2353af11-8814-440a-ba7c-91e75b32b22c.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u1f5b79c2&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u41a1f2a6-9044-4f56-88a6-9164aa074cf&title=)
**错误处理**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606798419-fc408eed-a947-47e4-8681-30cf711346e5.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=u9c0d5884&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u1bfeedda-1563-4583-8fce-8cc9e5393b7&title=)
除了可以使用 catch() 来处理错误之外，与使用其他异步操作一样，我们也可以使用 **async/await **来处理异步请求，使代码更加简洁和易读：
```
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (response.ok) {
      const data = await response.json();
      console.log(data); // 处理解析后的数据
    } else {
      throw new Error('请求失败');
    }
  } catch (error) {
    console.log(error); // 处理错误
  }
}

fetchData();
```
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606798706-659e8940-a0c2-4424-8acf-ad7f0be63c57.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u82a3871f&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uc6bc44eb-b50c-4955-bc35-e5f2a4b0571&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606798757-7aec79f2-1240-4e60-84b5-cb3d7221a5ef.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u00097823&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue0fd35c6-f11a-4852-819e-30b1efdbf0f&title=)
**取消请求**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606798746-8aa0fdbc-2d9d-41ff-9afa-362925d981f4.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=u2fa8290d&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uce27e9a7-d572-49a0-bc86-7297f085dbb&title=)
在标准的 Fetch API 中，没有提供直接取消 Fetch 请求的内置方法。但是，可以使用以下方法来模拟或实现取消 Fetch 请求的效果。
使用 **AbortController** 和 **AbortSignal**：这是一种较新的浏览器特性，用于生成可以取消请求的信号。可以创建一个 **AbortController**对象，然后将其关联到 Fetch 请求中，当需要取消请求时，调用 **AbortController** 的 **abort()**方法：
```
// 创建 AbortController 和关联的 signal
const abortController = new AbortController();
const signal = abortController.signal;

// 发起 Fetch 请求，并将 signal 传递给 fetch 函数
fetch(url, { signal })
  .then(response => {
    // 处理响应
  })
  .catch(error => {
    if (error.name === 'AbortError') {
      // 请求已被取消
    } else {
      // 处理其他错误
    }
  });

// 当需要取消请求时，调用 abort() 方法
abortController.abort();
```
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606798832-96717727-3421-4ba2-8094-336dad6fe73d.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=uf9080d11&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uc74e52c7-d815-4356-932d-f3add571d7a&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606798827-8b159e1c-e64e-4f89-8025-b0e1c476d9ca.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u019e40e2&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uc473f6e3-62f8-4884-b8ee-6d4129b7873&title=)
**浏览器兼容**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606799191-484d5ad0-8886-4337-b96a-191b56e271ba.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=u2d6939bc&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u5e99e94e-9c97-4a95-a6e7-c2da28dabea&title=)
目前，主流浏览器都支持 Fetch API：
**# ON**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606799101-cb99bdb9-da06-4241-bc9c-1390e0a3673d.png#averageHue=%23514611&clientId=uc206be34-3cd5-4&from=paste&id=u8cfc0607&originHeight=88&originWidth=56&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u15feed8e-2bf6-4d32-beaf-850beb0a5d3&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606799220-de9201d3-ceae-4fb3-b764-d55105f49c97.png#averageHue=%23e4d7c5&clientId=uc206be34-3cd5-4&from=paste&id=ufcbc077c&originHeight=349&originWidth=1080&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u7f760671-9e6e-45f1-a22b-fdf7442ae3b&title=)
**5**
**Axios**
Summer IS HERE
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606799243-f7c76960-914c-4b8d-97fc-e357266b8ee1.png#averageHue=%238c6c38&clientId=uc206be34-3cd5-4&from=paste&id=u5f80e341&originHeight=20&originWidth=78&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uc3ed5ed1-400b-4fee-92d3-f6bb0280b4d&title=)
Axios 是一个基于 Promise 网络请求库，用于在浏览器和 Node.js 中进行 HTTP 请求。在服务端它使用原生 node.js **http** 模块, 而在客户端 (浏览端) 则使用 **XMLHttpRequests**。Axios 是目前最流行的 HTTP 请求库，其 npm 每周下载量达到了 4500w+。
Axios 库具有以下特点：

- **浏览器和 Node.js**：Axios 可在浏览器和 Node.js 环境中使用，可以在不同的平台上执行 HTTP 请求。
- **Promise API**：Axios 使用 Promise API 进行异步操作，能够更轻松地处理异步请求和响应。
- **请求拦截和响应拦截**：可以通过拦截器，在请求发送之前或响应返回之后对请求进行全局性或个性化的变换和处理。可以在请求或响应的不同阶段添加公共的请求头、验证身份、处理错误等。
- **取消请求**：Axios 允许取消未完成的请求，以避免无效的请求，并减轻服务器的负担。取消请求可以通过创建取消令牌、使用取消令牌进行请求配置或者在拦截器中中断请求来实现。
- **并发请求**：Axios 提供了执行多个并发请求的能力，可以同时发起多个请求，并在所有请求完成后进行处理。
- **自动转换数据**：Axios 可以自动将请求和响应的数据进行格式转换，包括 JSON、URL 编码等。无需手动处理数据转换的过程。
- **错误处理机制**：当请求过程中出现错误时，Axios 会返回详细的错误信息，包括 HTTP 错误状态码、错误描述等。可以根据需要对这些错误进行处理和显示。
- **简洁的 API**：Axios 的 API 设计简洁易用，具有直观的方法命名和参数配置。可以轻松地使用 Axios 进行 GET、POST、PUT、DELETE 等常见的 HTTP 请求。

可以通过以下命令来安装 Axios：
```
// 使用 npm 安装
npm install axios
// 使用 yarn 安装
yarn add axios
```
下面来进行一个简单的 get 请求：
```
axios.get('https://api.example.com/data')
  .then(response => {
    // 处理成功响应
    console.log(response.data);
  })
  .catch(error => {
    // 处理错误
    console.error(error);
  });
```
这里使用 **axios.get** 方法发起了一个 GET 请求，并将请求的 URL 作为参数传递给该方法。然后使用 Promise 的 **.then** 方法处理成功响应，并通过 **response.data** 获取响应数据。如果请求失败，可以通过 Promise 的 **.catch** 方法捕获错误。
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606799301-5ae1b815-a929-4390-9d3e-7aca0330778b.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u1359bf30&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ued48d466-2ba3-4d1a-9b52-40e0a601a9d&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606799705-5dce904e-f6d1-4e0c-bf8d-a9511de02cbe.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=ubfef6aef&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u8842a380-406f-40eb-b2b5-190ce952139&title=)
**请求方法**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606799697-20bc0534-746a-4b51-a552-c044d66983f5.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=udddab18f&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ufda99d03-f0cf-45d2-910b-4caf20eb43b&title=)
axios 支持通过简写方式来执行不同类型的请求：

- axios.request(config)
- axios.get(url[, config])
- axios.delete(url[, config])
- axios.head(url[, config])
- axios.options(url[, config])
- axios.post(url[, data[, config]])
- axios.put(url[, data[, config]])
- axios.patch(url[, data[, config]])

对于这些方法，第一个参数是请求的 URL，config 和 data 分别是请求的配置项和请求参数，这两个参数都是可选的。例如，下面是一个 post 请求：
```
const options = {
  headers: {'X-Custom-Header': 'value'}
};

axios.post('/save', { a: 10 }, options)
  .then(response => {
    // 处理成功响应
    console.log(response.data);
  })
  .catch(error => {
    // 处理错误
    console.error(error);
  });
```
当作为第二个参数传递给 **axios.post** 函数时，Axios 会自动将 JavaScript 对象序列化为 JSON。 这样就无需将 POST 正文序列化为 JSON。Axios 还会自动将 **Content-Type** 请求头设置为 **application/json**。
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606799783-789c79c7-3ba7-45bc-aed0-e312899f97d5.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=uc92ebd52&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue03bfed1-c95b-464d-b355-cb175eecba8&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606799784-35a9872f-aaf0-466f-b254-66aef2d6a2af.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u080a1e0f&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u61fc7d3c-1df0-4c97-abb8-66390ffa764&title=)
**多个请求**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606799896-c4a79ecd-d750-4f33-bd9e-98426d57b3e1.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=uf6b4c5e5&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u3d76c20d-3f6c-4ec3-ab25-03be5b30d40&title=)
在 Axios 中，可以使用 **axios.all** 和 **axios.spread** 来处理多个并发的请求：
```
const axios = require('axios');

// 创建多个请求
const request1 = axios.get('https://api.example.com/data1');
const request2 = axios.get('https://api.example.com/data2');

// 并发发送多个请求
axios.all([request1, request2])
  .then(axios.spread((response1, response2) => {
    // 处理各个请求的响应
    console.log(response1.data);
    console.log(response2.data);
  }))
  .catch(error => {
    // 处理错误
    console.error(error);
  });
```
可以看到，在 **.then** 方法中使用了 **axios.spread** 函数将多个请求的响应结果进行解构，通过多个参数分别接收各个请求的响应。可以根据实际情况命名这些参数，并通过 **response1.data**、r**esponse2.data** 等方式获取各个请求的响应数据。
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606800070-39db5dec-6f0f-4086-8cc5-96d476cad273.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u56f9a171&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u6b99bdaa-6929-4778-8f52-e1b5e6b2828&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606800169-7d09eb7c-77d1-42cb-b714-3456a5ccd2c6.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=ud66551f7&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ubbbe01df-1080-47ee-9855-38b0ba42d93&title=)
**请求拦截、响应拦截**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606800205-a1dc563d-c0e8-4685-b84e-a38427d613a4.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=u94bbfd71&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u7ff81933-a134-4018-8f20-e087dbd11b9&title=)
在 Axios 中，可以使用 **transformRequest** 方法在请求发送之前对请求数据进行转换和处理，它是一个请求拦截器，是一个可选的函数。
tran**sformRequest** 函数接收两个参数：**requestData** 和 **requestHeaders**。其中，**requestData** 是要发送的请求数据，**requestHeaders** 是要发送的请求头信息。可以在 **transformRequest** 函数内部对这些参数进行修改，并将修改后的值返回。返回的结果将作为实际发送请求的数据。
```
axios({
  url: 'https://api.example.com/data',
  method: 'post',
  data: {
    id: 12345,
    name: 'John Doe'
  },
  transformRequest: (data, headers) => {
    // 对请求数据进行转换和处理
    const modifiedData = { ...data }; // 复制原始数据

    // 修改数据或添加额外字段
    modifiedData.extraField = 'Extra Value';

    // 修改请求头信息
    headers['Content-Type'] = 'application/json';

    return JSON.stringify(modifiedData); // 返回处理后的数据
  }
})
  .then(response => {
    // 处理成功响应
    console.log(response.data);
  })
  .catch(error => {
    // 处理错误
    console.error(error);
  });
```
这里使用 Axios 发起了一个 POST 请求。通过传递包含 **transformRequest** 函数的配置对象来定义请求。在 **transformRequest** 函数内部，复制了原始的请求数据 **data**，并进行了一些修改和处理，如添加了额外的字段和修改了请求头信息。最终，将修改后的数据以 JSON 字符串的形式返回。Axios 将使用 **transformRequest** 函数返回的结果作为实际发送请求的数据。
除了可以对请求进行拦截之外，Axios 还支持对响应进行拦截，对响应数据进行转换和处理。可以通过 **transformResponse** 响应拦截器来实现。该函数接收一个参数：**responseData**，它是从服务器接收到的原始响应数据。可以在 **transformResponse** 函数内部对这个参数进行修改，并将修改后的值返回。返回的结果将作为实际处理响应的数据。
```
axios.get('https://api.example.com/data', {
  transformResponse: (data) => {
    // 对响应数据进行转换和处理
    const parsedData = JSON.parse(data); // 解析 JSON 字符串

    // 修改数据或添加额外字段
    parsedData.extraField = 'Extra Value';

    return parsedData; // 返回处理后的数据
  }
})
  .then(response => {
    // 处理成功响应
    console.log(response.data);
  })
  .catch(error => {
    // 处理错误
    console.error(error);
  });
```
这里使用 Axios 发起了一个 GET 请求，并通过传递包含 **transformResponse** 函数的配置对象来定义请求。在 **transformResponse** 函数内部，对从服务器接收到的响应数据 **data** 进行了一些修改和处理，如解析 JSON 字符串，添加了额外的字段。最终将修改后的数据返回。
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606800152-ee672ebe-a444-4528-bc21-ad54da9351f9.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u3bd2af4c&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u9d7dec6e-c784-4a00-baa3-553415c3217&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606800279-ac3f3171-e57e-43e4-b688-2f625e5cc192.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u5976e575&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ua8e669b8-0e07-43ad-aea6-ee1c76eb6dd&title=)
**拦截请求和响应**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606800403-d3525285-1fbc-44fe-b55e-d965994d1de5.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=u90e6ff57&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u647b3ce6-0e1e-45e9-9a45-ab0b225759a&title=)
Axios 中，可以使用拦截器来拦截请求和响应，并在其被发送或接收之前进行一些额外的处理，可以通过 **axios.interceptors** 对象来添加拦截器。
```
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做一些处理
  console.log('请求拦截器');

  // 修改请求配置
  config.headers['Authorization'] = 'Bearer token';

  return config;
}, error => {
  // 处理请求错误
  console.error('请求出错：', error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 在接收到响应数据之前做一些处理
  console.log('响应拦截器');

  // 修改响应数据
  response.data = { ...response.data, extraField: 'Extra Value' };

  return response;
}, error => {
  // 处理响应错误
  console.error('响应出错：', error);
});

// 发送请求
axios.get('https://api.example.com/data')
  .then(response => {
    // 处理成功响应
    console.log(response.data);
  })
  .catch(error => {
    // 处理请求或响应错误
    console.error(error);
  });
```
这里首先使用 **axios.interceptors.request.use** 方法添加了一个请求拦截器。该拦截器在发送请求之前被调用，并接收请求配置对象 **config** 作为参数。可以对请求配置进行修改，如添加请求头信息。最后，要确保返回修改后的配置对象。
接下来，使用 **axios.interceptors.response.use** 方法添加了一个响应拦截器。该拦截器在接收到响应数据之前被调用，并接收响应对象 **response** 作为参数。可以对响应数据进行修改，如添加额外的字段。同样，要确保返回修改后的响应对象。
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606800506-b4e9a4db-851a-4706-9713-5d5f05ffdae1.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u9c51aac9&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u5d6fcd20-325b-44e6-be56-ba1d55df508&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606800767-3d5a9a8a-8989-4b17-92ea-629b6907cf84.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=udac2597b&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u74f05226-6556-48e8-a329-be5ec2b4238&title=)
**客户端支持 XSRF 防护**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606800794-ff83a992-c320-40f1-afde-e295ca95ef44.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=u0fca7b3a&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uac459d71-4a63-4358-ae2d-7067a15eefc&title=)
跨站请求伪造（简称 XSRF）是一种攻击 Web 应用的方法，其中攻击者将自己伪装成合法且受信任的用户，以影响应用程序与用户浏览器之间的交互。 有很多方法可以执行此类攻击，包括 **XMLHttpRequest**。
幸运的是，Axios 通过允许在发出请求时嵌入额外的身份验证数据来防止 XSRF。 这使得服务器能够发现来自未经授权的位置的请求。以下是使用 Axios 完成此操作的方法：
```
const options = {
  method: 'post',
  url: '/login',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
};

axios(options)
  .then(response => {
    // 处理成功响应
    console.log(response.data);
  })
  .catch(error => {
    // 处理请求错误
    console.error(error);
  });
```
这里有两个 xsrf 相关的属性：

- **xsrfCookieName: 'XSRF-TOKEN'**：用于跨站请求伪造(XSRF/CSRF)保护的配置选项之一。它指定了存储 XSRF 令牌的 cookie 的名称。XSRF 令牌用于防止恶意网站发起对已验证用户的请求。
- **xsrfHeaderName: 'X-XSRF-TOKEN'**：用于跨站请求伪造(XSRF/CSRF)保护的配置选项之一。它指定了包含 XSRF 令牌的请求头的名称。服务器端可以通过检查该请求头来验证请求的合法性。

Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606800868-640e64ce-ec95-4f36-a022-c8faf8b5fcec.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u554a8263&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uf82a993c-1416-4724-9701-cac3e4e4acb&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606800936-4acdb32e-fdf5-4487-9b7d-31fae9258a24.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u22586b74&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u6851943c-c738-4375-9377-1e728ba7b9e&title=)
**请求进度**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606801135-25084393-f88e-4df0-8067-2fc7f692f41a.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=u89bb468b&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ua9f14b22-4e54-48dc-a41a-a9ff4636f48&title=)
Axios 的另一个有趣的功能是能够监控请求的进度，这在下载或上传大文件时特别有用，可以使用 **onUploadProgress** 和 **onDownloadProgress** 两个配置选项来实现。
对于上传进度，可以使用 **onUploadProgress** 配置选项。它会在上传数据时触发，并提供关于上传进度的信息。
```
axios.post('/upload', data, {
  onUploadProgress: progressEvent => {
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    console.log(`上传进度：${percentCompleted}%`);
  },
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```
这里发送了一个 POST 请求，在配置选项中使用了 **onUploadProgress**。当数据上传过程中触发进度事件时，回调函数会被执行。在回调函数中，我们计算出了已上传数据的百分比，并将其打印出来。
对于下载进度，可以使用 **onDownloadProgress** 配置选项。它会在接收到响应数据时触发，并提供关于下载进度的信息。
```
axios.get('/download', {
  onDownloadProgress: progressEvent => {
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    console.log(`下载进度：${percentCompleted}%`);
  },
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```
这里发送了一个 GET 请求，在配置选项中使用了 **onDownloadProgress**。当数据下载过程中触发进度事件时，回调函数会被执行。在回调函数中，我们计算出了已下载数据的百分比，并将其打印出来。
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606801155-8ff3874e-e986-46f0-9ead-37e3f3f4824e.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=u031b417b&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ub78de190-974e-4b8a-8da7-8d4c27d0a8a&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606801182-6ba28142-c19e-4b57-bb8b-8fcad8fca7c0.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u5339fd1d&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uca9bdcfc-3931-4f7f-8ed9-42b89866ae0&title=)
**取消请求**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606801263-68c27ec8-118e-49fb-a374-3c7cd7e10dd0.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=uea448ea0&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u98ef587a-c473-4e2b-984f-858b60d438c&title=)
在 Axios 中，可以使用取消令牌（cancel token）来取消请求。取消令牌是一个对象，它表示一个具体的取消操作，并允许在需要时中止请求。
```
// 创建一个取消令牌源
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

// 发送请求
axios.get('/api/data', {
  cancelToken: source.token
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (axios.isCancel(error)) {
      console.log('请求已被取消：', error.message);
    } else {
      console.error(error);
    }
  });

// 取消请求
source.cancel('取消请求的原因');
```
这里，先创建了一个取消令牌源 **source**。然后，发送 GET 请求时将 **cancelToken** 配置选项设置为 **source.token**，即将取消令牌与该请求关联起来。当需要取消请求时，调用 **source.cancel()** 方法，并传入取消请求的原因作为参数。
在请求的 **.catch()** 方法中，我们使用 **axios.isCancel(error)** 来判断捕获的错误是否是一个已取消的请求。如果是取消请求导致的错误，则会打印出 '请求已被取消' 的提示信息。否则，将打印出其他类型的错误。
Summer
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606801517-ad6ac110-6da5-4ac6-879f-5f56d7175dab.png#averageHue=%2341341f&clientId=uc206be34-3cd5-4&from=paste&id=uf5122dbb&originHeight=8&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ua9485031-6f01-492f-ab86-a0275162392&title=)
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606801810-5715a332-aa20-456d-aff5-70756b167381.png#averageHue=%23865d56&clientId=uc206be34-3cd5-4&from=paste&id=u71d0b698&originHeight=46&originWidth=48&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u7d62ae23-0766-46cc-b22b-efc50e06619&title=)
**请求超时**
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606801778-0fccb481-cf8b-4709-bd57-b670ae1b484d.png#averageHue=%233e3e3e&clientId=uc206be34-3cd5-4&from=paste&id=uc0365898&originHeight=16&originWidth=16&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u75caafff-6d37-4f1b-a75b-eb5aecdcd2b&title=)
可以使用 **timeout** 配置选项设置 Axios 请求的超时时间，这个选项指定了请求在多少毫秒后如果没有得到响应就会超时。
```
axios.get('/api/data', {
  timeout: 5000 // 设置超时时间为5秒
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```
发送了一个 GET 请求，并在配置选项中设置了 **timeout** 为 5000 毫秒（即 5 秒）。如果请求在 5 秒内没有得到响应，就会触发超时错误。在超时错误的情况下，请求会被自动取消，并且进入 **.catch()** 分支。您可以根据需要进行错误处理。
注意，如果不设置 **timeout** 选项，默认情况下 Axios 请求是没有超时限制的。
**6**
**小结**
Summer IS HERE
![](https://cdn.nlark.com/yuque/0/2023/png/991609/1699606801844-a1512101-a737-41e2-a9a5-0b0194d82181.png#averageHue=%238c6c38&clientId=uc206be34-3cd5-4&from=paste&id=u8bfbf78d&originHeight=20&originWidth=78&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue7b19986-25f4-4bb7-a8c2-42751e9fa53&title=)
相对于 Fetch、XMLHttpRequest 和 Ajax，我还是更喜欢 Axios。它提供了简洁易用的 API，统一的错误处理和拦截器支持，取消请求和超时处理功能，以及基于 Promise 的链式调用和跨浏览器兼容性。这些特性使得使用 Axios 更方便、高效，并提供更好的开发体验。
