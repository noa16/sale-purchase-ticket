import React, { Component } from "react";
import { TicketConsumer } from "../../../TicketProvider";
import classes from "./TicketList.module.css";
import Title from "../../../UI/Title";
import { Link } from "react-router-dom";
const TicketList = (props) => {
  return (
    <div className={classes.card}>
      <Title />
      <div>price:{props.price}</div>
      <div>location:</div>
      <div>description:{props.description}</div>
      <Link to="/modal">
        <button
          onClick={() => {
            props.handlePurchaseSaleId(props.sale_id);
            props.handlePurchase(props.username, props.password, props.sale_id);
          }}
          disabled={props.isPurchase}
        >
          purchase
        </button>
      </Link>
    </div>
  );
};
export default TicketList;
