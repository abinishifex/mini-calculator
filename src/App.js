import './App.css';
import { useState } from 'react';


function App() {
  const [value,setValue] = useState('');

  const addValue = e=> {
    setValue(value + e.target.value)
  };

  const deleteValues = ()=>{
    setValue(prev=>prev.slice(0,-1))
  };

  const clearValue = ()=>{
    setValue('')
  };

  const equal = ()=> { 
    try{
      setValue(String(eval(value)));
    }
    catch{
      setValue("Error");
    }
  };


  return (
    <div className="container">
      <div className='calculator'>
        <form action="">
          <div className='display'>
            <input type='text'value={value} />
          </div>
          <div>
            <input type='button' value="AC" onClick={clearValue}/>
            <input type='button' value="DE" onClick={deleteValues}/>
            <input type='button' value="." onClick={addValue}/>
            <input type='button' value="/" onClick={addValue}/>
          </div>
          <div>
            <input type='button' value="7" onClick={addValue}/>
            <input type='button' value="8" onClick={addValue}/>
            <input type='button' value="9" onClick={addValue}/>
            <input type='button' value="*" onClick={addValue}/>
          </div>
          <div>
            <input type='button' value="4" onClick={addValue}/>
            <input type='button' value="5" onClick={addValue}/>
            <input type='button' value="6" onClick={addValue}/>
            <input type='button' value="+" onClick={addValue} />
          </div>
          <div>
            <input type='button' value="1"onClick={addValue}/>
            <input type='button' value="2" onClick={addValue}/>
            <input type='button' value="3" onClick={addValue}/>
            <input type='button' value="-" onClick={addValue}/>
          </div>
          <div>
            <input type='button' value="00" onClick={addValue}/>
            <input type='button' value="0" onClick={addValue}/>
            <input type='button' value="=" className='equal' onClick={equal}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
