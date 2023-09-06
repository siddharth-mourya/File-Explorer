const FileStructure = {
  isFolder: true,
  name: "my-new-project",
  items: [
    {
      isFolder: true,
      name: "js",
      items: [
        {
          isFolder: false,
          name: "service.js",
          items: [],
        },
        {
          isFolder: false,
          name: "textApi.js",
          items: [],
        },
      ],
    },
    {
      isFolder: true,
      name: "css",
      items: [
        {
          isFolder: false,
          name: "index.css",
          items: [],
        },
        {
          isFolder: false,
          name: "button.css",
          items: [],
        },
      ],
    },
    {
      isFolder: false,
      name: "index.html",
      items: [],
    },
  ],
};
export default FileStructure;
