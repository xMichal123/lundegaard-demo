import React, { useEffect } from 'react';
import { useBeforeRender } from 'react-babylonjs';
import { AdvancedDynamicTexture, Button, StackPanel } from '@babylonjs/gui/2D';
import GuiLoader from "./gui/GuiLoader";


export class HorizontalMenu extends StackPanel {
    private buttonWidth = 200;
    private buttonHeight = 40;
    private buttonGap = 10;

    private buttonCount = 0;

    constructor()
    {
        super();

        this.isVertical = false;
        this.verticalAlignment = HorizontalMenu.VERTICAL_ALIGNMENT_TOP;
    }

    addMenuItem(caption: string, onClickCallback: () => void) {
        const thisHelp = this;

        GuiLoader.CreateNewButton((button) => {
            button.width = thisHelp.buttonWidth + 'px';
            button.height = thisHelp.buttonHeight + 'px';
            button.color = 'white';
            button.background = 'black';
            button.top = '10px';
            button.left = thisHelp.buttonCount * (thisHelp.buttonWidth + thisHelp.buttonGap) + 'px';
            button.verticalAlignment = HorizontalMenu.VERTICAL_ALIGNMENT_TOP;
 
            if (button.textBlock !== null) {
                button.textBlock.text = caption;
            }

            button.onPointerUpObservable.add(() => {
                onClickCallback();
            });

            thisHelp.addControl(button);

            thisHelp.buttonCount++;
        });
    }
}
