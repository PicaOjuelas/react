"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("")


    async function handleLogin() {
        const res = await fetch('/api/login')
    }

    return (
        <div className='flex h-screen items-center justify-center flex-col'>
            <div>
                <Label>Username</Label>
                <Input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    className='text-black'
                />
            </div>
            <div>
                <Label>Password</Label>
                <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className='text-black'
                />
            </div>
            <Button
                onClick={ }
            >Login</Button>
        </div>
    )
}