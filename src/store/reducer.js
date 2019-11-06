const initialState = {
  age: 21,

}


const reducer = (state = initialState, action) => {
   switch(action.type){
     case 'UP_ASYNC':
        return {
          ...state,
          age: state.age + action.value,
         
        }

     case 'DOWN':
        return {
          ...state,
          age: state.age - action.value,
        }
     default:
       return state     
    }
   
}

export default reducer