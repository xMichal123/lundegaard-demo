import React, { createRef, useRef, FC, useEffect } from 'react';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Plane, StandardMaterial, Texture } from 'react-babylonjs';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import SceneManager from './SceneManager';

type CirculatorItemProps = {
    iconUrl: string;
    position: Vector3;
};

const CirculatorItem: FC<CirculatorItemProps> = ({ iconUrl, position }) => {
    const myRef: React.RefObject<Mesh> = useRef<Mesh>(null);

    useEffect(() => {
        if (myRef.current) {
            SceneManager.addCirclingItem(myRef.current);
        }
    }, []);

    return (
        <plane name="plane" size={2} width={2} height={2} position={position} ref={myRef}>
            <standardMaterial name="planeMaterial">
                <texture assignTo="diffuseTexture" name="texture" url={iconUrl} hasAlpha={true} />
            </standardMaterial>
        </plane>
    );
};

export default CirculatorItem;
