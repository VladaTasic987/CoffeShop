

export function ForgotPasswordFour({logo, forgotPassFour, statusBar, arrowBack, changePage}) {


    return (

        <div id="pass-three-back">

        <div className="pass-three-mobile">
            <p>9:41</p>
            <img src={statusBar} alt="status" />
        </div>

        <div className="pass-three-header">
            <img src={arrowBack} alt="back" />
        </div>

        <div className="forgotPassFour-container">

            <img src={logo} alt="" />


            <div className="middle-section">
            <h4>Ušpesno resetovanje lozinke</h4>

            <h5>Vaša lozinka je uspešno resetovana</h5>
            <h5>Sada mozete da se prijavite.</h5>
        
            </div>

            <div className="bottom-section">
            <button
            onClick={()=>changePage("SubmitForm")}
            >Prijavite se</button>

            <img src={forgotPassFour} alt="" />    
            </div>

        </div>
        </div>


    )

}