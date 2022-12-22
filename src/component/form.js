import { useState } from "react";

const Form = () => {
  const [name, namechange] = useState("");
  const [harga, hargachange] = useState("");
  const [qty, qtychange] = useState("");

  const handlesubmit = (e) =>{
    e.preventDefault()
    const data = {name, harga, qty};
    fetch('http://127.0.0.1:8000/api/add-cart',{
        method:"POST",
        headers :{"content-type" : "application/json"},
        body: JSON.stringify(data)
    }).then((res)=>{
        console.log(res)
        window.location.reload(false)
    })
  }

  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Input Data</h5>
          <form action="" onSubmit={handlesubmit}>
            <div className="m-3">
              <label htmlFor="" className="form-label">
                Barang
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => namechange(e.target.value)}
              />
            </div>
            <div className="m-3">
              <label htmlFor="" className="form-label">
                Harga
              </label>
              <input
                type="number"
                className="form-control"
                value={harga}
                onChange={(e) => hargachange(e.target.value)}
              />
            </div>
            <div className="m-3">
              <label htmlFor="" className="form-label">
                QTY
              </label>
              <input
                type="number"
                className="form-control"
                value={qty}
                onChange={(e) => qtychange(e.target.value)}
              />
            </div>
            <button className="btn btn-primary">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
