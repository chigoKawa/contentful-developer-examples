
## Getting Started
This repository serves as a practical guide on utilizing the [Contentful CLI Tool] for various common scenarios. Makes more sense if you attend the [Contentful Learning Center] training class. 

##### Folder structure:

- migrations 
    - Contains all the migration scripts used in the commands.
- exports 
    - Holds exported files from migrations.
- util 
    - Contains an example utility script that generates an `internal name` field.
- mini-website 
    - A small Next.js example project that uses Contentful.
    - Has it's own ReadMe file

## Commands

### To export all content and content types from a space
```bash
contentful space export --space-id "[your-space-id]" --environment-id "[your-space-environment]" --content-file exports/all.json
```


### Export only the content model

```bash
contentful space export --space-id "[your-space-id]" --environment-id "[your-space-environment]" --content-file exports/only-content-model.json --skip-content --skip-roles --skip-webhooks
```
# Export only the CONTENT
```bash
contentful space export --space-id "[your-space-id]" --environment-id "[your-space-environment]" --content-file exports/just-content.json --content-only
```

# Import to another space
```bash
contentful space import --space-id "[your-other-space-id]" --environment-id "[your-space-environment]" --content-file exports/all.json
```
# Export using filters

```bash
contentful space export --space-id "[your-space-id]" --environment-id "[your-space-environment]" --content-file exports/filtered-content.json --query-entries 'sys.contentType.sys.id[in]=landingPage'
```


# Simulate an error 
```bash
contentful space export --space-id "[your-space-id]123" --environment-id "[your-space-environment]" --content-file exports/simulate-error.json --query-entries 'sys.contentType.sys.id[in]=landingPage'
```

# Run migration script to create `blogPost` content type
```bash
contentful space migration --space-id "[your-space-id]" --environment-id "[your-space-environment]" migrations/1.create-blog-post.js
```

# Migrate content from another CMS (faked with jsonplaceholder)
```bash
contentful space migration --space-id "[your-space-id]" --environment-id "[your-space-environment]" migrations/2.migrate-posts.js -y

```

# Transform the author name field

```bash
contentful space migration --space-id "[your-space-id]" --environment-id "[your-space-environment]" migrations/3.split_author_name_field_into_two_fields.js

```


# Derive content entries for new `author` content type
```bash
contentful space migration --space-id "[your-space-id]" --environment-id "[your-space-environment]" migrations/4.create-author-type.js

```


# Clean up

```bash
contentful space migration --space-id "[your-space-id]" --environment-id "[your-space-environment]" migrations/99.cleanup.js

```









## License

MIT

Reach out if you have any questions [Chigoriddim]

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Chigoriddim]: <https://chigoriddim.com>
   [Contentful CLI Tool]: <https://github.com/contentful/contentful-cli>
   [Contentful Learning Center]: <https://training.contentful.com>
