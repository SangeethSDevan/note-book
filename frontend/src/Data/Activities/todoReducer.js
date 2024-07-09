
const initialState={
    inputState:"",
    todo:[]
}

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case "TODO-FETCH":
            return {
                ...state,
                todo:action.content,
            }
        case "TODO-HANDLE":
            return {
                ...state,
                inputState:action.value
            }
        case "TODO-SUBMIT":
            return{
                ...state,
                inputState:""
            }
        default:
            return state
    }
}

export default todoReducer