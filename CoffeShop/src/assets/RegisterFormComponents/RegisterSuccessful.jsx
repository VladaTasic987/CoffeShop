

export function RegisterSuccessful({logo, changePage, newRegisterLogin}) {



    return (

        <div className="successful-registration">

            <img src={logo} alt="logo" />

            <div className="middle-section">

                <h4>Uspesno ste se registrovali</h4>

                <div className="text-container">
                <p>Cestitamo! Uspesno ste se registrovali. Sada mozete uzivati u brzom i jednostavnom narucivanju omiljene kafe online!</p>
                </div>

            </div>

            <button
            onClick={()=>
                {changePage("Main")
                newRegisterLogin()       

                }}
            >Idite na pocetnu stranicu</button>

        </div>

    )

}