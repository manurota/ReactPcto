import './App.css'
import Card from './components/Card'
import ferrari from './assets/ferrari.jpg'
import lamborghini from './assets/lamborghini.jpg'
function App(){
  return(
    <>
      
        <Card
        title={"Ferrari"}
        description={"Questa è una ferrari"}
        imgUrl={ferrari}
        ></Card>
        <Card
        title={"Lamborghini"}
        description={"Questa è una lamborghini"}
        imgUrl={lamborghini}
        ></Card>

    
    </>





  )

}


export default App
