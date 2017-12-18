import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'


const InitialState = {
    data: [],
    showModal: false,
    indice: 0,
    key: 0

}

let val = 0

const datos = (state = InitialState, actions) => {

    if (actions.type === "ADD_NEW_ROW") {
        val++
        return {
            ...state,
            data: state.data.concat({
                id: val,
                h0: " ",
                h1: " ",
                h2: " ",
                h3: " ",
                h4: " ",
                h5: " ",
                h6: " ",
                h7: " ",
                h8: " ",
                h9: " ",
                h10: " ",
                h11: " ",
                h12: " ",
                h13: " ",
                h14: " ",
                h15: " ",
                h16: " ",
                h17: " ",
                h18: " ",
                h19: " ",
                h20: " ",
                h21: " ",
                h22: " ",
                h23: " "
            })
        }
    }

    if (actions.type === "ADD_TO_TABLE") {

        let uData = JSON.parse(JSON.stringify(state.data))
        let i = state.indice

        // if(uData[i-1].id === i){
        //     console.log("los id son iguales "+uData[i-1].id+" ---"+ i)
        //     uData[i-1].h0 =actions.values.h0
        //     uData[i-1].h1 =actions.values.h1
        //     uData[i-1].h2 =actions.values.h2

        // }else{
        //     console.log("ids diferentes "+uData[i-1].id+" ---"+ i )
        // }

        for (let k = 0; k < uData.length; k++) {
            // console.log(k)
            if (uData[k].id === i) {
                uData[k].h0 = actions.values.h0
                uData[k].h1 = actions.values.h1
                uData[k].h2 = actions.values.h2
                uData[k].h3 = actions.values.h3
                uData[k].h4 = actions.values.h4
                uData[k].h5 = actions.values.h5
                uData[k].h6 = actions.values.h6
                uData[k].h7 = actions.values.h7
                uData[k].h8 = actions.values.h8
                uData[k].h9 = actions.values.h9
                uData[k].h10 = actions.values.h10
                uData[k].h11 = actions.values.h11
                uData[k].h12 = actions.values.h12
                uData[k].h13 = actions.values.h13
                uData[k].h14 = actions.values.h14
                uData[k].h15 = actions.values.h15
                uData[k].h16 = actions.values.h16
                uData[k].h17 = actions.values.h17
                uData[k].h18 = actions.values.h18
                uData[k].h19 = actions.values.h19
                uData[k].h20 = actions.values.h20
                uData[k].h21 = actions.values.h21
                uData[k].h22 = actions.values.h22
                uData[k].h23 = actions.values.h23
                
            }

        }

        return {
            ...state,
            data: uData
        }
    }


    if (actions.type === "CLOSE_MODAL") {
        return {
            ...state,
            showModal: false
        }
    }

    if (actions.type === "OPEN_MODAL") {
        // console.log("EL INIDCE ES " + actions.key)
        return {
            ...state,
            showModal: true,
            indice: actions.key,
            key: actions.key2
        }
    }

    if (actions.type === "DELETE_ALL") {
        return {
            ...state,
            data: []
        }
    }

    if (actions.type === "DELETE_ONCE") {
        console.log("se borro la fila con id = > " + actions.key, state.data.id)
        return {
            ...state,
            data: state.data.filter(i => i.id !== actions.key)
        }
    }

    return state
}

//const initialUser = {id:'23', h0: '32',h1:'99',h2:'88',h3:'111'};

const reducer = combineReducers({
    datos,
    form: reduxFormReducer
})



export default createStore(reducer)