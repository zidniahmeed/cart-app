import { useEffect, useState } from "react";

const Riwayat = () => {

    const [riwayat, riwayatchange] = useState(null)

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/view-riwayat")
        .then((res)=>{
            return res.json();
        }).then((res)=>{
            riwayatchange(res);
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])

    return ( <div className="col-md-8 ">
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Riwayat Belanja</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td className="table-primary">Barang</td>
                            <td className="table-info">Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riwayat && riwayat.map((item)=>(
                                <tr key={item.id} >
                                    <td>{item.name}</td>
                                    <td className="table-info">{item.total}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div> );
}
 
export default Riwayat;