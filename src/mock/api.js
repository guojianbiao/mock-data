import mock from 'mockjs'
// 这个一个获取URL参数的方法
import { getParams } from "./utils";

//Mock拦截并返回响应数据
mock.mock(/\/api\/lists/, options => {
  //获取url参数num
  const num = getParams(options.url, "num");

  var datas = {
    ['data |' + num]: [
      {
        "tid|+1": 1,
        title: "@title(3,5)",
        catalog: "index",
        fav: /\d{3,5}/,
        created: "@datetime('yyyy-MM-dd HH:mm:ss')",
        "isEnd|0-1": 0,
        "answer|0-100": 100,
        user: {
          avatar: "@image()",
          name: "@cname",
          "isVip|0-1": 0,
          "level|0-99": 0,
        }
      }
    ],
    status: 200,
    msg: "返回Mock数据",
  }
  return mock.mock(datas);
});


// 在这里编写你的逻辑代码

