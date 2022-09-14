const contactControllers = {
  create: async (req, res) => {
    res.send({ message: "create handler" });
  },
  findAll: async (req, res, next) => {
    res.send({ message: "findAll handler" });
  },
  findOne: async (req, res, next) => {
    res.send({ message: "findOne handler" });
  },
  update: async (req, res, next) => {
    res.send({ message: "update handler" });
  },
  delete: async (req, res, next) => {
    res.send({ message: "delete handler" });
  },
  deleteAll: async (req, res) => {
    res.send({ message: "deleteAll handler" });
  },
  findAllFavorite: async (req, res) => {
    res.send({ message: "findAllFavorite handler" });
  },
};

module.exports = { contactControllers };
