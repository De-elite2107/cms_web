import React from 'react'
// import ABanner from './components/ABanner'
import Vision from './components/Vision'
import ABanner from '../components/ABanner'


export default function page() {
    return (
        <>
            <main className=''>
                <ABanner caption='ABOUT US'/>
                <Vision />
            </main>
        </>
    )
}
