import logo from '../assets/reactjsicon.png';

function Header() {
  return (
    <header className='landing-header' >
      <div className='landing-left-header'>
        <img src= {logo} className='App-logo' alt='logo'/>
        <h3 className='facts-header'>ReactFacts</h3>
      </div>
      <div className='landing-right-header'>
        <h3 className='course-header'>React Course - Project 1</h3>
      </div>
    </header>
  )
}

export default Header;