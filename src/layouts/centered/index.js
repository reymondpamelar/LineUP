
export default function CenteredLayout({children}) {

    return (
        <div className={'overflow-x-hidden overflow-y-scroll relative w-screen h-screen bg-white dark:bg-[#0F172A] transition ease-in-out duration-300'}>

            <div className="h-full flex justify-center items-center">
                {children}
            </div>
        </div>
    )
}
