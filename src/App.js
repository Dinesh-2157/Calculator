import { useState } from 'react';
import './App.css';

function App() {

const[a,setA] = useState();
const[firstValue,setfirstValue] = useState('');
const[operator,setoperator] = useState(null);
const[secondValue,setsecondValue] = useState('');
function display(val) {
  if (operator) {
    let _secondvaule
   if (secondValue == 0) {
    _secondvaule = val
   }
  else{
    _secondvaule = secondValue + val
  }
  setsecondValue(_secondvaule)
  setA(_secondvaule)
} else {
  let _firstvalue
  if (_firstvalue == 0){
    _firstvalue = val
  } else {
    _firstvalue = firstValue + val
  }
  setfirstValue(_firstvalue)
  setA(_firstvalue)
}
}
  function onoperator(val) {
    setoperator(val)
    setA(val)
    
  }

  function oper() {
    if (operator) {
      let _minSecondValue = secondValue * -1
      setsecondValue(_minSecondValue)
      setA(_minSecondValue)
      
    }else{
      let _minFirstValue = firstValue * -1
      setfirstValue(_minFirstValue)
      setA(_minFirstValue)
    }
  }
  function clear(){
    setsecondValue("")
    setfirstValue("")
    setoperator(null)
    setA("")
  }
  function perc() {
    if (operator) {
     let _perSecondValue = secondValue * 0.01 
     setsecondValue(_perSecondValue)
     setA(_perSecondValue)
    }else {
      let _perFirstValue =firstValue * 0.01
      setfirstValue(_perFirstValue)
      setA(_perFirstValue)
    }
  }
  function result() {
    if (operator == "/") {
      setA(parseFloat(firstValue) / parseFloat(secondValue))
    }else if (operator =="*") {
      setA(parseFloat(firstValue) * parseFloat(secondValue))
    }else if (operator == "-") {
      setA(parseFloat(firstValue) - parseFloat(secondValue))
    }else if (operator == "+") {
      setA(parseFloat(firstValue) + parseFloat(secondValue))
    }
    setoperator(null)
    setsecondValue()
    setfirstValue()
  }
  
    
  


 return (
    <div className="App">
      <div className='box'>
        <div className='up'>

          <span>{a}</span>

        </div>
        <div className='down'>

          <div className='one'> 

            <div className='sums'>

            <input className='no' type="button" value="CE" onClick={()=>clear("")}/>
            
            </div>

            <div className='nums'>
              
              <input className='no' type="button" value="7" onClick={()=>display("7")}/>
            
            </div>

            <div className='nums'>

            <input className='no' type="button" value="4" onClick={()=>display ("4")}/>

            </div>

            <div className='nums'>

            <input className='no' type="button" value="1" onClick={()=>display("1")}/>

            </div>

            <div className='nums'>

            <input className='no' type="button" value="0" onClick={()=>display("0")}/>

            </div>

          </div>

          <div className='two'>

            <div className='sums'>

            <input className='no' type="button" value="+/-" onClick={()=>oper("")}/>

            </div>

            <div className='nums'>

            <input className='no' type="button" value="8" onClick={()=>display("8")}/>

            </div>

            <div className='nums'>

            <input className='no' type="button" value="5" onClick={()=>display("5")}/>

            </div>

            <div className='nums'>

            <input className='no' type="button" value="2" onClick={() => display("2")}/>

            </div>

            <div className='nums'>

            <input className='no' type="button" value="." onClick={() => display(".")}/>

            </div>

          </div>

          <div className='three'>

            <div className='sums'>

            <input className='no' type="button" value="%" onClick={() =>  perc ("")}/>

            </div>

            <div className='nums'>

            <input className='no' type="button" value="9" onClick={() => display("9")} />

            </div>

            <div className='nums'>

            <input className='no' type="button" value="6" onClick={() => display("6")}/>

            </div>

            <div className='nums'>

            <input className='no' type="button" value="3" onClick={() => display("3")}/>

            </div>

            <div className='sums'>

            <input className='no' type="button" value="=" onClick={() => result("")}/>

            </div>

          </div>

          <div className='four'>

            <div className='sums'>

            <input className='no' type="button" value="/" onClick={() => onoperator("/")}/>

            </div>

            <div className='sums'>

            <input className='no' type="button" value="*" onClick={() => onoperator("*")}/>

            </div>

            <div className='sums'>

            <input className='no' type="button" value="-" onClick={() => onoperator("-")}/>

            </div>

            <div className='plus'>

            <input className='no' type="button" value="+" onClick={() => onoperator("+")}/>

           </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default App;
