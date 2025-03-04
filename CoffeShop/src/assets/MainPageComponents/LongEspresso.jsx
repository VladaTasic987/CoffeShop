

export function LongEspresso({coffeImg, plus,longEspressoVisible, setLongEspressoVisible, cups, wheels, minus, id, smallCup, mediumCup, largeCup, getLongEspresso, getCupSizeLongEspresso, getLongEspressoQuantityPlus, getLongEspressoQuantityMinus, longEspQuantity, selectTypeCoffeLongEspresso, getSelectedTypeCoffeLongEspresso, selectTypeMilkLongEspresso, getSelectedTypeMilkLongEspresso}) {


return (

<div className="short-container">  
<div className="short-espresso">

<div className="left-content">
<img src={coffeImg} alt="coffe" />
</div>

<div className="right-content">

    <div className="right-top">
        <h4>Espresso dugi</h4>
        {!longEspressoVisible 
        ?<h5>130,00 RSD</h5> 
        : <span 
        className="invisible"
        >invisible text</span>}
    </div>

    <div className="right-middle">
        <p>Produžena verzija espressa, sa malo više vode, što rezultira blažom notom i produženim uživanjem u kafi</p>
    </div>

    <div className="right-bottom">

        {longEspressoVisible 
        ? <div className="small-card">
            <div className="text">
                <p>Cena</p>
                <span>130,00 RSD</span>
            </div>

            <button
            onClick={()=>setLongEspressoVisible(!longEspressoVisible)}
            >
            <img src={plus} alt="plus" />
            </button>
        </div> 
        :   <div className="big-card">
            <button 
            onClick={()=>getCupSizeLongEspresso("small")}
            className="small-cup"
            >
                <img src={smallCup} alt="smallCup" />
            </button>
            <button 
            onClick={()=>getCupSizeLongEspresso("medium")}
            className="medium-cup"
            >
                <img src={mediumCup} alt="smallCup" />
            </button>
            <button 
            onClick={()=>getCupSizeLongEspresso("large")}
            className="large-cup"
            >
                <img src={largeCup} alt="smallCup" />
            </button>

        </div>}

    </div>
    </div>

</div>

{!longEspressoVisible 
? <div className="short-popup">
    <div className="popup-options">           
        <div className="coffe">

            <label 
            htmlFor={`${id}-coffeLE`}
            >Zrno</label>

            <select 
            name={`${id}-coffeLE`} 
            id={`${id}-coffeLE`}
            value={selectTypeCoffeLongEspresso}
            onChange={getSelectedTypeCoffeLongEspresso}
            >

            <option 
            value="" 
            disabled selected
            >Odaberi zrno</option>

            <option 
            value="brazil-zrno"
            >Brazil</option>

            <option 
            value="kuba-zrno"
            >Kuba</option>

            <option 
            value="etiopia-zrno"
            >Etiopija</option>

            </select>              
        </div> 

        <div className="milk">

            <label 
            htmlFor={`${id}-milkLE`}
            >Mleko</label>

            <select 
            name={`${id}-milkLE`} 
            id={`${id}-milkLE`}
            value={selectTypeMilkLongEspresso}
            onChange={getSelectedTypeMilkLongEspresso}
            >
            <option 
            value="" 
            disabled selected
            >Odaberi mleko</option> 

            <option 
            value="obicno-mleko"
            >Obicno mleko</option>

            <option 
            value="badem-mleko"
            >Bademovo mleko</option>

            <option 
            value="soja-mleko"
            >Sojino mleko</option>

            </select>              
        </div>                       
    </div> 

    <div className="horisontal-line"></div>

    <div className="popup-bottom">

        <div className="increase-decrease">
            <button 
            className="decrease"
            onClick={getLongEspressoQuantityMinus}
            >

            <img 
            src={minus}
            alt="minus" 
            /></button>

            <p>{longEspQuantity}</p>

            <button 
            className="increase"
            onClick={getLongEspressoQuantityPlus}
            >

            <img 
            src={plus} 
            alt="plus" 
            /></button>
        </div>

        <button 
        className="buy"
        onClick={()=>getLongEspresso()}
        >
        <img 
        src={wheels} 
        alt="wheels" 
        />Dodaj u korpu</button>

    </div>
</div> 
: null}

</div>  


)


}