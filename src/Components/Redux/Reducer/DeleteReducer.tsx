import Types from '../ActionType'
export const DeleteReducer =(state = null , action:any)=>{
    switch(action.type){
        case Types.ACTION_TYPE_DELETE:
            return action.payload.delete
            default : return state
    }
}