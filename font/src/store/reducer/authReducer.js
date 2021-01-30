let init={
    user:{},
    authenticated:false
}

const authReducer =(state=init,action)=>{
    switch(action.type){

        case "SET_USER":return{
            user: action.payload,
            authenticated:true
        }
        case "Clear_User":return{
            user: {},
            authenticated:false
        }

        default: return state
    }
}

export default authReducer