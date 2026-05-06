const Banner = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-10">
        Friends to keep close in your life
      </h2>
      <p className="text-xs text-center text-gray-500 mt-2">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <div className="flex justify-center mt-4">
        <button className="btn bg-green-700 text-white ">+ Add a Friend</button>
      </div>
    </div>
  );
};

export default Banner;
