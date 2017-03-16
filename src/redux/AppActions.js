import { createAction } from 'redux-actions'
import Util from './Util'

export default {
    loadData: createAction('LOAD_DATA', () => { return Util.loadData() }),
    filterData: createAction('FILTER_DATA', (filter) => { return Util.filterData(filter, Util.loadData()) })
} 