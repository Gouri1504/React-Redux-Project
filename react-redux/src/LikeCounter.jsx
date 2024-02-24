import  {createStore } from 'redux'
import  reducer  from './Redux/Reducer' 
import { decrementNumber, incrementNumber } from './Redux/Action'
import { useState } from 'react'
const store = createStore (reducer)

export default function LikeCounter(){
    const[state,setState]=useState(0)
    store.subscribe(()=>setState(store.getState().count))

   return(
    <>
    <div>
        {state}<br></br>
    <button onClick={()=>{store.dispatch(incrementNumber())}}>Like</button>
    <button onClick={()=>{store.dispatch(decrementNumber())}}>Unlike</button>
    </div>
    </>
    
   ) 
}