
import { BsFillCalendar2MonthFill, BsFillCameraFill, BsFillCameraVideoFill, BsFillLaptopFill, BsFillRecordFill, BsFillBrushFill, BsNewspaper } from "react-icons/bs"
import { SiAdobeaftereffects } from "react-icons/si"


export function OtherServices() {
    return (
        <div className="flex h-screen w-screen justify-center bg-brand-darkBlue">
            <div className="flex flex-col gap-10 h-screen items-center justify-center w-4/5 max-w-7xl ">
                <h1 className="text-6xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-brand-pink to-blue-900 mb-10">Outros Serviços</h1>
                <div className="p-2 bg-brand-blue rounded-xl drop-shadow-lg w-4/5">
                    <div className="grid pb-2 grid-flow-col text-center gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent scrollbar-thumb-rounded">

                        <div className="flex items-center justify-center h-44 w-52 flex-col gap-5 hover:bg-brand-darkBlue rounded-lg transition-all">
                            <div className="p-3 rounded-full border-brand-pink border-2 text-brand-pink">
                                <BsFillCameraFill size={25} />
                            </div>
                            <span className="font-semibold">Ensaios Fotográficos</span>
                        </div>

                        <div className="flex items-center justify-center h-44 w-52 flex-col gap-5 hover:bg-brand-darkBlue rounded-lg transition-all">
                            <div className="p-3 rounded-full border-brand-pink border-2 text-brand-pink">
                                <BsFillCameraVideoFill size={25} />
                            </div>
                            <span className="font-semibold">Gravação de Vídeos</span>
                        </div>

                        <div className="flex items-center justify-center h-44 w-52 flex-col gap-5 p-6 hover:bg-brand-darkBlue rounded-lg transition-all">
                            <div className="p-3 rounded-full border-brand-pink border-2 text-brand-pink">
                                <BsFillLaptopFill size={25} />
                            </div>
                            <span className="font-semibold">Edição de Vídeos</span>
                        </div>

                        <div className="flex items-center justify-center h-44 w-52 flex-col gap-5 p-6 hover:bg-brand-darkBlue rounded-lg transition-all">
                            <div className="p-3 rounded-full border-brand-pink border-2 text-brand-pink">
                                <BsFillCalendar2MonthFill size={25} />
                            </div>
                            <span className="font-semibold">Eventos</span>
                        </div>

                        <div className="flex items-center justify-center h-44 w-52 flex-col gap-5 p-6 hover:bg-brand-darkBlue rounded-lg transition-all">
                            <div className="p-3 rounded-full border-brand-pink border-2 text-brand-pink">
                                <BsFillRecordFill size={25} />
                            </div>
                            <span className="font-semibold">Live Streams</span>
                        </div>

                        <div className="flex items-center justify-center h-44 w-52 flex-col gap-5 p-6 hover:bg-brand-darkBlue rounded-lg transition-all">
                            <div className="p-3 rounded-full border-brand-pink border-2 text-brand-pink">
                                <SiAdobeaftereffects size={25} />
                            </div>
                            <span className="font-semibold">VFX - Efeitos Visuais</span>
                        </div>

                        <div className="flex items-center justify-center h-44 w-52 flex-col gap-5 p-6 hover:bg-brand-darkBlue rounded-lg transition-all">
                            <div className="p-3 rounded-full border-brand-pink border-2 text-brand-pink">
                                <BsFillBrushFill size={25} />
                            </div>
                            <span className="font-semibold">Cenários Virtuais</span>
                        </div>

                        <div className="flex items-center justify-center h-44 w-52 flex-col gap-5 p-6 hover:bg-brand-darkBlue rounded-lg transition-all">
                            <div className="p-3 rounded-full border-brand-pink border-2 text-brand-pink">
                                <BsNewspaper size={25} />
                            </div>
                            <span className="font-semibold">Editoriais</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}