import { Canvas } from '@react-three/fiber';
import { ARButton, VRButton, XR } from '@react-three/xr';
import React from 'react'
import "./ProductAR.css"
import { useLocation } from 'react-router'
import { Vintageroom } from './Vintageroom';
import { OrbitControls } from '@react-three/drei';
import { Livingroom } from './Livingroom';
import { Sofaset } from './Sofaset';
import { Officechair } from './Officechair';
// import Vintageroom from './Vintageroom';

const ProductAR = () => {

    const location = useLocation();
  return (
    <div className='AR'>
    <ARButton />
        <Canvas>
            {/* <OrbitControls /> */}
            <ambientLight intensity={20}/>
            <directionalLight intensity={4} />
            <XR>
            {location.state.product == "Vintage Room" && <Vintageroom rotation-y={Math.PI/32} position-y={-1} />}
            {location.state.product == "Living Room" && <Livingroom />}
            {location.state.product == "Sofaset" && <Sofaset position-y = {0} rotation-y = {Math.PI/16} rotation-x = {Math.PI/16} position-z={-4} />}
            {location.state.product == "Office Chair" && <Officechair position-z={-8} scale={0.3}  />}
            </XR>
        </Canvas>
    </div>
  )
}

export default ProductAR