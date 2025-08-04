function Board() {
    return(
        <div>
            {/* Icon Blocks */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-17">
  {/* Grid */}
  <div className="grid md:grid-cols-2 gap-12">
    <div className="lg:w-3/4">
      <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl">
       <span className="text-blue-500">IGENERGY</span> Vision !
      </h2>
      <p className="mt-3 text-gray-800">
        In recent years, IGENERGY  has shifted its focus toward building meaningful technology projects. We've participated in national Events to represent ENSTTIC and showcase our skills, gaining valuable experience and recognition. This shift has helped us grow both technically and as a team.
      </p>
      <p className="mt-5">
        <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="http://Derradji-gns.github.io/igenergyClub">
          check the website
          <svg className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </p>
    </div>
    {/* End Col */}

    <div className="space-y-6 lg:space-y-10">
      {/* Icon Block */}
      <div className="flex gap-x-5 sm:gap-x-8">
        {/* Icon */}
        <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs mx-auto">
          <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </span>
        <div className="grow">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            Diverse and rich documentations
          </h3>
          <p className="mt-1 text-gray-600">
            Our documentations are numerous and varied, and they help you discover your appropriate field and start in it .
          </p>
        </div>
      </div>
      {/* End Icon Block */}

      {/* Icon Block */}
      <div className="flex gap-x-5 sm:gap-x-8">
        {/* Icon */}
        <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs mx-auto">
          <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
        </span>
        <div className="grow">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            Academic community support
          </h3>
          <p className="mt-1 text-gray-600">
           Our platform includes many students and developers, which provides a suitable environment for progress .
          </p>
        </div>
      </div>
      {/* End Icon Block */}

      {/* Icon Block */}
      <div className="flex gap-x-5 sm:gap-x-8">
        {/* Icon */}
        <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs mx-auto">
          <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
        </span>
        <div className="grow">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            Unique and trending content
          </h3>
          <p className="mt-1 text-gray-600">
            IGENERGY is the only club in <strong>Algeria</strong> that provides such platforms for the benefit of students.
          </p>
        </div>
      </div>
      {/* End Icon Block */}
    </div>
    {/* End Col */}
  </div>
  {/* End Grid */}
</div>
{/* End Icon Blocks */}
        </div>

    );

}

export default Board;