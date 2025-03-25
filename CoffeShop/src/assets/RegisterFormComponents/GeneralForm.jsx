import { LoginStart } from "./LoginStart"
import { RegisterForm } from "./RegisterForm"
import { ForgotPassword } from "./ForgotPassword"
import { ForgotPasswordTwo } from "./ForgotPasswordTwo"
import { ForgotPasswordThree } from "./ForgotPasswordThree"
import { ForgotPasswordFour } from "./ForgotPasswordFour"
import { RegisterSuccessful } from "./RegisterSuccessful"
import { MainPage } from "../MainPageComponents/MainPage"
import { LoyaltyProgram } from "../UserProfile/LoyaltyProgram"
import { OrderStatus } from "../OrderStatus/OrderStatus"
import {AdminOrders} from "../AdminOrdersComponents/AdminOrders.jsx";

import { useState, useEffect } from "react"
import { useId } from "react";




export function GeneralForm({logo, vector, forgotPassOne,forgotPassTwo, forgotPassThree, forgotPassFour, warningIcon, statusBar, avatar, arrowForward, coffeImg, plus, cups, wheels, minus, smallCup, mediumCup, largeCup, delBtn, loyaltyAvatar, loyaltyCup, loyaltyEmpty, loyaltyFree, arrowBack, orderOne, clock, mobileHand, orderTwo, orderThree}) {

const[idReg, setIdReg] = useState(4);
const[name, setName] = useState("");
const[email, setEmail] = useState("");
const[userPassword, setUserPassword] = useState("")
const[confirmUserPassword, setConfirmUserPassword] = useState("");
const[page, setPage] = useState("SubmitForm");
const [order, setOrder] = useState([]);
const[login, setLogin] = useState(false);


const[userData, setUserData] = useState([
    {id: 1, name: "Vladimir Tasic", email: "vlada@gmail.com",password: "12345678", loggedIn: login},
    {id: 2, name: "Andjela Gajevic", email: "andjela@gmail.com",password: "11223344", loggedIn: login},
    {id: 3, name: "Aleksandra Mircic", email: "test@quantox.com",password: "quantoxtest", loggedIn: login},
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
        loggedIn: false,    
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
    if(userData.some((data)=> email === data.email)) {
        return true
    }
}

const checkUserCredentialsLogin = (email, userPassword) => {
    const user = userData.find((user)=> user.email === email)
    if(user && user.password === userPassword) {
    user.loggedIn = true
    return true
    }     
    else return false    
}

function logoutUser ()  {
    setUserData(prevUserData =>
        prevUserData.map(user =>
            user.loggedIn ?  [...userData, {loggedIn: false}]  : user
            
        )
    );
  };

  console.log(userData);    


function newRegisterLogin() {
    userData.map((user)=> {
        if(user.id === userData.length) {
            user.loggedIn = true;
        }
    })
}

function clearInputs() {
    setName("");
    setEmail("");
    setUserPassword("");
    setConfirmUserPassword("");
}

const getOrderTotal = order.reduce((acc, order) => acc + order.quantity, 0);


//timer functionality

const [timeLeft, setTimeLeft] = useState(60); // 15 minutes in seconds
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
    
        if (isRunning && timeLeft > 0) {
          interval = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
          }, 1000);
        } else if (timeLeft === 0) {
          clearInterval(interval);
          setIsRunning(false);
        }
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, [isRunning, timeLeft]);


      const startTimer = () => {
        setIsRunning(true);
      };

      const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };


return(

<>

{ page == "SubmitForm" ? 
<LoginStart 
logo={logo}
warningIcon={warningIcon}
statusBar={statusBar}
arrowBack={arrowBack}

email={email}
userPassword={userPassword}
getUserEmail={getUserEmail}
getUserPassword={getUserPassword}
changePage={changePage}
checkUserCredentialsLogin={checkUserCredentialsLogin}
clearInputs={clearInputs}
checkExistingEmail={checkExistingEmail}
/> : null}

{ page == "RegisterForm" ? <RegisterForm
logo={logo}
warningIcon={warningIcon}
statusBar={statusBar}
arrowBack={arrowBack}

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
statusBar={statusBar}
arrowBack={arrowBack}
warningIcon={warningIcon}

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
statusBar={statusBar}
arrowBack={arrowBack}

forgotPassTwo={forgotPassTwo}
changePage={changePage}
/> : null}


{ page == "ForgotPassThree" ?  <ForgotPasswordThree
logo={logo}
statusBar={statusBar}
arrowBack={arrowBack}
warningIcon={warningIcon}

forgotPassThree={forgotPassThree}
changePage={changePage}
id={id}
/> : null}


{ page == "ForgotPassFour" ? <ForgotPasswordFour
logo={logo}
statusBar={statusBar}
arrowBack={arrowBack}

forgotPassFour={forgotPassFour}
changePage={changePage}
/> : null}

{ page == "RegistrationSuccessful" ? <RegisterSuccessful
logo={logo}
statusBar={statusBar}
arrowBack={arrowBack}

changePage={changePage}
newRegisterLogin={newRegisterLogin}
/> : null}


{ page == "Main" ? <MainPage
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
order={order}
setOrder={setOrder}
changePage={changePage}
startTimer={startTimer}
/> : page == "SubmitForm"}


{ page == "Profile" ? <LoyaltyProgram
loyaltyAvatar={loyaltyAvatar}
loyaltyCup={loyaltyCup}
loyaltyEmpty={loyaltyEmpty}
loyaltyFree={loyaltyFree}
statusBar={statusBar}
arrowBack={arrowBack}

userData={userData}
order={order}
changePage={changePage}
getOrderTotal={getOrderTotal}
logoutUser={logoutUser}
/> : null}

{page == "Timer" ? <OrderStatus
statusBar={statusBar}
orderOne={orderOne}
clock={clock}
mobileHand={mobileHand}
arrowBack={arrowBack}
orderThree={orderThree}

formatTime={formatTime}
timeLeft={timeLeft}
orderTwo={orderTwo}
changePage={changePage}
/> : null}

    <AdminOrders

        order={order}
        setOrder={setOrder}
        logo={logo}
        statusBar={statusBar}
        vector={vector}

    />

</>

)

}