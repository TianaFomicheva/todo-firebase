import React from 'react'


function AppContent({...props}) {
    return (
        <main>
            <div {...props}></div>
        </main>
    )
}

export default AppContent