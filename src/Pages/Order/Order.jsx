import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Order Completed!</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Order;
