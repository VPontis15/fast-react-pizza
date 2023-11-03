import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
import SearchOrder from "../features/order/SearchOrder";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(navigation.state);
  isLoading && <Loader />;
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <>
        <Header />
        <SearchOrder />
        <main>
          <Outlet />
        </main>
        <CartOverview />
      </>
    </div>
  );
}

export default AppLayout;
