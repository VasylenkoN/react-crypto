import {CryptoContextProvider} from "./context/crypto-context.jsx";
import AppLayout from "./components/AppLayout.jsx";


export default function App() {
  return (
    <CryptoContextProvider>
        <AppLayout/>
    </CryptoContextProvider>)

}
