import React, { useState, useRef, FC, useEffect } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { format } from 'date-fns';
import { Record } from './types';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Scene, Engine } from 'react-babylonjs';



const BabTest: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>@babylonjs + `react-babylonjs`</p>
        <Engine antialias={true} adaptToDeviceRatio={true} canvasId="sample-canvas">
          <Scene>
            <arcRotateCamera name="arc" target={new Vector3(0, 1, 0)}
              alpha={-Math.PI / 2} beta={(0.2 + (Math.PI / 4))} wheelPrecision={50}
              radius={14} minZ={0.001} lowerRadiusLimit={8} upperRadiusLimit={20} upperBetaLimit={Math.PI / 2} />
            <hemisphericLight name='hemi' direction={new Vector3(0, -1, 0)} intensity={0.8} />
            <directionalLight name="shadow-light" setDirectionToTarget={[Vector3.Zero()]} direction={Vector3.Zero()} position={new Vector3(-40, 30, -40)}
              intensity={0.4} shadowMinZ={1} shadowMaxZ={2500}>
            </directionalLight>

            <ground name="ground1" width={24} height={24} subdivisions={2} receiveShadows={true}>
            </ground>
            <vrExperienceHelper webVROptions={{ createDeviceOrientationCamera: false }} enableInteractions={true} />
          </Scene>
        </Engine>
      </header>
    </div>
    )
};

export default BabTest;
