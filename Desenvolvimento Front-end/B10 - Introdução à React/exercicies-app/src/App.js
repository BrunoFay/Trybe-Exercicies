
import './App.css';
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const mcs = ['djonga','mvbill','neto(sintese)','tyler the creator']
function App() {
  return (
    //1 e 2
    <>
        <p>
          {Task('djonga')}
         </p> 
      
    <ul>
    {mcs.map((mc)=>Task(mc))}
    </ul>
    </>
  );
}

export default App;
