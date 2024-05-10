import { SnackbarProvider } from "notistack";
import Routing from "./routing/Routing";


function App() {

  return (
    <SnackbarProvider maxSnack={1}>
     <Routing/> 
    </SnackbarProvider>
  );
}

export default App;
