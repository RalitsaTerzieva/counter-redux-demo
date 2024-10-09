import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./createSlice";
import { RootState } from './store';

function Counter() {
    const count = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default Counter;