import {INFOS_TEST} from '..actions/'
const INITIAL_STATE ={
  digimons:[]
}
const digiState =(state= INITIAL_STATE,action)=>{
 switch (action.type) {
   case INFOS_TEST:
     
     return {...state,digimons:[action.payload]}
 
   default:
     return state
 }
}
export default digiState