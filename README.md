What is Hooks and useState of Hooks


--In React, Hooks are functions that let you use state and other React features in functional components, which previously were only available in class components

-- useState is a built-in Hook in React.
-- use to manipulate the data


-- when make you changes in the varialbe like adding anything and it should be visible to the component again we use stateManagement 
--when you make changes dynamically in the state ,it make your component updates
accordingly

-- [count,setcount]=UseState()

- where useState is immutable
-- to chnage this we use setcount functin
-- and count is the name of the state



const [count,setcount]=useState(1)

  return (
    < div className="App">
      <div className='bg-black'>
      <h1 className='text-white'>Count :{count}</h1>
<button onClick={()=>setcount(count+1)} className='text-white' >
  Increment 
</button>
<button onClick={()=>setcount(count-1)} className='mr-[100px] bg-red-600 px-5' >
  decrement 
</button> 
    </div>
    </div>


-- Using if else 

not widely used 

let[pshow,setpshow]=useState(false)

if(pshow){
template=
<Card/>

}
else{
  template='';
}


let Card=()=>{
  return(
    <h1> Welcome to WS</h1>
  )
}


--- terneray operator 

- using the logic inside the html tag



let[status,setstatus]=useState(false);
  return(
    <div>

      <button onClick={()=>setstatus(!status)}>{(status )? 'Hide' : 'Show'}</button>
    
    {(status) ?  <p className='bg-red-600 m-10 p-4'>hello wrold</p> : '' }



</div>)



-- Module Style for a component 


create a file Button.module.css

.error{
    color: red;
}
.warning{
    color:yellow;
}

then import in app

import button from './Button.module.css'

<button className={button.error}>Error</button>