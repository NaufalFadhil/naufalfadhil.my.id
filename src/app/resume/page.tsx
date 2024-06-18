'use client'

import React, { useEffect } from 'react'

export default function Resume() {
    useEffect(() => {
        window.location.href = './assets/files/Resume - Naufal Fadhil Athallah.pdf'
    }, [])

    return <div> Loading Resume... </div>
}
