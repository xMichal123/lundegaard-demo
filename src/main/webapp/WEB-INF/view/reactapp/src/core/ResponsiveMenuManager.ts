import { Camera } from '@babylonjs/core';
//import ResponsiveMenuItem from './ResponsiveMenuItem';
import { Scene, Vector3 } from "@babylonjs/core";
import SceneManager from '../SceneManager';
import { HorizontalMenu } from './HorizontalMenu';
import HamburgerMenu from './HamburgerMenu';
import { AdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture';

class ResponsiveMenuManager {
    private _horizontalMenu: HorizontalMenu;
    private _hamburgerMenu: HamburgerMenu;

    constructor() {
        this._horizontalMenu = new HorizontalMenu();
        SceneManager.advancedDynamicTexture?.addControl(this._horizontalMenu);

        this._hamburgerMenu = new HamburgerMenu();
        SceneManager.advancedDynamicTexture?.addControl(this._hamburgerMenu);

        SceneManager.addRenderHook(() => {
            const canvas = SceneManager.scene?.getEngine().getRenderingCanvas();

            if (canvas !== null && canvas !== undefined) {
                if (canvas.width < 1000) {
                    this._hamburgerMenu.isVisible = true;
                    this._horizontalMenu.isVisible = false
                } else {
                    this._hamburgerMenu.isVisible = false;
                    this._horizontalMenu.isVisible = true;
                }
            }
        })
    }

    addMenuItem(caption: string, onClickCallback: () => void) {
        this._hamburgerMenu.addMenuItem(caption, onClickCallback);
        this._horizontalMenu.addMenuItem(caption, onClickCallback);
    }
}

export default ResponsiveMenuManager;
