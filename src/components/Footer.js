const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center px-4">
          <div className="text-center lg:text-left mb-4 lg:mb-0 lg:mr-4">
            {/* <span>Created By</span>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-colors duration-300 mx-2"
            >
              JJ Eshwar
            </a>
            <span className="hidden lg:inline">|</span>
            <strong className="block lg:inline mt-2 lg:mt-0">
              Food<span className="text-blue-400">Court</span>
            </strong>
          </div>
          <div className="text-center lg:text-right">
            <span className="text-gray-400">© {year}</span> */}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;