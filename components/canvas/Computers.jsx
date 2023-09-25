import {
	Preload,
	useGLTF,
	OrbitControls,
	View,
	PerspectiveCamera
} from "@react-three/drei";
import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import { Suspense, forwardRef, useEffect, useState } from "react";
import CanvasLoader from "../Loader";

function Computers({ isMobile, computerref }) {
	const computer = useGLTF("/models/desktop_pc/scene.gltf");

	return (
		<View track={computerref}>
			<Suspense fallback={<CanvasLoader />}>
				<mesh>
					<hemisphereLight intensity={1} groundColor="black" />
					<ambientLight intensity={0.65} />
					<spotLight
						intensity={1}
						position={[0, 1.5, 0.7]}
						angle={0.12}
						penumbra={1}
						castShadow
						shadow-mapSize={1024}
					/>
					<PerspectiveCamera
						makeDefault
						position={[0, 0, -8]}
						fov={30}
					/>
					<pointLight intensity={1} position={[1, 1.3, 0]} />
					<pointLight intensity={1} position={[-1, 1.3, 1]} />
					<primitive
						object={computer.scene}
						scale={isMobile ? 0.6 : 0.35}
						position={isMobile ? [0, -3, -1.2] : [-0.5, -0.5, 0]}
						rotation={[-0.01, 1.6, -0.1]}
					/>
					<OrbitControls
						enableZoom={false}
						maxPolarAngle={Math.PI / 2}
						minPolarAngle={Math.PI / 2}
						enableDamping={true}
						dampingFactor={0.05}
						enablePan={false}
						autoRotate={false}
						makeDefault
					/>
				</mesh>
			</Suspense>
		</View>
	);
}

export default Computers;
