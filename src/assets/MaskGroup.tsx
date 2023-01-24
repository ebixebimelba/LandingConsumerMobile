export default function MaskGroup(props: MaskGroupProps) {
  return (
    <div
      className="absolute w-[345px] h-[200px] top-[1470px] left-[calc(50%_-_172.5px_+_0px)]"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 345 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_2349_208555"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="345"
          height="200"
        >
          <rect width="345" height="200" rx="8" fill="white" />
        </mask>
        <g mask="url(#mask0_2349_208555)">
          <rect
            x="-1.0946"
            y="-6"
            width="348"
            height="212"
            rx="10"
            fill="url(#pattern-2349:208555-0)"
           />
        </g>
        <defs>
          <pattern
            id="pattern-2349:208555-0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_2349_208555"
              transform="translate(-0.0575096) scale(0.00029037 0.000476644)"
             />
          </pattern>
          <image
            id="image0_2349_208555"
            width="3840"
            height="2098"
            xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/e466638a-0fd8-4b44-a366-d957def4cc0b.webp"
           />
        </defs>
      </svg>
    </div>
  );
}

MaskGroup.defaultProps = {};

interface MaskGroupProps {}

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
