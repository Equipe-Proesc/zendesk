import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.css';
import AgentCard from '../../Components/AgentCard'
import AgentsSkeleton from '../../Components/AgentsSkeleton'
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

export default function Home() {        
    var today = new Date(),
    data = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const [loading, setLoading] = useState(true);

    const [luma, setLuma] = useState('');
    const [lumaPending, setLumaPending] = useState('');

    const [alexandre, setAlexandre] = useState('');
    const [alexandrePending, setAlexandrePending] = useState('');

    const [drianne, setDrianne] = useState('');
    const [driannePending, setDriannePending] = useState('');

    const [uber, setUber] = useState('');
    const [uberPending, setUberPending] = useState('');

    const [aureane, setAureane] = useState('');
    const [aureanePending, setAureanePending] = useState('');

    const [gio, setGio] = useState('');
    const [gioPending, setGioPending] = useState('');

    useEffect(() => {
        async function searchLumaTickets(){
            const response = await api.get(`/tickets/?filter=tags:luma solved:${data}`);
            setLuma(response.data);

            const response2 = await api.get(`/tickets/?filter=tags:luma status:pending`);
            setLumaPending(response2.data);
        }

        async function searchUberTickets(){
            const response = await api.get(`/tickets/?filter=tags:uber solved:${data}`);
            setUber(response.data);

            const response2 = await api.get(`/tickets/?filter=tags:uber status:pending`);
            setUberPending(response2.data);
        }

        async function searchAureaneTickets(){
            const response = await api.get(`/tickets/?filter=tags:aureane solved:${data}`);
            setAureane(response.data);

            const response2 = await api.get(`/tickets/?filter=tags:aureane status:pending`);
            setAureanePending(response2.data);
        }

        async function searchAlexandreTickets(){
            const response = await api.get(`/tickets/?filter=tags:alexandre solved:${data}`);
            setAlexandre(response.data);

            const response2 = await api.get(`/tickets/?filter=tags:alexandre status:pending`);
            setAlexandrePending(response2.data);

        }

        async function searchDrianneTickets(){
            const response = await api.get(`/tickets/?filter=tags:drianne solved:${data}`);
            setDrianne(response.data);

            const response2 = await api.get(`/tickets/?filter=tags:drianne status:pending`);
            setDriannePending(response2.data);

        }

        async function searchGioTickets(){
            const response = await api.get(`/tickets/?filter=tags:giovanna solved:${data}`);
            setGio(response.data);

            const response2 = await api.get(`/tickets/?filter=tags:giovanna status:pending`);
            setGioPending(response2.data);

            setLoading(false);


        }

        searchLumaTickets();
        searchAureaneTickets();
        searchAlexandreTickets();
        searchDrianneTickets();
        searchUberTickets();
        searchGioTickets();

    },[data])

    return (
        <div className="tickets-container">
        <Navbar />
            <header className="tickets-header">
                
                <h1>Tickets do dia</h1>
                <h2>{today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()}</h2>
            </header>
            {loading && <AgentsSkeleton />}
            {!loading && (
                <div className="agents-container">
                    <AgentCard 
                        agent_picture="https://trello-attachments.s3.amazonaws.com/6036bbbae08c87245655c33e/247x256/4295998a229b8199a8e63e3d50d23cba/image.png" 
                        agent="Luma" solved={luma} pending={lumaPending} />
                    <AgentCard 
                        agent_picture="https://trello-attachments.s3.amazonaws.com/604bccc4d51c2b27a69d9cd4/195x197/1af6bb25c8f05b934a163386daabac39/Screenshot_65.png" 
                        agent="Alexandre" solved={alexandre} pending={alexandrePending} />
                    
                    <AgentCard 
                        agent_picture="https://ca.slack-edge.com/T56FFG3EW-UBYHQKYEB-12ea2d4f02bd-512" 
                        agent="Uber" solved={uber} pending={uberPending} />
                    
                    <AgentCard 
                        agent_picture="https://ca.slack-edge.com/T56FFG3EW-U01U6B19UFN-2a39f84e3a7d-512" 
                        agent="Aureane" solved={aureane} pending={aureanePending} />     
                    
                    <AgentCard 
                        agent_picture="https://trello-attachments.s3.amazonaws.com/6036b82d00e3de2b27796ff7/960x1280/3d94b336907be4f26cf5e2dd1ef60791/foto_atualizada.jpeg.jpg" 
                        agent="Drianne" solved={drianne} pending={driannePending} 
                    /> 

                    <AgentCard 
                        agent_picture="https://trello-attachments.s3.amazonaws.com/60353fe15584ee18e0dd08d1/1153x2048/526869e1b4204291de6fe2d3fa9e6c54/EqgilqwXAAMboqL_-_Giovanna_Lourinho.png" 
                        agent="Giovanna" solved={gio} pending={gioPending} 
                    /> 

                </div>
            )}

            <div className="total">
                    <h3>Total N2</h3>
                    <p>{luma+uber+aureane+alexandre+drianne+gio} resolvidos </p>
                    <p>{lumaPending+uberPending+aureanePending+alexandrePending+driannePending+gioPending} pendentes</p> 
            </div>

        </div>
    )
}