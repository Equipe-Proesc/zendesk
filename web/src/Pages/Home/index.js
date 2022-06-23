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

    const [fefs, setFefs] = useState('');
    const [fefsPending, setFefsPending] = useState('');

    const [aline, setAline] = useState('');
    const [alinePending, setAlinePending] = useState('');
    
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

        async function searchFefsTickets(){
            const response = await api.get(`/tickets/?filter=tags:fernanda solved:${data}`);
            setFefs(response.data);

            const response2 = await api.get(`/tickets/?filter=tags:fernanda status:pending`);
            setFefsPending(response2.data);

        }

        async function searchAlineTickets(){
            const response = await api.get(`/tickets/?filter=tags:aline solved:${data}`);
            setAline(response.data);

            const response2 = await api.get(`/tickets/?filter=tags:aline status:pending`);
            setAlinePending(response2.data);

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
        searchFefsTickets();
        searchGioTickets();
        searchAlineTickets();

    },[data])

    return (
        <div className="tickets-container">
            <div className="header-container">
                <Navbar />
                <header className="tickets-header">
                    <h1>Tickets do dia</h1>
                    <h2>{today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()}</h2>
                </header>
            </div>
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
                        agent_picture="https://ca.slack-edge.com/T56FFG3EW-U01U6B19UFN-2a39f84e3a7d-512" 
                        agent="Aureane" solved={aureane} pending={aureanePending} />     
                    
                    <AgentCard 
                        agent_picture="https://ca.slack-edge.com/T56FFG3EW-UP5CU0H2A-e6f18a163b72-512" 
                        agent="Fefs" solved={fefs} pending={fefsPending} 
                    /> 

                    <AgentCard 
                        agent_picture="https://trello-attachments.s3.amazonaws.com/60353fe15584ee18e0dd08d1/1153x2048/526869e1b4204291de6fe2d3fa9e6c54/EqgilqwXAAMboqL_-_Giovanna_Lourinho.png" 
                        agent="Giovanna" solved={gio} pending={gioPending} 
                    /> 

                    <AgentCard 
                        agent_picture="https://ca.slack-edge.com/T56FFG3EW-U02HRQE5873-ef7f019b19f4-512" 
                        agent="Aline" solved={aline} pending={alinePending} 
                    /> 

                </div>
            )}

            <div className="total">
                    <h3>Total N2</h3>
                    <p>{luma+aureane+alexandre+fefs+gio+aline} resolvidos </p>
                    <p>{lumaPending+aureanePending+alexandrePending+fefsPending+gioPending+ alinePending} pendentes</p> 
            </div>

        </div>
    )
}
