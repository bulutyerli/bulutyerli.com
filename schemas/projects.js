const projectSchema = {
  name: "projects",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the project.",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      description: "Array of images related to the project.",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Description of the project.",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      description: "Array of skills used in the project.",
    },
    {
      name: "githubLink",
      title: "GitHub Link",
      type: "url",
      description: "Link to the GitHub repository of the project.",
    },
    {
      name: "liveSiteLink",
      title: "Live Site Link",
      type: "url",
      description: "Link to the live site of the project.",
    },
  ],
};

export default projectSchema;
