function Footer (){
    return <footer className="page-footer blue darken-4">

        <div className="footer-copyright">
        <div className="container  blue-grey-text text-lighten-5">
        © {new Date().getFullYear()} Copyright
        <a className="blue-grey-text text-lighten-4 right" href="#!">Repo</a>
        </div>
        </div>
  </footer>
}

export {Footer}