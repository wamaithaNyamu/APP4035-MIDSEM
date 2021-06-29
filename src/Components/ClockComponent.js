import {useEffect, useState} from "react";



export const  Clock = ({city}) => {
    const [staticTime, setStaticTime] = useState(new Date().toUTCString())
    const [interactiveTime, setInteractiveTime] = useState( new Date().toUTCString())


    useEffect(()=>{
        setInterval(() => setInteractiveTime(new Date().toUTCString()) , 1000)

    },[interactiveTime])

    return (
                    <li>
                        <a href="" className="card">
                            <img src={city.image} className="card__image" alt=""/>
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                        <path/>
                                    </svg>
                                    <img className="card__thumb" src={city.image} alt=""/>
                                    <div className="card__header-text">
                                        <h3 className="card__title">{city.city.toUpperCase()}</h3>
                                        <span className="card__status">{city.static ?
                                            <span style={{color:"red"}}>{staticTime}</span>
                                            :
                                            <span style={{color:"green"}}> {interactiveTime}</span> }

                                        </span>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </li>




    );
}



export default Clock;
