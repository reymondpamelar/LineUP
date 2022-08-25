import TextInput from "../../components/UI/Form/text-input";
import * as Icon from "react-feather";
import animationData from "../../assets/turning-line.json";
import Lottie from "react-lottie";

export default function ContactForm () {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    return (
        <div key={'contact'} className={'px-20'}>
            <h1 className={'relative'}>
                Who are we cutting today?
                <div id={'animate1'} className={'animate__animated w-[100rem] absolute mt-[4rem] bottom-0 -right-20 md:right-5 animate__fadeInLeft'}>
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
            <div className={'flex justify-end mt-10'}>
                <button
                        className={'gap-4 flex items-center rounded-xl bg-[#D58258] hover:bg-black text-white p-4 px-10 animate__animated animate__fadeInDown transition ease-in-out duration-200'}>
                    Next
                    <Icon.ChevronRight className={'w-5'}/>
                </button>
            </div>
        </div>
    )
}