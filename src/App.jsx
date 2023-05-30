import NavBar  from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

function App() {


  return (
    <div>
        <NavBar/>
        <ItemListContainer greeting="¡Bienvenido a chrono-Store!"/>
    </div>
  )
}

export default App
