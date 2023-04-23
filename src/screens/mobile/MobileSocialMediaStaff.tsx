import astroSkate from '../../assets/astro-skate.png'

export function MobileSocialMediaStaff() {
    return (
        <div className="flex h-screen w-screen justify-center items-center bg-cover py-32" id="socialMediaStaff">
            <div className="flex justify-between items-start w-4/5 max-w-7xl md:px-8">
                <div className="flex flex-col basis-1/2 text-justify pt-14" >
                    <h1 className="text-5xl italic mb-2 text-white">Gestão de</h1>
                    <h1 className="font-bold italic text-5xl mb-10 text-white">Redes Sociais</h1>
                    <p className="text-base mb-4 text-white leading-5">As Redes Sociais são uma ótima maneira de atrair e fidelizar clientes! Seja Visto! Não dá para não estar nas Redes Sociais. Presentes no cotidiano de todos, elas são uma excelente ferramenta para atrair, converter e fidelizar um cliente. Mas o gerenciamento das Redes Socias de sua empresa não pode ser feito por qualquer um. É preciso alguém que entenda de suas funcionalidades e como tirar o melhor proveito delas. Uma Agência de Marketing Digital!</p>

                </div>
                <div className="flex flex-col basis-2/5 text-right">
                    <img src={astroSkate} alt="Model" />
                </div>
            </div>
        </div>

    )
}