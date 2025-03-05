

export function LoyaltyProgram ({loyaltyAvatar, loyaltyCup, loyaltyEmpty, loyaltyFree, statusBar, arrowBack}) {



return (

    <div className="general-loyalty">

        <div className="mobile">

            <p>9:41</p>
            <img src={statusBar} alt="statusBar" />

        </div>

        <div className="loyalty-header">
            <button className="back">
                <img src={arrowBack} alt="back" /></button>
            <button className="log-out">Log out</button>
            
        </div>

        <div className="loyalty-profile">
            <img src={loyaltyAvatar} alt="avatar" />
            <h4>Anja Pavicevic</h4>
            <p>anja04.p@gmail.com</p>
        </div>

        <div className="loyalty-promo">
            <h4>Loyalty program</h4>
            <p>Pridružite se našem 
                loyalty programu i 
                uživajte u besplatnoj 
                kafi! Svaka deseta kafa
                je na naš račun kao
                nagrada za vašu vernost</p>
        </div>

        <div className="loyalty-first-row">

            <img src={loyaltyCup} alt="cup" />
            <img src={loyaltyCup} alt="cup" />
            <img src={loyaltyCup} alt="cup" />
            <img src={loyaltyCup} alt="cup" />
            <img src={loyaltyCup} alt="cup" />

        </div>

        <div className="loyalty-second-row">

            <img src={loyaltyEmpty} alt="empty" />
            <img src={loyaltyEmpty} alt="empty" />
            <img src={loyaltyEmpty} alt="empty" />
            <img src={loyaltyEmpty} alt="empty" />
            <img src={loyaltyFree} alt="free" />

        </div>


    </div>

)

}