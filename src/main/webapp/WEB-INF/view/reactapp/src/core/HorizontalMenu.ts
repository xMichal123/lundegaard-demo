import React, { useEffect } from 'react';
import { useBeforeRender } from 'react-babylonjs';
import { AdvancedDynamicTexture, Button, StackPanel } from '@babylonjs/gui/2D';
import GuiLoader from "./gui/GuiLoader";


export class HorizontalMenu extends StackPanel {

    constructor()
    {
        super();

        this.isVertical = false;
        this.verticalAlignment = HorizontalMenu.VERTICAL_ALIGNMENT_TOP;
        const thisHelp = this;

        // Create the menu items using GUI controls
        GuiLoader.CreateNewButton((button1) => {
            button1.width = '200px';
            button1.height = '40px';
            button1.color = 'white';
            button1.background = 'black';
            button1.top = '10px';
            button1.left = '10px';
            button1.verticalAlignment = HorizontalMenu.VERTICAL_ALIGNMENT_TOP;

            if (button1.textBlock !== null) {
                button1.textBlock.text = '🏡 Home';
            }

            button1.onPointerUpObservable.add(() => {
                // Handle button click event
                console.log('Item 1 clicked');
            });

            thisHelp.addControl(button1);
        });

        GuiLoader.CreateNewButton((button2) => {
            button2.width = '200px';
            button2.height = '40px';
            button2.color = 'white';
            button2.background = 'black';
            button2.top = '10px';
            button2.left = '220px';
            button2.verticalAlignment = HorizontalMenu.VERTICAL_ALIGNMENT_TOP;

            if (button2.textBlock !== null) {
                button2.textBlock.text = 'What we do';
            }

            button2.onPointerUpObservable.add(() => {
                // Handle button click event
                console.log('Item 2 clicked');
            });

            thisHelp.addControl(button2);
        });

        GuiLoader.CreateNewButton((button3) => {
            button3.width = '200px';
            button3.height = '40px';
            button3.color = 'white';
            button3.background = 'black';
            button3.top = '10px';
            button3.left = '430px';
            button3.verticalAlignment = HorizontalMenu.VERTICAL_ALIGNMENT_TOP;
 
            if (button3.textBlock !== null) {
                button3.textBlock.text = 'About Us';
            }

            button3.onPointerUpObservable.add(() => {
                // Handle button click event
                console.log('Item 3 clicked');
            });

            thisHelp.addControl(button3);
        });

        GuiLoader.CreateNewButton((button4) => {
            button4.width = '200px';
            button4.height = '40px';
            button4.color = 'white';
            button4.background = 'black';
            button4.top = '10px';
            button4.left = '630px';
            button4.verticalAlignment = HorizontalMenu.VERTICAL_ALIGNMENT_TOP;
 
            if (button4.textBlock !== null) {
                button4.textBlock.text = 'Contact Us';
            }

            button4.onPointerUpObservable.add(() => {
                // Handle button click event
                console.log('Item 3 clicked');
            });

            thisHelp.addControl(button4);
        });
    }
}
