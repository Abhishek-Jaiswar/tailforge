'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

interface DropdownT {
    name: string;
    items: string[];
    width?: string;
}

const Dropdown = ({ name, items, width }: DropdownT) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [selectedItem, setSelectedItem] = useState<string>(name);

    const handleDropdown = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className=' relative' ref={dropdownRef}>
            <div className=''>
        <Button onClick={handleDropdown} className={`px-4 py-2 w-30 border border-neutral-500 text-white flex items-center justify-between cursor-pointer ${width}`}>
                    {selectedItem}
                    <ChevronDown className={`transition-all duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} />

                </Button>
            </div>

            <div className={`w-30 rounded-lg absolute top-12 bg-neutral-800 flex items-center justify-center flex-col p-2 transition-all duration-200 ease-out ${isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"} ${width}` }>
                {items.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => {setIsOpen(false); setSelectedItem(item)}}
                        className={' w-full py-1.5 px-3 bg-neutral-800/30 text-neutral-400 border-t  border-neutral-700 last:border-b cursor-pointer hover:text-neutral-50'}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Dropdown