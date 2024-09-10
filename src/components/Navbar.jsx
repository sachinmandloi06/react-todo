import Logo from "../assets/react.svg"

const Navbar = ({dark,todos}) => {
    
    return (
        
    <nav className={dark? "navbar bg-dark" : "navbar bg-light shadow-lg"}>
    <div className="container">
      <a className={dark? "navbar-brand text-white" : "navbar-brand"} href="#">
        <img 
        src={Logo}
         alt="Logo"
          width="30"
           height="24"/>
        
      </a>
      <p className={dark? "text-white h5" : "h5"}> Todos : {todos.length}</p>
    </div>
  </nav>
    )
}

export default Navbar;