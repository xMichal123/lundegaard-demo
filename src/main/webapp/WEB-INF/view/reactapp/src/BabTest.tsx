import React, { useState, useRef, FC, useEffect } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { format } from 'date-fns';
import { Record } from './types';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { MeshBuilder, ArcRotateCamera, ParticleSystem, Texture, Color4, SphereParticleEmitter } from '@babylonjs/core';
import { Scene, Engine } from 'react-babylonjs';



const BabTest: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Engine antialias={true} adaptToDeviceRatio={true} canvasId="sample-canvas">
          <Scene onSceneMount={(props) => {
            var scene = props.scene;
            var camera = new ArcRotateCamera("ArcRotateCamera", 1, 0.8, 5, new Vector3(0, 0, 0), scene);
            camera.attachControl(props.canvas, true);
            scene.clearColor = new Color4(0.0, 0.0, 0.0, 1);

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
          }}>
          </Scene>
        </Engine>
      </header>
    </div>
    )
};

export default BabTest;
