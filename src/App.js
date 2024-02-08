//antomia de un componente basado en clases en react
import { Component } from "react";

class App extends Component{ //app extiende clase incluida en react  
  render(){ //render retornar siempre va estar cuando cree un componente
    return(
      <div>
        <p>Hola</p>
        <button onClick={ ()=> console.log('click')}>Enviar</button>
      </div>
    )
  }
}


export default App;
