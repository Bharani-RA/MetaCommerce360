import { Canvas } from '@react-three/fiber';
import { VRButton, XR } from '@react-three/xr';
import React from 'react'
import "./ProductVR.css"
import { useLocation } from 'react-router'
import { Vintageroom } from './Vintageroom';
import { OrbitControls } from '@react-three/drei';
import { Livingroom } from './Livingroom';
import { Sofaset } from './Sofaset';
// import Vintageroom from './Vintageroom';

const ProductVR = () => {

    const location = useLocation();
  return (
    <div className='VR'>
    <VRButton />
        <Canvas>
            {/* <OrbitControls /> */}
            {(location.state.product == "Sofaset" || location.state.product == "Office Chair") ? <ambientLight intensity={10} /> : <ambientLight />}
            {(location.state.product == "Sofaset" || location.state.product == "Office Chair") && <directionalLight intensity={5}/> }
            
            <XR>
            {location.state.product == "Vintage Room" && <Vintageroom rotation-y={Math.PI/32} position-y={-1} />}
            {location.state.product == "Living Room" && <Livingroom position-y = {1.15} />}
            {location.state.product == "Sofaset" && <Sofaset position-y = {1} rotation-y = {Math.PI/16} rotation-x = {Math.PI/16} position-z={-4} />}
            {location.state.product == "Office Chair" && <Officechair position-z={-4}  />}

            </XR>
        </Canvas>
    </div>
  )
}

export default ProductVR