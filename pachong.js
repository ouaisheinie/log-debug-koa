//引入fs模块
// const fs = require('fs')
const http = require('http');
//引入excel模块
const cheerio = require("cheerio")

const url = "http://www.szgalaxy.com/__ZH_GB__/Product5/ProductSeries/33"

http.get(url,function(res){
  var str = "";
  //绑定方法，获取网页数据
  res.on("data",function(chunk){
      str += chunk;
  })
  //数据获取完毕
  res.on("end",function(){
      //调用下方的函数，得到返回值，即是我们想要的img的src
      var data = getData(str);
      console.log(data);
  })
})

function getData(str){
  //沿用JQuery风格，定义$
  var $ = cheerio.load(str);
  //获取的数据数组
  var arr = $(".review-item a img");
  var dataTemp = [];
  //遍历得到数据的src，并放入以上定义的数组中
  arr.each(function(k,v){
    console.log(k)
    var src = $(v).attr("src");
    dataTemp.push("http://www.szgalaxy.com" + src);
  })
  //返回出去
  return dataTemp;
}