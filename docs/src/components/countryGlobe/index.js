import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import ThreeGlobe from 'three-globe'
import jsonData from '../../assets/json/110_countries.json';
import { MeshStandardMaterial } from 'three';
import { PerspectiveCamera } from '@react-three/drei';

extend({ ThreeGlobe })


const CountryGlobe = ({forwardedRef, visible, setVisible}) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [countries, setCountries] = useState(jsonData)
    const cameraRef = useRef(null)
    const globeRef = useRef(null)

    const { scrollYProgress } = useScroll({
      target: forwardedRef,
      offset: ["start start", "end start"],
    })

    const cities = [
      // Europe
      { name: "London", lat: 51.5074, lng: -0.1278 }, // London, UK
      { name: "Paris", lat: 48.8566, lng: 2.3522 }, // Paris, France
      { name: "Berlin", lat: 52.5200, lng: 13.4050 }, // Berlin, Germany
      { name: "Rome", lat: 41.9028, lng: 12.4964 }, // Rome, Italy
      { name: "Madrid", lat: 40.4168, lng: -3.7038 }, // Madrid, Spain
      { name: "Moscow", lat: 55.7558, lng: 37.6173 }, // Moscow, Russia
      { name: "Stockholm", lat: 59.3293, lng: 18.0686 }, // Stockholm, Sweden
      { name: "Oslo", lat: 59.9139, lng: 10.7522 }, // Oslo, Norway
      { name: "Helsinki", lat: 60.1695, lng: 24.9354 }, // Helsinki, Finland
      { name: "Copenhagen", lat: 55.6761, lng: 12.5683 }, // Copenhagen, Denmark
      { name: "Dublin", lat: 53.3498, lng: -6.2603 }, // Dublin, Ireland
      { name: "Brussels", lat: 50.8503, lng: 4.3517 }, // Brussels, Belgium
      { name: "Vienna", lat: 48.2082, lng: 16.3738 }, // Vienna, Austria
      { name: "Amsterdam", lat: 52.3676, lng: 4.9041 }, // Amsterdam, Netherlands
      { name: "Zurich", lat: 47.3769, lng: 8.5417 }, // Zurich, Switzerland
      { name: "Lisbon", lat: 38.7223, lng: -9.1393 }, // Lisbon, Portugal
    
      // North America
      { name: "New York", lat: 40.7128, lng: -74.0060 }, // New York, USA
      { name: "Los Angeles", lat: 34.0522, lng: -118.2437 }, // Los Angeles, USA
      { name: "Toronto", lat: 43.6511, lng: -79.3832 }, // Toronto, Canada
      { name: "Mexico City", lat: 19.4326, lng: -99.1332 }, // Mexico City, Mexico
      { name: "Chicago", lat: 41.8781, lng: -87.6298 }, // Chicago, USA
      { name: "Houston", lat: 29.7604, lng: -95.3698 }, // Houston, USA
      { name: "Atlanta", lat: 33.7490, lng: -84.3880 }, // Atlanta, USA
      { name: "Montreal", lat: 45.5017, lng: -73.5673 }, // Montreal, Canada
      { name: "Vancouver", lat: 49.2827, lng: -123.1207 }, // Vancouver, Canada
      { name: "Seattle", lat: 47.6062, lng: -122.3321 }, // Seattle, USA
      { name: "Miami", lat: 25.7617, lng: -80.1918 }, // Miami, USA
      { name: "San Francisco", lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
      { name: "Boston", lat: 42.3601, lng: -71.0589 }, // Boston, USA
      { name: "Dallas", lat: 32.7767, lng: -96.7970 }, // Dallas, USA
      { name: "Denver", lat: 39.7392, lng: -104.9903 }, // Denver, USA
      { name: "San Diego", lat: 32.7157, lng: -117.1611 }, // San Diego, USA
    
      // South America
      { name: "Buenos Aires", lat: -34.6037, lng: -58.3816 }, // Buenos Aires, Argentina
      { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro, Brazil
      { name: "São Paulo", lat: -23.5505, lng: -46.6333 }, // São Paulo, Brazil
      { name: "Lima", lat: -12.0464, lng: -77.0428 }, // Lima, Peru
      { name: "Bogotá", lat: 4.7109, lng: -74.0721 }, // Bogotá, Colombia
      { name: "Santiago", lat: -33.4489, lng: -70.6693 }, // Santiago, Chile
      { name: "Caracas", lat: 10.4806, lng: -66.9036 }, // Caracas, Venezuela
      { name: "Quito", lat: -0.1807, lng: -78.4678 }, // Quito, Ecuador
      { name: "Montevideo", lat: -34.9011, lng: -56.1645 }, // Montevideo, Uruguay
      { name: "Asunción", lat: -25.2637, lng: -57.5759 }, // Asunción, Paraguay
      { name: "Lima", lat: -12.0464, lng: -77.0428 }, // Lima, Peru
      { name: "La Paz", lat: -16.4897, lng: -68.1193 }, // La Paz, Bolivia
      { name: "Brasília", lat: -15.8267, lng: -47.9218 }, // Brasília, Brazil
      { name: "Manaus", lat: -3.1190, lng: -60.0217 }, // Manaus, Brazil
      { name: "Barranquilla", lat: 11.0041, lng: -74.8060 }, // Barranquilla, Colombia
      { name: "Porto Alegre", lat: -30.0346, lng: -51.2177 }, // Porto Alegre, Brazil
    
      // Asia
      { name: "Tokyo", lat: 35.6895, lng: 139.6917 }, // Tokyo, Japan
      { name: "Shanghai", lat: 31.2304, lng: 121.4737 }, // Shanghai, China
      { name: "Beijing", lat: 39.9042, lng: 116.4074 }, // Beijing, China
      { name: "Seoul", lat: 37.5665, lng: 126.9780 }, // Seoul, South Korea
      { name: "Delhi", lat: 28.6139, lng: 77.2090 }, // Delhi, India
      { name: "Mumbai", lat: 19.0760, lng: 72.8777 }, // Mumbai, India
      { name: "Bangkok", lat: 13.7563, lng: 100.5018 }, // Bangkok, Thailand
      { name: "Singapore", lat: 1.3521, lng: 103.8198 }, // Singapore, Singapore
      { name: "Kuala Lumpur", lat: 3.1390, lng: 101.6869 }, // Kuala Lumpur, Malaysia
      { name: "Jakarta", lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
      { name: "Manila", lat: 14.5995, lng: 120.9842 }, // Manila, Philippines
      { name: "Taipei", lat: 25.0320, lng: 121.5654 }, // Taipei, Taiwan
      { name: "Hong Kong", lat: 22.3193, lng: 114.1694 }, // Hong Kong, Hong Kong
      { name: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297 }, // Ho Chi Minh City, Vietnam
      { name: "Dubai", lat: 25.2769, lng: 55.2962 }, // Dubai, UAE
      { name: "Doha", lat: 25.2854, lng: 51.5310 }, // Doha, Qatar
    
      // Africa
      { name: "Cairo", lat: 30.0444, lng: 31.2357 }, // Cairo, Egypt
      { name: "Algiers", lat: 36.7372, lng: 3.0877 }, // Algiers, Algeria
      { name: "Nairobi", lat: -1.2864, lng: 36.8172 }, // Nairobi, Kenya
      { name: "Casablanca", lat: 33.5731, lng: -7.5898 }, // Casablanca, Morocco
      { name: "Johannesburg", lat: -26.2041, lng: 28.0473 }, // Johannesburg, South Africa
      { name: "Lagos", lat: 6.5244, lng: 3.3792 }, // Lagos, Nigeria
      { name: "Addis Ababa", lat: 9.0379, lng: 38.7579 }, // Addis Ababa, Ethiopia
      { name: "Accra", lat: 5.6037, lng: -0.1870 }, // Accra, Ghana
      { name: "Dar es Salaam", lat: -6.7924, lng: 39.2083 }, // Dar es Salaam, Tanzania
      { name: "Abuja", lat: 9.0579, lng: 7.4951 }, // Abuja, Nigeria
      { name: "Cape Town", lat: -33.9249, lng: 18.4241 }, // Cape Town, South Africa
      { name: "Durban", lat: -29.8587, lng: 31.0218 }, // Durban, South Africa
      { name: "Khartoum", lat: 15.5007, lng: 32.5599 }, // Khartoum, Sudan
      { name: "Luanda", lat: -8.8391, lng: 13.2894 }, // Luanda, Angola
      { name: "Maputo", lat: -25.9692, lng: 32.5732 }, // Maputo, Mozambique
      { name: "Tunis", lat: 36.8065, lng: 10.1815 }, // Tunis, Tunisia
    
      // Australia and New Zealand
      { name: "Sydney", lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
      { name: "Melbourne", lat: -37.8136, lng: 144.9631 }, // Melbourne, Australia
      { name: "Auckland", lat: -36.8485, lng: 174.7633 }, // Auckland, New Zealand
    ];
  
    const arcsData = [];
  
    for (let i = 0; i < 83; i++) {
      // const startCityIndex = Math.floor(Math.random() * cities.length);
      const startCityIndex = i;
      let endCityIndex = Math.floor(Math.random() * cities.length);
      
      // Ensure that the end city is different from the start city
      while (endCityIndex === startCityIndex) {
        endCityIndex = Math.floor(Math.random() * cities.length);
      }
      
      const startCity = cities[i];
      const endCity = cities[endCityIndex];
      console.log(cities.length)
      const arc = {
        startLat: startCity.lat,
        startLng: startCity.lng,
        endLat: endCity.lat,
        endLng: endCity.lng,
        color: ['#22577aff','#80ed99ff', '#22577aff'] // Arc color
      };
  
      arcsData.push(arc);
    }
  
  
    
    useLayoutEffect(() => {
  
      const blueMaterial = new MeshStandardMaterial({ color: '#22577a' });
      globeRef.current.globeMaterial(blueMaterial);
      globeRef.current.scale.set(0.1, 0.1, 0.1)
  
      globeRef.current.hexPolygonsData(countries.features)
      globeRef.current.hexPolygonResolution(3)
      globeRef.current.hexPolygonMargin(0.1)
      globeRef.current.hexPolygonUseDots(false)
      globeRef.current.hexPolygonColor(() => '#fff');
      globeRef.current.hexPolygonAltitude(0.001)
      globeRef.current.hexPolygonCurvatureResolution(5)
  
      globeRef.current.arcsData(arcsData)
      globeRef.current.arcColor('color')
      globeRef.current.arcDashLength(1)
      globeRef.current.arcDashGap(4)
      globeRef.current.arcDashInitialGap(() => Math.random() * 5)
      globeRef.current.arcDashAnimateTime(1000);
     
    }, [])

    const temporaryx = useSpring(scrollYProgress, {
      stiffness: 300,
      damping: 40,
      restDelta: 0.001,
    });
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener when component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    // const cameraPosX = useTransform(temporaryx, screenWidth <= 991? [0, 1]:[0, 1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 1], screenWidth <= 479?[-4, 2]:screenWidth <= 767?[-6, 2]:screenWidth <= 991? [-9, 2] :[-10, -10, -10, -10, -10, -10, -10, -10]);
    const cameraPosX = useTransform(temporaryx, screenWidth <= 991? [0, 1]:[0, 1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 1], screenWidth <= 479?[-4, 2]:screenWidth <= 767?[-6, 2]:screenWidth <= 991? [-9, 2] :[-10, -13, -16, -19, -21, -24, -27, -30]);
    const cameraPosY = useTransform(temporaryx, screenWidth <= 991? [0, 1]:[0, 1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 1], screenWidth <= 479? [7,  -2]:screenWidth <= 767? [6,  -2]:screenWidth <= 991? [4,  -2]:[5, 5, 5, 5, 5, 5, 5, 5]);
    // const cameraPosZ = useTransform(temporaryx, screenWidth <= 991? [0, 1]:[0, 1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 1], screenWidth <= 479?[75, 20]:screenWidth <= 767?[50, 20]:screenWidth <= 991? [60, 20]:[45, 40, 35, 30, 25, 20, 15, 10]);
    const cameraPosZ = useTransform(temporaryx, screenWidth <= 991? [0, 1]:[0, 1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 1], screenWidth <= 479?[75, 20]:screenWidth <= 767?[50, 20]:screenWidth <= 991? [60, 20]:[45, 35, 25, 15, 5, -5, -15, -25]);
    
    // const cameraPosX = useTransform(temporaryx, [0, 1], screenWidth <= 479?[-4, 2]:screenWidth <= 767?[-6, 2]:screenWidth <= 991? [-9, 2]: [-10, 2]);
    // const cameraPosY = useTransform(temporaryx, [0, 1], screenWidth <= 479? [7,  -2]:screenWidth <= 767? [6,  -2]:screenWidth <= 991? [4,  -2]:[5,  -2]);
    // const cameraPosZ = useTransform(temporaryx, [0, 1], screenWidth <= 479?[75, 20]:screenWidth <= 767?[50, 20]:screenWidth <= 991? [60, 20]:[45, 15]);
    
    const cameraLookX = useTransform(temporaryx, screenWidth <= 991? [0, 1]:[0, 1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 1], screenWidth <= 479?[-4, 2]:screenWidth <= 767?[-6, 2]:screenWidth <= 991? [-9, 2] :[-10, -9, -8, -7, -6, -5, -4, -3]);
    const cameraLookY = useTransform(temporaryx, screenWidth <= 991? [0, 1]:[0, 1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 1], screenWidth <= 479? [7,  -2]:screenWidth <= 767? [6,  -2]:screenWidth <= 991? [4,  -2]:[5, 5, 5, 5, 5, 5, 5, 5]);
    const cameraLookZ = useTransform(temporaryx, screenWidth <= 991? [0, 1]:[0, 1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 1], screenWidth <= 479?[75, 20]:screenWidth <= 767?[50, 20]:screenWidth <= 991? [60, 20]:[45, 40, 35, 30, 25, 20, 20, 2]);
    
   
    useFrame((state) => {
      if (globeRef.current) {
        globeRef.current.scale.set(0.1, 0.1, 0.1)
        globeRef.current.rotation.y += (1 / 60) * Math.PI * 2 / 60;

       
        cameraRef.current.position.x= cameraPosX.get()
        cameraRef.current.position.y= cameraPosY.get()
        cameraRef.current.position.z= cameraPosZ.get()
        cameraRef.current.lookAt(cameraLookX.get(), cameraPosY.get(), 0)
      
      }
    });
    return (
      <group>
        <ambientLight intensity={0.05} />
        <PerspectiveCamera
            makeDefault
            ref={cameraRef}
            fov={20}
            position={[0, 0, 1000]}
            far={100000}
        />
          <threeGlobe scale={[0.1,0.1,0.1]} ref={globeRef}/>
        <directionalLight position={[-50, 10, 30]} intensity={3} />
      </group>
    );
  };
  
  export default CountryGlobe;
  