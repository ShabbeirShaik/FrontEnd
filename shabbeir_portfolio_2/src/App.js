import './App.css';
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Content from './components/content/Content'
import About2 from './components/about/About2'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
      <>
      <Header/>
      <Content/>
      <About2/>
      <Projects/>
      <Contact/>
      <Footer/>
      </>

    </div>
  );
}

export default App;
