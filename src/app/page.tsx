"use client";
import Image from "next/image";
import { FloatingButton } from "~/modules/FloatingButton/FloatingButton";
import { Footer } from "~/modules/Footer/Footer";
import { CustomNavbar } from "~/modules/Navbar/Navbar";
import { BuildingNotice } from "~/components/BuildingNotice/BuildingNotice";

export default function Homemaker() {
    return (
        <>
            <main className="pb-5">
                <div className="hidden sm:block">
                    <div className="mx-auto mb-5 flex max-w-[1440px] items-center justify-between px-10">
                        <div className="mt-2 flex flex-col items-center">
                            <Image
                                width={260}
                                height={260}
                                src="/logo2.webp"
                                alt="Evan Home Care Logo"
                                className="h-48 w-48 object-contain sm:h-48 sm:w-48"
                            />
                        </div>
                    </div>
                </div>

                <CustomNavbar />

                <BuildingNotice />

                <div className="mt-10 flex w-full flex-col items-center">
                    <FloatingButton />
                </div>
            </main>

            <Footer />
        </>
    );
}
