export const Navbar =({login, handlerLogout})=>{
     return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">UserApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <span className=" nav-item nav-link text-primary mx-3">
                {login.user?.username}
            </span>
             <button 
              onClick={handlerLogout}
             className="btn btn-outline-success">
                 Logout
             </button>
          </div>
        </div>
      </nav>

     );
}