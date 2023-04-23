import AnchorLink from "react-anchor-link-smooth-scroll"
import logo from "../../assets/callidus-logo.svg"

export function MobileHeader() {
    return (
        <header className="h-20 w-screen flex absolute justify-center items-center z-50 border-b-[1px] border-gray-700 bg-black bg-opacity-10 backdrop-blur-md" id="top" >
            <div className="flex justify-between flex-wrap items-center w-4/5 max-w-7xl md:px-8 ">
                <div className="">
                    <img src={logo} alt="Callidus" className="w-48" />
                </div>

                <div className="md:flex hidden">
                    <ul className="px-4 mr-[-12px]">
                        <li className="inline px-4 hover:border-b-2 border-brand-pink py-8 transition-all hover:text-white"><AnchorLink href="#whoWeAre">Quem Somos</AnchorLink></li>
                        <li className="inline px-4 hover:border-b-2 border-brand-pink py-8 transition-all hover:text-white"><AnchorLink href="#socialMediaStaff">Social Medias</AnchorLink></li>
                        <li className="inline px-4 hover:border-b-2 border-brand-pink py-8 transition-all hover:text-white"><AnchorLink href="#sitesDevelopment">Sites</AnchorLink></li>
                        <li className="inline px-4 hover:border-b-2 border-brand-pink py-8 transition-all hover:text-white"><AnchorLink href="#campainAds">Campanhas</AnchorLink></li>
                        <li className="inline px-4 hover:border-b-2 border-brand-pink py-8 transition-all hover:text-white"><AnchorLink href="#otherServices">Outros Serviços</AnchorLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}