import React, { FC } from 'react';
import { Camera } from '@babylonjs/core';
import CirculatorItem from './CirculatorItem';
import {Vector3} from "@babylonjs/core/Maths/math.vector";
import SceneManager from './SceneManager';

type CirculatorProps = {
    //scene: Scene;
};

const Circulator: FC<CirculatorProps> = ({  }) => {
    const images = ["./images/java.png","./images/csharp.png","./images/html5.png","./images/spring.png","./images/react.png","./images/sql.png"];
    const elements: JSX.Element[] = [];

    const getYRotation = (root: Vector3, target: Vector3) => {
        const dist = Math.sqrt(Math.pow(root.x - target.x, 2) + Math.pow(root.z - target.z, 2));
        const side = root.x - target.x;

        let result = dist === 0 ? 0 : Math.acos(side / dist);

        if (root.z - target.z < 0) {
            result = 2 * Math.PI - result;
        }

        return result;
    }

    const getNewPosition = (root: Vector3, speed: number) => {
        let angle= Math.acos(root.x / Math.sqrt(Math.pow(root.x, 2) + Math.pow(root.z, 2)));

        if (root.z < 0) {
            angle = 2 * Math.PI - angle;
        }

        return new Vector3(root.x + Math.sin(angle) * speed,root.y,root.z - Math.cos(angle) * speed);
    }

    SceneManager.addRenderHook(() => {
        if (SceneManager.camera !== undefined) {
            const cam: Camera = SceneManager.camera;
            SceneManager.circlingItems.forEach((item) => {
                item.position = getNewPosition(item.position, 0.1);

                //console.log(getYRotation(item.position, cam.position));
                item.rotation.y = getYRotation(item.position, cam.position);

                /*SceneManager.camera?.position;

                const vec = new Vector3(0, 0, velocity);
                const quat = Quaternion.FromEulerAngles(0, mesh.rotation.y, 0);
                let vec2 = Vector3.Zero();
                vec.rotateByQuaternionToRef(quat, vec2);*/
            })
        }
    });

    var i = 0;
    // Generate HTML elements in a loop
    for (const img of images) {
        elements.push(<CirculatorItem iconUrl={img} position={new Vector3(i, i, i)}/>);
        i++;
    }

    return <>{elements}</>;
};

export default Circulator;
