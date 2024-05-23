function Hero() {
  return (
    <>
      <div className="tw-mx-auto tw-max-w-2xl tw-py-16">
        <div className="tw-hidden sm:tw-mb-8 sm:tw-flex sm:tw-justify-center">
          <div className="tw-relative tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-leading-6 tw-text-gray-600 tw-ring-1 tw-ring-gray-900/10 hover:tw-ring-gray-900/20">
            This is a new project. Missing something?{" "}
            <a href="https://ez-github-contributor.netlify.app/" className="tw-font-semibold tw-text-sky-600">
              <span className="tw-absolute tw-inset-0" aria-tw-hidden="true" />
              Let us know <span aria-tw-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="tw-text-center">
          <h1 className="tw-text-4xl tw-font-bold tw-tracking-tight tw-text-gray-900 sm:tw-text-6xl">
            Quality information, curated by your VU community
          </h1>
          <p className="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-600">
            Research is a collective effort. The Research Support Handbook helps you find and
            create the resources you need to get it done.
          </p>
          <div className="tw-mt-10 tw-flex tw-items-center tw-justify-center tw-gap-x-6">
            <a
              href="./topics.html"
              className="tw-rounded-md tw-bg-sky-600 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-sky-500 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-sky-600"
            >
              View all topics
            </a>
            <a
              href="./contributing.html"
              className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900"
            >
              Learn how to contribute <span aria-tw-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
