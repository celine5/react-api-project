import React, { useState } from 'react'

export default function Multiform() {
    const [userdetails, setuserdetails] = useState({
        name: '',
        email: '',
    })

    const formvalues = (event) => {

        console.log(userdetails)
        setuserdetails({ ...userdetails, [event.target.name]: [event.target.value] })
    }
    const submit = () => {
        console.log(userdetails)
    }
    return (
        <div>
            <form >
                <input type='text' name='email' className='emails' onChange={formvalues} />

                <input type='text' name='name' className='name' onChange={formvalues} />

            </form>
            <button onClick={submit}>submit</button>
        </div>
    )
}
