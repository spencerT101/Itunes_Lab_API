import React from 'react';
import ItunesItem from "./ItunesItem";



const ItunesList = ({itunes}) => {

    const itunesItems = itunes.map((itune, index) => {
        return <ItunesItem itune={itune} key={index}/>
    })

    return(
        <div>
            <ul>{itunesItems}</ul>
        </div>
    )
}


export default ItunesList;