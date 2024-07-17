import { componentMap } from "@/components/contentful/common/mapping";
import React, { useRef } from "react";

const ComponentResolver = React.forwardRef((props: any, ref) => {
  const { field } = props;
  const entryId = field?.sys?.id;
  const contentType = field?.sys?.contentType?.sys?.id;

  const Component = componentMap[contentType];
  if (!Component) {
    return null;
  }

  return (
    <div className=" max-h-fit ">
      <Component {...field} {...props} className={props.className} />
    </div>
  );
});

ComponentResolver.displayName = "ComponentResolver";
export default ComponentResolver;
