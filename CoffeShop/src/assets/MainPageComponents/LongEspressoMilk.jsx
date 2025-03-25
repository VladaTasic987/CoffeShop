

export function LongEspressoMilk({coffeImg, plus,longEspressoMilkVisible, setLongEspressoMilkVisible, cups, wheels, minus, id, smallCup, mediumCup, largeCup, getLongEspressoMilk, getCupSizeLongEspressoMilk, getLongEspressoMilkQuantityPlus,getLongEspressoMilkQuantityMinus, longEspMilkQuantity, getSelectedTypeCoffeLongEspressoMilk, selectTypeCoffeLongEspressoMilk, getSelectedTypeMilkLongEspressoMilk, selectTypeMilkLongEspressoMilk, setLongEspresoMilkPrice}) {


return (

    <div className="short-container">  
    <div className="short-espresso">

    <div className="left-content">
    <img src={coffeImg} alt="coffe" />
    </div>

    <div className="right-content">

        <div className="right-top">
            <h4>Espresso dugi sa mlekom</h4>
            {!longEspressoMilkVisible ?<h5>150,00 RSD</h5> : <span className="invisible">invisible text</span>}
        </div>

        <div className="right-middle">
            <p>Espresso obogaćen mlekom za savršenu harmoniju arome i ukusa. Idealan izbor za one koji vole blaži ukus</p>
        </div>

        <div className="right-bottom">

            {longEspressoMilkVisible ? <div className="small-card">
                <div className="text">
                    <p>Cena</p>
                    <span>150,00 RSD</span>
                </div>

                <button
                onClick={()=>setLongEspressoMilkVisible(!longEspressoMilkVisible)}
                >
                <img 
                src={plus} 
                alt="plus" />
                </button>
            </div> :

                <div className="big-card">
                <button 
                className="small-cup"
                onClick={()=>{getCupSizeLongEspressoMilk("small")
                setLongEspresoMilkPrice(150)    
                }}
                >
                    <img 
                    src={smallCup} 
                    alt="smallCup" 
                    />
                </button>
                <button 
                className="medium-cup"
                onClick={()=>{getCupSizeLongEspressoMilk("medium")
                setLongEspresoMilkPrice(160)    
                }}
                >
                    <img 
                    src={mediumCup} 
                    alt="smallCup" 
                    />
                </button>
                <button 
                className="large-cup"
                onClick={()=>{getCupSizeLongEspressoMilk("large")
                setLongEspresoMilkPrice(170)    
                }}
                >
                    <img 
                    src={largeCup} 
                    alt="smallCup" 
                    />
                </button>

                </div>}

        </div>
        </div>

</div>

{!longEspressoMilkVisible 
? <div className="short-popup">
    <div className="popup-options">   

        <div className="coffe">
            <label 
            htmlFor={`${id}-coffeLEM`}
            value={selectTypeCoffeLongEspressoMilk}
            onChange={()=>getSelectedTypeCoffeLongEspressoMilk()}
            >Zrno</label>
            <select 
            name={`${id}-coffeLEM`} 
            id={`${id}-coffeLEM`}
            >
            <option 
            value={null} disabled selected
            >Odaberi zrno</option>
            <option 
            value="Brasil"
            >Brazil</option>
            <option 
            value="Kuba"
            >Kuba</option>
            <option 
            value="Etiopia"
            >Etiopija</option>
            </select>              
        </div> 

        <div className="milk">

            <label 
            htmlFor={`${id}-milkLEM`}
            >Mleko</label>

            <select 
            name={`${id}-milkLEM`} 
            id={`${id}-milkLEM`}
            value={selectTypeMilkLongEspressoMilk}
            onChange={(e)=>getSelectedTypeMilkLongEspressoMilk(e)}
            >

            <option 
            value={null} disabled selected
            >Odaberi mleko</option> 

            <option 
            value="regular"
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
            onClick={()=>getLongEspressoMilkQuantityMinus()}
            >
                <img 
                src={minus} 
                alt="minus" 
                /></button>

            <p>{longEspMilkQuantity}</p>

            <button 
            className="increase"
            onClick={()=>getLongEspressoMilkQuantityPlus()}
            >
                <img 
                src={plus} 
                alt="plus" 
                /></button>
        </div>

        <button 
        className="buy"
        onClick={()=>getLongEspressoMilk()}
        disabled={longEspMilkQuantity == 0 ? true : false}
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