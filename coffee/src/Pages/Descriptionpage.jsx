import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Descriptionpage() {
  const [productdata, setProductsdata] = useState([]);

  const { id } = useParams();

  axios
    .get(`http://localhost:8080/product/${id}`)
    .then((res) => setProductsdata(res.data))
    .catch((err) => console.log(err));

  return (
    <div style={{ border: "1px solid black" }}>
      <div style={{ margin: "40px",width:"50%",textAlign:"center"}}>
        <img src={productdata.image} alt="" height={550}  />

        <h3 style={{color:"white"}}>{productdata.title}</h3>

        <h5 style={{color:"white",fontSize:"25px"}}>{productdata.price}</h5>
        
      </div>
    </div>
  );
}

export default Descriptionpage;
