import { useEffect, useState } from "react";

const Cart = () => {
    const [cart, cartchange] = useState(null)

    const handlechekcout = (e) => {
        fetch("http://127.0.0.1:8000/api/add-riwayat",{
            method: "get",
            headers: {"content-type" : "application/json"},
        }).then(()=>{
            window.location.reload(false)
        })
    }

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/view-cart")
        .then((res)=>{
            return res.json();
        }).then((res)=>{
            cartchange(res);
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])

  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">cart</h3>
          <table className="table table-bordered">
            <thead>
                <tr>
                    <td className="table-primary">Barang</td>
                    <td className="table-primary">QTY</td>
                    <td className="table-primary">Harga</td>
                    <td className="table-primary">Total</td>
                </tr>
            </thead>
            <tbody>
                {
                    cart && cart.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.harga}</td>
                            <td>{item.total}</td>
                        </tr>
                    ))
                }
            </tbody>
          </table>
          <button className="btn btn-success" onClick={handlechekcout} >Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
