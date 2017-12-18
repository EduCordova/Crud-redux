
const addToTable = (values) => {
    return {
        type: 'ADD_TO_TABLE',
        values
    }
}

const addNewRow = () => {
    return {
        type: 'ADD_NEW_ROW'

    }
}

const deleteAll = () => {
    return {
        type: 'DELETE_ALL'

    }
}

const deleteOnce = (key) => {
    return {
        type: 'DELETE_ONCE',
        key
    }
}

const open = (key,key2) => {
    return {
        type: 'OPEN_MODAL',
        key,
        key2
       
    }
}
const close = () => {
    return {
        type: 'CLOSE_MODAL'
        
    }
}

export {
    addNewRow,
    addToTable,
    deleteAll,
    deleteOnce,
    close,
    open
}