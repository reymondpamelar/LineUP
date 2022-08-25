import TextInput from "../../components/UI/Form/text-input";
import * as Icon from "react-feather";
import animationData from "../../assets/turning-line.json";
import Lottie from "react-lottie";

export default function ContactFormScreen (props) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    function exit(){
        setTimeout(() => {
            props.setStep(2)
        },0)
    }

    return (
        <div key={'contact'} className={'px-20'}>
            <div>
                <h1 className={'relative'}>
                    Who are we cutting today?
                    <div id={'animate1'} className={'animate__animated w-[100rem] absolute bottom-20 md:bottom-0 -right-20 md:right-32 animate__fadeInLeft'}>
                        <Lottie
                            options={defaultOptions}
                        />
                    </div>
                </h1>
                <div className={' mt-10 space-y-10'}>
                    <div className={'flex gap-6'}>
                        <TextInput
                            name={'firstName'}
                            placeholder={'First Name'}
                            onChange={(e)=> props.setFirstName(e.target.value)}
                        />
                        <TextInput
                            name={'firstName'}
                            placeholder={'Last Name'}
                        />
                    </div>
                    <TextInput
                        name={'firstName'}
                        type={'email'}
                        placeholder={'Email Address'}
                    />
                </div>
            </div>
            <div>
                <h1 className={'relative mt-10'}>
                    What is your hair type?
                </h1>
                <div className={' mt-10 flex justify-center flex-wrap'}>
                    <div className={'cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                        <img src={'hairtype-1.png'}/>
                    </div>
                    <div className={'cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                        <img src={'hairtype-2a.png'}/>
                    </div>
                    <div className={'cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                        <img className={'object-cover'} src={'hairtype-2b.png'}/>
                    </div>
                    <div className={'cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                        <img src={'hairtype-2c.png'}/>
                    </div>
                    <div className={'cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                        <img src={'hairtype-3a.png'}/>
                    </div>
                    <div className={'cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                        <img src={'hairtype-3b.png'}/>
                    </div>
                    <div className={'cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                        <img src={'hairtype-3c.png'}/>
                    </div>
                    <div className={'cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                        <img src={'hairtype-4a.png'}/>
                    </div>
                    <div className={'cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                        <img src={'hairtype-4b.png'}/>
                    </div>
                    <div className={'cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-4s00 hover:shadow-lg'}>
                        <img src={'hairtype-4c.png'}/>
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