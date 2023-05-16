import React, { useState, useRef, FC, useEffect } from 'react';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { format } from 'date-fns';
import { Record } from './types';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { MeshBuilder, ArcRotateCamera, ParticleSystem, Texture, Color4, SphereParticleEmitter, Camera } from '@babylonjs/core';
import { Scene, Engine } from 'react-babylonjs';
import Circulator from './Circulator';
import SceneManager from './SceneManager';
import ResponsiveMenu from './core/ResponsiveMenuManager';
import {Mesh} from "@babylonjs/core/Meshes/mesh";
import { AdvancedDynamicTexture, Button } from '@babylonjs/gui';


const BabTest: FC = () => {
  /*const cameraRef: React.RefObject<ArcRotateCamera> = useRef<ArcRotateCamera>(null);

  useEffect(() => {
    if (cameraRef.current) {
      SceneManager.camera = cameraRef.current;
    }
  }, []);*/

  return (
    <div className="App">
        <Engine antialias={true} adaptToDeviceRatio={true} canvasId="sample-canvas">
          <Scene onSceneMount={(props) => {
            var scene = props.scene;
            SceneManager.camera = new ArcRotateCamera("ArcRotateCamera", 1, 0.8, 5, new Vector3(0, 0, 0), scene);
            SceneManager.camera.attachControl(props.canvas, true);
            scene.clearColor = new Color4(0.0, 0.0, 0.0, 1);


            // Setup environment
            //SceneManager.camera = new ArcRotateCamera("ArcRotateCamera", 1, 0.8, 5, new Vector3(0, 0, 0), scene);
            //camera.attachControl(canvas, true);

            // Emitter object
            var stars = MeshBuilder.CreateBox("emitter", {size:0.01}, scene);

            // Create a particle system
            var starsParticles = new ParticleSystem("starsParticles", 500, scene);

            // Texture of each particle
            starsParticles.particleTexture = new Texture("textures/T_Star.png", scene);

            // Where the stars particles come from
            var starsEmitter = new SphereParticleEmitter();
            starsEmitter.radius = 20;
            starsEmitter.radiusRange = 0; // emit only from shape surface

            // Assign particles to emitters
            starsParticles.emitter = stars; // the starting object, the emitter
            starsParticles.particleEmitterType = starsEmitter;

            // Random starting color
            starsParticles.color1 = new Color4(0.898, 0.737, 0.718, 1.0);
            starsParticles.color2 = new Color4(0.584, 0.831, 0.894, 1.0);

            // Size of each particle (random between...
            starsParticles.minSize = 0.15;
            starsParticles.maxSize = 0.3;

            // Life time of each particle (random between...
            starsParticles.minLifeTime = 999999;
            starsParticles.maxLifeTime = 999999;

            // Burst rate
            starsParticles.manualEmitCount = 500;
            starsParticles.maxEmitPower = 0.0;

            // Blend mode : BLENDMODE_ONEONE, BLENDMODE_STANDARD, or BLENDMODE_ADD
            starsParticles.blendMode = ParticleSystem.BLENDMODE_STANDARD;

            // Set the gravity of all particles
            starsParticles.gravity = new Vector3(0, 0, 0);

            // Angular speed, in radians
            starsParticles.minAngularSpeed = 0.0;
            starsParticles.maxAngularSpeed = 0.0;

            // Speed
            starsParticles.minEmitPower = 0.0;
            starsParticles.maxAngularSpeed = 0.0;

            // No billboard
            starsParticles.isBillboardBased = true;

            // Render Order
            starsParticles.renderingGroupId = 0;

            starsParticles.start();

            var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");

            const responsiveMenu = new ResponsiveMenu(advancedTexture);
          }}

          onBeforeRenderObservable={() => {
            SceneManager.renderHooks.forEach((hook) => {
              hook();
            });
          }}>
            <Circulator />
            {/*
            <arcRotateCamera ref={cameraRef}
                name="camera1"
                alpha={Math.PI / 3}
                beta={Math.PI / 4.5}
                radius={9.0}
                target={Vector3.Zero()}
                minZ={0.001}
                position={Vector3.Zero()}
            />
*/}
            <hemisphericLight
                name="light1"
                intensity={0.7}
                direction={Vector3.Up()}
            />
          </Scene>
        </Engine>
    </div>
    )
};

export default BabTest;
