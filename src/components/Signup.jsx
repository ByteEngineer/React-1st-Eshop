import React from 'react'

function Signup() {
    return (
        <>
            <div className='container'>
                <form>
                    <h1>eSHOP</h1>
                    <div className='signup'>
                        <h2>Create an account</h2>
                        <input type="text" placeholder='name@company.com' />
                        <input type="password" placeholder='.......' />
                        <input type="password" placeholder='.......' />
                        <p>Create an eSHOP Account</p>
                        <input className='placelink' type="text" placeholder='Already have an account? Login Here' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup