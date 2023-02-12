import React from 'react'
import {Card, CardHeader, CardMain} from '../components/Card'

const NotFound = () => {
    return (
        <>
            <Card className='mt-4'>
                <CardHeader className='space-x-1.5'>
                    <span className="text-cyan-500">Error</span>
                    <span className="text-yellow-500">!</span>
                    <span className="text-red-500">404</span>
                </CardHeader>
                <CardMain>
                    ❌ The page you are looking for could not be found. back to homepage
                </CardMain>
            </Card>
        </>
    )
}

export default NotFound