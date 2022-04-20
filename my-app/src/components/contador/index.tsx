import React from "react";
const { Component } = { ...React };

type myProps = { title: string, precio: number };
type myState = { contador: number };

class Contador extends Component<myProps, myState> {
    constructor(props: myProps) {
        super(props);
        this.state = { contador: 0 };
        this.changeContador = this.changeContador.bind(this);
    }

    functionName<Type>(args: Type): void {
        console.log(`arg ${args}`);
    }

    changeContador() {
        console.log('Estoy entrando');
        this.setState({ contador: this.state.contador + 1 });
    }

    render() {
        const { title = '' } = { ...this.props };
        const { precio = 0 } = { ...this.props };
        const { contador = 0 } = { ...this.state };

        return <div>
            <h1>El precio de el {title} es de {precio}.</h1>
            <h1>{contador}</h1>
            <button className="Boton" onClick={this.changeContador}><span>Agregar al Carrito</span></button>
        </div>
    }
}

export default Contador;