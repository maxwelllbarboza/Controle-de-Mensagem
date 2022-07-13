import './styles.css'
import iconLogo from '../../assets/img/imglogo.svg'
function Header() {

  return (
    <>
      <header>
        <div className='dsmeta-logo-container'>
          <img src={iconLogo} alt="Dsmeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por
            <a href=''>Maxwell Ribeiro Barboza</a>
          </p>
        </div>
      </header>
    </>
  )
}
export default Header