import modelImage from '../assets/model-1.png'


export function WhoWeAre() {
    return (
        <div className="flex h-screen w-screen justify-center items-center bg-cover py-32">
            <div className="flex w-4/5 max-w-7xl md:px-8">
                <div className="flex flex-col justify-center">
                    <div className="flex basis-1/3 bg-[url('assets/retangle-1.png')] bg-bottom bg-contain bg-no-repeat mt-[-40px]">
                        <img src={modelImage} alt="Model" />
                    </div>
                </div>
                <div className="flex flex-col basis-2/3 text-justify justify-center pl-16" >
                    <h1 className="font-bold text-5xl mb-10 text-white">Quem Somos</h1>
                    <p className="text-base mb-4 text-white leading-5">A Callidus Comunicação nasceu do entusiasmo de seus fundadores em participar de grandes acontecimentos, de comunicar às massas de uma nova maneira, sempre buscando as melhores alternativas para se chegar no público exato com qualidade e encantamento.</p>
                    <p className="text-base mb-4 text-white leading-5">Unimos a palavra em Latim Callidus que significa “astuto”, “sagaz”, “habilidoso” e a palavra Comunicação que vem do Latim Communicare que significa “partilhar”, “conectar”, “tornar comum”.</p>
                    <p className="text-base  text-white leading-5">Desta união criamos a Callidus Comunicação, com o desejo e a vontade de tornar a comunicação de nossos clientes e parceiros extremamente fácil, acessível e (principalmente) marcante, fazendo disso uma prática comum, sempre com muito conhecimento aplicado de forma estratégica a cada projeto, além da vontade de entender e aplicar novas técnicas para a precisa assertividade que todos os projetos exigem.</p>
                </div>
            </div>
        </div>

    )
}