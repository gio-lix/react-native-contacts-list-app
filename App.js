import AppNavContainer from "./src/navigations";
import GlobalProvider from "./src/context/Provider";

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};
export default App;
