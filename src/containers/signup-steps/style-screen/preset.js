import TextInput from "../../../components/UI/Form/text-input";
import * as Icon from "react-feather";

export default function Preset (props) {

    function handleChange(e){
        props.setStep(0)
        props.setPreset(e.target.value)
    }

    return (
        <div className={''}>
            <h1 className={'capitalize'}>
                Hello {props.contactDetails.firstName}!
            </h1>
            <div>
                <h2 className={'mt-10'}>
                    What are you in for?
                </h2>
                <form className={' mt-10 gap-10 flex justify-center flex-wrap'}>
                    <label htmlFor={'shave'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                        <div className={'cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                            <img className={'object-cover'} src={'bald.png'}/>
                        </div>
                        <input onChange={(e) => handleChange(e)} value='shave' name="preset" id="shave" type="radio" className={'hidden peer'} />
                        <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                            Shave
                        </div>
                    </label>
                    <label htmlFor={'trim'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                        <div className={'cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                            <img className={'w-16 object-cover'} src={'scissors.png'}/>
                        </div>
                        <input onChange={(e) => handleChange(e)} value='trim' name="preset" id="trim" type="radio" className={'hidden peer'} />
                        <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                            Trim
                        </div>
                    </label>
                    <label htmlFor={'fade'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                        <div className={'p-2 cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                            <img className={'object-cover'} src={'fade.png'}/>
                        </div>
                        <input onChange={(e) => handleChange(e)} value='fade' name="preset" id="fade" type="radio" className={'hidden peer'} />
                        <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                            Fade
                        </div>
                    </label>
                    <label htmlFor={'trim + fade'} className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                        <div className={'p-2 cursor-pointer grid grid-cols-2 justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                            <img className={'w-10 ml-2 object-cover'} src={'scissors.png'}/>
                            <img className={'object-cover'} src={'fade.png'}/>
                        </div>
                        <input onChange={(e) => handleChange(e)} value='trim + fade' name="preset" id="trim + fade" type="radio" className={'hidden peer'} />
                        <div className={'bg-black peer-checked:bg-[#ECB984] rounded-b-xl text-white p-2 transition ease-in-out duration-500'}>
                            Trim + Fade
                        </div>
                    </label>
                </form>
            </div>
        </div>
    )
}