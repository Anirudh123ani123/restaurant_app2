import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderImage from './small-image.jpg'
import 'react-lazy-load-image-component/src/effects/blur.css';
import './style.css'
const Card = ({card}) => {
  return (
    <div className='card'>
    <div className='circle'>{card.id}</div>
    <p>{card.category}</p>
    <h4>{card.name}</h4>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus a, qui dolorem accusamus officia?</p>
     <LazyLoadImage src={card.image}
    width='99%' height='55%'
    placeholderSrc={PlaceholderImage}
    alt="Image Alt"
    effect="blur"
/>
    </div>
  )
}

export default Card
// <LazyLoadImage src="images/small-image.jpg" alt=""  loading="lazy" height='70%' width='90%'
//       PlaceholderSrc={card.image} effect="blur"
//      />