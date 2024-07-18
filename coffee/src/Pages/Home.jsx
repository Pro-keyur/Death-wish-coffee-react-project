import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [productdata, setproductdata] = useState([]);
  const [page, setpage] = useState(1);
  const[sort,setsort]=useState(null)

  const fetchdata = () => {
    axios
      .get("http://localhost:8080/product",{
        params:{
          _limit: 12,
          _page: page,
          _sort: "price",
          _order: sort,
        }
      })
      .then((res) => {
        setproductdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchdata();
  }, [page,sort]);

  return (
    <div>

      <div>
        {/* sorting */}
        <div>
          <button onClick={() => setsort("asc")} style={{backgroundColor:"white"}}>LowtoHigh</button>
          <button onClick={() => setsort("desc")} style={{backgroundColor:"white"}}>HightoLow</button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "10px",
          marginTop:"50px",
        }}
      >

        {/* product maping */}
        {productdata.map((e) => (
           <Link to={`/description/${e.id}`} key={e.id}>
          <div key={e.id} style={{ border: "2px solid black" }}>
            <img
              src={e.image}
              alt="title"
              height={350}
              width={350}
              style={{ marginTop: "15px" }}
            />
            <h4 style={{color:"white"}}>{e.title}</h4>
            <h5 style={{color:"white",fontSize:"18px"}}>{e.price}</h5>
          </div>
          </Link>
        ))}
      </div>

{/* pagination */}
      <div style={{ marginTop: "10px", textAlign:"center"}}>
        <button  style={{color:"white"}} disabled={page == 1} onClick={() => setpage(page - 1)}>
          Prev
        </button>
        <button style={{color:"white"}} disabled>{page}</button>
        <button style={{color:"white"}}disabled={page == 4} onClick={() => setpage(page + 1)}>
          Next
        </button>
      </div>

      <div>
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default Home;
