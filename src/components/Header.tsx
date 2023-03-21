import logo from "../assets/callidus-logo.svg"

export function Header() {
    return (
        <header className="h-20 w-screen flex absolute justify-center items-center z-50 border-b-[1px] border-gray-700 bg-black bg-opacity-10" >
            <div className="flex justify-between flex-wrap items-center w-4/5 max-w-7xl md:px-8 ">
                <div className="">
                    <img src={logo} alt="Luccas Lombardi" className="w-48" />
                </div>

                <div className="md:flex hidden">
                    <ul className="px-4 mr-[-12px]">
                        <li className="inline px-4 hover:border-b-2 border-brand-pink py-8 transition-all hover:text-white">Quem Somos</li>
                        <li className="inline px-4 hover:border-b-2 border-brand-pink py-8 transition-all hover:text-white">Serviços</li>
                        <li className="inline px-4 hover:border-b-2 border-brand-pink py-8 transition-all hover:text-white">Experiências</li>
                        <li className="inline p-[13px] ml-2 border-[1px] rounded-xl border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white transition-all">Fale Conosco</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}