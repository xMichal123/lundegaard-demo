import React, { FC } from 'react';
import { Camera } from '@babylonjs/core';
//import HamburgerMenuItem from './HamburgerMenuItem';
import {Vector3} from "@babylonjs/core/Maths/math.vector";
import SceneManager from '../SceneManager';
import { AdvancedDynamicTexture, Grid, StackPanel, Control, Button } from '@babylonjs/gui'

type HamburgerMenuProps = {
    //scene: Scene;
};

class HamburgerMenu extends StackPanel {

    constructor() {
        super();
    }
    /////////// GUI 2D GRID ////////////////

// Creating a grid to split the advancedTexture layer into cells of a defined and remaining size.
// The parameter 'true' fixes the size of the row or column, expressed in pixels (relative to the window/advancedTexture FS size).
// Rows and columns without parameter 'true' will use the BJS value (where 1 is equal to 100%) and will simply fill-in the remaining space.
    /*var grid = new Grid();
    grid.addColumnDefinition(128,true);
    grid.addColumnDefinition(384,true);
    grid.addColumnDefinition(1);
    grid.addColumnDefinition(80,true);

    grid.addRowDefinition(128,true);
    grid.addRowDefinition(1);
    grid.addRowDefinition(80,true);

//Adding our grid to the advancedTexture layer.
//Before this step, the grid does not show and you cannot interact with it.
    advancedTexture.addControl(grid);


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


//Attaching the panel to the grid on row #1 and column #0 cell
    grid.addControl(panel,1,0);


//A submenu panel to the right of the left menu
    var panel0 = new StackPanel("panelsub");
    panel0.width = 1;
    panel0.height = 1;
    panel0.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
    panel0.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
    panel0.background = "#FFFFFF99";

//Attaching the panel to the grid on row #1 and column #1 cell
    grid.addControl(panel0,1,1);


//A top menu panel
    var paneltop = new StackPanel("paneltop");
    paneltop.width = 1;
    paneltop.height = 1;
    paneltop.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    paneltop.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
    paneltop.background = "blue";

//Attaching the panel to the grid on row #0 and column #1 cell
    grid.addControl(paneltop,0,1);

    var button = Button.CreateImageOnlyButton("button", "https://dl.dropbox.com/s/bxuo28t42nple6o/hamburger1.png");
    grid.addControl(button);

    button.background = "#FFFFFF55";*/

    //return <>{advancedTexture}</>;
}

export default HamburgerMenu;
