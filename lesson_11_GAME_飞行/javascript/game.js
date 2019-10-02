let scene, camera, renderer;

function init() {
  const { innerWidth: width, innerHeight: height } = window;

  if(Detector.webgl) {
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true,
    });
    renderer.setClearColor('#bbb', 1);
    renderer.shadowMap = true;
  } else {
    renderer = new THREE.CanvasRenderer();
  }

  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog('#002', 10, 300);

  camera = new THREE.PerspectiveCamera(75, width/height, 1, 1e10);
  camera.position.set(0, 0, 5);
  camera.updateMatrix();

  scene.add(camera);

  var ambientLight = new THREE.AmbientLight('#fff');
  scene.add(ambientLight);

  var pointLight = new THREE.PointLight('#f60');
  scene.add(pointLight);

  var spotLight = new THREE.SpotLight('#aaa', 2, 0, Math.PI/4, 1);
  spotLight.position.set(0, 0, 1);
  spotLight.castShadow = false;
  scene.add(pointLight);

  var shadowLight = new THREE.DirectionalLight('#aaa', 4, 1);
  shadowLight.position.set(0, 0, -1);
  shadowLight.castShadow = true;
  shadowLight.onlyShadow = true;
  shadowLight.shadowCameraNear = 2;
  shadowLight.shadowCameraFar = 200;
  shadowLight.shadowCameraLeft = -10;
  shadowLight.shadowCameraRight = 10;
  shadowLight.shadowCameraTop = 10;
  shadowLight.shadowCameraBottom = 10;
  shadowLight.shadowCameraVisible = false;
  shadowLight.shadowBias = 0;
  shadowLight.shadowDarkness = 0.5;
  shadowLight.shadowMapWidth = 512;
  shadowLight.shadowMapHeight = 512;

  scene.add(shadowLight);
}


function render() {
  renderer.render(scene, carema);
}
