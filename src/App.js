import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utilites/appStore";


function App() {
  return (
    <Provider store={appStore}>
    <div className="text-3xl font-bold text-purple-400 text-center">
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
