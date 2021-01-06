import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App container">
      <div className = "row">
        <div className="holder col-6">
          <div className = "wrapper">
            <p>Counter {counter}</p>
            <button onClick = {() => dispatch(increment())}>+</button>
            <button onClick = {() => dispatch(decrement())}>-</button>     
            {isLogged ? <h3>Valuable information I shouldn't see</h3> : ''}
          </div>        
        </div>          
      </div>       
    </div>
  );
}

export default App;
