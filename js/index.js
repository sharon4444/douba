$(function(){
  var listWrap = $(".list ul");
   var subjects ;
   var ps ;
  $.ajax({
    url:'https://api.douban.com/v2/movie/in_theaters',
    dataType:"JSONP",
    success:function(data){
      listWrap.append(template("tpl",data));
      subjects = data.subjects;
      ps = $(".rank")
      renderStar();
    }
  })


function renderStar(){
  for(var i = 0;i<subjects.length;i++){
    var is = ps.eq(i).find("i");
    var star =parseInt(subjects[i].rating.stars/10);
    for(var j=0;j<star;j++){
      is.eq(j).addClass("rate")
    }
  }
}

})