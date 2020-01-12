window.onload=init();
function init()
{
  
  var tur = new turtle();
  tur.color = "#0000ff";
tur.turnTo(-90);
for(i=0;i<6;i++){
  tur.forward(100);
  tur.forward(-40);
  tur.turnTo(40);
  tur.forward(30);
  tur.forward(-30);
  tur.turnTo(-80);
  tur.forward(30);
  tur.forward(-30);
  tur.turnTo(40);
  tur.forward(-60);
  tur.turnTo(60);
}  






 

}