export default {
  routes: [
    {
      method: "GET",
      path: "/blogs",
      handler: "blog.find",
      config: {
        auth: false
      }
    }
  ]
};
