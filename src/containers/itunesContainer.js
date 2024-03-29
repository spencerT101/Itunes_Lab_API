import React, { useEffect, useState } from 'react';
import ItunesList from "../components/ItunesList";



const ItunesContainer = () =>{
    const [itunes, setItunes] = useState([])



    useEffect(() => {
        getItunes();
    }, [])

    const getItunes = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=40/json')
        .then(res => res.json())
        .then(itunes => setItunes(itunes.feed.entry))
    }

    return(
        <div class = "container">
            <ItunesList itunes={itunes}/>
        </div>
    )

}








export default ItunesContainer;