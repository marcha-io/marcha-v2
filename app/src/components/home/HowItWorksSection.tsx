import React from 'react';


type Prop = {};

// TODO: Add the section of how it works currently we redirect to homepage again (wow!)

const HowItWorksSection = (_: Prop): React.ReactElement => {
  return (
    <section aria-labelledby="perks-heading" className="border-b border-gray-200 bg-white">
      <h2 id="perks-heading" className="sr-only">How it works</h2>
      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
            <div className="md:flex-shrink-0">
              <div className="flow-root">
                <svg xmlns="http://www.w3.org/2000/svg" className="-my-1 mx-auto h-24 w-auto text-gray-700 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                </svg>
              </div>
            </div>
            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-base font-medium text-gray-900">Upload your item</h3>
              <p className="mt-3 text-sm text-gray-500">Start off by listing the items you wish to barter. After choosing the category, you can go into the details</p>
            </div>
          </div>
          <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
            <div className="md:flex-shrink-0">
              <div className="flow-root">
                <svg xmlns="http://www.w3.org/2000/svg" className="-my-1 mx-auto h-24 w-auto text-gray-700 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
            </div>
            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-base font-medium text-gray-900">Browse & send an offer</h3>
              <p className="mt-3 text-sm text-gray-500">Find something you like? Choose one of your listings & send an offer. You have the option of adding cash as well.</p>
            </div>
          </div>
          <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
            <div className="md:flex-shrink-0">
              <div className="flow-root">
                <svg xmlns="http://www.w3.org/2000/svg" className="-my-1 mx-auto h-24 w-auto text-gray-700 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-base font-medium text-gray-900">Close the deal</h3>
              <p className="mt-3 text-sm text-gray-500">Once both parties have agreed to swap, you can choose the delivery method. For meet-ups, you can decide on a location.</p>
            </div>
          </div>
          <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
            <div className="md:flex-shrink-0">
              <div className="flow-root">
                <svg xmlns="http://www.w3.org/2000/svg" className="-my-1 mx-auto h-24 w-auto text-gray-800 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
              </div>
            </div>
            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-base font-medium text-gray-900">Receive & Review</h3>
              <p className="mt-3 text-sm text-gray-500">Once you have recived your parcel, mark your item as delivered and leave a review for your trade partner. That’s it! </p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-right mt-12 px-4">
          <a href="/" className="text-sm font-semibold text-marcha hover:text-marchaDark">
            How it works
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
