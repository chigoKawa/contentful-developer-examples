const internalNameGen = require("../util/internal-name-generator");
const AUTHOR_CONTENTTYPE_ID = "author";
module.exports = function (migration) {
  const blogPost = migration.editContentType("blogPost");
  blogPost.moveField("authorRef").afterField("title");
  console.log("blogPost", blogPost.editField("authorRef"));
};
