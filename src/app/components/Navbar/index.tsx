import React from "react";
import { Logo } from "../Logo/Logo";
import { Navlist } from "./Navlist";

export const Navbar = () => {
    return (
        <div className="flex flex-row w-full items-center min-h-[62px] max-w-2xl 
        lg:pl-12 lg:pr-12 justify-between">
            <div>
                <Logo />
            </div>
            <Navlist />
        </div>
    );
}