import React, { FC } from 'react';
import { Camera } from '@babylonjs/core';
//import HamburgerMenuItem from './HamburgerMenuItem';
import {Vector3} from "@babylonjs/core/Maths/math.vector";
import SceneManager from '../SceneManager';
import { AdvancedDynamicTexture, Grid, StackPanel, Control, Button } from '@babylonjs/gui'
import GuiLoader from "./gui/GuiLoader";


class HamburgerMenu extends StackPanel {
    private buttonWidth = 200;
    private buttonHeight = 40;
    private buttonGap = 10;

    private buttonCount = 0;

    private _buttonPanel: StackPanel;

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

        this._buttonPanel = new StackPanel("menu");
        //panel.width = 1;
        //panel.height = 1;
        this._buttonPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        this._buttonPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        //panel.background = "#33804D55";
        this._buttonPanel.isVisible = false;

        this.addControl(this._buttonPanel);

        var _menu = 0;

        const thisHelp = this;

        var changeMenu = function() {
            if (_menu == 0){
                button.background = "#FFFFFF55";

                 _menu = 1;
                 thisHelp._buttonPanel.isVisible = true;
            }

            else if(_menu == 1){
                button.background = "transparent";
 
                _menu = 0;
                thisHelp._buttonPanel.isVisible = false;
            }

            return _menu;
        }
    }

    addMenuItem(caption: string, onClickCallback: () => void) {
        const thisHelp = this;

        GuiLoader.CreateNewButton((but) => {
            but.width = thisHelp.buttonWidth + 'px';
            but.height = thisHelp.buttonHeight + 'px';
            but.color = 'white';
            but.background = '#FFFFFF99';
            but.top = thisHelp.buttonCount * (thisHelp.buttonHeight + thisHelp.buttonGap) + 'px';
            but.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
            but.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
 
            if (but.textBlock !== null) {
                but.textBlock.text = caption;
            }

            but.onPointerUpObservable.add(() => {
                onClickCallback();
            });

            this._buttonPanel.addControl(but);

            thisHelp.buttonCount++;
        });
    }
}

export default HamburgerMenu;
