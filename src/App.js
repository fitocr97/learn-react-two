//antomia de un componente basado en clases en react
import { Component } from "react";
/*
/* anatomia de un compnente basado en clases
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
*/
class Button extends Component{ //componente button
  
  state = {}
  constructor(props) { //primero que se ejecuta 
    super(props) //super para que use component, componente padre
    console.log('constructor button')
  }

  componentDidMount(){ //actualizar el estado luego de 
    console.log('componentDidMount') 
  }

  componentDidUpdate(prevProps, prevState){ //recibe propiedaddes anterior y stado anterior
    console.log('componentDidUpdate', prevProps, prevState)
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  render(){
    return(
      <button>
        button
      </button>
    )
  }
}


class App extends Component{ 
  state = {valor:3}
  render(){ 
    console.log(this.state)
    return(
      <div>
        <p>Hola</p>
        {this.state.valor === 3 ? <Button></Button> : null}
        <button 
        className={`${this.state.valor}`} //se puede valor como atributo
        onClick={ ()=> this.setState({valor: 2})}>Enviar</button>
      </div>
    )
  }
}

export default App;
