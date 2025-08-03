"use client"

import { useEffect, useState } from 'react';

export default function ClientContent() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/python-message`)
            .then((res) => res.json())
            .then((data) => {
                setMessage(data.message);
            })
            .catch((err) => {
                console.error('Error fetching:', err);
                setMessage('خطا در دریافت پیام');
            });
    }, []);

    return (
        <div>
            <h1>پیام از Laravel API:</h1>
            <p>{message || 'در حال دریافت...'}</p>
        </div>
    );
}
