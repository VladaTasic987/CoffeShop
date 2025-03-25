

export function OrderStatus({statusBar, orderOne, clock, mobileHand, orderTwoImg, orderThreeImg, arrowBack, formatTime, timeLeft, orderTwo, orderThree, changePage}) {

const styleSecondParagraph = {
    color: timeLeft < 30 ? "#248CC5" : "#BFBFBF"
}   

const styleThirdParagraph = {
    color: timeLeft === 0 ? "#248CC5" : "#BFBFBF"
}   

return (

    <div className="order-status">
        
        <div className="order-mobile">
            <h3>9:41</h3>
            <img src={statusBar} alt="status-bar" />
        </div>

        <div className="order-header">
            <button
            onClick={()=>changePage("Main")}
            ><img src={arrowBack} alt="back" /></button>
        </div>

        <div className="order-main-top">
            <p>ID porudzbine: <span>1234567</span></p>
            <div className="time">
                <img src={clock} alt="clock" />
                <h3>00:0{formatTime(timeLeft)}</h3>
                
            </div>
            <img 
            src={timeLeft >= 30 ? orderOne : timeLeft <= 30 && timeLeft !== 0 ? orderTwo
            : timeLeft === 0  ? orderThree : orderTwo
            } 
            alt="ord-one" 
            className="order-one"/>
            <div className="status">
                <p>Porudzbina pripremljena</p>
                <h6 style={styleSecondParagraph}>Kafa se priprema</h6>
                <h5 style={styleThirdParagraph}>Kafa je spremna</h5>
            </div>
        </div>

        <div className="order-main-middle">
            <img
                className={timeLeft >= 30 ? "mobileHand" : timeLeft <= 30 && timeLeft !== 0 ? "orderTwoImg"
                    : timeLeft === 0  ? "orderThreeImg" : "orderTwoImg"}
                src={timeLeft >= 30 ? mobileHand : timeLeft <= 30 && timeLeft !== 0 ? orderTwoImg
                : timeLeft === 0  ? orderThreeImg : orderTwoImg} alt="mobile-hand" />
        </div>

        <div className="order-main-bottom">
            {timeLeft > 30 ? <h3>Porudzbina je primljena</h3> : timeLeft < 30 && timeLeft !== 0 ? <h3>Kafa se priprema</h3> : timeLeft === 0 ? <h3>Kafa je spremna</h3> : <h3>Porudzbina je primljena</h3>}
        </div>


    </div>

)


}