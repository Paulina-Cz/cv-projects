import styles from "./App.module.css";
import FormWithOverlay from "./components/form-with-overlay/FormWithOverlay";
import ShoppingList from "./components/shopping-list/ShoppingList";

function App() {
  return (
    <div>
      <FormWithOverlay />
      <ShoppingList />
    </div>
  );
}

export default App;


