import React from 'react'

export const GifItem = ({url,title}) => {
  return (
    <div className='card'>
      <img className='card__image' src={url} alt={title}/>
      <p className='card__title'>{title}</p>
    </div>
  )
}
