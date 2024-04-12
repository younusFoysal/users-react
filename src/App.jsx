
import './App.css'
import Counter from "./Counter.jsx";
import Users from "./Users.jsx";
import './User.css';

function App() {

    function handleClick(){
        alert('button clicked');
    }
    const handleClick2 = () => {
        alert('button2 clicked')
    }

    const handleClick3 = (pp) => {
        alert('button3 clicked', pp)
    }


  return (
      <>
          <h3>Vite + React</h3>
          <Users></Users>
          <Counter></Counter>
          {/*<button onClick={handleClick}>Click Me</button>*/}
          {/*<button onClick={handleClick2}>Click2 Me</button>*/}

          <button onClick={() => handleClick3('ll')}>Click3 Me</button>

      </>
  )
}

export default App
