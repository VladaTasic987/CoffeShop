

export function Americano({coffeImg, plus,americanoVisible, setAmericanoVisible, cups, wheels, minus, id, smallCup, mediumCup, largeCup, getAmericano, getCupSizeAmericano, getAmericanoQuantityPlus, getAmericanoQuantityMinus, getSelectedTypeCoffeAmericano, selectTypeCoffeAmericano, getSelectedTypeMilkAmericano, selectTypeMilkAmericano, americanoQuantity}) {


return (

    <div className="short-container">  
    <div className="short-espresso">

    <div className="left-content">
    <img src={coffeImg} alt="coffe" />
    </div>

    <div className="right-content">

        <div className="right-top">
            <h4>Americano</h4>
            {!americanoVisible ?<h5>150,00 RSD</h5> : <span className="invisible">invisible text</span>}
        </div>

        <div className="right-middle">
            <p>Osvežavajući spoj espresso kafe i vruće vode, idealan za laganije uživanje, za bilo koje doba dana.</p>
        </div>

        <div className="right-bottom">

            {americanoVisible 
            ? <div className="small-card">
                <div className="text">
                    <p>Cena</p>
                    <span>150,00 RSD</span>
                </div>

                <button
                onClick={()=>setAmericanoVisible(!americanoVisible)}
                >
                <img src={plus} alt="plus" />
                </button>
            </div> :

                <div className="big-card">
                <button 
                className="small-cup"
                onClick={()=>getCupSizeAmericano("small")}
                >
                    <img src={smallCup} alt="smallCup" />
                </button>
                <button 
                className="medium-cup"
                onClick={()=>getCupSizeAmericano("medium")}
                >
                    <img src={mediumCup} alt="smallCup" />
                </button>
                <button 
                className="large-cup"
                onClick={()=>getCupSizeAmericano("large")}
                >
                    <img src={largeCup} alt="smallCup" />
                </button>

                </div>}

        </div>
        </div>

</div>

{!americanoVisible 
? <div className="short-popup">
    <div className="popup-options">           
        <div className="coffe">
            <label 
            htmlFor={`${id}-coffeA`}
            >Zrno</label>
            <select 
            name={`${id}-coffeA`} 
            id={`${id}-coffeA`}
            onChange={getSelectedTypeCoffeAmericano}
            value={selectTypeCoffeAmericano}
            >
            <option 
            value="" disabled selected
            >Odaberi zrno</option>
            <option 
            value="brasil"
            >Brazil</option>
            <option 
            value="kuba"
            >Kuba</option>
            <option 
            value="etiopia"
            >Etiopija</option>
            </select>              
        </div> 

        <div className="milk">
            <label 
            htmlFor={`${id}-milkA`}
            onChange={getSelectedTypeMilkAmericano}
            value={selectTypeMilkAmericano}
            >Mleko</label>
            <select 
            name={`${id}-milkA`} 
            id={`${id}-milkA`}>
            <option 
            value="" disabled selected
            >Odaberi mleko</option>    
            <option 
            value="reular"
            >Obicno mleko</option>
            <option 
            value="badem"
            >Bademovo mleko</option>
            <option 
            value="soja"
            >Sojino mleko</option>
            </select>              
        </div>                       
    </div> 

    <div className="horisontal-line"></div>

    <div className="popup-bottom">

        <div className="increase-decrease">
            <button 
            className="decrease"
            onClick={()=>getAmericanoQuantityMinus()
            }
            >
                <img 
                src={minus} 
                alt="minus" 
                /></button>

            <p>{americanoQuantity}</p>

            <button 
            className="increase"
            onClick={()=>getAmericanoQuantityPlus()}
            >
                <img 
                src={plus} 
                alt="plus" 
                /></button>
        </div>

        <button 
        className="buy"
        onClick={()=>getAmericano()}
        >
            <img 
            src={wheels} 
            alt="wheels" 
            />Dodaj u korpu</button>

    </div>
</div> : null}

</div> 

)


}