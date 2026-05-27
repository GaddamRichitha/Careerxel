export default {
  routes: [
    {
      method: "GET",
      path: "/pricings",
      handler: "pricing.find",
      config: {
        auth: false
      }
    }
  ]
};
