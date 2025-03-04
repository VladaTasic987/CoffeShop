
export function LoginStart({logo, changePage, email, userPassword, getUserEmail, getUserPassword, warningIcon, checkUserCredentialsLogin, clearInputs}) {

  
  const validateLogin = checkUserCredentialsLogin(email, userPassword);

  

     return (

        <div className="login-container">

          
          <img 
          src={logo} 
          alt="logo"
          className="logo"
          />

          <h4 
          className="register-heading"
          >Prijavi se</h4>
          
          <div className="login-email">
          <label htmlFor="email" >Email</label>
          <input 
          type="text" 
          id="email"
          value={email}
          onChange={getUserEmail}
          placeholder="Unesite Email adresu"
          />
          </div>
          
          <div className="login-password">
          <label htmlFor="password">Lozinka</label>
          <input 
          type="text" 
          id="password"
          value={userPassword}
          onChange={getUserPassword}
          placeholder="Unesite lozinku"
          />
          </div>

          {(!validateLogin && userPassword) ?<div className="login-pass-popup">
            <img src={warningIcon} alt="" />
            <p>Pogrešan Email ili Lozinka pokušajte ponovo</p>
          </div> : <p id="replacement">Replacement invincible text</p>}

          <button 
          className="forgot-pass"
          onClick={()=>{
            changePage("ForgotPassOne")
            clearInputs()
          }}
          >Zaboravili ste lozinku</button>
          
          <button 
          className="submit-btn"
          disabled = {!validateLogin}
          onClick={()=>changePage("Main")}
          >Prijavi se</button>

          <div className="login-bottom">
          <p>Još uvek nemate kreiran nalog 
          <button 
          className="register-btn"
          onClick={()=>{
          changePage("RegisterForm")
          clearInputs()}}
          >Registruj se</button></p>
          </div>  
           

        </div>

     )   

}