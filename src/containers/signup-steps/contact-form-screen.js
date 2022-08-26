import TextInput from "../../components/UI/Form/text-input";
import * as Icon from "react-feather";
import animationData from "../../assets/turning-line.json";
import Lottie from "react-lottie";
import {useState} from "react";

export default function ContactFormScreen (props) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [hairType, setHairType] = useState('')

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!firstName || !lastName || !emailAddress || !hairType){
            if(!hairType){
                document.getElementById('hairTypeError').classList.add('opacity-100')
                document.getElementById('hairTypeError').classList.remove('absolute')
            }
            return
        }else {
            let contactDetails = {
                firstName,
                lastName,
                emailAddress
            }
            console.log(contactDetails)
            props.setContactDetails(contactDetails)
            props.setHairType(hairType)
            props.setStep(2)
            console.log(hairType)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={'px-20'}>
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
                                required
                                name={'firstName'}
                                placeholder={'First Name'}
                                value={firstName}
                                onChange={(e)=> setFirstName(e.target.value)}
                            />
                            <TextInput
                                required
                                name={'lastName'}
                                placeholder={'Last Name'}
                                value={lastName}
                                onChange={(e)=> setLastName(e.target.value)}
                            />
                        </div>
                        <TextInput
                            required
                            name={'emailAddress'}
                            type={'email'}
                            placeholder={'Email Address'}
                            value={emailAddress}
                            onChange={(e)=> setEmailAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <h1 className={'relative mt-10 flex justify-center'}>
                        What is your hair type?
                    </h1>

                    <div id={'hairTypeError'} className={'opacity-0 -z-10 absolute transition ease-in-out duration-500 bg-[#963A2F] gap-4 flex justify-center text-white top-1/4 p-4 rounded-xl border text-sm'}>
                        <Icon.ChevronDown/>
                        Please Choose a hair type below
                        <Icon.ChevronDown/>
                    </div>
                    <div className={' mt-4 flex justify-center flex-wrap'}>
                        <div className={'flex justify-center'}>
                            <input onChange={(e) => setHairType(e.target.value)} value='hair-1' name="hairType" id="hair-1" type="radio" className={'hidden peer'} />
                            <label htmlFor={'hair-1'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125 cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                                <img src={'hairtype-1.png'}/>
                            </label>
                        </div>

                        <div className={'flex justify-center'}>
                            <input onChange={(e) => setHairType(e.target.value)} value='hair-2a' name="hairType" id="hair-2a" type="radio" className={'hidden peer'} />
                            <label htmlFor={'hair-2a'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125 cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                                <img src={'hairtype-2a.png'}/>
                            </label>
                        </div>

                        <div className={'flex justify-center'}>
                            <input onChange={(e) => setHairType(e.target.value)} value='hair-2b' name="hairType" id="hair-2b" type="radio" className={'hidden peer'} />
                            <label htmlFor={'hair-2b'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125 cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                                <img className={'object-cover'} src={'hairtype-2b.png'}/>
                            </label>
                        </div>

                        <div className={'flex justify-center'}>
                            <input onChange={(e) => setHairType(e.target.value)} value='hair-2c' name="hairType" id="hair-2c" type="radio" className={'hidden peer'} />
                            <label htmlFor={'hair-2c'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125 cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                                <img src={'hairtype-2c.png'}/>
                            </label>
                        </div>

                        <div className={'flex justify-center'}>
                            <input onChange={(e) => setHairType(e.target.value)} value='hair-3a' name="hairType" id="hair-3a" type="radio" className={'hidden peer'} />
                            <label htmlFor={'hair-3a'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125 cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                                <img src={'hairtype-3a.png'}/>
                            </label>
                        </div>

                        <div className={'flex justify-center'}>
                            <input onChange={(e) => setHairType(e.target.value)} value='hair-3b' name="hairType" id="hair-3b" type="radio" className={'hidden peer'} />
                            <label htmlFor={'hair-3b'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125 cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                                <img src={'hairtype-3b.png'}/>
                            </label>
                        </div>

                        <div className={'flex justify-center'}>
                            <input onChange={(e) => setHairType(e.target.value)} value='hair-3c' name="hairType" id="hair-3c" type="radio" className={'hidden peer'} />
                            <label htmlFor={'hair-3c'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125 cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                                <img src={'hairtype-3c.png'}/>
                            </label>
                        </div>

                        <div className={'flex justify-center'}>
                            <input onChange={(e) => setHairType(e.target.value)} value='hair-4a' name="hairType" id="hair-4a" type="radio" className={'hidden peer'} />
                            <label htmlFor={'hair-4a'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125 cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                                <img src={'hairtype-4a.png'}/>
                            </label>
                        </div>

                        <div className={'flex justify-center'}>
                            <input onChange={(e) => setHairType(e.target.value)} value='hair-4b' name="hairType" id="hair-4b" type="radio" className={'hidden peer'} />
                            <label htmlFor={'hair-4b'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125 cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-400 hover:shadow-lg'}>
                                <img src={'hairtype-4b.png'}/>
                            </label>
                        </div>

                        <div className={'flex justify-center'}>
                            <input onChange={(e) => setHairType(e.target.value)} value='hair-4c' name="hairType" id="hair-4c" type="radio" className={'hidden peer'} />
                            <label htmlFor={'hair-4c'} className={'peer-checked:border-[#ECB984] peer-checked:shadow-lg peer-checked:scale-125 cursor-pointer w-20 h-32 overflow-hidden border hover:scale-110 transition ease-in-out duration-4s00 hover:shadow-lg'}>
                                <img src={'hairtype-4c.png'}/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={'flex justify-end mt-10'}>
                    <button type={'submit'} className={'disabled:bg-gray-300 gap-4 flex items-center rounded-xl bg-[#D58258] hover:bg-black text-white p-4 px-10 animate__animated animate__fadeInDown transition ease-in-out duration-200'}>
                        Next
                        <Icon.ChevronRight className={'w-5'}/>
                    </button>
                </div>
            </form>
        </div>
    )
}