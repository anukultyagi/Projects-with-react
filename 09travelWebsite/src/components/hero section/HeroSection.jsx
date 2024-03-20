import React from 'react'
import bgVideoUrl from '../../assets/videos/video-2.mp4'
import Button from '../Button'

const HeroSection = () => {
    return (
        <>
            {/* <div className='hero-section h-screen w-full flex flex-col items-center bg-hero-image bg-center bg-cover bg-no-repeat contain bg-fixed overflow-hidden'> */}
            <div className='relative sm:h-screen h-96'>
                <video className='w-full h-full object-cover' autoPlay loop muted>
                    <source src={bgVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='absolute inset-0 flex flex-col items-center justify-center sm:gap-7 gap-4 text-center mx-3'>
                    <h1 className='md:text-6xl sm:text-4xl text-3xl font-bold text-white'>ADVENTURE AWAITS</h1>
                    <p className='md:text-4xl sm:text-2xl text-xl text-white font-semibold'>What are you waiting for?</p>
                    <div className='flex sm:flex-row flex-col gap-3'>
                        <Button className='sm:text-xl' btnType='primary'>GET STARTED</Button>
                        <Button className='sm:text-xl py-2 flex items-center gap-3' btnType='secondary'>
                            WATCH TRAILER <i className="pi pi-play"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection