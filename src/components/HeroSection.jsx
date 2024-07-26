import frame from "../assets/frame.png";
import greenEllipse from "../assets/greenEllipse.png";
import rectangle from "../assets/rectangle.png";
import undraw from "../assets/undraw.png";
import yellowEllipse from "../assets/yellowEllipse.png";
const HeroSection = () => {
  return (
    <>
      <div className="mt-36 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex justify-center items-center h-[85vh]">
            <div className="absolute right-[45%] top-[35%]">
              <img src={greenEllipse} alt="ellipse" />
            </div>
            <div className="absolute top-56 left-14">
              <img src={yellowEllipse} alt="ellipse" />
            </div>
            <div className="absolute bottom-16 left-40">
              <img src={greenEllipse} alt="ellipse" />
            </div>
            <div>
              <p className="text-2xl sm:text-6xl font-bold flex-wrap">
                I'm Rayan Adlrdard
              </p>
              <p className="font-bold text-2xl sm:text-6xl">
                <span className="text-secondary">Front-end</span> Developer
              </p>
              <p className="mt-16 w-[600px] font-normal text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                volutpat feugiat placerat lobortis. Natoque rutrum semper sed
                suspendisse nunc lectus.
              </p>
              <button
                type="button"
                className="mt-16 bg-primary font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2"
              >
                <p className="flex gap-x-2">
                  HIRE ME <img src={frame} alt="button icon" />
                </p>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-[32%] right-[25%]">
              <img src={rectangle} alt="rectangle" />
            </div>
            <div className="absolute !bottom-0">
              <img src={undraw} alt="undraw" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
