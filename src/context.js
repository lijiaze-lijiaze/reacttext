import React,{useContext, Component,createContext }  from 'react';
import ShowAn from './App'
//创建context
export const NumberContext = createContext();
//它返回一个具有两个值的对象
//{Provider ， Consumer}
function App(){
    //使用Provider为所有子孙提供value值
    return (
      <NumberContext.Provider value={520}>
          <div>
          <ShowAn />
          </div>
      </NumberContext.Provider>
    )
  }



export default App;