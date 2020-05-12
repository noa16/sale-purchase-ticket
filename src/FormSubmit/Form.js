import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <article className={classes.contactform}>
      <form>
        <div class="form-group">
          <input
            type="text"
            placeholder="name"
            className={classes.formcontrol}
            name="name"
          />
          <input
            type="email"
            placeholder="email"
            className={classes.formcontrol}
            name="email"
          />
          <textarea
            name="message"
            placeholder="message"
            className={classes.formcontrol}
            rows="5"
          ></textarea>
        </div>

        <button type="submit" class="submit-btn btn">
          submit here
        </button>
      </form>
    </article>
  );
};

export default Form;
