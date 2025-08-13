import React from "react";

const SubscribeToggle = ({ subscribed, setSubscribed }) => {
  return (
    <button
      onClick={() => setSubscribed(!subscribed)}
      className={`px-4 py-2 rounded text-white ${
        subscribed ? "bg-red-500" : "bg-green-500"
      }`}
    >
      {subscribed ? "Unsubscribe" : "Subscribe"}
    </button>
  );
};

export default SubscribeToggle;
