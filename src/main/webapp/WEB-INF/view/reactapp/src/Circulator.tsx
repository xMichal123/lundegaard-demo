import React, { FC } from 'react';
import { Scene } from '@babylonjs/core';
import CirculatorItem from './CirculatorItem';
import {Vector3} from "@babylonjs/core/Maths/math.vector";

type CirculatorProps = {
    //scene: Scene;
};

const Circulator: FC<CirculatorProps> = ({  }) => {
    const images = ["./images/java.png","./images/csharp.png","./images/html5.png","./images/spring.png","./images/react.png","./images/sql.png"];
    const elements: JSX.Element[] = [];

    var i = 0;
    // Generate HTML elements in a loop
    for (const img of images) {
        elements.push(<CirculatorItem iconUrl={img} position={new Vector3(i, i, i)}/>);
        i++;
    }

    return <>{elements}</>;
};

export default Circulator;
