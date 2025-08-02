function Stat() {
    return (
      <div>
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
            {/* Stats */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                Members
              </h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                3k
              </p>
              <p className="mt-1 text-gray-500">This year only</p>
            </div>
            {/* End Stats */}

            {/* Stats */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                Active Contributors
              </h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                59+
              </p>
              <p className="mt-1 text-gray-500">This session only</p>
            </div>
            {/* End Stats */}

            {/* Stats */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                Documentation
              </h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                400+
              </p>
              <p className="mt-1 text-gray-500">last 6 months</p>
            </div>
            {/* End Stats */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </div>
    );
}

export default Stat;