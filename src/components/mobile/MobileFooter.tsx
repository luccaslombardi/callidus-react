import { BiUpArrow } from "react-icons/bi";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import AnchorLink from 'react-anchor-link-smooth-scroll'


export function MobileFooter() {
    return (
        <footer className="flex w-screen h-28 bg-brand-pink items-center justify-center">
            <div className="flex justify-between w-full md:w-3/5 max-w-6xl px-8">
                <div className="flex justify-between gap-3">

                    <a href='https://www.instagram.com/calliduscomunicacao/' target="blank" title='Instagram'>
                        <div className="p-2 md:p-3 text-xl md:text-2xl  text-white bg-brand-blue bg-opacity-20 rounded-md hover:bg-opacity-40  hover:text-white transition-all duration-200">
                            <BsInstagram />
                        </div>
                    </a>

                    <a href='https://www.facebook.com/calliduscomunicacao/' target="blank" title='Facebook'>
                        <div className="p-2 md:p-3 text-xl md:text-2xl  text-white bg-brand-blue bg-opacity-20 rounded-md hover:bg-opacity-40  hover:text-white transition-all duration-200">
                            <BsFacebook />
                        </div>
                    </a>

                </div>
                <div className="flex w-auto items-center font-light text-white text-xs md:text-sm">
                    <span className="inline-block text-center align-text-middle">
                        <span className="pr-1">Desenvolvido por Callidus Comunicações</span>

                    </span>
                </div>
                <AnchorLink href="#mobileTop">
                    <div className="text-xl md:text-2xl text-white p-2 md:p-3 bg-brand-blue bg-opacity-20 rounded-md hover:bg-opacity-40 hover:text-white transition-all duration-200">
                        <BiUpArrow />
                    </div>
                </AnchorLink>
            </div>
        </footer>
    )
}