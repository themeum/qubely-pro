
const { registerBlockType } = wp.blocks

/**
 * import required attributes of form fields
 */
import * as text from './text';


const registerBlock = (block) => {
    if (!block) {
        return;
    }

    const { blockName, settings } = block;


    registerBlockType(blockName, {
        ...settings
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
