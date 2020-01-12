var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var cHeight = canvas.height / 2
var cWidth = canvas.width / 2

var r = 30
    // for (var i = 0; i < (Math.PI * 2); i += (Math.PI * 2) / 360) {
    //     var x = r * Math.cos(i) + cWidth
    //     var y = r * Math.sin(i) + cHeight
    //     ctx.arc(x, y, 0.5, 0, 1)
    // }
var k = 50
for (var i = 0; i < (Math.PI * 2); i += (Math.PI * 2) / 360) {
    var r = k * (1 + Math.cos(i))
    var x = r * Math.cos(i) + cWidth
    var y = r * Math.sin(i) + cHeight
    ctx.arc(x, y, 0.5, 0, 1)

}
// var n = 5
// for (var i = 0; i < (Math.PI * 2); i += (Math.PI * 2) / 360) {
//     var r = k * Math.cos(n * i)
//     var x = r * Math.cos(i) + cWidth
//     var y = r * Math.sin(i) + cHeight
//     ctx.arc(x, y, 0.5, 0, 1)

// }
// var a = Math.PI * 2
// for (var i = 0; i < (Math.PI * 2); i += (Math.PI * 2) / 360) {
//     var r = a * i
//     var x = r * Math.cos(i) + cWidth
//     var y = r * Math.sin(i) + cHeight
//     ctx.arc(x, y, 0.5, 0, 1)

// }


ctx.stroke()