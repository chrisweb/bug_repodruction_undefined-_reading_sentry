'use client'

import { Canvas } from '@react-three/fiber'

const NeonRoadCanvas: React.FC = () => {

    return (
        <>
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
            </Canvas>
        </>

    )
}

export default NeonRoadCanvas