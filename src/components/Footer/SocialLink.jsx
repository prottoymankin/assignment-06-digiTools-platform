const SocialLink = ({ imgSrc }) => {
  return (
    <a 
      className="bg-white rounded-full flex items-center justify-center h-10 w-10"
    >
      <img src={imgSrc} alt="" />
    </a>
  );
};

export default SocialLink;