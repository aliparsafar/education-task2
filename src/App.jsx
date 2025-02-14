import { Footer } from "./component/footer/footer"
import { Header } from "./component/header/header"
import { Mainsec } from "./component/mainsection/mainsec"
import { Nav } from "./component/navbar/nav"


function App() {
  

  return(
    <div>
      <Nav />
      <Header />
      <main>
        <Mainsec />
      </main>
        
      <Footer />
    </div>
  )
    
}

export default App
