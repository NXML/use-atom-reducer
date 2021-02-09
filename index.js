import {useRecoilState} from "recoil"

/**
 * @param {*} atom 
 * @param {*} reducer 
 */
export const useAtomReducer = (atom,reducer)=>{
    const [state,setState] = useRecoilState(atom)

    const dispatch = function(action){
        setState(reducer(state,action))
    }
    return [state,dispatch]
}