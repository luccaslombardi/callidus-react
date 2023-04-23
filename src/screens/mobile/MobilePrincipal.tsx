import callidusLogoRotate from '../../assets/logo-callidus-sem-calda.svg'


export function MobilePrincipal() {
    return (
        <div className="flex h-screen w-screen justify-center bg-[url('assets/fullbanner-principal.png')] bg-cover bg-bottom">

            <div className="flex flex-row items-center justify-center w-4/5 max-w-7xl md:px-8">

                <div className="flex gap-3 flex-col space-between basis-2/3 justify-center h-full py-12">

                    <div className="flex w-2 h-3" />

                    <div className="flex gap-3 flex-1 flex-col justify-center">
                        <span className="pl-2 text-brand-pink text-xl">Bem-vindo à Callidus Comunicações</span>
                        <h1 className="font-altoneBold text-white text-6xl">Transformamos ideias em conexões reais</h1>
                        <span className="pl-2 text-lg">Acompanhe o mundo digital e expanda seu negócio</span>
                    </div>

                    <div className="px-10">
                        <ul className="flex flex-row gap-6">
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


            </div>

        </div>
    )
}