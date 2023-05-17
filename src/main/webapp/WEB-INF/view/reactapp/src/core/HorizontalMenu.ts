import React, { useEffect } from 'react';
import { useBeforeRender } from 'react-babylonjs';
import { AdvancedDynamicTexture, Button, StackPanel } from '@babylonjs/gui/2D';


export class HorizontalMenu extends StackPanel {

    constructor()
    {
        super();

        this.isVertical = false;
        this.verticalAlignment = HorizontalMenu.VERTICAL_ALIGNMENT_TOP;

        // Create the menu items using GUI controls
        const button1 = Button.CreateSimpleButton('menuItem1', 'Item 1');
        button1.width = '100px';
        button1.height = '40px';
        button1.color = 'white';
        button1.background = 'black';
        button1.top = '10px';
        button1.left = '10px';
        button1.verticalAlignment = HorizontalMenu.VERTICAL_ALIGNMENT_TOP;
        button1.onPointerUpObservable.add(() => {
            // Handle button click event
            console.log('Item 1 clicked');
        });
        this.addControl(button1);

        const button2 = Button.CreateSimpleButton('menuItem2', 'Item 2');
        button2.width = '100px';
        button2.height = '40px';
        button2.color = 'white';
        button2.background = 'black';
        button2.top = '10px';
        button2.left = '120px';
        button2.verticalAlignment = HorizontalMenu.VERTICAL_ALIGNMENT_TOP;
        button2.onPointerUpObservable.add(() => {
            // Handle button click event
            console.log('Item 2 clicked');
        });
        this.addControl(button2);

        const button3 = Button.CreateSimpleButton('menuItem3', 'Item 3');
        button3.width = '100px';
        button3.height = '40px';
        button3.color = 'white';
        button3.background = 'black';
        button3.top = '10px';
        button3.left = '230px';
        button3.verticalAlignment = HorizontalMenu.VERTICAL_ALIGNMENT_TOP;
        button3.onPointerUpObservable.add(() => {
            // Handle button click event
            console.log('Item 3 clicked');
        });
        this.addControl(button3);

    }
}
