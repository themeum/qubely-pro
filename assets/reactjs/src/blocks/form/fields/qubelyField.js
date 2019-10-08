
import './style.scss'
import Edit from './edit'
import Save from './save'

import FieldDefaults from './formDefaults'


const settings = {
    ...FieldDefaults,
    icon: 'forms',
    edit: props => Edit(props),
    save: props => Save(props)
}

export { settings }
