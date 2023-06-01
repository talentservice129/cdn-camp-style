import React, { useRef } from 'react';
import { useTexture, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Mesh, Color, Group, MultiplyBlending, MultiplyOperation, AdditiveBlending, MixOperation, AddOperation, SubtractiveBlending } from 'three';

function Planet() {
	const [map, bumpMap, cloudMap, oceanMap, lightsMap ] = useTexture(['assets/images/games/earth/2_no_clouds_4k.jpg','assets/images/games/earth/elev_bump_4k.png','assets/images/games/earth/fair_clouds_8k.jpg','assets/images/games/earth/Ocean_Mask.jpg', 'assets/images/games/earth/night_lights_modified.png']);
	const planetMesh = useRef<Group | null>(null);

	useFrame(({clock}) => {
		planetMesh!.current!.rotation!.y = clock.getElapsedTime() * .1;
	});

	return (
		<group ref={planetMesh}>
			<mesh  rotation={[0,0,0]} >
				<sphereBufferGeometry attach="geometry" args={[4, 128, 128]} />
				<meshPhongMaterial
					map={map}
					// bumpMap={ bumpMap }
					bumpScale={ 0.005 }
					emissiveMap={ lightsMap }
					emissive={ new Color('yellow') }
					emissiveIntensity={ 30 }
					specularMap={oceanMap}
				/>
			</mesh>
			<mesh  rotation={[0,0,0]} >
				<sphereBufferGeometry attach="geometry" args={[4.003, 128, 128]} />
				<meshPhongMaterial
					map={cloudMap}
					transparent={true}
					opacity={0.6}
				/>
			</mesh>
		</group>
	)
}

useTexture.preload('assets/images/games/earth/2_no_clouds_4k.jpg');
useTexture.preload('assets/images/games/earth/elev_bump_4k.png');
useTexture.preload('assets/images/games/earth/fair_clouds_8k.jpg');
useTexture.preload('assets/images/games/earth/Ocean_Mask.jpg');
useTexture.preload('assets/images/games/earth/night_lights_modified.png');

export default Planet;