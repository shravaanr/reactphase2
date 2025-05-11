import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import button from './Button.module.css'
function App() {
// let template='';
// let[pshow,setpshow]=useState(false)

// if(pshow){
// template=
// <Card/>

// }
// else{
//   template='';
// }





//   let [count,setCount]=useState(1)
//   // let a=10;
//   let alert1=()=>{
//     // alert("this is valid")
//     // a=a+1
//     // console.log(a);
//     setCount(count+1)
//   }

// let alert2=(a,b)=>{
// console.log(a+b);

// }
//   return (
//     < div className="App">
//       <button>show</button>
//      {template}
// {/* {a} */}
// {count}
//       <button className='bg-red-500 p-[10px]
//       mr-4 'onClick={()=>alert2(25,45)}>CHECK</button>



//       <button className='bg-red-500 p-[10px] 'onClick={alert1}>CHECK</button>
//       <Header/>
//      <h1 className='text-[40px] text-black font-bold'>Hello world</h1>
//     </div>
//   );



let[status,setstatus]=useState(false);
  return(
    <div>
  <button className={button.error}>Error</button>

      <button onClick={()=>setstatus(!status)}>{(status )? 'Hide' : 'Show'}</button>
    
    {(status) ?  <p className='bg-red-600 m-10 p-4'>hello wrold</p> : '' }



</div>)
}

export default App;


// let Card=()=>{
//   return(
//     <h1> Welcome to WS</h1>
//   )
// }