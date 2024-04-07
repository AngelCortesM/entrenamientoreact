import './styles.css';
import img1 from './Img/1.webp';
import img2 from './Img/2.jpeg';
import img3 from './Img/3.jpg';
import img4 from './Img/4.avif';
import img5 from './Img/5.jpg';
import img6 from './Img/6.jpg';
import img7 from './Img/7.jpg';
import img8 from './Img/8.webp';




export function CartaAprendiz({ aprendices }) {

    const { nombre, genero, foto } = aprendices;

    let imagen;
    switch (foto) {
        case '1.webp':
            imagen = img1;
            break;
        case '2.jpeg':
            imagen = img2;
            break;
        case '3.jpg':
            imagen = img3;
            break;
        case '4.avif':
            imagen = img4;
            break;
        case '5.jpg':
            imagen = img5;
            break;
        case '6.jpg':
            imagen = img6;
            break;
        case '7.jpg':
            imagen = img7;
            break;
        case '8.webp':
            imagen = img8;
            break;
        default:
            imagen = img1; // Asignar una imagen predeterminada si la ruta de la imagen no coincide con ninguna de las anteriores
    }


    return (<li className="carta">
        <div>{nombre}</div>
        <div className='genero'>{genero}</div>
        <img
            width={200}
            height={250}
            className="estiloimagen"
            src={imagen}
            alt="Aprendiz tal"

        />


    </li>

    );
}