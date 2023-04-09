import notebookImage from '../assets/notebook.png'

export function SitesDevelopment() {
    return (
        <>
            <div className="flex justify-center w-screen self-center">
                <div className="flex flex-col w-4/5 max-w-7xl md:px-8">
                    <h1 className="text-5xl font-bold italic mb-2 text-white">Desenvolvimento</h1>
                    <h1 className="text-5xl mb-2 text-white">de Sites</h1>
                </div>

            </div>
            <div className="flex justify-center h-96 w-screen bg-[url('assets/paper-background.png')]  bg-bottom bg-repeat-x mt-[-60px]">
                <div className="flex flex-row justify-between items-end w-4/5 max-w-7xl md:px-8">

                    <div className="basis-1/3">
                        <ul className=' flex flex-col gap-3 text-white text-2xl list-disc pb-14'>
                            <li>Landing Pages</li>
                            <li>Sites Corporativos</li>
                            <li>E-Commerces</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                    <div className="basis-1/2 mb-[-65px]">
                        <img src={notebookImage} alt="Model" />
                    </div>
                </div>
            </div>
        </>
    )
}