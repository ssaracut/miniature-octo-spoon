import AppReducer from '../AppReducer'

it('should return the inital state given an undefined state and uknown action', () => {
    const state = AppReducer(undefined, { type: 'UNKNOWN' });
    expect(state).toEqual({});
})

it('should return state with updated value for data key', () => {
    const state = AppReducer(undefined, { type: 'LOAD_DATA', payload: 'test' });
    expect(state).toEqual({ data: 'test' });
})