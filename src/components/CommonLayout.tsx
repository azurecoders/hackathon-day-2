import React, { ReactNode } from 'react'
import JobNavBar from './JobNavBar'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <JobNavBar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default layout
