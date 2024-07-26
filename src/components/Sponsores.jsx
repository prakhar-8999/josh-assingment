const Sponsores = () => {
  return (
    <>
      <div className="mx-9 sm:mx-56 mt-16">
        <div className="flex justify-between flex-wrap">
          {Array.from({length: 4}, (_, i) => i + 1).map((each, index) => (
            <img
              src={`/sponsors/${each}.png`}
              alt={`image${each}`}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsores;
