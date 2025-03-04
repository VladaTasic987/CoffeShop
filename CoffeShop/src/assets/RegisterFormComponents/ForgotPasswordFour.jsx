

export function ForgotPasswordFour({logo, forgotPassFour}) {


    return (

        <div className="forgotPassFour-container">

            <img src={logo} alt="" />


            <div className="middle-section">
            <h4>Ušpesno resetovanje lozinke</h4>

            <h5>Vaša lozinka je uspešno resetovana</h5>
            <h5>Sada mozete da se prijavite.</h5>
        
            </div>

            <div className="bottom-section">
            <button
            >Prijavite se</button>

            <img src={forgotPassFour} alt="" />    
            </div>

        </div>


    )

}