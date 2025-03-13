

export function LoyaltyProgram ({loyaltyAvatar, loyaltyCup, loyaltyEmpty, loyaltyFree, statusBar, arrowBack, userData, order, changePage, getOrderTotal}) {





return (

    <div className="general-loyalty">

        <div className="mobile">

            <p>9:41</p>
            <img src={statusBar} alt="statusBar" />

        </div>

        <div className="loyalty-header">
            <button 
            className="back"
            onClick={()=>changePage("Main")}
            >
                <img src={arrowBack} alt="back" /></button>
            <button
            onClick={()=>changePage("SubmitForm")}
            className="log-out">Log out</button>
            
        </div>

        <div className="loyalty-profile">
            <img src={loyaltyAvatar} alt="avatar" />
            <h4>{userData.map((user)=> (
                user.loggedIn ? user.name : null
            ))}</h4>
            <p>{userData.map((user)=> (
                user.loggedIn ? user.email : null
            ))}</p>
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

            <img src={getOrderTotal == 0 ? loyaltyEmpty : loyaltyCup} alt="cup" />
            <img src={getOrderTotal < 2 ? loyaltyEmpty : loyaltyCup} alt="cup" />
            <img src={getOrderTotal < 3 ? loyaltyEmpty : loyaltyCup} alt="cup" />
            <img src={getOrderTotal < 4 ? loyaltyEmpty : loyaltyCup} alt="cup" />
            <img src={getOrderTotal < 5 ? loyaltyEmpty : loyaltyCup} alt="cup" />

        </div>

        <div className="loyalty-second-row">

            <img src={getOrderTotal < 6 ? loyaltyEmpty : loyaltyCup} alt="empty" />
            <img src={getOrderTotal < 7 ? loyaltyEmpty : loyaltyCup} alt="empty" />
            <img src={getOrderTotal < 8 ? loyaltyEmpty : loyaltyCup} alt="empty" />
            <img src={getOrderTotal < 9 ? loyaltyEmpty : loyaltyCup} alt="empty" />
            <img src={loyaltyFree} alt="free" />

        </div>


    </div>

)

}