

export function ForgotPasswordThree({forgotPassThree, logo, changePage, id, statusBar, arrowBack}) {


    return(

        <div id="pass-three-back">

        <div className="pass-three-mobile">
            <p>9:41</p>
            <img src={statusBar} alt="status" />
        </div>

        <div className="pass-three-header">
            <img src={arrowBack} alt="back" />
        </div>

        <div className="forgotPassThree-container"> 


        <div className="upper-section">
        <img src={logo} alt="" />

        <h4>Postavi novu lozinku</h4>

        <h5>Lozinka sadrži najmanje 8 karaktera</h5>
        </div>


        <div className="middle-section">
        <div className="middle-one">
            <label 
            htmlFor={`${id}-newEmail`}>Nova Lozinka</label>
            <input 
            type="text"
            id={`${id}-newEmail`}
            placeholder="Unesite novu lozinku"
            />
        </div>

        <div className="middle-two">
            <label 
            htmlFor={`${id}-confirmEmail`}>
            Ponovite lozinku</label>
            <input 
            type="text"
            id={`${id}-confirmEmail`}
            placeholder="Ponovite lozinku"
            />
        </div>
        </div>


        <div className="bottom-section">
        <button
        onClick={()=>changePage("ForgotPassFour")}
        >Resetuj lozinku</button>

        <img src={forgotPassThree} alt="" />
        </div>

        </div>
        </div>

    )


}