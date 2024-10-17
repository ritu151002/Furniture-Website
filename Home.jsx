import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>

      {/* carousel start */}

      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">          
            <img href="https://pixabay.com/photos/landscape-mountain-lake-reflection-362540/" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <h2>Slide 2</h2>
            {/* <img src="" class="d-block w-100" alt="..."> */}
          </div>
          <div class="carousel-item">
            <h2>Slide 3</h2>
            {/* <img src="" class="d-block w-100" alt="..."> */}
          </div>
        </div>
      </div>
      
      {/* carousel end */}



    </>
  );
}

export default Home;
