import astroSkate from '../../assets/astro-skate.png'

export function MobileSocialMediaStaff() {
    return (
        <div className="flex gap-4 flex-col px-10 py-12 md:py-24 md:px-20 w-screen justify-center text-center" id="MobileSocialMediaStaff">
            <h1 className="text-4xl italic text-white">Gestão de</h1>
            <h1 className="font-bold italic text-4xl mb-10 text-white">Redes Sociais</h1>
            <div className='text-justify'>
                <p className="text-base mb-4 text-white leading-5">As Redes Sociais são uma ótima maneira de atrair e fidelizar clientes! Seja Visto! Não dá para não estar nas Redes Sociais. Presentes no cotidiano de todos, elas são uma excelente ferramenta para atrair, converter e fidelizar um cliente. Mas o gerenciamento das Redes Socias de sua empresa não pode ser feito por qualquer um. É preciso alguém que entenda de suas funcionalidades e como tirar o melhor proveito delas. Uma Agência de Marketing Digital!</p>

            </div>
            <div className="flex pt-20 mx-8 basis-1/3 mt-[-40px] md:px-32">
                <img src={astroSkate} alt="Skate" />
            </div>
        </div>

    )
}