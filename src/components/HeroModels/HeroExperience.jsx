import { canvas } from '@react-three/fiber'

const HeroExperience = () => {
  return (
    <canvas camera={{ position: [0, 0, 15], fav: 45}}>
        <ambienlight intensity={0.2} color="#1a1a40"/>
    </canvas>

  )
}

export default HeroExperience
