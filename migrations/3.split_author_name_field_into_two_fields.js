/*
  Split the author name field into two fields (first name and last name)
*/

module.exports = function (migration) {
  const blogPost = migration.editContentType("blogPost");

  // Create two new fields for first name and last name of the author

  const authorFirstName = blogPost.createField("authorFirstName");
  authorFirstName
    .name("Author's First Name")
    .type("Symbol")
    .required(true)
    .validations([]);

  const authorLastName = blogPost.createField("authorLastName");
  authorLastName
    .name("Author's Last Name")
    .type("Symbol")
    .required(true)
    .validations([]);

  // Transform existing post entries to split the author name and populate the new fields

  migration.transformEntries({
    contentType: "blogPost",
    from: ["author"],
    to: ["authorFirstName", "authorLastName"],
    transformEntryForLocale: function (fromFields, currentLocale) {
      // Get the current author name from the existing field
      const currentAuthorName = `${fromFields?.author[currentLocale]}`;

      // If no author name, no need to transform
      if (!fromFields?.author || currentAuthorName === undefined) {
        return;
      }

      // Split the existing author name
      const [authorFirstName, authorLastName] = currentAuthorName.split(" ");

      return {
        authorFirstName,
        authorLastName,
      };
    },
  });

  // Disable and omit the existing author field

  blogPost.editField("author").disabled(true).omitted(true);
};
