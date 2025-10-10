import { assetHref } from './utils.js';

export const initGlobe = () => {
  const globeCanvas = document.getElementById('globe-canvas');
  if (!globeCanvas || typeof ThreeGlobe !== 'function' || typeof THREE === 'undefined') {
    return null;
  }

  const {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    AmbientLight,
    DirectionalLight,
    MeshStandardMaterial,
  } = THREE;

  const scene = new Scene();
  const camera = new PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 100000);
  const renderer = new WebGLRenderer({ canvas: globeCanvas, antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  scene.add(new AmbientLight(0xbbbbbb));
  scene.add(new DirectionalLight(0xffffff, 0.6));

  const globe = new ThreeGlobe();

  const blueMaterial = new MeshStandardMaterial({ color: '#22577a' });
  globe.globeMaterial(blueMaterial);

  fetch(assetHref('json/110_countries.json'))
    .then((res) => res.json())
    .then((countries) => {
      if (countries && countries.features) {
        globe.hexPolygonsData(countries.features);
      }
    })
    .catch(() => {});

  const cities = [
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Berlin', lat: 52.52, lng: 13.405 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Madrid', lat: 40.4168, lng: -3.7038 },
    { name: 'Moscow', lat: 55.7558, lng: 37.6173 },
    { name: 'Stockholm', lat: 59.3293, lng: 18.0686 },
    { name: 'Oslo', lat: 59.9139, lng: 10.7522 },
    { name: 'Helsinki', lat: 60.1695, lng: 24.9354 },
    { name: 'Copenhagen', lat: 55.6761, lng: 12.5683 },
    { name: 'Dublin', lat: 53.3498, lng: -6.2603 },
    { name: 'Brussels', lat: 50.8503, lng: 4.3517 },
    { name: 'Vienna', lat: 48.2082, lng: 16.3738 },
    { name: 'Amsterdam', lat: 52.3676, lng: 4.9041 },
    { name: 'Zurich', lat: 47.3769, lng: 8.5417 },
    { name: 'Lisbon', lat: 38.7223, lng: -9.1393 },
    { name: 'New York', lat: 40.7128, lng: -74.006 },
    { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
    { name: 'Toronto', lat: 43.6511, lng: -79.3832 },
    { name: 'Mexico City', lat: 19.4326, lng: -99.1332 },
    { name: 'Chicago', lat: 41.8781, lng: -87.6298 },
    { name: 'Houston', lat: 29.7604, lng: -95.3698 },
    { name: 'Atlanta', lat: 33.749, lng: -84.388 },
    { name: 'Montreal', lat: 45.5017, lng: -73.5673 },
    { name: 'Vancouver', lat: 49.2827, lng: -123.1207 },
    { name: 'Seattle', lat: 47.6062, lng: -122.3321 },
    { name: 'Miami', lat: 25.7617, lng: -80.1918 },
    { name: 'San Francisco', lat: 37.7749, lng: -122.4194 },
    { name: 'Boston', lat: 42.3601, lng: -71.0589 },
    { name: 'Dallas', lat: 32.7767, lng: -96.797 },
    { name: 'Denver', lat: 39.7392, lng: -104.9903 },
    { name: 'San Diego', lat: 32.7157, lng: -117.1611 },
    { name: 'Buenos Aires', lat: -34.6037, lng: -58.3816 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'São Paulo', lat: -23.5505, lng: -46.6333 },
    { name: 'Lima', lat: -12.0464, lng: -77.0428 },
    { name: 'Bogotá', lat: 4.7109, lng: -74.0721 },
    { name: 'Santiago', lat: -33.4489, lng: -70.6693 },
    { name: 'Caracas', lat: 10.4806, lng: -66.9036 },
    { name: 'Quito', lat: -0.1807, lng: -78.4678 },
    { name: 'Montevideo', lat: -34.9011, lng: -56.1645 },
    { name: 'Asunción', lat: -25.2637, lng: -57.5759 },
    { name: 'La Paz', lat: -16.4897, lng: -68.1193 },
    { name: 'Brasília', lat: -15.8267, lng: -47.9218 },
    { name: 'Manaus', lat: -3.119, lng: -60.0217 },
    { name: 'Barranquilla', lat: 11.0041, lng: -74.806 },
    { name: 'Porto Alegre', lat: -30.0346, lng: -51.2177 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Shanghai', lat: 31.2304, lng: 121.4737 },
    { name: 'Beijing', lat: 39.9042, lng: 116.4074 },
    { name: 'Seoul', lat: 37.5665, lng: 126.978 },
    { name: 'Delhi', lat: 28.6139, lng: 77.209 },
    { name: 'Mumbai', lat: 19.076, lng: 72.8777 },
    { name: 'Bangkok', lat: 13.7563, lng: 100.5018 },
    { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
    { name: 'Kuala Lumpur', lat: 3.139, lng: 101.6869 },
    { name: 'Jakarta', lat: -6.2088, lng: 106.8456 },
    { name: 'Manila', lat: 14.5995, lng: 120.9842 },
    { name: 'Taipei', lat: 25.032, lng: 121.5654 },
    { name: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
    { name: 'Ho Chi Minh City', lat: 10.8231, lng: 106.6297 },
    { name: 'Dubai', lat: 25.2769, lng: 55.2962 },
    { name: 'Doha', lat: 25.2854, lng: 51.531 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Algiers', lat: 36.7372, lng: 3.0877 },
    { name: 'Nairobi', lat: -1.2864, lng: 36.8172 },
    { name: 'Casablanca', lat: 33.5731, lng: -7.5898 },
    { name: 'Johannesburg', lat: -26.2041, lng: 28.0473 },
    { name: 'Lagos', lat: 6.5244, lng: 3.3792 },
    { name: 'Addis Ababa', lat: 9.0379, lng: 38.7579 },
    { name: 'Accra', lat: 5.6037, lng: -0.187 },
    { name: 'Dar es Salaam', lat: -6.7924, lng: 39.2083 },
    { name: 'Abuja', lat: 9.0579, lng: 7.4951 },
    { name: 'Cape Town', lat: -33.9249, lng: 18.4241 },
    { name: 'Durban', lat: -29.8587, lng: 31.0218 },
    { name: 'Khartoum', lat: 15.5007, lng: 32.5599 },
    { name: 'Luanda', lat: -8.8391, lng: 13.2894 },
    { name: 'Maputo', lat: -25.9692, lng: 32.5732 },
    { name: 'Tunis', lat: 36.8065, lng: 10.1815 },
    { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
    { name: 'Melbourne', lat: -37.8136, lng: 144.9631 },
    { name: 'Auckland', lat: -36.8485, lng: 174.7633 },
  ];

  const arcsData = [];
  for (let i = 0; i < Math.min(cities.length, 83); i += 1) {
    const startCity = cities[i];
    let endIndex = Math.floor(Math.random() * cities.length);
    while (endIndex === i) {
      endIndex = Math.floor(Math.random() * cities.length);
    }

    const endCity = cities[endIndex];
    arcsData.push({
      startLat: startCity.lat,
      startLng: startCity.lng,
      endLat: endCity.lat,
      endLng: endCity.lng,
      color: ['#22577aff', '#80ed99ff', '#22577aff'],
    });
  }

  globe.arcsData(arcsData)
    .arcColor('color')
    .arcDashLength(1)
    .arcDashGap(4)
    .arcDashInitialGap(() => Math.random() * 5)
    .arcDashAnimateTime(1000);

  scene.add(globe);

  camera.position.z = 400;

  let scrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  });

  const getScrollRatio = () => {
    const scrollableDistance = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const ratio = scrollY / scrollableDistance;
    return Math.max(0, Math.min(1, ratio));
  };

  const animate = () => {
    const scrollRatio = getScrollRatio();
    camera.position.x = -10 + scrollRatio * 20;
    camera.position.y = 5 - scrollRatio * 10;
    camera.position.z = 400 - scrollRatio * 300;

    camera.lookAt(scene.position);
    globe.rotation.y += 0.001;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();

  const resizeRenderer = () => {
    const width = globeCanvas.clientWidth || window.innerWidth;
    const height = globeCanvas.clientHeight || window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
  };

  resizeRenderer();
  window.addEventListener('resize', resizeRenderer, false);

  return { camera };
};
