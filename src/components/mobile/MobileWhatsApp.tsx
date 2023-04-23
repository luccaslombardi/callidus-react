import { BsWhatsapp } from "react-icons/bs";

export function MobileWhatsApp() {
    return (
        <a href="https://wa.me/5511941093617?text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+entrar+em+contato%21" target="_blank" className="fixed bottom-5 right-4 md:bottom-8 md:right-8 flex flex-col items-end p-3 bg-green-600 hover:bg-green-500 transition-shadow text-white rounded-2xl drop-shadow-lg z-50">
            <BsWhatsapp size={30} />
        </a>
    )
}