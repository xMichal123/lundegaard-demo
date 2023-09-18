import React, { useRef, FC, useEffect } from 'react';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Plane, StandardMaterial, Texture, VideoTexture, FollowCamera } from 'react-babylonjs';
import { Mesh, FollowCamera as BabylonFollowCamera } from '@babylonjs/core';
import { CustomMaterial } from '@babylonjs/materials';
import SceneManager from '../SceneManager';

type JuicyCameraProps = {
    position: Vector3;
};

const JuicyCamera: FC<JuicyCameraProps> = ({ position }) => {
    //const cameraRef: React.RefObject<BabylonFollowCamera> = useRef<BabylonFollowCamera>(null);
    const cameraRef = useRef<BabylonFollowCamera>(null);

    useEffect(() => {
        if (cameraRef.current) {
            // Run your logic here after the ref is available
            console.log('Camera ref is available:', cameraRef.current);
        }
    }, []);

    return (
        <followCamera ref={cameraRef} name='camera' position={position} heightOffset={1} radius={10}  />
    );
};

export default JuicyCamera;
