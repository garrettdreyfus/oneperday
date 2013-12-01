$(document).ready(function(){
  height = $("body").height();
  for(var x =0; x<16; x++){
    for(var y =0; y<16;y++ ){
      $("body").append("<div class='block' id='"+x.toString()+y.toString()+"' onclick='toggle("+x.toString()+','+y.toString()+")' style='border:2px;position:absolute;width:"+height/16+"; height:"+height/16+"; background-color:#fff; left:"+(x*height/16).toString()+"px; top:"+(y*height/16).toString()+ "px;'></div>");
    }
  }
})
toggle = function(x,y){
  $('#'+x.toString()+y.toString()).css("background-color","#000");
  console.log($('#'+x.toString()+y.toString()));
}
