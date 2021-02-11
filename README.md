# use-atom-reducer 
## Example
``` javascript
import React from "react"
import {atom} from "recoil"
import {useAtomReducer} from "use-atom-reducer"


export const counterState = atom({
    key: 'counter', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });



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

# App
```javascript

import Counter from "./Counter"
import { RecoilRoot } from "recoil"


function App() {
  return (
    <div className="App">
     
        <RecoilRoot>
          <Counter></Counter>
          <Counter></Counter>
        </RecoilRoot>

    </div>
  );
}



```