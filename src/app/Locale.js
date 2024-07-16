'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Locale() {
    const router = useRouter();
    const { locale } = router;  // Access the locale from the router

    return (
        <div>
            <h1>Current Locale: {locale}</h1>
        </div>
    )
}
