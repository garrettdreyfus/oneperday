document.addEventListener('DOMContentLoaded', function() {
  var canvas = Snap('#ocean');
  canvas.rect(0,0,750,100).attr({fill:"#400CE8"})
  for(var i=0; i<13;i++){
    //WAVES
    canvas.circle((i*60)+10, 0, 50).attr({
      fill: "#28272B",
      strokeWidth: 0
    });
  }
  var cutoff = canvas.rect(245, 30, 80, 40).attr({fill:"#fff"});
  var mast = canvas.rect(285, 10, 1, 20).attr({fill:"#fff"});
  var sail = canvas.rect(275, 10, 10, 10).attr({fill:"#fff"});
  canvas.circle(285,20,10).attr({
      fill: "#E89E0C",
      strokeWidth: 0,
      mask:sail
  });
  canvas.circle(285,30,20).attr({
    fill: "#E89E0C",
    strokeWidth: 0,
    mask:cutoff
  });
    
  var title = Snap('#title');
  var t = title.text(0, 120, ["Day One"]);
  t.selectAll("tspan:nth-child(1)").attr({
    fill: "#BF00F5",
    "font-size": "72px",
    "font-family": "Helvetica"
  });
  var embark = title.text(150, 175, ["Embark"]);
  embark.selectAll("tspan:nth-child(1)").attr({
    fill: "#8200FF",
    "font-size": "36px",
    "font-family": "Helvetica"
  });

});

