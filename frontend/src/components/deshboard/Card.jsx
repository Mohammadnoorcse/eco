import React from 'react'

export default function Card({value}) {
  return (
    <div className='deshboard-card' style={{background:value.color}}>
        <div className="deshboard-card-1">
            <span><img src={value.icon} alt="" /></span>
            <span>{value.name}</span>
        </div>
        <div className="deshboard-card-2">
            <span>{value.total}</span>
        </div>
    </div>
  )
}
