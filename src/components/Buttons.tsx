export default function Buttons(props: ButtonsProps) {
  return (
    <>
      <div
        className={`h-12 absolute text-white text-center font-medium w-[345px] font-['Poppins'] transition-all ${
          props.type === "BLUE_TYPE" ? "top-[382px] right-[14.91px]" : ""
        } ${props.type === "BLUE_TYPE1" ? "top-[4995px] right-[15px]" : ""}`}
      >
        <div
          className="inset-0 absolute rounded bg-[rgba(0,158,247,1)]"
         />
        <p
          className="inset-x-2 h-6 absolute text-sm inline m-0 w-[329px] top-[calc(50%_-_12px_+_0px)] leading-[normal]"
        >
          {props.text}
        </p>
      </div>
    </>
  );
}

Buttons.defaultProps = {
  type: "BLUE_TYPE",
  text: "I’m a Notary",
};

interface ButtonsProps {
  type: "BLUE_TYPE" | "BLUE_TYPE1";
  text: string;
}

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
