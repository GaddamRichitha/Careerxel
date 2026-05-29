export default {
  routes: [
    {
      method: "GET",
      path: "/blogs",
      handler: "blog.find",
      config: {
        auth: false
      }
    },
    {
      method: "POST",
      path: "/blogs",
      handler: "blog.create",
      config: {
        auth: false
      }
    }
  ]
};
