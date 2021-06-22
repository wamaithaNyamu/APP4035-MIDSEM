import {useEffect, useState} from "react";



export const  Clock = () => {
    const [staticTime, setStaticTime] = useState(new Date().toUTCString())
    const [interactiveTime, setInteractiveTime] = useState( new Date().toUTCString())

    const cities = [
        {
        city:'Nairobi',
        static: true,
            image:"https://i.ytimg.com/vi/Cgb6bOJ1DLY/maxresdefault.jpg"

        },
        {
            city:'London',
            static: false,
            image:"https://www.royalautomobileclub.co.uk/wp-content/uploads/2021/01/https___www.history.com_.image_MTYyNDg1MjE3MTI1Mjc5Mzk4_topic-london-gettyimages-760251843-promo.jpg"

        },
        {
            city:'Sydney',
            static: true,
            image:"https://lp-cms-production.imgix.net/2019-06/65830387.jpg"

        },
        {
            city:'New York',
            static: false,
            image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg"

        },


    ]

        useEffect(()=>{
            setInterval(() => setInteractiveTime(new Date().toUTCString()) , 1000)

        },[interactiveTime])

    return (
        <div >
                <ul class="cards">
                    {cities.map((x) => (
                        <li>
                        <a href="" className="card">
                            <img src={x.image} className="card__image" alt=""/>
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                        <path/>
                                    </svg>
                                    <img className="card__thumb" src={x.image} alt=""/>
                                    <div className="card__header-text">
                                        <h3 className="card__title">{x.city.toUpperCase()}</h3>
                                        <span className="card__status">{x.static ?
                                            <span style={{color:"red"}}>{staticTime}</span>
                                            :
                                            <span style={{color:"green"}}> {interactiveTime}</span> }

                                        </span>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </li>
                    ))
                    }

                </ul>


        </div>
    );
}



export default Clock;
