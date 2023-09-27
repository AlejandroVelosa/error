import './App.css'
import imagen from "./assets/Scarecrow.png"

function App() {


  return (
    <article className='app'>
      <header className='app_title'>
        <h1>404 NOT FOUND </h1>
      </header>
      <section className='app_container'>
        <img className='app_container-img' src={imagen} alt="error imagen" />
        <div className='app_container-text'>
          <h2 className='tex_uno'>I have bad news for you</h2>
          <p className='tex_dos'> the page you are looking for might be removed or is temporarily unavailable</p>
          <button className='app_container_button'><span>Back To homepage</span></button>
        </div>
      </section>
      <footer className='footer-container'>
        <h3 className='footer_text'>create by <a target='_blank' href="https://alejandro-velosa-portfolio.netlify.app/">AlejoDesign</a> - devChallenges.io</h3>
      </footer>
    </article>
  )
}

export default App
