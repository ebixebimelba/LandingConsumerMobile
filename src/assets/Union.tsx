export default function Union(props: UnionProps) {
  return (
    <div className="w-4 left-0 top-0.5 absolute h-[13px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 16 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 5.153 1.313 C 5.305 1.083 5.556 0.957 5.806 0.907 C 6.056 0.856 6.325 0.878 6.554 1.032 C 7.011 1.338 7.139 1.978 6.834 2.438 L 3.254 5.883 H 15 C 15.552 5.883 16 6.331 16 6.883 C 16 7.435 15.552 7.883 15 7.883 H 3.269 L 6.834 11.313 C 7.139 11.772 7.011 12.413 6.554 12.719 C 6.096 13.026 5.458 12.897 5.153 12.438 L 0.438 7.71 C 0.333 7.639 0.242 7.548 0.171 7.442 L 0.167 7.438 C 0.131 7.384 0.101 7.327 0.076 7.267 C 0.027 7.149 0 7.019 0 6.883 C 0 6.882 2.044e-06 6.88 6.128e-06 6.879 C-0.001 6.681 0.055 6.482 0.167 6.313 L 0.207 6.274 C 0.259 6.205 0.321 6.144 0.389 6.091 L 5.153 1.313 Z"
          fill="#B3B6C5"
         />
      </svg>
    </div>
  );
}

Union.defaultProps = {};

interface UnionProps {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
