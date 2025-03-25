import { useState } from "react";
import { MainHeader } from "./MainHeader";
import { MainFooter } from "./MainFooter";
import { ShortEspresso } from "./ShortEspresso";
import { LongEspresso } from "./LongEspresso";
import { ShortEspressoMilk } from "./ShortEspressoMilk";
import { LongEspressoMilk } from "./LongEspressoMilk";
import { Americano } from "./Americano";



export function MainPage({statusBar, allItems, generateItems, avatar, logo, arrowForward, coffeImg, plus, cups, wheels, minus, id, smallCup, mediumCup, largeCup, delBtn, order, setOrder, changePage, startTimer}) {


const[shortEspressoVisible, setShortEspressoVisible] = useState("false");
const[longEspressoVisible, setLongEspressoVisible] = useState("false");
const[shortEspressoMilkVisible, setShortEspressoMilkVisible] = useState("false");
const[longEspressoMilkVisible, setLongEspressoMilkVisible] = useState("false");
const[americanoVisible, setAmericanoVisible] = useState("false");

const [orederId, setOrderId] = useState(1);
// const [order, setOrder] = useState([]);

// Short Espresso Logic

const [cupSizeShortEspresso, setCupSizeShortEspresso] = useState("M");
const[shortEspQuantity, setShortEspQuantity] = useState(0);
const[selectTypeCoffeShortEspresso, setSelectTypeCoffeShortEspresso] = useState("brazil-zrno");
const[selectTypeMilkShortEspresso, setSelectTypeMilkShortEspresso] = useState("obicno-mleko")
const[shortEspressoItem, setShortEspressoItem] = useState("Espresso kratki");
const[shortEspressoPrice, setShortEspresoPrice] = useState(120)

function getShortEspresso() {
    setOrderId((prevId)=> prevId + 1)
    setShortEspressoItem(setShortEspressoItem)
    setOrder([...order, 
        {id: orederId, 
        productName: shortEspressoItem,
        productPrice: shortEspressoPrice, 
        quantity: shortEspQuantity, 
        cupSize: cupSizeShortEspresso, 
        coffeType: selectTypeCoffeShortEspresso, milkType: selectTypeMilkShortEspresso 
    }])
}

function priceChageBasedOnCupSizeM() {
    setShortEspresoPrice(130)
}

function priceChageBasedOnCupSizeL() {
    setShortEspresoPrice(140)
}

function getCupSizeShortEspresso(cupSizeShortEspresso) {
    setCupSizeShortEspresso(cupSizeShortEspresso)
}

function getShortEspressoQuantityPlus() {
    setShortEspQuantity( shortEspQuantity + 1 )
}

function getShortEspressoQuantityMinus() {
    setShortEspQuantity(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
}

function getSelectedTypeCoffeShortEspresso(e) {
    setSelectTypeCoffeShortEspresso(e.target.value)
}

function getSelectedTypeMilkShortEspresso(e) {
    setSelectTypeMilkShortEspresso(e.target.value);
}

// Long Espresso Logic

const [cupSizeLongEspresso, setCupSizeLongEspresso] = useState("M");
const[longEspQuantity, setLongEspQuantity] = useState(0);
const[selectTypeCoffeLongEspresso, setSelectTypeCoffeLongEspresso] = useState("brazil-zrno");
const[selectTypeMilkLongEspresso, setSelectTypeMilkLongEspresso] = useState("obicno-mleko")
const[longEspressoItem, setLongEspressoItem] = useState("Espresso dugi");
const[longEspressoPrice, setLongEspresoPrice] = useState(130)

function getLongEspresso() {
    setOrderId((prevId)=> prevId + 1)
    setLongEspressoItem(setLongEspressoItem)
    setOrder([...order, 
        {id: orederId, 
        productName: longEspressoItem,
        productPrice: longEspressoPrice, 
        quantity: longEspQuantity, 
        cupSize: cupSizeLongEspresso, 
        coffeType: selectTypeCoffeLongEspresso, milkType: selectTypeMilkLongEspresso }
    ])
}

function getCupSizeLongEspresso(cupSizeLongEspresso) {
    setCupSizeLongEspresso(cupSizeLongEspresso)
}

function getLongEspressoQuantityPlus() {
    setLongEspQuantity(longEspQuantity + 1)
}

function getLongEspressoQuantityMinus() {
    setLongEspQuantity(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
}

function getSelectedTypeCoffeLongEspresso(e) {
    setSelectTypeCoffeLongEspresso(e.target.value)
}

function getSelectedTypeMilkLongEspresso(e) {
    setSelectTypeMilkLongEspresso(e.target.value);
}

// Short Espresso with Milk Logic

const [cupSizeShortEspressoMilk, setCupSizeShortEspressoMilk] = useState("M");
const[shortEspMilkQuantity, setShortEspMilkQuantity] = useState(0);
const[selectTypeCoffeShortEspressoMilk, setSelectTypeCoffeShortEspressoMilk] = useState("brazil-zrno");
const[selectTypeMilkShortEspressoMilk, setSelectTypeMilkShortEspressoMilk] = useState("obicno-mleko")
const[shortEspressoMilkItem, setShortEspressoMilkItem] = useState("Espresso kratki sa mlekom");
const[shortEspressoMilkPrice, setShortEspresoMilkPrice] = useState(140)

function getShortEspressoMilk() {
    setOrderId((prevId) => prevId + 1)
    setShortEspressoMilkItem(setShortEspressoMilkItem)
    setOrder([...order, 
        {id: orederId, 
        productName: shortEspressoMilkItem,
        productPrice: shortEspressoMilkPrice, 
        quantity: shortEspMilkQuantity, 
        cupSize: cupSizeShortEspressoMilk, 
        coffeType: selectTypeCoffeShortEspressoMilk, 
        milkType: selectTypeMilkShortEspressoMilk 
    }])
}

function getCupSizeShortEspressoMilk(cupSizeShortEspressoMilk) {
    setCupSizeShortEspressoMilk(cupSizeShortEspressoMilk)
}

function getShortEspressoMilkQuantityPlus() {
    setShortEspMilkQuantity(shortEspMilkQuantity + 1)
}

function getShortEspressoMilkQuantityMinus() {
    setShortEspMilkQuantity(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
}

function getSelectedTypeCoffeShortEspressoMilk(e) {
    setSelectTypeCoffeShortEspressoMilk(e.target.value)
}

function getSelectedTypeMilkShortEspressoMilk(e) {
    setSelectTypeMilkShortEspressoMilk(e.target.value);
}

// Long Espresso with Milk Logic

const [cupSizeLongEspressoMilk, setCupSizeLongEspressoMilk] = useState("M");
const[longEspMilkQuantity, setLongEspMilkQuantity] = useState(0);
const[selectTypeCoffeLongEspressoMilk, setSelectTypeCoffeLongEspressoMilk] = useState("brazil-zrno");
const[selectTypeMilkLongEspressoMilk, setSelectTypeMilkLongEspressoMilk] = useState("obicno-mleko")
const[longEspressoMilkItem, setLongEspressoMilkItem] = useState("Espresso dugi sa mlekom");
const[longEspressoMilkPrice, setLongEspresoMilkPrice] = useState(150)

function getLongEspressoMilk() {
    setOrderId((prevId)=>prevId + 1)
    setLongEspressoMilkItem(setLongEspressoMilkItem)
    setOrder([...order, 
        {id: orederId, 
        productName: longEspressoMilkItem,
        productPrice: longEspressoMilkPrice, 
        quantity: longEspMilkQuantity, 
        cupSize: cupSizeLongEspressoMilk, 
        coffeType: selectTypeCoffeLongEspressoMilk, milkType: selectTypeMilkLongEspressoMilk }
    ])
}

function getCupSizeLongEspressoMilk(cupSizeLongEspressoMilk) {
    setCupSizeLongEspressoMilk(cupSizeLongEspressoMilk)
}

function getLongEspressoMilkQuantityPlus() {
    setLongEspMilkQuantity(longEspMilkQuantity + 1)
}

function getLongEspressoMilkQuantityMinus() {
    setLongEspMilkQuantity(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
}

function getSelectedTypeCoffeLongEspressoMilk(event) {
    setSelectTypeCoffeLongEspressoMilk(event.target.value)
}

function getSelectedTypeMilkLongEspressoMilk(e) {
    setSelectTypeMilkLongEspressoMilk(e.target.value);
}


// Americano Logic


const [cupSizeAmericano, setCupSizeAmericano] = useState("M");
const[americanoQuantity, setAmericanoQuantity] = useState(0);
const[selectTypeCoffeAmericano, setSelectTypeCoffeAmericano] = useState("brazil-zrno");
const[selectTypeMilkAmericano, setSelectTypeMilkAmericano] = useState("obicno-mleko")
const[americanoItem, setAmericanoItem] = useState("Americano");
const[americanoPrice, setAmericanoPrice] = useState(150)

function getAmericano() {
    setOrderId((prevId)=>prevId + 1)
    setAmericanoItem(setAmericanoItem)
    setOrder([...order, 
        {id: orederId, 
        productName: americanoItem,
        productPrice: americanoPrice, 
        quantity: americanoQuantity, 
        cupSize: cupSizeAmericano, 
        coffeType: selectTypeCoffeAmericano, milkType: selectTypeMilkAmericano 
    }])
}

function getCupSizeAmericano(cupSizeAmericano) {
    setCupSizeAmericano(cupSizeAmericano)
}

function getAmericanoQuantityPlus() {
    setAmericanoQuantity(americanoQuantity + 1)
}

function getAmericanoQuantityMinus() {
    setAmericanoQuantity(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
}

function getSelectedTypeCoffeAmericano(e) {
    setSelectTypeCoffeAmericano(e.target.value)
}

function getSelectedTypeMilkAmericano(e) {
    setSelectTypeMilkAmericano(e.target.value);
}

// rest

function handleDeleteOrder(id) {
    setOrder(order.filter((oneOrder)=> oneOrder.id !== id))
}

const totalOrder = order.reduce((acc, num)=> (acc + num.productPrice) * num.quantity
,0)

const orderQuantity = order.reduce((acc, num)=> acc + num.quantity ,0)
return(

        
<div className="main-page">

<MainHeader
statusBar={statusBar}
logo={logo}
avatar={avatar}

changePage={changePage}
/>

<div className="main-middle">

    <div className="middle-slide">
        
        <ShortEspresso
        coffeImg={coffeImg}
        plus={plus}
        cups={cups}
        wheels={wheels}
        minus={minus}
        smallCup={smallCup}
        mediumCup={mediumCup}
        largeCup={largeCup}

        id={id}
        shortEspressoVisible={shortEspressoVisible}
        setShortEspressoVisible={setShortEspressoVisible}
        getShortEspresso={getShortEspresso}
        getCupSizeShortEspresso={getCupSizeShortEspresso}
        shortEspQuantity={shortEspQuantity}
        getShortEspressoQuantityPlus={getShortEspressoQuantityPlus}
        getShortEspressoQuantityMinus={getShortEspressoQuantityMinus}
        selectTypeCoffeShortEspresso={selectTypeCoffeShortEspresso}
        getSelectedTypeCoffeShortEspresso={getSelectedTypeCoffeShortEspresso}
        selectTypeMilkShortEspresso={selectTypeMilkShortEspresso}
        getSelectedTypeMilkShortEspresso={getSelectedTypeMilkShortEspresso}
        priceChageBasedOnCupSizeM={priceChageBasedOnCupSizeM}
        priceChageBasedOnCupSizeL={priceChageBasedOnCupSizeL}
        setShortEspresoPrice={setShortEspresoPrice}
        
        />

        <div id="separator"></div>

        <LongEspresso
        coffeImg={coffeImg}
        plus={plus}
        cups={cups}
        wheels={wheels}
        minus={minus}
        smallCup={smallCup}
        mediumCup={mediumCup}
        largeCup={largeCup}

        id={id}
        longEspressoVisible={longEspressoVisible}
        setLongEspressoVisible={setLongEspressoVisible}
        getLongEspresso={getLongEspresso}
        getCupSizeLongEspresso={getCupSizeLongEspresso}
        getLongEspressoQuantityPlus={getLongEspressoQuantityPlus}
        getLongEspressoQuantityMinus={getLongEspressoQuantityMinus}
        longEspQuantity={longEspQuantity}
        selectTypeCoffeLongEspresso={selectTypeCoffeLongEspresso}
        getSelectedTypeCoffeLongEspresso={getSelectedTypeCoffeLongEspresso}
        selectTypeMilkLongEspresso={selectTypeMilkLongEspresso}
        getSelectedTypeMilkLongEspresso={getSelectedTypeMilkLongEspresso}
        setLongEspresoPrice={setLongEspresoPrice}
        />

        <div id="separator"></div>

        <ShortEspressoMilk
        coffeImg={coffeImg}
        plus={plus}
        cups={cups}
        wheels={wheels}
        minus={minus}
        smallCup={smallCup}
        mediumCup={mediumCup}
        largeCup={largeCup}

        id={id}
        shortEspressoMilkVisible={shortEspressoMilkVisible}
        setShortEspressoMilkVisible={setShortEspressoMilkVisible}
        getShortEspressoMilk={getShortEspressoMilk}
        getCupSizeShortEspressoMilk={getCupSizeShortEspressoMilk}
        getShortEspressoMilkQuantityPlus={getShortEspressoMilkQuantityPlus}
        getShortEspressoMilkQuantityMinus={getShortEspressoMilkQuantityMinus}
        shortEspMilkQuantity={shortEspMilkQuantity}
        selectTypeCoffeShortEspressoMilk={selectTypeCoffeShortEspressoMilk}
        getSelectedTypeCoffeShortEspressoMilk={getSelectedTypeCoffeShortEspressoMilk}
        selectTypeMilkShortEspressoMilk={selectTypeMilkShortEspressoMilk}
        getSelectedTypeMilkShortEspressoMilk={getSelectedTypeMilkShortEspressoMilk}
        setShortEspresoMilkPrice={setShortEspresoMilkPrice}
        />

        <div id="separator"></div>

        <LongEspressoMilk
        coffeImg={coffeImg}
        plus={plus}
        cups={cups}
        wheels={wheels}
        minus={minus}
        smallCup={smallCup}
        mediumCup={mediumCup}
        largeCup={largeCup}

        id={id}
        longEspressoMilkVisible={longEspressoMilkVisible}
        setLongEspressoMilkVisible={setLongEspressoMilkVisible}
        getLongEspressoMilk={getLongEspressoMilk}
        getCupSizeLongEspressoMilk={getCupSizeLongEspressoMilk}
        getLongEspressoMilkQuantityPlus={getLongEspressoMilkQuantityPlus}
        getLongEspressoMilkQuantityMinus={getLongEspressoMilkQuantityMinus}
        longEspMilkQuantity={longEspMilkQuantity}
        getSelectedTypeCoffeLongEspressoMilk={getSelectedTypeCoffeLongEspressoMilk}
        selectTypeCoffeLongEspressoMilk={selectTypeCoffeLongEspressoMilk}
        getSelectedTypeMilkLongEspressoMilk={getSelectedTypeMilkLongEspressoMilk}
        selectTypeMilkLongEspressoMilk={selectTypeMilkLongEspressoMilk}
        setLongEspresoMilkPrice={setLongEspresoMilkPrice}
        />

        <div id="separator"></div>

        <Americano
        coffeImg={coffeImg}
        plus={plus}
        cups={cups}
        wheels={wheels}
        minus={minus}
        smallCup={smallCup}
        mediumCup={mediumCup}
        largeCup={largeCup}
        
        id={id}
        americanoVisible={americanoVisible}
        setAmericanoVisible={setAmericanoVisible}
        getAmericano={getAmericano}
        getCupSizeAmericano={getCupSizeAmericano}
        getAmericanoQuantityPlus={getAmericanoQuantityPlus}
        getAmericanoQuantityMinus={getAmericanoQuantityMinus}
        americanoQuantity={americanoQuantity}
        getSelectedTypeCoffeAmericano={getSelectedTypeCoffeAmericano}
        selectTypeCoffeAmericano={selectTypeCoffeAmericano}
        getSelectedTypeMilkAmericano={getSelectedTypeMilkAmericano}
        selectTypeMilkAmericano={selectTypeMilkAmericano}
        setAmericanoPrice={setAmericanoPrice}
        />

    </div>

</div>

    <MainFooter 
    arrowForward={arrowForward}
    delBtn={delBtn}
    generateItems={generateItems}
    allItems={allItems}
    order={order}
    handleDeleteOrder={handleDeleteOrder}
    totalOrder={totalOrder}
    orderQuantity={orderQuantity}
    startTimer={startTimer}
    changePage={changePage}
    />

        
</div>

        

        

)
}