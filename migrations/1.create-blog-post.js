const internalNameGen = require("../util/internal-name-generator");

module.exports = function (migration) {
  const blogPost = migration
    .createContentType("blogPost")
    .name("🧩 Blog Post")
    .description("Blueprint for blog posts");
  // .displayField("title");

  internalNameGen(blogPost); // add internal Name field

  // Fields -> https://www.contentful.com/developers/docs/concepts/data-model/

  const title = blogPost.createField("title");
  title
    .name("Title")
    .type("Symbol")
    .required(true)
    .validations([{ unique: true }]);

  //   Post Author field
  const author = blogPost.createField("author");
  author.name("Author Name").type("Symbol").required(true).validations([]);

  //   Post body field
  const body = blogPost.createField("body");
  body.name("Body").type("RichText").required(true).validations([]);
};
