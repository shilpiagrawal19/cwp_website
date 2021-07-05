import React from 'react'

function Tablist({id,title,img, active, setSelected}) {
    return (
        // <div className="">
            
        <li className={active ? "tablist-active":"tablist"}
        onClick={()=>setSelected(id)}>
        <a>
        <img src={img}/>
        <span>{title}</span></a>
       </li>
        // </div>
    )
}

export default Tablist

