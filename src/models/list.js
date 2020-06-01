
export default {
    namespace: 'list',
    state: {
        index: [],
        testList: []
    },
    reducers: {
        updateList(state, action) {
            let currentList = deepClone(state);
            currentList = action.payload;
            return currentList;
        }
    }
};

function deepClone(arr) {
    let _obj = JSON.stringify(arr),
        _objClone = JSON.parse(_obj);
    return _objClone;
}