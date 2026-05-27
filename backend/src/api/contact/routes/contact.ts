/**
 * contact router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/contacts',
      handler: 'contact.find',
      config: {
        auth: false
      }
    },
    {
      method: 'POST',
      path: '/contacts',
      handler: 'contact.create',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/contacts/:id',
      handler: 'contact.findOne',
      config: {
        auth: false
      }
    }
  ]
};
