const ProjectCard = (props) => {
  return (
    <>
      <div className="flex flex-col bg-white border shadow-sm rounded-3xl h-full">
        <img
          className="w-full h-auto rounded-t-xl"
          src={`/projects/${props.image}`}
          alt="Card Image"
        />
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800">{props.title}</h3>
          <p className="mt-1 text-gray-500">{props.text}</p>
          <div className="flex flex-wrap gap-x-2">
            {props.tech.map((each, index) => (
              <p
                className="text-sm font-medium rounded-3xl bg-gray-200 uppercase mr-1 mt-4 py-2 px-4"
                key={index}
              >
                {each}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
