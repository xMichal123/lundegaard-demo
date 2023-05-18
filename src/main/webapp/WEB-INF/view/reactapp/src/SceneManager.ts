import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { Camera, Scene } from '@babylonjs/core';
import { Control, AdvancedDynamicTexture, Button, StackPanel } from '@babylonjs/gui/2D';

class SceneManager {
    private _renderHooks: (() => void)[] = [];
    private _circlingItems: (AbstractMesh)[] = [];
    private _camera: Camera | undefined;
    private _scene: Scene | undefined;
    private _advancedDynamicTexture: AdvancedDynamicTexture | undefined;
    //private _horizontalMenu: typeof HorizontalMenu | undefined;
    //private _hamburgerMenu: typeof HamburgerMenu | undefined;

    addRenderHook(func: () => void) {
        this._renderHooks.push(func);
    }

    addCirclingItem(item: AbstractMesh) {
        this._circlingItems.push(item);
    }

    public get scene() {
        return this._scene;
    }

    public set scene(value) {
        this._scene = value;
    }

    public get camera() {
        return this._camera;
    }

    public set camera(value) {
        this._camera = value;
    }

    public get advancedDynamicTexture() {
        return this._advancedDynamicTexture;
    }

    public set advancedDynamicTexture(value) {
        this._advancedDynamicTexture = value;
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
