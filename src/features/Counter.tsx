import { useAppSelector, useAppDispatch } from "./hooks";
import { increment, decrement } from "./counterSlice";
import styles from './Counter.module.css';

export function Counter(){
    const count = useAppSelector((state)=> state.counter.value)
    const dispatch = useAppDispatch()

    return(
        <div>
            <div>
                <button aria-label="Increment Value" onClick={()=> dispatch(increment())}>INCREMENT</button>
            </div>
            <span>{count}</span>
            <button aria-label="Decrement Value" onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}