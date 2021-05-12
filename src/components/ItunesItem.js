import React from 'react';


const ItunesItem = ({itune}) => {

    return <li>{itune['im:name'].label}</li>
}




export default ItunesItem;