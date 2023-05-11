import React, { useEffect, useRef } from "react";
import { Engine, Scene } from "@babylonjs/core";

interface BabylonCanvasProps {
    antialias?: boolean;
    engineOptions?: any;
    adaptToDeviceRatio?: boolean;
    sceneOptions?: any;
    onRender?: (scene: Scene) => void;
    onSceneReady?: (scene: Scene) => void;
}

const BabylonCanvas: React.FC<BabylonCanvasProps> = ({
                                                         antialias,
                                                         engineOptions,
                                                         adaptToDeviceRatio,
                                                         sceneOptions,
                                                         onRender,
                                                         onSceneReady,
                                                         ...rest
                                                     }) => {
    const reactCanvas = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const { current: canvas } = reactCanvas;
        if (!canvas) return;

        const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);
        const scene = new Scene(engine, sceneOptions);

        if (scene.isReady()) {
            onSceneReady?.(scene);
        } else {
            scene.onReadyObservable.addOnce((scene) => onSceneReady?.(scene));
        }

        engine.runRenderLoop(() => {
            if (typeof onRender === "function") onRender(scene);
            scene.render();
        });

        const resize = () => {
            scene.getEngine().resize();
        };

        window.addEventListener("resize", resize);

        return () => {
            scene.getEngine().dispose();
            window.removeEventListener("resize", resize);
        };
    }, [antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady]);

    return <canvas style={{width:"100%",height:"100%"}} ref={reactCanvas} {...rest} />;
};

export default BabylonCanvas;