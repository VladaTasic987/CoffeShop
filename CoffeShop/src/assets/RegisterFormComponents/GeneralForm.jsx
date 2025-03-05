import { LoginStart } from "./LoginStart"
import { RegisterForm } from "./RegisterForm"
import { ForgotPassword } from "./ForgotPassword"
import { ForgotPasswordTwo } from "./ForgotPasswordTwo"
import { ForgotPasswordThree } from "./ForgotPasswordThree"
import { ForgotPasswordFour } from "./ForgotPasswordFour"
import { RegisterSuccessful } from "./RegisterSuccessful"
import { MainPage } from "../MainPageComponents/MainPage"
import { LoyaltyProgram } from "../UserProfile/LoyaltyProgram"

import { useState } from "react"
import { useId } from "react";




export function GeneralForm({logo, forgotPassOne,forgotPassTwo, forgotPassThree, forgotPassFour, warningIcon, statusBar, avatar, arrowForward, coffeImg, plus, cups, wheels, minus, smallCup, mediumCup, largeCup, delBtn, loyaltyAvatar, loyaltyCup, loyaltyEmpty, loyaltyFree, arrowBack}) {

const[idReg, setIdReg] = useState(6);
const[name, setName] = useState("");
const[email, setEmail] = useState("");
const[userPassword, setUserPassword] = useState("")
const[confirmUserPassword, setConfirmUserPassword] = useState("");
const[page, setPage] = useState("SubmitForm");
const[userData, setUserData] = useState([
    {id: 1, name: "Vladimir Tasic", email: "tasa@gmail.com",password: "12345678"},
    {id: 2, name: "Andjela Gajevic", email: "andjela@gmail.com",password: "11223344"},
    {id: 3, name: "Aleksa Jurcic", email: "aleksa@gmail.com",password: "12312312"},
    {id: 4, name: "Aleksandra Mircic", email: "aleksandra@gmail.com",password: "87654321"},
    {id: 5, name: "Matija Knezevic", email: "matija@gmail.com",password: "87654321"}
]);
const id = useId();


function getUserName(e) {
    setName(e.target.value)
}

function getUserEmail(e) {
    setEmail(e.target.value)
}

function getUserPassword(e) {
    setUserPassword(e.target.value)
}

function getConfirmPassword(e) {
    setConfirmUserPassword(e.target.value);
}

function getUserId() {
    setIdReg(idReg + 1)
}

function getUserData() {
    getUserId();
    setUserData([...userData, 
        {id: idReg, 
        name: name, 
        email: email, 
        password: userPassword,
        pageName: page,    
    }])

    setName("");
    setEmail("");
    setUserPassword("");
    setConfirmUserPassword("");        
}

function changePage(pageName) {
    setPage(pageName)
}

const checkExistingEmail = (email) => {
    return userData.some((data)=> email === data.email)
}


const checkUserCredentialsLogin = (email, userPassword) => {
    const user = userData.find((user)=> user.email === email)
    if(user && user.password === userPassword) 
    return true
    else return false      
}

function clearInputs() {
    setName("");
    setEmail("");
    setUserPassword("");
    setConfirmUserPassword("");
}



return(

<>

{ page == "SubmitForm" ? 
<LoginStart 
logo={logo}
warningIcon={warningIcon}

email={email}
userPassword={userPassword}
getUserEmail={getUserEmail}
getUserPassword={getUserPassword}
changePage={changePage}
checkUserCredentialsLogin={checkUserCredentialsLogin}
clearInputs={clearInputs}
/> : null}

{ page == "RegisterForm" ? <RegisterForm
logo={logo}
warningIcon={warningIcon}

name={name}
email={email}
userPassword={userPassword}
confirmUserPassword={confirmUserPassword}
getUserName={getUserName}
getUserEmail={getUserEmail}
getUserPassword={getUserPassword}
getConfirmPassword={getConfirmPassword}
getUserData={getUserData}
changePage={changePage}
checkExistingEmail={checkExistingEmail}
id={id}
clearInputs={clearInputs}

/> : null
}


{page == "ForgotPassOne" ? 
<ForgotPassword
logo={logo}

forgotPassOne={forgotPassOne}
changePage={changePage}
id={id}
email={email}
getUserEmail={getUserEmail}
checkExistingEmail={checkExistingEmail}
/>
: null
}

{ page == "ForgotPassTwo" ? <ForgotPasswordTwo 
logo={logo}

forgotPassTwo={forgotPassTwo}
changePage={changePage}
/> : null}


{ page == "ForgotPassThree" ?  <ForgotPasswordThree
logo={logo}

forgotPassThree={forgotPassThree}
changePage={changePage}
id={id}
/> : null}


{ page == "ForgotPassFour" ? <ForgotPasswordFour
logo={logo}

forgotPassFour={forgotPassFour}
/> : null}

{ page == "RegistrationSuccessful" ? <RegisterSuccessful
logo={logo}
changePage={changePage}
/> : null}


<MainPage
statusBar={statusBar}
avatar={avatar}
logo={logo}
arrowForward={arrowForward}
coffeImg={coffeImg}
plus={plus}
cups={cups}
wheels={wheels}
minus={minus}
smallCup={smallCup}
mediumCup={mediumCup}
largeCup={largeCup}
delBtn={delBtn}

id={id}
/>


<LoyaltyProgram
loyaltyAvatar={loyaltyAvatar}
loyaltyCup={loyaltyCup}
loyaltyEmpty={loyaltyEmpty}
loyaltyFree={loyaltyFree}
statusBar={statusBar}
arrowBack={arrowBack}
/>

</>

)

}