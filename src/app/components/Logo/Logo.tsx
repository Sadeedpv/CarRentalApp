import React from "react";
import carLogo from "../../assets/carLogo.png";

export const Logo = () => {
    return (
        <div className="flex items-center">
            <div className="w-[auto] h-6 md:h-9">
                <img src={carLogo} alt="logo" className="w-[auto] h-[100%]" />
            </div>
            <div className="text-xl md:text-2xl font-bold text-black m-1">Tesla</div>
        </div>
    );
}