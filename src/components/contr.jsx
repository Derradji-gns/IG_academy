import { FileUploadDemo } from "./update";

function Contr() {
    return(
        <div className="bg-gray-200">
            {/* Contact Us */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="max-w-2xl lg:max-w-5xl mx-auto">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
        Contribute
      </h1>
      <p className="mt-1 text-gray-600">
        We'd love to contribute us by upload documentations.
      </p>
    </div>

    <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
      {/* Card */}
      <div className="flex flex-col border bg-white border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8">
        <h2 className="mb-8 text-xl font-semibold text-gray-800">
          Fill in the form
        </h2>

        <form>
          <div className="grid gap-4">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="hs-firstname-contacts-1" className="sr-only">Doc Name</label>
                <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="First Name" />
              </div>

              <div>
                <label htmlFor="hs-lastname-contacts-1" className="sr-only">Last Name</label>
                <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Last Name" />
              </div>
            </div>
            {/* End Grid */}

            <div>
              <label htmlFor="hs-email-contacts-1" className="sr-only">Email</label>
              <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email" />
            </div>

            <div>
              <label htmlFor="hs-phone-number-1" className="sr-only"></label>
              <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Phone Number" />
            </div>

            <div>
              <label htmlFor="hs-about-contacts-1" className="sr-only">Details</label>
              <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Details"></textarea>
            </div>
          </div>
          {/* End Grid */}

          <div className="mt-4 grid">
            <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Send inquiry</button>
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">
              We'll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
      </div>
      {/* End Card */}

      <div className="divide-y divide-gray-200 bg-white">
       <FileUploadDemo/>
      </div>
    </div>
  </div>
</div>
{/* End Contact Us */}
        </div>

    );
}

export default Contr;