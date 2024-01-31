const internalNameGen = require("../util/internal-name-generator");
const AUTHOR_CONTENTTYPE_ID = "author";
module.exports = function (migration) {
  const author = migration
    .createContentType(AUTHOR_CONTENTTYPE_ID)
    .name("🧩 Author")
    .displayField("firstName");

  // internalNameGen(author);

  author
    .createField("firstName")
    .type("Symbol")
    .name("First Name")
    .required(true);
  author
    .createField("lastName")
    .type("Symbol")
    .name("Last Name")
    .required(true);

  // EDIT blog post type, Add a new reference (1-1) field to hold author

  const blogPost = migration.editContentType("blogPost");
  blogPost
    .createField("authorRef")
    .type("Link")
    .linkType("Entry")
    .name("Post Author")
    .validations([{ linkContentType: [AUTHOR_CONTENTTYPE_ID] }]);

  // derive new 'author' entries from existing values in Blog posts

  migration.deriveLinkedEntries({
    contentType: "blogPost",
    derivedContentType: "author",
    from: ["authorFirstName", "authorLastName"],
    toReferenceField: "authorRef",
    derivedFields: ["firstName", "lastName"],
    identityKey: async (fromFields) => {
      const firstName = fromFields.authorFirstName["en-US"];
      const lastName = fromFields.authorLastName["en-US"];

      return `${firstName}-${lastName}`;
    },

    deriveEntryForLocale: async (inputFields, locale) => {
      // validate that there is a locale. will be undefined if field is empty

      if (locale !== "en-US") {
        return;
      }
      const firstName = inputFields.authorFirstName[locale];
      const lastName = inputFields.authorLastName[locale];

      return { firstName, lastName };
    },
  });

  //   Disable the redundant fields
  blogPost.editField("authorFirstName").disabled(true);
  blogPost.editField("authorLastName").disabled(true);
};
