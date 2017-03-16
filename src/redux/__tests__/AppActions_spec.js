import AppActions from '../AppActions'

it('should return an action with a payload containing app data', () => {
    const action = AppActions.loadData();
    expect(action.type).toEqual('LOAD_DATA');
    expect(action.payload);
})