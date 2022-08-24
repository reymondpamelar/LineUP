import TextInput from "../../components/UI/Form/text-input";

export default function ContactForm () {
    return (
        <div key={'contact'} className={''}>
            <h1>
                Contact Form
            </h1>
            <div className={'w-[30rem] mt-10 space-y-10'}>
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
        </div>
    )
}