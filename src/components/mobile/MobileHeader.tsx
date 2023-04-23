import { useState } from "react";
import logo from "../../assets/logo-callidus.png"


export function MobileHeader() {
    return (
        <header className="flex absolute flex-row justify-center px-6 flex-wrap h-20 w-screen items-center z-50 bg-gradient-to-b from-brand-blue" id="mobileTop" >
            <div className="">
                <img src={logo} alt="Callidus" className="w-44" />
            </div>




        </header>
    )
}