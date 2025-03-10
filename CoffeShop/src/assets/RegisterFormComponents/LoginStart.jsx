
export function LoginStart({logo, changePage, email, userPassword, getUserEmail, getUserPassword, warningIcon, checkUserCredentialsLogin, clearInputs, statusBar, arrowBack}) {
  
  const validateLogin = checkUserCredentialsLogin(email, userPassword);

  
  
  

     return (

        <div className="login-back-button">

        <div id="login-mobile">
          <p>9:41</p>
          <img src={statusBar} alt="status" />
        </div>

        <div id="login-header-back">
        <img src={arrowBack} alt="back" />  
        </div>  

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

          { (!checkUserCredentialsLogin(email, userPassword) && email) ?<div className="login-pass-popup">
            <img src={warningIcon} alt="" />
            <p>Uneli ste pogrešan email</p>
          </div> : <p id="replacement">Replacement invincible text</p>}
          
          <div className="login-password">
          <label htmlFor="password">Lozinka</label>
          <input 
          type="password" 
          id="password"
          value={userPassword}
          onChange={getUserPassword}
          placeholder="Unesite lozinku"
          />
          </div>

          {(!checkUserCredentialsLogin(email, userPassword) && userPassword) ?<div className="login-pass-popup">
            <img src={warningIcon} alt="" />
            <p>Uneli ste pogrešnu lozinku</p>
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
          clearInputs()  
        }}
          >Registruj se</button></p>
          </div>  
           

        </div>
        </div>

     )   

}