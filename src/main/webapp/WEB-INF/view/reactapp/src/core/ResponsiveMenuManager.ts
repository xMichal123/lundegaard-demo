import { Camera } from '@babylonjs/core';
//import ResponsiveMenuItem from './ResponsiveMenuItem';
import { Scene, Vector3 } from "@babylonjs/core";
import SceneManager from '../SceneManager';
import HorizontalMenu from './HorizontalMenu';
import HamburgerMenu from './HamburgerMenu';
import { AdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture';

class ResponsiveMenuManager {
    private _advancedDynamicTexture: AdvancedDynamicTexture;
    private _horizontalMenu: HorizontalMenu;
    private _hamburgerMenu: HamburgerMenu;

    constructor(advancedDynamicTexture: AdvancedDynamicTexture) {
        this._advancedDynamicTexture = advancedDynamicTexture;

        this._horizontalMenu = new HorizontalMenu();
        this._advancedDynamicTexture.addControl(this._horizontalMenu);

        this._hamburgerMenu = new HorizontalMenu();
        this._advancedDynamicTexture.addControl(this._hamburgerMenu);
    }

    createMenu() {

    }
}

export default ResponsiveMenuManager;
