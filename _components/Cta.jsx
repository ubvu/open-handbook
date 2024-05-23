function Cta() {
  return (
    <>
      <div className="tw-bg-sky-700 tw-rounded-xl">
      <div className="tw-px-6 tw-py-24 sm:tw-px-6 sm:tw-py-32 lg:tw-px-8">
        <div className="tw-mx-auto tw-max-w-2xl tw-text-center">
          <h2 className="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-4xl">
            Learn practices.
            <br />
            Share practices.
          </h2>
          <p className="tw-mx-auto tw-mt-6 tw-max-w-xl tw-text-lg tw-leading-8 tw-text-sky-200">
            Contribute by exploring. The rest will follow. 
          </p>
          <div className="tw-mt-10 tw-flex tw-items-center tw-justify-center tw-gap-x-6">
            <a
              href="./topics.html"
              className="tw-rounded-md tw-bg-white tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-sky-600 tw-shadow-sm hover:tw-bg-sky-50 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-white"
            >
              View topics
            </a>
            <a href="./pathways.html" className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-white">
              View pathways <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}
