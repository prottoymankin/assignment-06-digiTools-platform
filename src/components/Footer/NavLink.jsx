const NavLink = ({title, linkList}) => {
  return (
    <nav className="flex flex-col gap-4 font-thin">
      <h6 className="font-medium text-white text-xl">
        {title}
      </h6>

      {
        linkList.map((link, index) => (
          <a 
            key={index}
            className="link link-hover"
          >
            {link}
          </a>
        ))
      }
    </nav>
  );
};

export default NavLink;