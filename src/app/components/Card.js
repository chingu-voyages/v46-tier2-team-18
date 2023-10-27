export default function Card() {
  return (
    <>
      <div className="card m-4 card-compact w-64 bg-base-100 shadow-xl transition duration-300 ease-in-out hover:scale-105">
        <figure>
          <img
            src="https://images.pexels.com/photos/5358735/pexels-photo-5358735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Curry"
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start">
            <div className="badge badge-outline">Soup</div>
          </div>
          <h2 className="card-title">Spicy Hotpot</h2>
          <p>One sentence summary of the recipe</p>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral-content hover:group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              View Recipe!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
