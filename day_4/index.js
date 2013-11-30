shift = function(list,count,amount){
  for(var i =0; i<list.length; i=i+count){
    list[i]=list[i]+amount
  }
  return list

}
var paper = Snap("#icon")
var frontfacelist = new Array(100, 100, 100, 250, 300,250,300,100,100,100);
var leftfacelist  = new Array(100,100,100,250,100-20,250-40,100-20,100-20,100,100);
var topfacelist   = new Array(100-20,100-20,250+20,100-20,300,100,100,100,100-20,100-20);
var frontface     = paper.polyline(frontfacelist).attr({fill:"#fff" ,stroke: "#000",strokeWidth: 2});
var leftface      = paper.polyline(leftfacelist).attr({fill:"#fff" ,stroke: "#000",strokeWidth: 2});
var topface       = paper.polyline(topfacelist).attr({fill:"#fff" ,stroke: "#000",strokeWidth: 2});
var frontfacelist = shift(frontfacelist,2,400);
var leftfacelist  = shift(leftfacelist,2,400);
var topfacelist   = shift(topfacelist,2,400);
var g = paper.gradient("r(0.5, 0.5, 0.5)#FFC78F-#FF9933");
var frontface     = paper.polyline(frontfacelist).attr({fill:"#fff" ,stroke: "#000",strokeWidth: 2});
var frontface_2   = paper.polyline(frontfacelist).attr({fill:"#fff" ,stroke: "#000",strokeWidth: 2});
var leftface_2    = paper.polyline(leftfacelist).attr({fill:"#fff" ,stroke: "#000",strokeWidth: 2});
var topface_2     = paper.polyline(topfacelist).attr({fill:g,opacity:"1" ,stroke: "#000",strokeWidth: 2});
