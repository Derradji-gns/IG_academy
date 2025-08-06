function Feed() {
    return(
        <div>
           {/* Comment Form */}
<div className="  bg-gray-200 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="mx-auto max-w-2xl">
    <div className="text-center">
      <h2 className="text-xl text-blak font-bold sm:text-3xl">
        Post a comment
      </h2>
    </div>

    {/* Card */}
    <div className="mt-5 p-4 relative z-10 bg-white border border-gray-200 rounded-xl sm:mt-10 md:p-10">
      <form>
        <div className="mb-4 sm:mb-8">
          <label htmlFor="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium">Full name</label>
          <input type="text" id="hs-feedback-post-comment-name-1" className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Full name" />
        </div>

        <div className="mb-4 sm:mb-8">
          <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium">Email address</label>
          <input type="email" id="hs-feedback-post-comment-email-1" className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email address" />
        </div>

        <div>
          <label htmlFor="hs-feedback-post-comment-textarea-1" className="block mb-2 text-sm font-medium">Comment</label>
          <div className="mt-1">
            <textarea id="hs-feedback-post-comment-textarea-1" name="hs-feedback-post-comment-textarea-1" rows="3" className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Leave your comment here..."></textarea>
          </div>
        </div>

        <div className="mt-6 grid">
          <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
        </div>
      </form>
    </div>
    {/* End Card */}
  </div>
</div>
{/* End Comment Form */}
        </div>

    );
}

export default Feed;