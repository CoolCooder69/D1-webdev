import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => (
  <AnimatedCursor
    innerSize={10}
    outerSize={34}
    color="245, 190, 70"
    outerAlpha={0.25}
    innerScale={1}
    outerScale={1.3}
    clickables={["a", "button", "input", "label", "select", "textarea", ".link"]}
    innerStyle={{ backgroundColor: "#F5C24B" }}
    outerStyle={{ border: "2px solid rgba(245, 194, 75, 0.5)" }}
  />
);

export default CustomCursor;