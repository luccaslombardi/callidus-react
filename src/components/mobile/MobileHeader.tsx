import { useState } from "react";
import logo from "../../assets/callidus-logo.svg"

import AnchorLink from "react-anchor-link-smooth-scroll";

export function MobileHeader() {
    return (
        <header className="flex absolute flex-row justify-center px-6 flex-wrap h-20 w-screen items-center z-50 border-b-[1px] border-gray-700 bg-black bg-opacity-10 backdrop-blur-md" id="mobileTop" >
            <div className="">
                <img src={logo} alt="Callidus" className="w-44" />
            </div>




        </header>
    )
}