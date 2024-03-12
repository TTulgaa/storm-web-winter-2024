import Recapture from "./components/recapture"


function App() {
  const pizzas = [
    {id: 1, name: "Cheese Pizza", price: 10},
    {id: 2, name: "Pepperoni Pizza", price: 12},
    {id: 3, name: "Supreme Pizza", price: 15},
  ]
  

  return (
    <>
      <div>
        <h1 className='text-center text-4xl'>Lesson Day 32</h1>
        {pizzas && pizzas.map((pizza, index) =><Recapture key={index} pizza={pizza}/>)}
      </div>
    </>
  )
}

export default App
