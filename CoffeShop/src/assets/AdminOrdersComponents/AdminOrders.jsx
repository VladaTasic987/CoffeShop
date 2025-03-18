
import { useState } from "react"


export function AdminOrders({statusBar, logo, vector, order, setOrder}) {


    const [isActive, setActive] = useState(false)
    const ToggleClass = () => {

        setActive(!isActive);
   };



    return (
        <div className="order-status">

            <div className="order-mobile">
                <h3>9:41</h3>
                <img src={statusBar} alt="status-bar" />
            </div>

            <div className="admin-order-header">
                <button><img
                    src={logo}
                    alt="logo"
                    className="logo"/></button>
            </div>
<div className="admin-order-body">
            <div className="admin-order-main-top">
                <p>Status porudžbine</p>



            </div>
            <div className="admin-order-title">

                <h3>ID porudžbine</h3>
                <p className='first-p'>Priprema se</p>
                <p className='second-p'>Sprema</p>
            </div>
                <div id="admin-order-toggle" className={isActive ? "admin-orders-order-wrap-closed" : "admin-orders-order-wrap"}>


                <div className="admin-orders-order">
                    <button onClick={ToggleClass} ><img className={isActive ? 'up' : ''} src={vector} alt="vector"/></button>
                    <h3>120003399332</h3>
                    <input type="checkbox" className='priprema' name='priprema'/>
                    <input type="checkbox" className='spremno' name='spremno'/>

                </div>
                    {
                    isActive ? '' :

                            order.map((item) => (
            <div  id={item.id} className="admin-orders-order-fromCart">
                    <p>{item.quantity}x {item.productName},  {item.milkType} ({item.cupSize.toUpperCase().slice(0, 1)})</p>

                </div>


                            ))
                    }
                </div>



</div>

        </div>

    )


}