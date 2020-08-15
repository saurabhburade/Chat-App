const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs');
const User = require('../models/users.model');

const adminBro = new AdminBro({
  databases: [],
  rootPath: '/api/admin',
})

const AdminBroRouter = AdminBroExpress.buildRouter(adminBro)
module.exports = {AdminBroRouter,adminBro};
// app.use(adminBro.options.rootPath, AdminBroRouter)
// app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))