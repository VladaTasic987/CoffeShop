

export function RegisterSuccessful({logo, changePage, newRegisterLogin, arrowBack, statusBar}) {



    return (

        <div id="success-background">

        <div className="success-mobile">
            <p>9:41</p>
            <img src={statusBar} alt="status" />
        </div>

        <div className="success-header">
            <img src={arrowBack} alt="back" />
        </div>

        <div className="successful-registration">

            <img src={logo} alt="logo" />

            <div className="middle-section">

                <h4>Uspešno ste se registrovali</h4>

                <div className="text-container">
                <p>Cestitamo! Uspešno ste se registrovali. Sada možete uživati u brzom i jednostavnom naručivanju omiljene kafe online!</p>
                </div>

            </div>

            <button
            onClick={()=>
                {changePage("Main")
                newRegisterLogin()       

                }}
            >Idite na pocetnu stranicu</button>

        </div>
        </div>

    )

}