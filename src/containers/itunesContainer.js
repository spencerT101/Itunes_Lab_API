import React, { useEffect, useState } from 'react';



const ItunesContainer = () =>{
    const [itunes, setItunes] = useState([])



    useEffect(() => {
        getItunes();
    }, [])

    const getItunes = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(itunes => setItunes(itunes))
    }

    return(
        <div class = "container">
            <ItunesList itunes={itunes}/>
        </div>
    )

}








export default ItunesContainer;