import React from 'react';


const ItunesItem = ({itune}) => {

    return <li><h2>{itune['im:name'].label}</h2>{itune['im:artist'].label}{itune.category['im:id']}</li>
}




export default ItunesItem;