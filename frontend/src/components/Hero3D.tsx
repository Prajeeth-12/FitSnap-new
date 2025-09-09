"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Mannequin(){
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#14B8A6" />
    </mesh>
  )
}

export default function Hero3D(){
  return (
    <div className="h-[320px] md:h-[420px] rounded-2xl overflow-hidden card">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <OrbitControls enablePan={false} />
        <Mannequin />
      </Canvas>
    </div>
  )
}
