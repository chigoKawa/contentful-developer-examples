const contentful = require("contentful-management");

module.exports = async function (
  migration,
  { spaceId, accessToken, environmentId }
) {
  const client = contentful.createClient({
    accessToken,
  });

  //   Delete Blog post entries

  await client
    .getSpace(spaceId)
    .then((space) => space.getEnvironment(environmentId))
    .then((env) => env.getEntries({ content_type: "blogPost", limit: 1000 }))
    .then(async (response) => {
      for (const entry of response.items) {
        if (!entry.sys.publishedVersion) {
          await entry.delete();
        } else {
          await entry.unpublish().then((e) => e.delete());
        }
      }
    })
    .finally(() => {})
    .catch((error) => {
      console.error(error);
    });

  // delete blog post content type
  migration.deleteContentType("blogPost");

  //   Delete Author entries

  await client
    .getSpace(spaceId)
    .then((space) => space.getEnvironment(environmentId))
    .then((env) => env.getEntries({ content_type: "author", limit: 1000 }))
    .then(async (response) => {
      for (const entry of response.items) {
        if (!entry.sys.publishedVersion) {
          await entry.delete();
        } else {
          await entry.unpublish().then((e) => e.delete());
        }
      }
    })
    .finally(() => {})
    .catch((error) => {
      console.error(error);
    });

  // delete author content type
  migration.deleteContentType("author");
};
