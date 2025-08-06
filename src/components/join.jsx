import logo3 from "/public/graphics/logo3.jpg"

function Join() {

  const handleEmailClick = () => {
    window.location.href = 'mailto:amine.derradji@ensttic.dz?subject=Account Activation request=Sir I am writing to request the activation of my account on your platform / I completed the necessary steps regarding this matter.';
  };

    return (
      <div>
        {/* Approach */}
        <div className="bg-white">
          {/* Approach */}
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
            {/* Title */}
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-black font-semibold p-5 text-2xl md:text-4xl md:leading-tight">
                Registration Steps
              </h2>
              <p className="mt-1 text-black text-lg">
                To create an account and access hundreds of courses on the
                platform, you must follow some of the steps mentioned below .
              </p>
            </div>
            {/* End Title */}

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <img
                  className="w-full object-cover rounded-xl"
                  src={logo3}
                  alt="Features Image"
                />
              </div>
              {/* End Col */}

              {/* Timeline */}
              <div>
                {/* Heading */}
                <div className="mb-4">
                  <h3 className="text-blue-600 text-xs font-medium uppercase">
                    Steps
                  </h3>
                </div>
                {/* End Heading */}

                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                  {/* Icon */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full">
                        1
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}

                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-lg text-black">
                      <span className="text-blue-600 text-xl font-semibold">
                        Enter your informations :{" "}
                      </span>
                      <br />
                      Click "Get started" button , and enter your inforamtions
                      to create an account
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}

                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                  {/* Icon */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full">
                        2
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}

                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-lg text-black">
                      <span className="text-blue-600 text-xl font-semibold">
                        Send activation request :{" "}
                      </span>
                      <br />
                      Send an email message for activate your account , to get
                      the email adress click the email button
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}

                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                  {/* Icon */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full">
                        3
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}

                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-lg text-black">
                      <span className="text-blue-600 text-xl font-semibold">
                        Check your email box :
                      </span><br/>
                      After doing all the steps , you will receive an email message
                      to activate your account
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}

                <a
                onClick={handleEmailClick}
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-500 hover:bg-blue-600 font-medium text-sm text-white rounded-full focus:outline-hidden"
                  href="#"
                >
                  <svg className="w-auto h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="#fffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  Send email
                </a>
              </div>
              {/* End Timeline */}
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Approach */}
      </div>
    );
}

export default Join;