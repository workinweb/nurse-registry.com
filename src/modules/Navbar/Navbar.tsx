"use client";

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IoHome } from "react-icons/io5";
import {
    MdConnectWithoutContact,
    MdOutlineMedicalInformation,
    MdOutlineMedicalServices,
} from "react-icons/md";

export function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { icon: <IoHome />, label: "Home", href: "/" },

        {
            icon: <MdOutlineMedicalServices />,
            label: "Homemaker & Companion ",
            href: "https://www.evanhomecare.com/",
            target: "_blank",
            rel: "noopener noreferrer",
        },
    ];

    return (
        <Navbar
            height="4.5rem"
            position="static"
            className="py-2 shadow-[0_2px_6px_-2px_rgba(0,0,0,0.05),0_-2px_6px_-2px_rgba(0,0,0,0.05)]"
            classNames={{
                wrapper: "max-w-[1440px] px-10",
                base: "bg-white/70 backdrop-blur-md",
            }}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="hidden gap-8 sm:flex" justify="start">
                <NavbarItem>
                    <Link
                        className={`text-lg font-medium text-primary transition hover:text-gray-400`}
                        href="/"
                    >
                        Home
                    </Link>
                </NavbarItem>

                <Dropdown>
                    <DropdownTrigger>
                        <li>
                            <button className="text-lg  font-medium text-primary transition hover:text-gray-400">
                                Services
                            </button>
                        </li>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="services" className="mt-1">
                            <Link
                                className="transition hover:text-gray-400"
                                href="https://www.evanhomecare.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="font-bold text-primary">
                                    Evan Home Care
                                </p>
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="start">
                <div className="flex w-full items-center justify-between ">
                    <NavbarItem>
                        <Image
                            width={1024}
                            height={1024}
                            src={"/logo2.webp"}
                            quality={100}
                            alt="Evan Home Care Logo"
                            className=" h-20 w-20 object-contain"
                        />
                    </NavbarItem>

                    <NavbarItem>
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="h-8 w-8"
                        />
                    </NavbarItem>
                </div>
            </NavbarContent>

            <NavbarMenu className="flex w-full flex-col gap-8 pt-8">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            className={`w-full text-2xl font-bold transition hover:text-gray-400`}
                            href={item.href}
                            onClick={() => {
                                setIsMenuOpen(false);
                            }}
                        >
                            <div className="flex items-center gap-3">
                                {item.icon}
                                <span> {item.label}</span>
                            </div>
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
