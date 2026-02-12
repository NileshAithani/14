// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./component/Layout/layout";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import MemoriesPage from "./pages/ValentineCard/CelebrationMessage/MemoriesPage";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/memories" element={<MemoriesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
