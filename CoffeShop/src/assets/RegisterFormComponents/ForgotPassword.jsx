

export function ForgotPassword({logo, forgotPassOne, changePage, id, email, checkExistingEmail, getUserEmail}) {



    return (

        <div className="forgot-pass-one">

            <div className="upper-forgot">

            <img 
            src={logo} 
            alt="logo" />

            <h4>Zaboravili ste lozinku?</h4>

            <p>Unesite svoju email adresu i mi cemo Vam poslati instrukcije za resetovanje</p>

            </div>
            

            <div className="forgot-form">
                <label htmlFor={`${id}-forgotEmail`}>Email</label>
                <input 
                type="text"
                id={`${id}-forgotEmail`}
                value={email}
                onChange={getUserEmail}
                />
            </div>

            <div className="bottom-forgot">
            <button
            onClick={()=>changePage("ForgotPassTwo")}
            disabled={!checkExistingEmail(email)}
            >Resetuj lozinku</button>

            <img src={forgotPassOne} alt="" />
            </div>

        </div>

)

}