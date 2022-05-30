import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import Student from './Component/Student';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Detail from './Component/Detail';
import AddStudent from './Component/AddStudent';
import Edit from './Component/Edit';
function App() {
 return (

  <Detail>
  
    <div className="App">


<BrowserRouter>

<Navbar />

<Routes>

<Route path='/home' element={<Home />} />
<Route path='/student' element={<Student />} />
<Route path='/contact' element={<Contact />} />
<Route  path='/add-student' element={<AddStudent />}/>
<Route path='/edit' element={<Edit/>} />


</Routes>

</BrowserRouter>


     
    </div>
    </Detail>
  );
 
}

export default App;
