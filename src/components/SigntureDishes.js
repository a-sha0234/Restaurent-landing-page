export default function SignatureDishes(props) {
  console.log(props);
  return (
    <section className="dishContainer">
      <div className="dishes" id="dishes">
        <div className="dish__imageContainer">
          <img
            src={props.dish.url}
            alt="picture of dish"
            className="dish__image"
          />
        </div>
        <div className="dish__details">
          <div className="dishes__description">
            <p>{props.dish.name}</p>
            <p>{props.dish.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
