import iTitulo from './interface';
import './Styles.css';

function Title(props: iTitulo){
    return <div>
        <h1>Hola {props.nombre} {props.apellido}</h1>
        <h2 id='Titulo'>Que celular te interesa adquirir?</h2>
    </div>
}

export default Title;