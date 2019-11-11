import './style.scss'
import Edit from './Edit'
import Save from './Save';
import { attributes } from './attributes';

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

registerBlockType('qubely/mediacard', {
    title: __('Media Card'),
    description: 'Be creatively informative with Qubely Info Box.',
    icon: 'index-card',
    category: 'qubely',
    supports: { align: false },
    keywords: [__('media'), __('card')],
    attributes,
    edit: Edit,
    save: Save,
});
