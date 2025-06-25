"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import { Music, User2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const Header = () => {

const pathname = usePathname();
const [auth, setAuth] = useState(true);
const [account, setAccount] = useState("admin")

const navLink = [
    { href: '/', label: 'Home'},
    { href: '/artists', label: 'Browse Artists' },
    { href: '/onboard', label: 'Join as Artist' }
];

return (
    <header className='fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
            <Link href="/" className="flex items-center space-x-2">
                <div className="flex">
                    <Music className='h-8 w-auto px-2 py-1 text-white'/>
                    <span className="text-xl font-bold bg-clip-text text-transparent text-white">
                            Artsitly
                    </span>
                </div>
            </Link>

            <div className='flex items-center space-x-2 md:space-x-4'>
            {navLink.map((link) => (
                <Link key={link.href} href={link.href} className={`text-md text-white text-bold ${pathname===link.href ? 'border-b-2 border-primary' : 'text-muted-foreground'}`}>
                    {link.label}
                </Link>
            ))}
            </div>

            { auth ? (
            <DropdownMenu className='bg-white-100'>
                <DropdownMenuTrigger asChild>
                    <div className='flex items-center justify-center h-10 w-10 rounded-full bg-white-100 border-1'>
                        <User2 />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                    {account==="admin" && (
                    <DropdownMenuItem asChild>
                        <Link href='/dashboard'>Dashboard</Link>    
                    </DropdownMenuItem>
                    )}
                    <DropdownMenuItem asChild>
                        <Link href="/logout" >LogOut</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            ) : (
                <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                    Sign In
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Get Started
                </Button>
            </div>
            )}
        </nav>
    </header>
)
}

export default Header;