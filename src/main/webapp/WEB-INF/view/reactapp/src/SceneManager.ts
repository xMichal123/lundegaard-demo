import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { Camera } from '@babylonjs/core';
import WideMenu from './core/HorizontalMenu';
import HamburgerMenu from './core/HamburgerMenu';

class SceneManager {
    private _renderHooks: (() => void)[] = [];
    private _circlingItems: (AbstractMesh)[] = [];
    private _camera: Camera | undefined;
    private _wideMenu: typeof WideMenu | undefined;
    private _hamburgerMenu: typeof HamburgerMenu | undefined;

    addRenderHook(func: () => void) {
        this._renderHooks.push(func);
    }

    addCirclingItem(item: AbstractMesh) {
        this._circlingItems.push(item);
    }

    public get camera() {
        return this._camera;
    }

    public set camera(value) {
        this._camera = value;
    }

    public get wideMenu() {
        return this._wideMenu;
    }

    public set wideMenu(value) {
        this._wideMenu = value;
    }

    public get hamburgerMenu() {
        return this._hamburgerMenu;
    }

    public set hamburgerMenu(value) {
        this._hamburgerMenu = value;
    }

    public get renderHooks() {
        return this._renderHooks;
    }

    public get circlingItems() {
        return this._circlingItems;
    }

    // Singleton instance
    private static instance: SceneManager;

    static getInstance() {
        if (!SceneManager.instance) {
            SceneManager.instance = new SceneManager();
        }
        return SceneManager.instance;
    }
}

export default SceneManager.getInstance();
