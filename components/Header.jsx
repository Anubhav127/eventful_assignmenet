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
    <header className='fixed top-0 w-full border-b border-neutral-800 bg-black/80 backdrop-blur-sm z-50'>
        <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
            <Link href="/" className="flex items-center space-x-2">
                <div className="flex items-center">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-1.5 rounded-md mr-2">
                        <Music className='h-5 w-5 text-white'/>
                    </div>
                    <span className="text-xl font-bold text-white">
                        Artistly
                    </span>
                </div>
            </Link>

            <div className='hidden md:flex items-center space-x-6'>
            {navLink.map((link) => (
                <Link 
                    key={link.href} 
                    href={link.href} 
                    className={`text-sm font-medium transition-colors hover:text-purple-400 ${pathname===link.href ? 'text-white' : 'text-neutral-400'}`}
                >
                    {link.label}
                </Link>
            ))}
            </div>

            { auth ? (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full border border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800">
                        <User2 className="h-5 w-5 text-neutral-300" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-neutral-900 border-neutral-800 text-white">
                    {account==="admin" && (
                    <DropdownMenuItem asChild className="hover:bg-neutral-800 cursor-pointer">
                        <Link href='/dashboard'>Dashboard</Link>    
                    </DropdownMenuItem>
                    )}
                    <DropdownMenuItem asChild className="hover:bg-neutral-800 cursor-pointer">
                        <Link href="/logout" >LogOut</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            ) : (
                <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="hidden sm:inline-flex border-neutral-700 hover:bg-neutral-800 hover:text-white">
                    Sign In
                </Button>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                    Get Started
                </Button>
            </div>
            )}
        </nav>
    </header>
)
}

export default Header;