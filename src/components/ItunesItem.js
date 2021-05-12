import React from 'react';


const ItunesItem = ({itune}) => {

    return <li><h2>{itune['im:name'].label}</h2><p>{itune['im:artist'].label}</p><br></br>
    {itune.category.attributes.['im:id']}</li>
}




export default ItunesItem;