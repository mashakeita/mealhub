import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Deck from "./components/Deck/Deck";
import Header from "./components/Header/Header";
import "../src/styles/App.scss";

function App() {
  return (
    <div>
      <Header />
    </div>
    // <BrowserRouter>

    //   <Routes>
    //     {/* <Redirect from="/" to="/warehouses" exact />
    //     <Route path="/warehouses" component={Warehouses} exact />
    //     <Route path="/warehouses/add" component={AddWarehouse} />
    //     <Route path="/warehouses/edit/:id" component={EditWarehouse} />
    //     <Route path="/warehouses/:id" component={WarehouseDetails} />
    //     <Route path="/inventory" component={Inventories} exact />
    //     <Route path="/inventory/details/:id" component={InventoryItemDetails} />
    //     <Route path="/inventory/edit/:id" component={EditInventoryItem} />
    //     <Route path="/inventory/add" component={AddInventoryItem} /> */}
    //   </Routes>
    //   {/* <Footer /> */}
    // </BrowserRouter>
  );
}

export default App;
