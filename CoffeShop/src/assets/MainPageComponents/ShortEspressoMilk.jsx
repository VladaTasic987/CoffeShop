
export function ShortEspressoMilk({coffeImg, plus,shortEspressoMilkVisible, setShortEspressoMilkVisible, cups, wheels, minus, id, smallCup, mediumCup, largeCup, getShortEspressoMilk, getCupSizeShortEspressoMilk,getShortEspressoMilkQuantityPlus, getShortEspressoMilkQuantityMinus, shortEspMilkQuantity, selectTypeCoffeShortEspressoMilk, getSelectedTypeCoffeShortEspressoMilk, selectTypeMilkShortEspressoMilk, getSelectedTypeMilkShortEspressoMilk, setShortEspresoMilkPrice}) {

return (


    <div className="short-container">  
    <div className="short-espresso">

    <div className="left-content">
    <img src={coffeImg} alt="coffe" />
    </div>

    <div className="right-content">

        <div className="right-top">
            <h4>Espresso kratki sa mlekom</h4>
            {!shortEspressoMilkVisible ?<h5>140,00 RSD</h5> : <span className="invisible">invisible text</span>}
        </div>

        <div className="right-middle">
            <p>Intenzivna kafa obogaćena kremastim dodatkom mleka, stvarajući bogat i zadovoljavajući ukus koji osvaja</p>
        </div>

        <div className="right-bottom">

            {shortEspressoMilkVisible ? <div className="small-card">
                <div className="text">
                    <p>Cena</p>
                    <span>140,00 RSD</span>
                </div>

                <button
                onClick={()=>setShortEspressoMilkVisible(!shortEspressoMilkVisible)}
                >
                <img src={plus} alt="plus" />
                </button>
            </div> :

                <div className="big-card">
                <button 
                className="small-cup"
                onClick={()=>{getCupSizeShortEspressoMilk("small")
                setShortEspresoMilkPrice(140)    
                }}
                >
                    <img 
                    src={smallCup} 
                    alt="smallCup" 
                    />
                </button>
                <button 
                className="medium-cup"
                onClick={()=>{getCupSizeShortEspressoMilk("medium")
                setShortEspresoMilkPrice(150)
                }}
                >
                    <img 
                    src={mediumCup} 
                    alt="smallCup" 
                    />
                </button>
                <button 
                className="large-cup"
                onClick={()=>{getCupSizeShortEspressoMilk("large")
                setShortEspresoMilkPrice(160)
                }}
                >
                    <img src={largeCup} alt="smallCup" />
                </button>

                </div>}

        </div>
        </div>

</div>

{!shortEspressoMilkVisible ? <div className="short-popup">
    <div className="popup-options">           
        <div className="coffe">

            <label 
            htmlFor={`${id}-coffeSEM`}
            >Zrno</label>
            <select 
            name={`${id}-coffeSEM`} 
            id={`${id}-coffeSEM`}
            value={selectTypeCoffeShortEspressoMilk}
            onChange={getSelectedTypeCoffeShortEspressoMilk}
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
            htmlFor={`${id}-milkSEM`}
            >Mleko</label>
            <select 
            name={`${id}-milkSEM`} 
            id={`${id}-milkSEM`}
            value={selectTypeMilkShortEspressoMilk}
            onChange={getSelectedTypeMilkShortEspressoMilk}
            >
            <option 
            value="" disabled selected
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
            onClick={()=>getShortEspressoMilkQuantityMinus()}
            >
                <img 
                src={minus} 
                alt="minus" 
                /></button>

            <p>{shortEspMilkQuantity}</p>

            <button 
            className="increase"
            onClick={()=>getShortEspressoMilkQuantityPlus()}
            >
                <img 
                src={plus} 
                alt="plus" 
                />
                </button>
        </div>

        <button 
        className="buy"
        onClick={()=>getShortEspressoMilk()}
        disabled={shortEspMilkQuantity == 0 ? true : false}
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