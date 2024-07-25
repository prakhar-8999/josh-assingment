import star from "../assets/star.png";
const RecommendationsCard = (props) => {
  return (
    <>
      <div class="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5">
        <div className="flex items-center gap-x-5">
          {Array.from({length: 5}, (_, i) => i).map(() => (
            <img src={star} alt="star" className="!h-7 !w-7" />
          ))}
        </div>
        <h3 class="text-lg text-start font-bold mt-3 text-gray-800">
          {props.title}
        </h3>

        <p class="mt-2 text-start text-gray-500">{props.text}</p>
        <div class="flex items-center justify-center mt-5">
          <img
            class="rounded-full !w-16 !h-16"
            src={`profile/${props.image}`}
            alt="profile picture"
          />
          <div class="space-y-0.5 font-medium text-left rtl:text-right ms-3">
            <div>{props.name}</div>
            <div class="text-sm text-gray-500">{props.desg}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationsCard;
