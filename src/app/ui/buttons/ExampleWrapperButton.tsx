'use client'
import Button from "./Button"


const ExampleWrapperButton = () => {
  function salute() {
    console.log("salute")
  }

  return (
    <Button type="btn-primary" text="home" callback={salute} icon="home"/>
  )
}

 export default ExampleWrapperButton