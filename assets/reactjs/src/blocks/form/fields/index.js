
const { registerBlockType } = wp.blocks

/**
 * import required attributes of form fields
 */
import * as text from './text';

import './style.scss'

const registerBlock = (block) => {
    if (!block) {
        return;
    }

    const { blockName, settings } = block;


    registerBlockType(blockName, {
        ...settings,
        getEditWrapperProps( attributes ) {
            const { width } = attributes;
            if ( Number.isFinite( width ) ) {
                return {
                    style: {
                        width: width + '%',
                    },
                };
            }
        },
    })
};

/**
 * Register form fields
 */
export const registerFromFields = () => {
    [
        text,
    ].forEach(registerBlock);
}

registerFromFields()
