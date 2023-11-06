export default function Card({ title, imageUrl, tag, name }) {
  const badgeClassNames = tag.length > 0 ? "badge badge-outline" : "";
  console.log(tag);
  return (
    <>
      <div className="w-64 m-4 transition duration-300 ease-in-out shadow-xl card card-compact bg-base-100 hover:scale-105">
        <figure>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title} // Use the title as alt text for accessibility
            />
          ) : (
            <span className="mt-12 loading loading-ring loading-lg"></span>
          )}
        </figure>
        <div className="card-body">
          <div className="justify-start card-actions">
            {tag && <div className={badgeClassNames}>{tag}</div>}
          </div>
          <h2 className="card-title">{title}</h2>
          <p>{name}</p>
          <div className="justify-end card-actions">
            {tag.length > 0 && (
              <button className="mt-3 btn bg-amber-100 hover:group hover:bg-amber-200 hover:border-amber-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-2"
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}
