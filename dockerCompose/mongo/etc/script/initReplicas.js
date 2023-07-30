rs.initiate({
  _id: "repl",
  members: [{
    _id: 0,
    host: "mongodb-primary:27011",
    priority: 10
  }, {
    _id: 1,
    host: "mongodb-secondary:27012"
  }, {
    _id: 2,
    host: "mongodb-arbiter:27013",
    arbiterOnly: true
  }]
})