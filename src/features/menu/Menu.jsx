import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData(loader);
  return (
    <ul>
      {menu.map((pizza) => {
        return <MenuItem pizza={pizza} />;
      })}
    </ul>
  );
}
async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
export { loader };
