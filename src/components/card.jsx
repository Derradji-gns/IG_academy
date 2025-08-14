function Card({name, src, description}) {
    return(
        <div>
            {/* Card */}
            <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl">
              <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                <img src={src} alt={name} />
              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                  Atlassian API
                </span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {name}
                </h3>
                <p className="mt-3 text-gray-500">
                 {description}
                </p>
              </div>
              <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-600 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Save
                </a>
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Start
                </a>
              </div>
            </div>
            {/* End Card */}
        </div>

    );
}

export default Card;