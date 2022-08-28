
export const requestEmailConfirmation = async(emailObject) =>{
    console.log('sending')
    const req = await fetch(`https://lineup-backend-emailer.herokuapp.com/api/emailSender`, {
        method: 'POST',
        headers: {'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
        body: JSON.stringify(emailObject)
    })
    return {
        status: req.status
    }
}