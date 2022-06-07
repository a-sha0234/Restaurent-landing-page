import backgroundHomeImg from "../images/pizza.jpg";

export default function Home() {
  return (
    <section className="home" id="home">
      {/* <img src={backgroundHomeImg} className="home__img" /> */}
      <div className="home__container">
        <div className="home__introduction">
          <p>
            <br></br>
            Welcome to Pizza's4 us. <br></br> We are committed to serving the
            best pizza money can buy
          </p>
        </div>

        <button className="home__orderButton">Order now</button>
      </div>
    </section>
  );
}
