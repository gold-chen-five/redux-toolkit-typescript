import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppSelector, useAppDispatch } from '../src/redux/hooks/hooks'
import { increment } from '../src/redux/CountSlice'
function App() {
  const {value} = useAppSelector(state => state.count)
  const dispatch = useAppDispatch()
  return (
    <div>
     <h1>{value}</h1>
     <button onClick={() => dispatch(increment())}>change value</button>
    </div>
  );
}

export default App;
