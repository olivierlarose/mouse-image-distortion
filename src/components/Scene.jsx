'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Model'

export default function Scene({activeMenu}) {
  return (
    <div className='fixed top-0 h-screen w-full'>
        <Canvas>
            <Model activeMenu={activeMenu}/>
        </Canvas>
    </div>
  )
}
