import './index.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function CabecalhoADM() {

    const [infos, setInfos] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

        if(!localStorage.getItem('adm-logado')) {
            navigate('/telalogin');
        }
        else {
            a();
        }

    }, []);

    const a = async () => {
        const x = await axios.get(`http://localhost:8080/readToken/${JSON.parse(localStorage.getItem('adm-logado')).token}`);
        setInfos(x.data);
    }

    function sair() {
        localStorage.removeItem('adm-logado');
        navigate('/telalogin');
    }

    return (
        <div className="cabecalhoo">
            <h1>Seja bem-vindo, <span>{infos.nome}</span></h1>
            
            <div className="direitinha">
                <button onClick={sair}>Sair</button>
                <img src="/assets/images/semfoto.png" alt="" />
            </div>
        </div>
    )
}