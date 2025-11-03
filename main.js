import * as THREE from './three.js/build/three.module.js'
import { OrbitControls } from './three.js/examples/jsm/controls/OrbitControls.js'

var scene, camera, renderer, controls, cube

function createPlane(color, pX, pY, pZ, rX, rY) {
  const planeGeo = new THREE.PlaneGeometry(2, 2)
  const planeMat = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./images/' + color + '.png'), side: THREE.DoubleSide })
  const planeMesh = new THREE.Mesh(planeGeo, planeMat)
  planeMesh.position.set(pX, pY, pZ)
  planeMesh.rotation.x = rX
  planeMesh.rotation.y = rY

  cube.add(planeMesh)
}

function init() {
  scene = new THREE.Scene()

  const WIDTH = window.innerWidth
  const HEIGHT = window.innerHeight
  const FOV = 60
  const ASPECT = WIDTH / HEIGHT
  const NEAR = 1
  const FAR = 1000

  camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR)
  camera.position.set(20, 0, 0);
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({
    antialias: true,
  })

  renderer.setSize(WIDTH, HEIGHT)
  document.body.appendChild(renderer.domElement)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.update()

  cube = new THREE.Group()

  createPlane("red", 1, 0, 0, 0, Math.PI / 2)
  createPlane("red", 1, 0, 2, 0, Math.PI / 2)
  createPlane("red", 1, 0, -2, 0, Math.PI / 2)
  createPlane("red", 1, 2, 0, 0, Math.PI / 2)
  createPlane("red", 1, 2, 2, 0, Math.PI / 2)
  createPlane("red", 1, 2, -2, 0, Math.PI / 2)
  createPlane("red", 1, -2, 0, 0, Math.PI / 2)
  createPlane("red", 1, -2, 2, 0, Math.PI / 2)
  createPlane("red", 1, -2, -2, 0, Math.PI / 2)

  createPlane("white", 0, 3, 0, Math.PI / 2, 0)
  createPlane("white", 0, 3, 2, Math.PI / 2, 0)
  createPlane("white", 0, 3, -2, Math.PI / 2, 0)
  createPlane("white", -2, 3, 0, Math.PI / 2, 0)
  createPlane("white", -2, 3, 2, Math.PI / 2, 0)
  createPlane("white", -2, 3, -2, Math.PI / 2, 0)
  createPlane("white", -4, 3, 0, Math.PI / 2, 0)
  createPlane("white", -4, 3, 2, Math.PI / 2, 0)
  createPlane("white", -4, 3, -2, Math.PI / 2, 0)

  createPlane("blue", 0, -2, -3, 0, 0)
  createPlane("blue", 0, 0, -3, 0, 0)
  createPlane("blue", 0, 2, -3, 0, 0)

  createPlane("blue", -2, -2, -3, 0, 0)
  createPlane("blue", -2, 0, -3, 0, 0)
  createPlane("blue", -2, 2, -3, 0, 0)

  createPlane("blue", -4, -2, -3, 0, 0)
  createPlane("blue", -4, 0, -3, 0, 0)
  createPlane("blue", -4, 2, -3, 0, 0)

  createPlane("yellow", 0, -3, 0, Math.PI / 2, 0)
  createPlane("yellow", 0, -3, 2, Math.PI / 2, 0)
  createPlane("yellow", 0, -3, -2, Math.PI / 2, 0)

  createPlane("yellow", -2, -3, 0, Math.PI / 2, 0)
  createPlane("yellow", -2, -3, 2, Math.PI / 2, 0)
  createPlane("yellow", -2, -3, -2, Math.PI / 2, 0)

  createPlane("yellow", -4, -3, 0, Math.PI / 2, 0)
  createPlane("yellow", -4, -3, 2, Math.PI / 2, 0)
  createPlane("yellow", -4, -3, -2, Math.PI / 2, 0)

  createPlane("orange", -5, 0, 0, 0, Math.PI / 2)
  createPlane("orange", -5, 0, 2, 0, Math.PI / 2)
  createPlane("orange", -5, 0, -2, 0, Math.PI / 2)

  createPlane("orange", -5, 2, 0, 0, Math.PI / 2)
  createPlane("orange", -5, 2, 2, 0, Math.PI / 2)
  createPlane("orange", -5, 2, -2, 0, Math.PI / 2)

  createPlane("orange", -5, -2, 0, 0, Math.PI / 2)
  createPlane("orange", -5, -2, 2, 0, Math.PI / 2)
  createPlane("orange", -5, -2, -2, 0, Math.PI / 2)

  createPlane("green", 0, -2, 3, 0, 0)
  createPlane("green", 0, 0, 3, 0, 0)
  createPlane("green", 0, 2, 3, 0, 0)

  createPlane("green", -2, -2, 3, 0, 0)
  createPlane("green", -2, 0, 3, 0, 0)
  createPlane("green", -2, 2, 3, 0, 0)

  createPlane("green", -4, -2, 3, 0, 0)
  createPlane("green", -4, 0, 3, 0, 0)
  createPlane("green", -4, 2, 3, 0, 0)

  scene.add(cube)
}

function render() {
  requestAnimationFrame(render)
  controls.update()
  cube.rotation.x += 0.03
  cube.rotation.y += 0.03
  renderer.render(scene, camera)
}

window.onload = () => {
  init()
  render()
}