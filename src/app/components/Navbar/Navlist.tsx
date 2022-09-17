import React from "react";

const style = `
text-sm
md:text-base
text-black
font-medium
mr-1
md:mr-5
cursor-pointer
transition
duration-300
ease-in-out
hover:text-gray-700
text-sm
md:text-base
text-black
font-medium
mr-1
md:mr-5
cursor-pointer
transition
duration-300
ease-in-out
hover:text-gray-700
text-sm
md:text-base
text-black
font-medium
mr-1
md:mr-5
cursor-pointer
transition
duration-300
ease-in-out
hover:text-gray-700`

export const Navlist = () => {
    return (
        <div className="flex flex-row list-none">
            <div className={style}>Home</div>
            <div className={style}>About</div>
            <div className={style}>Contact</div>
        </div>
    );
};
