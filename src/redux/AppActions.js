import { createAction } from 'redux-actions'
import Util from './Util'

export default {
    loadData: createAction('LOAD_DATA', () => { return Util.loadData() }),
} 