import {useState} from "react";


export function MainFooter({arrowForward, order, delBtn, handleDeleteOrder, totalOrder, orderQuantity, startTimer, changePage}) {


return (

<div className="main-bottom">
    <div className="bottom-fixed">
        <div className="line"></div>

        <div className="btn-amount">
            <div className="sum">  
            <h4>Ukupno:</h4>
            <span>{totalOrder.toFixed(2)}</span>
            </div>  
            <button
            onClick={()=>{
            changePage("Timer");
            startTimer();
            }}
            disabled={orderQuantity == 0 ? true : orderQuantity >= 11 ? true : false}
            ><img src={arrowForward} alt="" />Naruci</button>
        </div>

        <div className="last-line"></div>    
    </div>

    <div className="bottom-variable">
    <ul className="short-esp-list">
        {order.map((product)=>
            (<li key={product.id}><p>
            {`${product.quantity}
              X  ${product.productName}
            `}</p>
        <button
        onClick={()=>handleDeleteOrder(product.id)}
        ><img src={delBtn} alt="delete" /></button></li>  
    ))}
    </ul>

    

    </div>
</div>

)


}