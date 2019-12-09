import './style.scss'
import Edit from './Edit'
import Save from './Save';
import { attributes } from './attributes';

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

registerBlockType('qubely/mediacard', {
    title: __('Media Card'),
    description: 'Add an image or video with an offset with Qubely Media Card.',
    icon: <img src={qubely_pro_admin.plugin + 'assets/img/blocks/media-card.svg'} alt={__('Media Card')} />,
    category: 'qubely',
    keywords: [__('Media Card'), __('Card'), __('Feature Box')],
    example: {},
    supports: {
        align: ['center', 'wide', 'full'],
    },
    attributes,
    edit: Edit,
    save: Save,
});
