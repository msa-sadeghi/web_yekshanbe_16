import Header from "./compontents/Header"
import { CardProvider } from "./compontents/CardProvider"
import Card from "./compontents/Card"
function App(){
    return(
      <div>
        <CardProvider>
          <Header/>
          <Card/>
        </CardProvider>
      </div>
    )
}
export default App