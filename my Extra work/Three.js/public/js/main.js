var scene = new three.scene()
var camera = new three.perspective(75, window.innerWidth / window.innerHeight)
var renderer = new three.webglRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
$('body').append(renderer.domElement)

var geometry = new three.BoxGeometry(1, 1, 1)
var material = new three.MeshBasicMaterial({ color: "Red" })
var cube = new three.Mesh(geometry, material)
scene.add(cube)
cube.position.z = -5
cube.position.x = 10
cube.position.y = 5

renderer.render(scene, camera)