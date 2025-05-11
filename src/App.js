import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  let alert1=()=>{
    alert("this is valid")
  }

let alert2=(a,b)=>{
console.log(a+b);

}
  return (
    < div className="App">

      <button className='bg-red-500 p-[10px]
      mr-4 'onClick={()=>alert2(25,45)}>CHECK</button>



      <button className='bg-red-500 p-[10px] 'onClick={alert1}>CHECK</button>
      <Header/>
     <h1 className='text-[40px] text-black font-bold'>Hello world</h1>
    </div>
  );
}

export default App;
