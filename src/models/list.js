
export default {
    namespace: 'list',
    state: {
        lists: []
    },
    reducers: {
        updateList(state, action) {
            let currentList = deepClone(state);
            currentList.lists = action.payload;
            return currentList;
        }
    }
};

function deepClone(arr) {
    let _obj = JSON.stringify(arr),
        _objClone = JSON.parse(_obj);
    return _objClone;
}