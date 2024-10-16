const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="Footer bg-gray-800 text-white flex py-4 mt-8 pt-5" >
        <div className=" bg-gray-800 mx-auto flex  lg:flex-row  px-4">
          <div className="  text-center lg:text-left mb-4 lg:mb-0 lg:mr-4">
            <span>Created  By</span>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-colors duration-300 mx-2"
            >
              { "  "}JJ Eshwar{" "}
            </a>
            <span className=" lg:inline">{"  "}|{ " "}</span>
            <strong className=" lg:inline mt-2 lg:mt-0">
              Food<span className="text-blue-400">Court</span>
            </strong>
          </div>
          <div className="text-center lg:text-right">
            <span className="text-gray-400">© {year}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;