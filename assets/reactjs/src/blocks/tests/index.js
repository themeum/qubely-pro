import Edit from './Edit'
import Save from './Save';
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

registerBlockType('qubely/test', {
    title: __('TEST'),
    description: 'Apply texts and tweak designs with Qubely Advanced Text.',
    category: 'qubely',
    icon: 'universal-access-alt',
    supports: { align: false },
    keywords: [__('text'), __('paragraph'), __('heading')],
    attributes: {
        uniqueId: { type: 'string', default: '' },
        text: { type: 'string', default: 'This is Text' },
        alignment: { type: 'string', default: 'left', style: [{ selector: '{{QUBELY}} {text-align: {{alignment}};}' }] },
    },
    edit: Edit,
    save: Save,
});