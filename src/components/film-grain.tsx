"use client";

import { useEffect, useState } from "react";

export function FilmGrain() {
    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.07]">
            <div className="absolute top-[-100%] left-[-100%] h-[300%] w-[300%] bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png')] bg-[length:256px_256px] animate-grain" />
        </div>
    );
}
