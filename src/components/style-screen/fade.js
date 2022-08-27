
export default function Fade (props) {

    function handleChange(e){
        props.setFadeType(e.target.value)
    }

    return (
        <div className={''}>
            <div>
                <h2 className={'mt-10'}>
                    What type of fade would you like?
                </h2>
                <form className={' mt-10 gap-10 flex justify-center flex-wrap'}>
                    <label htmlFor={'low-fade'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                        <div className={'cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                            <img className={'object-cover grayscale'} src={'low-fade.png'}/>
                        </div>
                        <input onChange={(e) => handleChange(e)} value='low-fade' name="fadeType" id="low-fade" type="radio" className={'hidden peer'} />
                        <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                            Low Fade
                        </div>
                    </label>
                    <label htmlFor={'mid-fade'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                        <div className={'cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                            <img className={' object-cover grayscale'} src={'mid-fade.png'}/>
                        </div>
                        <input onChange={(e) => handleChange(e)} value='mid-fade' name="fadeType" id="mid-fade" type="radio" className={'hidden peer'} />
                        <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                            Mid Fade
                        </div>
                    </label>
                    <label htmlFor={'high-fade'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                        <div className={' cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                            <img className={'object-cover grayscale'} src={'high-fade.png'}/>
                        </div>
                        <input onChange={(e) => handleChange(e)} value='high-fade' name="fadeType" id="high-fade" type="radio" className={'hidden peer'} />
                        <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                            High Fade
                        </div>
                    </label>
                    <label htmlFor={'taper'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                        <div className={' cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                            <img className={'object-cover grayscale'} src={'taper.png'}/>
                        </div>
                        <input onChange={(e) => handleChange(e)} value='taper' name="fadeType" id="taper" type="radio" className={'hidden peer'} />
                        <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                            Taper
                        </div>
                    </label>
                </form>
            </div>
        </div>
    )
}