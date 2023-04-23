import planetImage from '../../assets/planet-spaceship.png'

export function MobileCampainAds() {
    return (
        <div className="flex h-screen w-screen justify-center bg-[url('assets/space-background.png')] bg-cover bg-bottom" id="campainAds">

            <div className="flex gap-10 justify-between w-4/5 max-w-7xl ">
                <div className="flex flex-col basis-1/2 justify-center text-left">
                    <img src={planetImage} alt="Model" />

                </div>
                <div className="flex flex-col basis-1/2 text-right items-end justify-center" >
                    <h1 className="font-bold italic text-5xl mb-2 text-white">Campanhas</h1>
                    <h1 className=" text-5xl mb-12 text-white">ADS</h1>

                    <p className="text-xl font-bold mb-2 text-white leading-5">Meta</p>
                    <p className="text-xl mb-10 text-white leading-5">Facebook e Instagram</p>

                    <p className="text-xl font-bold mb-2 text-white leading-5">Google</p>
                    <p className="text-xl mb-10 text-white leading-5">Pesquisa, Display, Vídeos, Shoppings, Apps e Locais</p>

                    <p className="text-xl font-bold mb-10 text-white leading-5">Tiktok for Business</p>

                    <p className="text-xl font-bold text-white leading-5">LinkedIn</p>


                </div>
            </div>
        </div>
    )
}