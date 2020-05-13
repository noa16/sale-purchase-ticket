import React, { useState, useEffect, useContext } from "react";
import classes from "./Form.module.css";
import {
  TicketConsumer,
  TicketProvider,
  TicketContext,
} from "../TicketProvider";

const Form = () => {
  const [email, setEmail] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(0);
  const [submit, setSubmit] = useState(false);
  const { handleSale } = useContext(TicketContext);

  useEffect(() => {
    if (submit === true) {
      handleSale(email, description, price);
      setSubmit(false);
    }
  }, [submit === true]);

  return (
    <article className={classes.contactform}>
      <section>
        <div class="form-group">
          <input
            type="text"
            placeholder="email"
            className={classes.formcontrol}
            name="name"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="price"
            className={classes.formcontrol}
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <textarea
            name="message"
            type="text"
            placeholder="message"
            className={classes.formcontrol}
            rows="5"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button className={classes.submitbtn} onClick={() => setSubmit(true)}>
          submit
        </button>
      </section>
    </article>
  );
};

export default Form;
