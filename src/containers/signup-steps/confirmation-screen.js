import StyleChoices from "../../components/style-choices";
import * as Icon from "react-feather";
import Lottie from "react-lottie";
import animationData from "../../assets/checkmark.json";

export default function ConfirmationScreen (props) {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleSubmit = () =>{
        props.setStep(0)
    }
    return (
        <div className={'px-10'}>
            <div className={'border-b-2 mb-10 pb-10'}>
                <h1 className={'mb-10'}>
                    You're all set!
                </h1>
                <div className={'flex justify-center'}>
                    <div>
                        <Lottie
                            options={defaultOptions}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className={'text-xl'}>
                    An email has been sent to {props.contactDetails.emailAddress}
                </div>
            </div>
            <div id={'bottom'} className={'w-full flex justify-end mt-10 pb-10'}>
                <button onClick={() => handleSubmit()} className={'gap-4 flex items-center rounded-xl bg-[#D58258] hover:bg-black text-white p-4 px-10 animate__animated animate__fadeInDown transition ease-in-out duration-200'}>
                    Finish
                    <Icon.ChevronRight className={'w-5'}/>
                </button>
            </div>
        </div>
    )
}