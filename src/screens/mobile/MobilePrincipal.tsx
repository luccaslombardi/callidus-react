
export function MobilePrincipal() {
    return (
        <div className="flex flex-col px-2 h-screen w-screen justify-center bg-[url('assets/fullbanner-principal.png')] bg-cover bg-bottom">

            <div className="flex h-20" />

            <div className="flex gap-6 flex-1 flex-col justify-center text-center">
                <span className="pl-2 text-brand-pink text-lg">Bem-vindo à Callidus Comunicações</span>
                <h1 className="font-altoneBold text-white text-4xl">Transformamos ideias em conexões reais</h1>
                <span className="pl-2 text-lg">Acompanhe o mundo digital e expanda seu negócio</span>
            </div>

            <div className="pb-10">
                <ul className="flex flex-row gap-6 items-center justify-center">
                    <li>
                        <a href="https://www.instagram.com/calliduscomunicacao/" target="blank" title='Instagram' className='hover:text-white transition-colors'>
                            Instagram
                        </a>

                    </li>
                    <li>•</li>
                    <li>
                        <a href='https://www.facebook.com/calliduscomunicacao/' target="blank" title='Facebook' className='hover:text-white transition-colors'>
                            Facebook
                        </a>
                    </li>
                    <li>•</li>
                    <li>
                        <a href='mailto:contato@calliduscomunicacao.com.br' target="blank" title='E-mail' className='hover:text-white transition-colors'>
                            E-mail
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}