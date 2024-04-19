import Card from './components/card/Card.jsx'

function App() {
  return (
    <>
    <section> 
      <div className="banner">
        <h1> Product Design </h1> 
        <p> Brand design is the visual and conceptual representation of a company's identity, visualizing its 
          values and personality to the world and relating stakeholders. </p>
      </div>

    </section>

    <section> 
    Featured Alumni & Students
      <div className="cards">
        <Card/>
      </div>  
    </section>
    </>
  )
}

export default App
