import React from 'react'
import './headercomp.css'
import rocketPng from '../../assets/launch.png'

export default function HeaderComp() {
    return (
        <div>
            <img src={rocketPng} alt="rocket gif" className='hero-image' />
            <h1 className='hero-title'>Space News</h1>
        </div>
    )
}
