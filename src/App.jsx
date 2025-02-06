import Profile from './components/Profile'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Workexp from './components/Workexp'
function App() {

  return (
    <>
        <Profile/>
        <Contact 
          email="markstevenalcovindas837@gmail.com" 
          phone="0910-849-1238" 
          address="San Antonio (Sapa), Pilar, Sorsogon"/>

        <Skills/>
        <Workexp/>
    </>
  )
}
export default App
