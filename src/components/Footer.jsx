import logo from "../assets/Logo.png";

const content = [
  "4.5/5 rating on Lorem ",
  "9/10 rating on Ipsum",
  "4.5/5 Rating on dorel",
];

const quickLinks = [
  "Home",
  "Skills",
  "Education",
  "Projects",
  "Recommendations",
];

const portfolio = [
  "Frontend Development",
  "Backend Development",
  "Website design",
  "Machine Learning",
  "Problem Solving & DSA",
];

const Footer = () => {
  return (
    <>
      <div className="mx-12 sm:mx-36 mt-24">
        <div className="pb-20">
          <img src={logo} alt="logo" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12">
          <div>
            {content.map((each, index) => (
              <div className="mb-6" key={index}>
                <img src={`/footer/footer${index + 1}.png`} alt={each} />
                <p className="text-sm">{each}</p>
              </div>
            ))}
          </div>
          <div className="sm:ml-36">
            <p className="text-2xl font-semibold mb-5">Quick Links</p>
            {quickLinks.map((each, index) => (
              <p className="text-lg mb-2" key={index}>
                {each}
              </p>
            ))}
          </div>
          <div className="sm:ml-36">
            <p className="text-2xl font-semibold mb-5">Portfolio</p>
            {portfolio.map((each, index) => (
              <p className="text-lg mb-2" key={index}>
                {each}
              </p>
            ))}
          </div>
          <div className="sm:ml-36">
            <p className="text-2xl font-semibold mb-5">Connect</p>
            {content.map((_, index) => (
              <img
                src={`/footer/social${index + 1}.png`}
                alt="Social Contact"
                className="mb-6"
                key={index}
              />
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Footer;
