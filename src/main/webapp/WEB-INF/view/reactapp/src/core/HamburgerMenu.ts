import React, { FC } from 'react';
import { Camera } from '@babylonjs/core';
//import HamburgerMenuItem from './HamburgerMenuItem';
import {Vector3} from "@babylonjs/core/Maths/math.vector";
import SceneManager from '../SceneManager';
import { AdvancedDynamicTexture, Grid, StackPanel, Control, Button } from '@babylonjs/gui'
import GuiLoader from "./gui/GuiLoader";


class HamburgerMenu extends StackPanel {

    constructor() {
        super();

        this.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;

        const helpThis = this;

        var button = Button.CreateImageOnlyButton("button", "./images/hamburger.png");

        button.background = "#FFFFFF55";
        button.width = '40px';
        button.height = '40px';
        button.top = '10px';

        button.onPointerUpObservable.add(() => {
            changeMenu();
        });

        this.addControl(button);

        var panel = new StackPanel("menu");
        //panel.width = 1;
        //panel.height = 1;
        panel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        panel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        //panel.background = "#33804D55";
        panel.isVisible = false;

        this.addControl(panel);

        GuiLoader.CreateNewButton((button0) => {
            button0.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
            button0.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            button0.width = '200px';
            button0.height = '40px';
            button0.top = 0;
            button0.background = "#FFFFFF99";

            if (button0.textBlock !== null) {
                button0.textBlock.text = 'Home';
            }

            button0.onPointerUpObservable.add(() => {

                button0.background = "#FFFFFF99";
            });

            panel.addControl(button0);
        });

        GuiLoader.CreateNewButton((button2) => {
            button2.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
            button2.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            button2.width = '200px';
            button2.height = '40px';
            button2.top = '128px';
            button2.background = "#FFFFFF99";

            button2.onPointerUpObservable.add(() => {
                button2.background = "#FFFFFF99";
            });

            panel.addControl(button2);
        });

        var _menu = 0;

        var changeMenu = function() {
            if (_menu == 0){
                console.log ("menu is active " + _menu);
                _menu = 1;
                panel.isVisible = true;
            }

            else if(_menu == 1){
                button.background = "transparent";
 
                panel.isVisible = false;
                _menu = 0;
            }

            return _menu;
        }
    }
}

export default HamburgerMenu;
