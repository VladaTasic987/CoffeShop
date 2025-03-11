import { useState } from "react";

export function RegisterForm({logo, name, email, userPassword, getUserName, getUserEmail, getUserPassword, getUserData, changePage, warningIcon,checkExistingEmail, getConfirmPassword, confirmUserPassword, id, clearInputs, statusBar, arrowBack}) {

    const nameRegex = /^[^~!@#$%^&*()_+=\-{[}\]:;'",<.>/?]+$/;
    const checkName = nameRegex.test(name);

    const isButtonDisabledRegister = confirmUserPassword == userPassword && userPassword.length >= 8 && !checkExistingEmail(email) && 
    email.includes("@") && 
    email.includes(".com") && 
    name.length > 2 && 
    name.length < 50 && 
    checkName;

    const[seePassword, setSeePassword] = useState(false);
  
  function togglePassword() {
    setSeePassword((prevState)=> !prevState)
  }

  const[seePasswordTwo, setSeePasswordTwo] = useState(false);
  
  function togglePasswordTwo() {
    setSeePasswordTwo((prevState)=> !prevState)
  }
    

    

    return (
        <div id="register-background">

        <div className="register-mobile">
            <p>9:41</p>
            <img src={statusBar} alt="status" />
        </div>

        <div className="register-header">
            <img src={arrowBack} alt="arrow" />
        </div>

        <div className="register-container">
        <img src={logo} 
        alt="logo"
        className="logo" />

        <h4 
        className="heading-h4"
        >Registruj se</h4>

        <div className="first-last-name">
        <label htmlFor={`${id}-name`}>Ime i Prezime</label>
        <input
        id={`${id}-name`} 
        type="text"
        value={name}
        placeholder="Unesite Ime i Prezime"
        onChange={getUserName}
        />

        { (name.length < 2 && name) ? <div 
        id="name-popup">
            <img src={warningIcon} alt="warning-icon" />
            <p className="paragraph">Mora da sadrži od 2 do 50 karaktera</p>
        </div> : <p id="replacementName"></p>}
        
        </div>


        <div className="register-email"> 
        <label htmlFor={`${id}-email`}>Email</label>
        <input 
        id={`${id}-email`}
        type="text"
        placeholder="Unesite email adresu"
        value={email}
        onChange={getUserEmail}
        
        />
        </div>

        { checkExistingEmail(email) ? <div className="email-popup">
            <img src={warningIcon} alt="warning-icon" />
            <p>Već postoji nalog sa ovom email adresom</p>
        </div> : <p id="replacement">Replacement invincible text</p>}

        <div className="password">
        <label htmlFor={`${id}-password`}>Lozinka</label>
        <input 
        id={`${id}-password`}
        type={seePassword ? "text" : "password"}
        placeholder="Unesite Lozinku"
        value={userPassword}
        onChange={getUserPassword}
        />

          <button
          onClick={(()=>togglePassword())}
          id="password-eye-registerOne"
          >👁️</button>


        { userPassword.length < 8 && userPassword? <div className="password-popup">
            <img src={warningIcon} alt="warning-icon" />
            <p>Mora da sadrži minimum 8 karaktera</p>
        </div> : <p id="replacementPass">Replacement invincible text</p>}


        </div>

        <div className="confirm-password">
        <label htmlFor={`${id}-ConfirmPassword`}>Potvrdite lozinku</label>
        <input 
        id={`${id}-ConfirmPassword`}
        type={seePasswordTwo ? "text" : "password"} 
        placeholder="Potvrdite Lozinku"
        value={confirmUserPassword}
        onChange={getConfirmPassword}
        />
        </div>

        {confirmUserPassword !== userPassword && confirmUserPassword ? <div className="confirm-pass-popup">
            <img src={warningIcon} alt="warning-icon" />
            <p>Lozinke se ne podudaraju. Pokušajte ponovo</p>
        </div> : <p id="replacement">Replacement invincible text</p>}

        <button
          onClick={(()=>togglePasswordTwo())}
          id="password-eye-registerTwo"
          >👁️</button>

        <div>

        <button
        className="register-btn"
        onClick={()=> 
        {getUserData(); 
        changePage("RegistrationSuccessful");
        }}
        disabled = {!isButtonDisabledRegister}
        >Registruj se</button>


        <div className="bottom-register">
        <p>Već imate kreiran nalog? 
        <button
        onClick={()=> {
        changePage("SubmitForm")
        clearInputs()    
        }}
        >Prijavite se</button></p>
        </div>

        </div>

        </div>

        </div>



    )


}