

export default function Trim (props) {

    function handleTrimTypeSubmit(e){
        let newTrimSet = props.trimSet
        if(e.target.checked){
            newTrimSet.trimTypes.push(e.target.value)
        }else{
            newTrimSet.trimTypes.splice(e.target.value, 1)
        }
        props.setTrimSet(newTrimSet)
    }

    function handleTrimStyleSubmit(e){
        let newTrimSet = props.trimSet
        newTrimSet.trimStyle = e.target.value
        props.setTrimSet(newTrimSet)
    }

    return (
        <div className={''}>
            <h2 className={'mt-10'}>
                How do you want your trim?
            </h2>
            <div>
                <div>
                    <div className={'mt-4 text-lg'}>
                        Choose all that apply:
                    </div>
                    <form onChange={(e) => handleTrimTypeSubmit(e)} className={' mt-4 gap-10 flex justify-center flex-wrap'}>
                        <label htmlFor={'Remove Bulk'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                            <div className={'cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                                <img className={'object-fill h-full'} src={'remove-bulk.png'}/>
                            </div>
                            <input value='Remove Bulk' name="Remove Bulk" id="Remove Bulk" type="checkbox" className={'hidden peer'} />
                            <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                                Remove bulk
                            </div>
                        </label>
                        <label htmlFor={'layer'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                            <div className={'cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                                <img className={' object-cover'} src={'layered-hair.png'}/>
                            </div>
                            <input value='layer' name="layer" id="layer" type="checkbox" className={'hidden peer'} />
                            <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                                Layer
                            </div>
                        </label>
                        <label htmlFor={'blend'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                            <div className={'cursor-pointer flex justify-center items-end w-32 h-32 rounded-t-xl overflow-hidden border'}>
                                <img className={' object-cover scale-125 ml-6 mb-4'} src={'blend.png'}/>
                            </div>
                            <input value='blend' name="blend" id="blend" type="checkbox" className={'hidden peer'} />
                            <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                                Blend
                            </div>
                        </label>
                    </form>
                </div>

                <div className={'mt-10'}>
                    <div className={'mt-4 text-lg'}>
                        If applicable, choose one:
                    </div>
                    <form onChange={(e) => handleTrimStyleSubmit(e)} className={' mt-4 gap-10 flex justify-center flex-wrap'}>
                        <label htmlFor={'comb-over'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                            <div className={'p-2 cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                                <img className={'object-cover'} src={'fade.png'}/>
                            </div>
                            <input value='comb-over' name="trimStyle" id="comb-over" type="radio" className={'hidden peer'} />
                            <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                                Comb-over
                            </div>
                        </label>
                        <label htmlFor={'part'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                            <div className={'p-2 cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                                <img className={'p-4 object-cover'} src={'midpart.png'}/>
                            </div>
                            <input value='part' name="trimStyle" id="part" type="radio" className={'hidden peer'} />
                            <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                                Part
                            </div>
                        </label>
                        <label htmlFor={'manbun'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                            <div className={'p-2 cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                                <img className={'p-1 ml-2 object-cover'} src={'manbun.png'}/>
                            </div>
                            <input value='manbun' name="trimStyle" id="manbun" type="radio" className={'hidden peer'} />
                            <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                                Manbun
                            </div>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}