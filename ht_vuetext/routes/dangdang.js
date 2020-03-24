var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/banner', function(req, res, next) {
    var arr=[
        "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg",
        "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg",
        "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"     
    ]
  res.send(arr);
});
router.get('/list', function(req, res, next) {
  var arr=[
    {
      "id":1,
      'sm':"changxiao",
      "img":"http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png"
    },
    {
      "id":2,
      'sm':"xinshu",
      "img": "http://img60.ddimg.cn/upload_img/00803/1/xinshubang2-1562825207.png"
    },
    {
      "id":3,
      'sm':"tongshu",
      "img": "http://img62.ddimg.cn/upload_img/00702/B/SY-iCON-3-5.10-1557488951.png"
    },
    {
      "id":4,
      'sm':"jinricuxiao",
      "img":"http://img63.ddimg.cn/upload_img/00702/B/icon-jrcx-1559563476.png" 
    },
    {
      "id":5,
      'sm':"tejia",
      "img": "http://img62.ddimg.cn/upload_img/00705/B/icon-5.28-1559032809.png"
    },
    {
      "id":6,
      'sm':"fuzhuang",
      "img": "http://img50.ddimg.cn/116550067538580_y.jpg"
    },
    {
      "id":7,
      'sm':"dangdangcath",
      "img":"http://img63.ddimg.cn/upload_img/00528/000/7chaoshi-1545121233.png"
    },
    {
      "id":8,
      'sm':"ptuan",
      "img": "http://img61.ddimg.cn/upload_img/00528/000/00000-1564393723.png"
    },
    {
      "id":9,
      'sm':"Ljuan",
      "img":"http://img62.ddimg.cn/upload_img/00528/000/9zhongxin-1545121233.png"
    },
    {
      "id":10,
      'sm':"yuedu",
      "img":  "http://img63.ddimg.cn/upload_img/00528/0000/12311-1556245256.jpg"
    },   
  ]
res.send(arr);
});
router.get(`/s`, function(req, res, next) {
  var arr=[
     {
       item:'节目一',
     }
  ]
res.send(arr);
});
router.get(`/s2`, function(req, res, next) {
  var arr=[
     {
       item:'',
     }
  ]
res.send(arr);
});
router.get(`/lists`, function(req, res, next) {
  var arr=
    [

      {
      
        user_id: "Xs12",
      
        username:"六",
      
        age: "24",
      
        email: "12@qq.com",
      
        mobile: "1530000000"
      
      },
      
      {
      
        user_id: "Xs15",
      
        username: "六23",
      
        age: "23",
      
        email: "124@qq.com",
      
        mobile: "1530000010"
      
      }  
  ]
res.send(arr);
});
router.get(`/lists2`, function(req, res, next) {
  var arr=
    [

      {
      
        user_id: "",
      
        username:"六",
      
        age: "24",
      
        email: "12@qq.com",
      
        mobile: "1530000000"
      
      },
      
      {
      
        user_id: "Xs15",
      
        username: "六23",
      
        age: "23",
      
        email: "124@qq.com",
      
        mobile: "1530000010"
      
      }  
  ]
res.send(arr);
});
module.exports = router;
