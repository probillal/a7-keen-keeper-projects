const Friend = ({ friend }) => {
  const { picture, name, days_since_contact, status, tags } = friend;
  return (
    <div>
      <div className="card bg-base-200 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-full w-20 h-20" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{days_since_contact}d ago</p>
          <div className="flex gap-5">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge text-green-500 bg-green-100 font-semibold"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="card-actions">
            <h2
              className={`badge font-semibold
    ${
      status === "active"
        ? "bg-green-700 text-white"
        : status === "pending"
          ? "bg-yellow-100 text-yellow-600"
          : "bg-red-100 text-red-600"
    }
  `}
            >
              {status}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
