import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./createSlice";
import { RootState } from './store';

function Counter() {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            margin: 0
        }}>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default Counter;