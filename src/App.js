import './App.css';
import Navbar from './component/Navbar';
import ItemListConteiner from './component/ItemListConteiner/ItemListConteiner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faCartShopping}  from '@fortawesome/free-solid-svg-icons';
import "bulma/css/bulma.css"


function App() {
  return (
    <div className="App">
      <Navbar/>
     <FontAwesomeIcon icon={faCartShopping}/>
     <ItemListConteiner greeting={"Bienvenidos"}/>
    </div>
    
  )
}


export default App;
