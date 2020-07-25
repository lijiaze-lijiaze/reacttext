import React,{useContext, Component, useState,useEffect }  from 'react';
import {NumberContext} from './context'
//const value = useContext(numberContext);
function ShowAn(){
  //使用Consumer从上下文获取value
//调用useContext，传入从React.createContext获取的上下文对象。
  const value = useContext(NumberContext);
  const [newvalue,setnewvalue] = useState(value)
  useEffect(() => {
    setnewvalue(value+1)
  },[value]);
  //console.log(value)
  return(
    // <numberContext.Consumer>
      // {value=><div>the answer is {value}</div>}
    // </numberContext.Consumer>
    <div>
      the answer is {newvalue}
    </div>

  )
}
export default ShowAn