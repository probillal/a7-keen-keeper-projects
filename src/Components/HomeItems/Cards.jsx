const Cards = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10 my-6">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold">16</h2>
          <p>Friends</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold">03</h2>
          <p>On Track</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold">06</h2>
          <p>Need Attention</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold">12</h2>
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
