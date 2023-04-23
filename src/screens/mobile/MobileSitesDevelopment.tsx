import notebookImage from '../../assets/notebook.png'

export function MobileSitesDevelopment() {
    return (
        <>
            <div className="flex gap-4 flex-col px-10 py-24 md:py-24 md:px-20 w-screen justify-center text-center" id='MobileSitesDevelopment'>
                <h1 className="text-4xl font-bold italic text-white">Desenvolvimento</h1>
                <h1 className="text-4xl mb-2 text-white">de Sites</h1>
            </div>

            <div className="flex gap-4 flex-col px-10 py-12 md:py-18 md:px-20 w-screen justify-center text-center bg-[url('assets/paper-background.png')]  bg-bottom bg-repeat-x mt-[-60px]">
                <div className="flex flex-row justify-center">

                    <div className="text-center">
                        <ul className=' flex flex-col text-center items-center justify-center gap-3 text-white text-lg list-disc'>
                            <li>Landing Pages</li>
                            <li>Sites Corporativos</li>
                            <li>E-Commerces</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}