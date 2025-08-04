import Form from "./form";
import { Link } from "react-router-dom";

function Auth() {
    return (
        <div className="flex justify-center items-center   ">
           <div className="mt-7 bg-white w-130 border border-gray-200 rounded-xl shadow-2xs">
  <div className="p-4 sm:p-7 w-full">
    <div className="text-center">
      <h1 className="block text-2xl font-bold text-gray-800">Sign in</h1>
      
      
      <p className="mt-2 text-sm text-gray-600 inline">
        Don't have an account yet? </p>
        <Link to="/Form">
        <a className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" >
          Sign up here
        </a> </Link>
      
    </div>

    <div className="mt-5">
      <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs disabled hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
<svg className="w-auto h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6586 15.493L13.8426 6.04498C13.4589 5.39724 12.762 5 12.0091 5C11.2563 5 10.5593 5.39724 10.1756 6.04498L4.35861 15.493C3.91876 16.1817 3.88094 17.0531 4.25947 17.7773C4.63801 18.5016 5.37505 18.968 6.19161 19H17.8256C18.6422 18.968 19.3792 18.5016 19.7577 17.7773C20.1363 17.0531 20.0985 16.1817 19.6586 15.493Z" stroke="#ff0000" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0086 13V8" stroke="#ff0000" stroke-width="1.56" stroke-linecap="round"></path> <path d="M12.0086 16V15" stroke="#ff0000" stroke-width="1.56" stroke-linecap="round"></path> </g></svg>
        You can sign in only if your account is activated
      </button>

      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">Or</div>

      {/* Form */}
      <form>
        <div className="grid gap-y-4">
          {/* Form Group */}
          <div>
            <label htmlFor="email" className="block text-sm mb-2">Email address</label>
            <div className="relative">
              <input type="email" id="email" name="email" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error" />
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              </div>
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
          </div>
          {/* End Form Group */}

          {/* Form Group */}
          <div>
            <div className="flex flex-wrap justify-between items-center gap-2">
              <label htmlFor="password" className="block text-sm mb-2">Password</label>
            </div>
            <div className="relative">
              <input type="password" id="password" name="password" className="py-2.5 sm:py-3 px-4 block w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="password-error" />
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              </div>
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
          </div>
          {/* End Form Group */}

          {/* Checkbox */}

          {/* End Checkbox */}
 <button type="submit" className="w-full  py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Sign in</button>
        </div>
      </form>
      {/* End Form */}
    </div>
  </div>
</div>
        </div>
    )
};

export default Auth;