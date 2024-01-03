const pagination = () => {
  return (
    <div className="flex justify-evenly place-items-center w-1/2">
      <div className="shadow-xl rounded-full">{"<<"}</div>
      <div className="rounded-full">1</div>
      <div className="rounded-full">2</div>
      <div className="rounded-full">3</div>
      <div className="rounded-full">4</div>
      <div className="rounded-full">{">>"}</div>
    </div>
  );
};

export default pagination;
