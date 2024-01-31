/*
 let's say you need to add a field to all you content types.
 A good example is the internal Name field

*/

const internalNameGen = (contentType) => {
  contentType.createField("internalName", {
    name: "Internal Name",
    type: "Symbol",
    required: true,
    validations: [{ unique: true }],
  });

  contentType.displayField("internalName");
};

module.exports = internalNameGen;
