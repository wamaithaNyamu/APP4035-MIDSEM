import {useEffect, useState} from "react";
import ClockComponent from "./ClockComponent";


export const  Clock = () => {

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

    return (
        <div >
                <ul class="cards">
                    {cities.map((city) => (
                        <ClockComponent city={city}/>
                    ))
                    }

                </ul>


        </div>
    );
}



export default Clock;
