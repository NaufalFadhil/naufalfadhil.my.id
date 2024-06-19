'use client'

import React, { useEffect } from 'react'

export default function Resume() {
    useEffect(() => {
        // window.location.href = './assets/files/Resume - Naufal Fadhil Athallah.pdf'
        window.location.href = 'https://drive.google.com/file/d/1ZH8_J-DpiKzwKYjEShlcl1lC-aJtaK31/view?usp=sharing'
    }, [])

    return <div> Loading Resume... </div>
}
