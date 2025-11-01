"use client";

import React from "react";

export const BuildingNotice: React.FC = () => {
    return (
        <section className="w-full bg-yellow-50 text-yellow-900">
            <div className="mx-auto flex min-h-screen max-w-[1440px] items-center justify-center px-6">
                <div className="rounded-lg border border-yellow-300 bg-yellow-100/60 p-8 text-center shadow">
                    <p className="text-2xl font-semibold sm:text-3xl">This site is building</p>
                    <p className="mt-2 text-base opacity-80 sm:text-lg">Some sections may be incomplete. Thanks for your patience!</p>
                </div>
            </div>
        </section>
    );
};


