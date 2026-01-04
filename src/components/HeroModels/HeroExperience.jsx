import { OrbitControls } from '@react-three/fiber'

const HeroExperience = () => {
    const isTablet = false;
  return (
    <canvas camera={{ position: [0, 0, 15], fav: 45}}>
        <ambienlight intensity={0.2} color="#1a1a40"/>
        <directionalLight position={[5, 5, 5]} intensity={5}>

            <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            mixPolarAngle={Math.PI / 2}
            />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="teal" />
            </mesh>
        </directionalLight>
    </canvas>


  )
}

export default HeroExperience
