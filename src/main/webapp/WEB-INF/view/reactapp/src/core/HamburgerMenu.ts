import React, { FC } from 'react';
import { Camera } from '@babylonjs/core';
//import HamburgerMenuItem from './HamburgerMenuItem';
import {Vector3} from "@babylonjs/core/Maths/math.vector";
import SceneManager from '../SceneManager';
import { AdvancedDynamicTexture, Grid, StackPanel, Control, Button } from '@babylonjs/gui'
import GuiLoader from "./gui/GuiLoader";


class HamburgerMenu extends Grid {

    constructor() {
        super();

// Creating a this to split the advancedTexture layer into cells of a defined and remaining size.
// The parameter 'true' fixes the size of the row or column, expressed in pixels (relative to the window/advancedTexture FS size).
// Rows and columns without parameter 'true' will use the BJS value (where 1 is equal to 100%) and will simply fill-in the remaining space.
        this.addColumnDefinition(128,true);
        this.addColumnDefinition(384,true);
        this.addColumnDefinition(1);
        this.addColumnDefinition(80,true);

        this.addRowDefinition(128,true);
        this.addRowDefinition(1);
        this.addRowDefinition(80,true);

    //Adding our this to the advancedTexture layer.
    //Before this step, the this does not show and you cannot interact with it.

        var panel = new StackPanel("leftmenu");
        panel.width = 1;
        panel.height = 1;
        panel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        panel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        var mycolorhexa = "#33804D55";
    //--> try set another color here
        //panel.background = "red";
        //panel.background = "transparent";
        //panel.background = new BABYLON.Color4(20/255, 50/255, 30/255, 125/255).toHexString();
        panel.background = mycolorhexa;


    //Attaching the panel to the this on row #1 and column #0 cell
        this.addControl(panel,1,0);


    //A submenu panel to the right of the left menu
        var panel0 = new StackPanel("panelsub");
        panel0.width = 1;
        panel0.height = 1;
        panel0.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        panel0.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        panel0.background = "#FFFFFF99";

    //Attaching the panel to the this on row #1 and column #1 cell
        this.addControl(panel0,1,1);


    //A top menu panel
        var paneltop = new StackPanel("paneltop");
        paneltop.width = 1;
        paneltop.height = 1;
        paneltop.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
        paneltop.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        paneltop.background = "blue";

    //Attaching the panel to the this on row #0 and column #1 cell
        this.addControl(paneltop,0,1);

        var button = Button.CreateImageOnlyButton("button", "./images/hamburger.png");
        this.addControl(button);

        button.background = "#FFFFFF55";

        button.onPointerUpObservable.add(() => {
            changeMenu();
        });




    //Let's first add all of our left menu buttons.
    //All buttons stack in order
    //At this state, I will simply comment the instructions for the parts that are not yet here.
    //Also note that all icons have been replaced with icons from the assets library. Some icons are being used as a duplicate.
    //In the original scenario/GUI, icons would eventually change (change source) depending on context

    //A tour button (first under menu)
        GuiLoader.CreateNewButton((button0) => {
            button0.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
            button0.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            button0.width = 1;
            button0.height = '128px';
            button0.top = 0;
            button0.background = "#FFFFFF99";

            if (button0.textBlock !== null) {
                button0.textBlock.text = 'Home';
            }

            button0.onPointerUpObservable.add(() => {

                button0.background = "#FFFFFF99";

                /*if (button2.image !== null) {
                    button2.image.source = "https://dl.dropbox.com/s/jfsld3nngb0e14n/houselist.png";
                    button2.image.alpha = 1;
                }*/

                //changeTour();
            });

            panel.addControl(button0);
        });

        //An edit & compare button (second under menu)
        GuiLoader.CreateNewButton((button2) => {
            button2.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
            button2.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            button2.width = 1;
            button2.height = '128px';
            button2.top = '128px';
            button2.background = "#FFFFFF99";

            button2.onPointerUpObservable.add(() => {

                button2.background = "#FFFFFF99";

                /*if (button0.image !== null) {
                    button0.image.source = "https://dl.dropbox.com/s/pqbt4f8akrwshvz/camera.png";
                    button0.image.alpha = 1;
                }*/
            });

            panel.addControl(button2);
        });

        var _menu = 0;

        //The function called on pointerUp that will show or hide the menu, does some other things and changes the value of the var (shown or hidden)
        var changeMenu = function() {
            if (_menu == 0){
                //menu is NOT active - changing to active
                console.log ("menu is active " + _menu);
                _menu = 1;
                panel.isVisible = true;
            }

            else if(_menu == 1){
                //menu is active - changing to NOT active
                console.log ("menu is NOT active " +_menu);

                button.background = "transparent";
                /*button0.background = "#FFFFFF99";
                //button0.image.source = "tex/tour.svg";

                if (button0.image !== null) {
                    button0.image.alpha = 1;
                }

                button2.background = "#FFFFFF99";
                //button2.image.source = "tex/edit-compare.svg";

                if (button2.image !== null) {
                    button2.image.alpha = 1;
                }*/

                panel.isVisible = false;
                _menu = 0;
            }

            console.log ("changeMenu after state is " + _menu);
            return _menu;
        }
    }
    /////////// GUI 2D GRID ////////////////

}

export default HamburgerMenu;
