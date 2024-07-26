const SkillsCard = (props) => {
  return (
    <>
      <div className="bg-white p-12 h-full">
        <p className="text-2xl font-semibold mb-7">{props.title}</p>
        {props.tech.map((each, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between">
              <p>{each.techName}</p>
              <p>{each.percent}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-secondary h-2.5 rounded-full"
                style={{width: `${each.percent}%`}}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillsCard;
