import CartWidget from "./CartWidget/CartWidget"

const Navbar =() => {

return(
    <nav>
       <h1 class="title">BazarRosario</h1>

       <div>
    
        <button class="button is-warning is-light">Home</button>
        <button class="button is-warning is-light">Productos</button>
        <button class="button is-warning is-light">Nosotros</button>
        <button class="button is-warning is-light">Contacto</button>
      
       </div>
       <CartWidget />
    </nav>
)
}

export default Navbar