import React, { useState, useRef, FC, useEffect } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { format } from 'date-fns';
import { Record } from './types';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { StandardMaterial, MeshBuilder, Scene, Color4, SphereParticleEmitter } from '@babylonjs/core';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { Engine, Plane } from 'react-babylonjs';

type CirculatorItemProps = {
    iconUrl: string,
    position: Vector3
}

const CirculatorItem: FC<CirculatorItemProps> = ({iconUrl, position}) => {
    return (
        <plane name="plane" size={2} width={2} height={2} position={position}>
            <standardMaterial name="planeMaterial" >

            <texture assignTo="diffuseTexture" name="texture" url={iconUrl} hasAlpha={true}>

            </texture>
            </standardMaterial>
        </plane>
    );
};


export default CirculatorItem;
