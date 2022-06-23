import Types from '../ActionType'
export const CreateReducer =(state = null , action:any)=>{
    switch(action.type){
        case Types.ACTION_TYPE_CREATE:
            return action.payload.create
            default : return state
    }
}