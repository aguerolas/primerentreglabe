import React from 'react'

const Card = ({randomUser, randomColor,clickButton}) => {
    console.log(randomColor)
    console.log(randomUser)
    const styleButton = {
        backgroundcolor: randomColor
    }
   
  return (
    <article className='card' style= {{color:randomColor}}>
        <p> {randomUser.quote} </p>
        <h4> {randomUser.author} </h4>
        <button style={styleButton} className='card-btn' onClick={clickButton}>&#62;</button>
    </article>
  )
}

export default Card