document.addEventListener('DOMContentLoaded', function() {
  var canvas = Snap('#ocean');
  canvas.rect(0,0,4000,300).attr({fill:"#400CE8"})
  for(var i=0; i<30;i++){
    //WAVES
    canvas.circle((i*100)+10, 0, 80).attr({
      fill: "#fff",
      strokeWidth: 0
    });
  }
  var cutoff = canvas.rect(235, 50, 100, 100).attr({fill:"#fff"});
  var mast = canvas.rect(285, 0, 3, 50).attr({fill:"#603311"});
  var sail = canvas.rect(260, 0, 25, 25).attr({fill:"#fff"});
  canvas.circle(285,25,25).attr({
      fill: "#E89E0C",
      strokeWidth: 0,
      mask:sail
  });
  canvas.circle(285,50,50).attr({
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

