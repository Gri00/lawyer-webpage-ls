import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import Carousel from "../components/design_components/carousel/Carousel";

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        (result) => {
          alert("Poruka poslata!");
        },
        (error) => {
          alert("Došlo je do greške.");
        },
      );
  };

  return (
    <div className="p-10 flex justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-3 w-96"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Ime"
          className="border p-2"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="border p-2"
          required
        />
        <textarea
          name="message"
          placeholder="Poruka"
          className="border p-2"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2">
          Pošalji
        </button>
        {/* <div style={{ height: "600px", position: "relative" }}>
          <Carousel
            baseWidth={310}
            autoplay
            autoplayDelay={3000}
            pauseOnHover
            loop
            round
          />
        </div> */}
      </form>
    </div>
  );
}
