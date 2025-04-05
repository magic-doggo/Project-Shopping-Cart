import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Main Page of the app</h1>
      <ul>
        <li>
          <Link to="Home"></Link>
          <Link to="Shop"></Link>
          <Link to="Cart"></Link>
        </li>
      </ul>
    </div>
  )
}

export default App;