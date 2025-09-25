import { useRef, useState } from 'react';

export const Accordion = ({ faq }) => {
  const questionBtn = useRef()
  const [show, setShow] = useState(false);
  const { question, answer } = faq;





  return (
    <div className=" mb-4 ">
      <h2 id="accordion-flush-heading-1">
        <button
          ref={questionBtn}
          onClick={() => { setShow(!show) }}
          type="button"
          className="flex gap-3 items-center justify-between w-full p-4 font-medium text-left  bg-green-100"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"

        >
          <span className="pointer-events-none text-green-800 ">{question}</span>
          {!show && (
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          {show && (
            <svg
              data-accordion-icon
              className="rotate-180 w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </h2>
      {show && (
        <div
          id="accordion-flush-body-1"
          className="p-6 border-b border-l border-r border-b-gray-200"
          aria-labelledby="accordion-flush-heading-1"
        >
          <div>
            <p className="mb-2 text-gray-600">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
