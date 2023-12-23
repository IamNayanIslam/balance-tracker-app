import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Home || Router Practice";
  });
  return (
    <div>
      <h1>This is the home page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero animi
        vitae ab velit, aut nostrum atque reprehenderit quidem quod numquam
        facere praesentium eligendi, voluptatibus officiis delectus. Error vitae
        iste neque nostrum numquam sunt, exercitationem fugit odio alias
        praesentium nulla illum modi? Itaque distinctio necessitatibus ipsa
        aperiam nihil est consectetur enim omnis ad minus quos quod beatae
        repellendus laboriosam sapiente ipsam a rem maxime, eos, vitae quam,
        unde nobis temporibus aut. Repudiandae quidem corrupti ducimus, illum
        quod in numquam ullam. Iure sed dolorem nobis tenetur veniam laudantium
        officiis corporis libero voluptas at natus nihil consectetur optio
        aliquid, sint autem quas voluptatibus? Suscipit veniam accusantium
        quaerat consequuntur aliquid, eius rem libero sint eos sit, vero natus
        consectetur sequi? Modi assumenda doloremque odit!
      </p>
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero animi
        vitae ab velit, aut nostrum atque reprehenderit quidem quod numquam
        facere praesentium eligendi, voluptatibus officiis delectus. Error vitae
        iste neque nostrum numquam sunt, exercitationem fugit odio alias
        praesentium nulla illum modi? Itaque distinctio necessitatibus ipsa
        aperiam nihil est consectetur enim omnis ad minus quos quod beatae
        repellendus laboriosam sapiente ipsam a rem maxime, eos, vitae quam,
        unde nobis temporibus aut. Repudiandae quidem corrupti ducimus, illum
        quod in numquam ullam. Iure sed dolorem nobis tenetur veniam laudantium
        officiis corporis libero voluptas at natus nihil consectetur optio
        aliquid, sint autem quas voluptatibus? Suscipit veniam accusantium
        quaerat consequuntur aliquid, eius rem libero sint eos sit, vero natus
        consectetur sequi? Modi assumenda doloremque odit!
      </p>
      <button onClick={() => navigate("order", { replace: true })}>
        Place Order
      </button>
    </div>
  );
}

export default Home;
