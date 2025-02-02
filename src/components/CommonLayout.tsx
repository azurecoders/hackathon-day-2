import React, { ReactNode } from 'react'
import SideBar from './SideBar'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <SideBar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default layout
