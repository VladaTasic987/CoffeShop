

export function ForgotPassword({logo, forgotPassOne, changePage, id, email, checkExistingEmail, getUserEmail, statusBar, arrowBack, warningIcon}) {



    return (

        <div id="pass-one-background">

        <div className="pass-one-mobile">
                <p>9:41</p>
                <img src={statusBar} alt="status" />
            </div>

            <div className="pass-one-header">

                <img src={arrowBack} alt="arrow" />

            </div>

        <div className="forgot-pass-one">

            <div className="upper-forgot">

            <img 
            src={logo} 
            alt="logo" />

            <h4>Zaboravili ste lozinku?</h4>

            <p className="paragraph">Unesite svoju email adresu i mi cemo Vam poslati instrukcije za resetovanje</p>

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

             {!checkExistingEmail(email) && email ? <div id="forgot-pass-one-popup">
            <img src={warningIcon} alt="warning-icon" />
            <p className="paragraph">Uneli ste nepostojeći email</p>
            </div> : null}  

            <div className="bottom-forgot">
            <button
            onClick={()=>changePage("ForgotPassTwo")}
            disabled={!checkExistingEmail(email)}
            >Resetuj lozinku</button>

            <img src={forgotPassOne} alt="" />
            </div>

        </div>
        </div>

)

}