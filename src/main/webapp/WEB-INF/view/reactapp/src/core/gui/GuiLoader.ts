import { Control, AdvancedDynamicTexture, Button, StackPanel } from '@babylonjs/gui/2D';
import { Scene, Vector3, MeshBuilder, FreeCamera, HemisphericLight, AssetsManager } from "@babylonjs/core";
import SceneManager from "../../SceneManager";

class GuiLoader {
    private _button: Button | null = null;
    private buttonCallbacks: ((button: Button) => void)[] = [];

    public CreateNewButton(callback: ((button: Button) => void)) {
        if (this._button === null) {
            this.buttonCallbacks.push(callback);
        } else {
            this.CreateNewButtonImpl(callback);
        }
    }
    
    private CreateNewButtonImpl(callback: ((button: Button) => void)) {
        const newBut = this._button?.clone();

        if (newBut instanceof Button) {
            callback(newBut);
        }
    }

    constructor() {
    }

    init() {
        const assetsManager = new AssetsManager(SceneManager.scene);

// Load the JSON file containing the button configuration
        const buttonJsonUrl = "./data/guiControl.json";
        const buttonTask = assetsManager.addTextFileTask("buttonTask", buttonJsonUrl);

// Register a callback when the button is loaded
        buttonTask.onSuccess = (task) => {
            const buttonJson = task.text;
            const buttonConfig = JSON.parse(buttonJson);

            if (SceneManager.advancedDynamicTexture !== undefined) {
                // Create the button from the loaded configuration
                console.log(buttonConfig);
                const parsedButton = Button.Parse(buttonConfig, SceneManager.advancedDynamicTexture);

                if (parsedButton instanceof Button) {
                    this._button = parsedButton;

                    this.buttonCallbacks.forEach((callback) => {
                        this.CreateNewButtonImpl(callback);
                    });
                }
            }
        };

// Start loading the assets
        assetsManager.load();
    }

    // Singleton instance
    private static instance: GuiLoader;

    static getInstance() {
        if (!GuiLoader.instance) {
            GuiLoader.instance = new GuiLoader();
        }
        return GuiLoader.instance;
    }
}

export default GuiLoader.getInstance();
