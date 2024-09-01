import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Amors = ({ isMobile }) => {
  const Amor = useGLTF("/build/amor_und_psyche/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.3} groundColor='white'  />
      {/* <spotLight position={[-12, -12, 0]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} /> */}
      {/* <pointLight position={[-2, -0, -2.2]} intensity={1} /> */}
      <primitive
        object={Amor.scene}
        scale={isMobile ? 1.7 : 1.65}
        position={isMobile ? [0, -0.5, -2.2] : [0, -0.0, -1.5]}
        rotation={[0, 10  , 0]}
        position-y={-5} rotation-y={146.4}
      />
    </mesh>
  );
};

const AmorsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 10px)");

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
     <div style={{ position: 'absolute', bottom: -420, right: -0,  height: '120%', width: '25%'}}>
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [25, 3, 5],  fov: 45,
        near: 0.1,
        far: 200, }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
       // autoRotate
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Amors isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
    </div>
  );
};

export default AmorsCanvas;