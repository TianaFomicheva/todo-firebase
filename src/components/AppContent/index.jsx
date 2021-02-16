import React from 'react'


function AppContent({...props}) {
    return (
        <main id="app-content">
            <div {...props}></div>
        </main>
    )
}

export default AppContent