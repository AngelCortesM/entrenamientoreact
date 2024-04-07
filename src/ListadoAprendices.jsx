import Aprendices from "./aprendices.json"
import "./stylescarta.css";
import { CartaAprendiz } from "./CartaAprendiz"
export function ListadoAprendices() {
    return (<ul className="estilodetodaslascartas">
        {Aprendices.map((aprendices) => (
            <CartaAprendiz aprendices={aprendices} />
        ))}
    </ul>)
}