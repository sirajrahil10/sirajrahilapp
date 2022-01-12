import React, { useState } from 'react'

const Form = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [newarray, setnewarray] = useState([])

    const newentry = (e) => {
        e.preventDefault();
        if (email && password) {
            const entry = { id: new Date().getTime().toString(), email, password }
            setnewarray([...newarray, entry]);
            console.log(newarray);
            setemail("");
            setpassword("");
        } else {
            alert("Please Fill The Data.")
        }
    }
    return (
        <>
            <div className='div1'>
                <form action='' onSubmit={newentry}>
                    <div className='div2'>
                        <label className='lab1' htmlFor='email'>Email</label>
                        <br />
                        <input className='inp1' type='text' name='email' id='email' autoComplete='off'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        ></input>
                    </div>
                    <div className='div2'>
                        <label className='lab1' htmlFor='password'>Password</label>
                        <br />
                        <input className='inp1' type='password' name='password' id='password' autoComplete='off' value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        ></input>
                    </div>
                    <div className='div2'>
                        <button className='btn1'>Login</button>
                    </div>
                </form>
            </div>
            <div>
                {
                    newarray.map((curElem) => {
                        const { id, email, password } = curElem;
                        return (
                            <div className='div4' key={id}>
                                <h1>Email={email}</h1>
                                <h1>Password={password}</h1>
                            </div>)
                    })
                }
            </div>
        </>
    )
}

export default Form
