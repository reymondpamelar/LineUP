import TextInput from "../../../components/UI/Form/text-input";
import * as Icon from "react-feather";

export default function Overview (props) {

    function exit(){
        setTimeout(() => {
            props.setStep(2)
        },0)
    }

    return (
        <div key={'contact'} className={'px-20'}>
            <div>
                <h1 className={'relative capitalize'}>
                    Hello {props.firstName}!
                </h1>
            </div>
            <div>
                <h2 className={'relative mt-10'}>
                    What are you in for?
                </h2>
                <div className={' mt-10 gap-10 flex justify-center flex-wrap'}>
                    <div className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                        <div className={'cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                            <img className={'object-cover'} src={'bald.png'}/>
                        </div>
                        <div className={'bg-black rounded-b-xl text-white p-2'}>
                            Shave
                        </div>
                    </div>
                    <div className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                        <div className={'cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                            <img className={'w-16 object-cover'} src={'scissors.png'}/>
                        </div>
                        <div className={'bg-black rounded-b-xl text-white p-2'}>
                            Trim
                        </div>
                    </div>
                    <div className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                        <div className={'p-2 cursor-pointer flex justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                            <img className={'object-cover'} src={'fade.png'}/>
                        </div>
                        <div className={'bg-black rounded-b-xl text-white p-2'}>
                            Fade
                        </div>
                    </div>
                    <div className={'hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg rounded-xl'}>
                        <div className={'p-2 cursor-pointer grid grid-cols-2 justify-center items-center w-32 h-32 rounded-t-xl overflow-hidden border'}>
                            <img className={'w-10 ml-2 object-cover'} src={'scissors.png'}/>
                            <img className={'object-cover'} src={'fade.png'}/>
                        </div>
                        <div className={'bg-black rounded-b-xl text-white p-2'}>
                            Trim + Fade
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex justify-end mt-10'}>
                <button onClick={() => exit()} className={'gap-4 flex items-center rounded-xl bg-[#D58258] hover:bg-black text-white p-4 px-10 animate__animated animate__fadeInDown transition ease-in-out duration-200'}>
                    Next
                    <Icon.ChevronRight className={'w-5'}/>
                </button>
            </div>
        </div>
    )
}