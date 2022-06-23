import Types from '../ActionType'
export const UpdateReducer =(state = null , action:any)=>{
    switch(action.type){
        case Types.ACTION_TYPE_UPDATE:
            return action.payload.update
            default : return state
    }
}