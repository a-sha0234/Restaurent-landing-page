export default function ContactForm() {
  return (
    <section className="contact" id="contact">
      <form className="contact__form">
        <label>Name</label>
        <input></input>

        {/*  */}
        <label>Question</label>
        <input></input>
        <button>Submit</button>
      </form>

      <div className="contact__details">
        <p>Telephone number: 03247347234</p>
        <p>Email Address: fake123@123.co.uk</p>
      </div>
    </section>
  );
}
