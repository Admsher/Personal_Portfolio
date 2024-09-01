import React, { Suspense,useState,useEffect} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

import CanvasLoader from "../Loader";

const Chair = ({ isMobile }) => {
  const Chair = useGLTF("dist/a_greek_philosopher_in_his_chair/scene.gltf");
//  const [yPosition, setYPosition] = useState(0);

  useFrame(() => {
    setYPosition(Math.sin(Date.now() * 0.01) * 0.5);
  });

  return (
   <mesh>
      <hemisphereLight intensity={1.5} groundColor='blue' />
     
      {/* <pointLight intensity={1} /> */}
      <primitive
        object={Chair.scene}
        scale={isMobile ? 1.7 : 1.65}
        position={isMobile ? [0, -0.5, -0] : [0, 0.0, -0]}
        rotation={[0, 0, 0]}
        position-y={0} rotation-y={0}

      />
    </mesh>
  );
};

const ChairCanvas= () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 300px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0,  height: '100%', width: '100%'}}>
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 12, 5],  fov: 45,
        near: 0.1,
        far: 2, }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* <OrbitControls
      //  autoRotate
         
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
         // maxPolarAngle={Math.PI / 2}
         // minPolarAngle={Math.PI / 2}
        /> */}
        <Chair isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
    </div>
  );
};

export default ChairCanvas;