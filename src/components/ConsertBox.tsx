import React from 'react'


interface IConcertProps {
    title?: string;
    destriptions?: string;
    date?: string;
    img?: string;
  }

const ConsertBox:React.FC<IConcertProps> = ({title,destriptions,date,img}) => {
  return (
    <div className="concert-box">
        <h2>{title}</h2>
        <p>
        {destriptions}
        </p>
        <img src={img} alt="Konser Afişi 1" />
        <p>{date}</p>
    </div>  
  )
}

export default ConsertBox



