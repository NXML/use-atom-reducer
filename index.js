import {atom as recoilatom,useRecoilState,re} from "recoil"

/**
 * @param {*} atom 
 * @param {*} reducer 
 */
export const useAtomReducer = (atom,reducer)=>{

    console.log(atom)
    const [state,setState] = useRecoilState(recoilatom(atom))

    const dispatch = function(action){
        setState(reducer(state,action))
    }
    return [state,dispatch]
}