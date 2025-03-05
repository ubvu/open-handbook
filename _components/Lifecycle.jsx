// import { CheckIcon } from '@heroicons/react/24/solid'

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="tw-size-6 tw-text-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
};

// complete, current, upcoming
const steps = [
  { id: "01", name: "Discover & Initiate", href: "./guides.html#category=Discover%20%26%20Initiate", status: "upcoming" },
  { id: "02", name: "Plan & Design", href: "./guides.html#category=Plan%20%26%20Design", status: "upcoming" },
  { id: "03", name: "Collect & Store", href: "./guides.html#category=Collect%20%26%20Store", status: "upcoming" },
  { id: "04", name: "Process & Analyse", href: "./guides.html#category=Process%20%26%20Analyse", status: "upcoming" },
  { id: "05", name: "Document & Preserve", href: "./guides.html#category=Document%20%26%20Preserve", status: "upcoming" },
  { id: "06", name: "Publish & Share", href: "./guides.html#category=Publish%20%26%20Share", status: "upcoming" },
];

// Adapted from
// https://tailwindui.com/components/application-ui/navigation/progress-bars#component-ebd95eb76948b1f97351bc44b63203aa
function Lifecycle() {
  return (
    <>
      <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
        <div className="tw-mx-auto tw-max-w-2xl sm:tw-text-center">
          <h2 className="tw-mt-2 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-sky-900 sm:tw-text-4xl">
            Research Life Cycle
          </h2>
          <p className="tw-m-6 tw-text-lg tw-leading-8 tw-text-gray-600">
            Find the relevant guides for the stage of your research.
          </p>
        </div>
      </div>
      <ol
        role="list"
        className="lg:-tw-ml-32 tw-divide-y tw-divide-gray-300 tw-rounded-md tw-border tw-border-gray-300 lg:tw-flex lg:tw-divide-y-0 tw-list-none"
      >
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="tw-relative md:tw-flex md:tw-flex-1">
            {step.status === "complete" ? (
              <a
                href={step.href}
                className="tw-group tw-flex tw-w-full tw-items-center"
              >
                <span className="tw-flex tw-items-center tw-px-6 tw-py-4 tw-text-sm tw-font-medium">
                  <span className="tw-flex tw-size-10 tw-min-w-10 tw-items-center tw-justify-center tw-rounded-full tw-bg-sky-600 group-hover:tw-bg-sky-800">
                    <CheckIcon
                      aria-hidden="true"
                      className="tw-size-6 tw-text-white"
                    />
                  </span>
                  <span className="tw-ml-4 tw-text-sm tw-font-medium tw-text-gray-900">
                    {step.name}
                  </span>
                </span>
              </a>
            ) : step.status === "current" ? (
              <a
                href={step.href}
                aria-current="step"
                className="tw-flex tw-items-center tw-px-6 tw-py-4 tw-text-sm tw-font-medium"
              >
                {/* <span className="tw-flex tw-size-10 tw-w-0 tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-sky-600">
                  <span className="tw-text-sky-600">{step.id}</span>
                </span> */}
                <span className="tw-ml-4 tw-text-sm tw-font-medium tw-text-sky-600">
                  {step.name}
                </span>
              </a>
            ) : (
              <a href={step.href} className="tw-group tw-flex tw-items-center">
                <span className="tw-flex tw-items-center tw-px-6 tw-py-4 tw-text-sm tw-font-medium">
                  <span className="tw-flex tw-size-10 tw-0 tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-gray-300 group-hover:tw-border-gray-400">
                    <span className="tw-text-gray-500 group-hover:tw-text-gray-900">
                      {step.id}
                    </span>
                  </span>
                  <span className="tw-ml-4 tw-text-sm tw-font-medium tw-text-gray-500 group-hover:tw-text-gray-900">
                    {step.name}
                  </span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  aria-hidden="true"
                  className="tw-absolute tw-top-0 tw-right-0 tw-hidden tw-h-full tw-w-5 lg:tw-block"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 22 80"
                    preserveAspectRatio="none"
                    className="tw-size-full tw-text-gray-300"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </>
  );
}
