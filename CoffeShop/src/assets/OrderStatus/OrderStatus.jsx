

export function OrderStatus({statusBar, orderOne, clock, mobileHand, arrowBack}) {


return (

    <div className="order-status">
        
        <div className="order-mobile">
            <h3>9:41</h3>
            <img src={statusBar} alt="status-bar" />
        </div>

        <div className="order-header">
            <button><img src={arrowBack} alt="back" /></button>
        </div>

        <div className="order-main-top">
            <p>ID porudzbine: <span>1234567</span></p>
            <div className="time">
                <img src={clock} alt="clock" />
                <h3>00 : 15 : 05</h3>
            </div>
            <img 
            src={orderOne} 
            alt="ord-one" 
            className="order-one"/>
            <div className="status">
                <p>Porudzbina pripremljena</p>
                <h6>Kafa se priprema</h6>
                <h5>Kafa je spremna</h5>
            </div>
        </div>

        <div className="order-main-middle">
            <img src={mobileHand} alt="mobile-hand" />
        </div>

        <div className="order-main-bottom">
            <h3>Porudzbina je primljena</h3>
        </div>

    </div>

)


}