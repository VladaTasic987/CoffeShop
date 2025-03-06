

export function MainHeader({statusBar, logo, avatar, changePage}) {


    return (
        <div className="main-header">

            <div className="header-mobile">
                <p>9:41</p>
                <img src={statusBar} alt="statusBar" />
            </div>

            <div className="header-user">
                <img 
                src={logo} 
                alt="logo" 
                className="logo"/>
                
                <button
                onClick={()=>changePage("Profile")}
                >

                <img 
                src={avatar} 
                alt="avatar"
                className="avatar"
                />

                </button>
            </div>

        </div>
    )


}