import Link from 'next/link'
import React from 'react'

const Hero = () => {
    const isUser = true;
    return (
        <div className="flex items-center justify-center min-h-screen flex-col">
            <h1 className="text-6xl font-bold bg-gradient-to-l from-white/30 to-white bg-clip-text text-transparent text-center px-4 max-w-4xl">
                Design from the heart and let your vision inspire the world.
            </h1>
            <p className=" text-xl text-neutral-300 max-w-4xl text-center py-5">
                True creativity comes when you connect deeply with your ideas and pour your passion into every detail. Let your unique perspective guide your designs and make a lasting impact.
            </p>

            <div>
                {isUser ? (
                    <Link
                        href="/dashboard"
                        className="inline-block px-4 py-2 bg-gradient-to-br from-white/30 to-neutral-800 text-white font-semibold rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                    >
                        Go To Dashboard
                    </Link>
                ) : (
                    <Link
                        href="/signIn"
                        className="inline-block px-4 py-2 bg-gradient-to-br from-white/60 to-neutral-800 text-white font-semibold rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                    >
                        Get Started
                    </Link>
                )}
            </div>

        </div>

    )
}

export default Hero