const server = require("../server/server");
require("../connection/database-connection");
require("../route/route")(server);