import Components from "./component";
import utils from './utils';
import { Provider } from "react-redux";
import store from "./store";

const App = (WrapComponent) => {
  utils.log('App rendered !');
  return () => {
    return (
      <Provider store={store}>
        <div className="bg-black h-full w-full scrollbar-hide font-titillium">
          <WrapComponent />
        </div>
      </Provider>
    );
  }
}

export default App(Components);
