//3. Create Store
import { createStore } from "redux";
import reducer from "./redux/bookReduce";
export const store = createStore(reducer);
