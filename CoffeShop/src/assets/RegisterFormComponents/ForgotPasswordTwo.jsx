

export function ForgotPasswordTwo({logo, forgotPassTwo, changePage}) {


    return  (
        
        
        <div className="forgotPass-two-container">

        <img src={logo} alt="" />
        <h4>Resetovanje Lozinke</h4>

        <p>Poslali smo kod na vasemail@email.com</p>

        <div className="input-fptwo-container">
            
            <input 
            type="text"
            id="input-num-one"
            maxLength={1}
            />
            <input 
            type="text" 
            id="input-num-two"
            maxLength={1}
            />
            <input 
            type="text"
            id="inpt-num-three"
            maxLength={1}
            />
            <input 
            type="text"
            id="input-num-four"
            maxLength={1}
            />

        </div>

        <div className="bottom-fptwo-container">

        <button 
        className="forward"
        onClick={()=>changePage("ForgotPassThree")}
        >Nastavi</button>

        <div className="ftptwo-paragraph">

        <p>Još uvek Vam nije stigao kod?

        <button 
        className="sendAgain"
        >Pošalji opet</button>
        </p>
        
        <img src={forgotPassTwo} alt="forgot-password" />
        

        </div>

        </div>



        </div>
    )


}