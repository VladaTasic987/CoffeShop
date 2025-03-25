

export function ShortEspresso({coffeImg, plus,shortEspressoVisible, setShortEspressoVisible, cups, wheels, minus, id, smallCup, mediumCup, largeCup, getCupSizeShortEspresso, getShortEspresso, getShortEspressoQuantityPlus, getShortEspressoQuantityMinus, shortEspQuantity, selectTypeCoffeShortEspresso, getSelectedTypeCoffeShortEspresso, selectTypeMilkShortEspresso, getSelectedTypeMilkShortEspresso, priceChageBasedOnCupSizeM, priceChageBasedOnCupSizeL,setShortEspresoPrice}) {

    

return (

<div className="short-container">  
<div className="short-espresso">

    <div className="left-content">
    <img src={coffeImg} alt="coffe" />
    </div>

    <div className="right-content">

        <div className="right-top">
            <h4>Espresso kratki</h4>
            {!shortEspressoVisible 
            ? <h5>120,00 RSD</h5> 
            : <span className="invisible">invisible text</span>}
        </div>

        <div className="right-middle">
            <p>Svojom bogatom aromom i punim ukusom, ova mala ali moćna kafica čini savršen početak dana.</p>
        </div>

        <div className="right-bottom">

            {shortEspressoVisible 
            ? <div className="small-card">
                <div className="text">
                    <p>Cena</p>
                    <span>120,00 RSD</span>
                </div>

                <button
                onClick={()=>{
                setShortEspressoVisible(!shortEspressoVisible)    
                }}
                >
                <img src={plus} alt="plus" />
                </button>
            </div> 
            : <div className="big-card">

                <button
                onClick={()=>{getCupSizeShortEspresso("small")
                setShortEspresoPrice(120)    
                }} 
                className="small-cup">
                    <img src={smallCup} alt="smallCup" />
                </button>

                <button 
                onClick={()=>{getCupSizeShortEspresso("medium")
                priceChageBasedOnCupSizeM()    
                }} 
                className="medium-cup">
                    <img src={mediumCup} alt="mediumCup" />
                </button>

                <button
                onClick={()=>{getCupSizeShortEspresso("large");
                priceChageBasedOnCupSizeL();
                }} 
                className="large-cup">
                    <img src={largeCup} alt="largeCup" />
                </button>
                
            </div>}

        </div>
        </div>

</div>

{!shortEspressoVisible ? <div className="short-popup">
    <div className="popup-options">           
        <div className="coffe">
            <label 
            htmlFor={`${id}-coffeSE`}>Zrno</label>

            <select 
            name={`${id}-coffeSE`} 
            id={`${id}-coffeSE`}
            value={selectTypeCoffeShortEspresso}
            onChange={getSelectedTypeCoffeShortEspresso}
            >

            <option 
            value={null} 
            disabled selected>Odaberi zrno</option>

            <option value="brasil-zrno">Brazil</option>

            <option value="kuba-zrno">Kuba</option>

            <option value="etiopia-zrno">Etiopia</option>

            </select>              
        </div> 


        <div className="milk">
            <label 
            htmlFor={`${id}-milkSE`}>Mleko</label>

            <select 
            name={`${id}-milkSE`} 
            id={`${id}-milkSE`}
            value={selectTypeMilkShortEspresso}
            onChange={getSelectedTypeMilkShortEspresso}
            >
            

            <option
            value={null}
            disabled selected>Odaberi mleko</option>

            <option value="obicno-mleko">Obično mleko</option>

            <option value="badem-mleko">Bademovo mleko</option>

            <option value="soja-mleko">Sojino mleko</option>

            </select>              
        </div>                       
    </div> 

    <div className="horisontal-line"></div>

    <div className="popup-bottom">

        <div className="increase-decrease">
            <button
            onClick={()=>getShortEspressoQuantityMinus()}
            className="decrease">
                <img src={minus} alt="minus" />
            </button>

            <p>{shortEspQuantity}</p>

            <button
            onClick={()=>getShortEspressoQuantityPlus()} 
            className="increase">
                <img src={plus} alt="plus" />
            </button>
        </div>

        <button 
        onClick={()=>{     
        getShortEspresso();    
        }}

        className="buy"
        disabled={shortEspQuantity == 0 ?true : false}
        >
            <img src={wheels} alt="wheels" />Dodaj u korpu
        </button>

    </div>
</div> : null}

</div>  

    )
}