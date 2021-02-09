# use-atom-reducer 
## Example
``` javascript
import React from "react"
import {counterState} from "./CounterAtom"
import {useAtomReducer} from "use-atom-reducer"



export default function Counter() {
    
    const reducer = (state,action)=>{
        if(action.type=="incr"){
            return state + action.payload
        }
        if(action.type=="decr"){
            return state - action.payload
        }

    }


    const [count,dispatch] = useAtomReducer(counterState,reducer)
    const handleIncr =()=>{
        dispatch({type:"incr",payload:1})
    }
     const handleDecr =()=>{
        dispatch({type:"decr",payload:1})
    }


    return <div>
        {count}
        <button onClick= {handleIncr}> INCREMENT  </button>
        <button onClick= {handleDecr}> DECREMENT  </button>
    </div>

}


```