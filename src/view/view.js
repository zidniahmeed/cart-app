import Cart from "../component/cart";
import Form from "../component/form";
import Riwayat from "../component/riwayat";

const View = () => {
    return ( 
        <div className="container">
            <h1 className="text-center p-2" >Aplikasi Kasir</h1>
            <div className="row">
                <Form />
                <Cart />
            </div>
            <div className="row  mt-5 justify-content-center">
                <Riwayat />
            </div>
        </div>
     );
}
 
export default View;