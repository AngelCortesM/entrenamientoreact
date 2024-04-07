import "./styles.css";
import { ListadoAprendices } from "./ListadoAprendices.jsx";

export function App() {
    return (<div>

        <header>
            <h1 className="titulo">Listado de Aprendices</h1>
        </header>
        <main>
            <ListadoAprendices />
        </main>
    </div>

    )
}