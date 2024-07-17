import React from "react";
import ComponentResolver from "./component-resolver";

function ReferenceFieldMapper({ fields }: { fields: any }) {
  if (Array.isArray(fields)) {
    return (
      <>
        {fields.map((field, fx): JSX.Element => {
          return (
            <ComponentResolver
              key={`key-${field?.sys?.id}-${fx}`}
              field={field}
            />
          );
        })}
      </>
    );
  }

  return <></>;
}

export default ReferenceFieldMapper;
