import "./App.css";
import Title from "./Title.jsx";

import ProductTab from "./ProductTab.jsx";
import msgbox from "./msgbox.jsx";

// function Description(){
//   return <h3>this is the description!</h3>
// }

function App() {

  return (
    <>
     
      <msgbox usrname="divyansh" textColor="red" />
       <ProductTab/>
  
    </>

  )
}

export default App
