import React from 'react';
import './style.css'


function AgentCardResults (props){
    return (
        <div className="agent-card-results">
                <div className="profile">
                    <img src={props.agent_picture} alt={props.agent} />
                    <h1 className={props.color}>{props.agent}</h1>
                </div>
                <p className="question">{props.question}</p>
                <p className="task">{props.task}</p>
                <p className="problem">{props.problem}</p>
                <p className="total">{props.total}</p>
                <p className="number">{props.chat?props.count_chats:'-'}</p>
                <p className="number">{props.chat?`${props.satisfaction}%`:'-'}</p>
        </div>
    );
}

export default AgentCardResults;