$(function(){
  var listWrap = $(".list ul");
 
  $.ajax({
    url:'https://api.douban.com/v2/movie/in_theaters',
    dataType:"JSONP",
    success:function(data){
     
    }
  })