
import axios from 'axios';
import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

 const ItemCard = ({ nome, status, localizacao, comodos, vagas, capa, id }) => {


    const [img, setImg] = useState('');

    async function findCapa() {
        const x = await axios.get(`http://localhost:8080/img/${capa}`);
        setImg(x.data.url);
        console.log(x);
    }

    useEffect(() => {
        findCapa();
    }, []);



    return(
        <div className="cardImovel">
            <img className='intro' src={`${img}`} alt="predios" />
        <h1 id='titulo'>{nome}</h1>

        <div className="info1">
            <h1>{status}</h1>
            <p>Residencial</p>
        </div>

        <div className="localizacao">
            <img className='iconLo' src="/assets/images/loca.png" alt="localizão" />
            <p>{localizacao}</p>
        </div>

        <h1 id='cinza'>{comodos} comodos</h1>

        <div className="infoFinais">
           <div className="vg">
                <img src="/assets/images/carrin.png" alt="carro" />
                <p>{vagas} vagas </p>
           </div>
            <Link to={`/imovel/${id}`}>Saiba mais</Link>
        </div>
      </div>
    )
}

export default ItemCard;