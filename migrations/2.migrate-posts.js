/*

Migrate posts from a legacy system. Posts have the following structure
 {
    "userId": 2,
    "id": 18,
    "title": "voluptate et itaque vero tempora molestiae",
    "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
  },


*/

module.exports = async function (
  migration,
  { makeRequest, spaceId, accessToken }
) {
  try {
    // fetch 10 posts from my fake legacy CMS
    const postData = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"
    );

    const posts = await postData.json();

    return posts?.map(async (post) => {
      // create new Contentful entries based on my posts
      const entry = await makeRequest({
        method: "POST",
        url: `/entries`,
        headers: {
          "X-Contentful-Content-Type": "blogPost",
        },
        data: mapLegacyCMSFieldsToContentfulFields(post),
      });

      console.log("Moved Post to Contentful ", entry?.fields?.title);

      return entry;
    });
  } catch (error) {
    console.error(error);
    return;
  }
};

function mapLegacyCMSFieldsToContentfulFields(post) {
  const authorName = generateRandomName(); // my posts do not have author names, so I generate random names

  return {
    fields: {
      internalName: {
        "en-US": post.title,
      },
      title: {
        "en-US": post.title,
      },
      body: {
        "en-US": {
          data: {},
          nodeType: "document",
          content: [
            {
              nodeType: "paragraph",
              data: {},
              content: [
                {
                  value: post.body,
                  nodeType: "text",
                  marks: [],
                  data: {},
                },
              ],
            },
          ],
        },
      },
      author: {
        "en-US": authorName,
      },
    },
  };
}

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateRandomName() {
  const randomFirstName = getRandomElement(firstNames);
  const randomLastName = getRandomElement(lastNames);
  return `${randomFirstName} ${randomLastName}`;
}

const firstNames = ["John", "Jane", "Alex", "Emily", "Chris", "Sarah"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller"];
