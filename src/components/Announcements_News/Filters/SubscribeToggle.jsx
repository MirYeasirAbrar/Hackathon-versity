import React from "react";

const SubscribeToggle = ({ subscribed, setSubscribed }) => {
  return (
    <button
      className={`btn ${subscribed ? "btn-error" : "btn-success"} w-full md:w-auto`}
      onClick={() => setSubscribed(!subscribed)}
    >
      {subscribed ? "Unsubscribe" : "Subscribe"}
    </button>
  );
};

export default SubscribeToggle;
