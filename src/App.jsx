import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <h1>PokeShop</h1>
        <nav>
          <Link to=".">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart</Link>
        </nav>
      </header>
      <h2>Tired of catching them all by yourself? PokeShop delivers all your pokemon straight to your doorstep!</h2>
    </div>
  )
}

export default App;