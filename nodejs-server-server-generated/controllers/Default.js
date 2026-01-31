'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.authorsAuthorIdDELETE = function authorsAuthorIdDELETE (_, res, _, authorId) {
  Default.authorsAuthorIdDELETE(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsAuthorIdGET = function authorsAuthorIdGET (_, res, _, authorId) {
  Default.authorsAuthorIdGET(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsAuthorIdPUT = function authorsAuthorIdPUT (_, res, _, body, authorId) {
  Default.authorsAuthorIdPUT(body, authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsGET = function authorsGET (_, res, _) {
  Default.authorsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsPOST = function authorsPOST (_, res, _, body) {
  Default.authorsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksBookIdDELETE = function booksBookIdDELETE (_, res, _, bookId) {
  Default.booksBookIdDELETE(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksBookIdGET = function booksBookIdGET (_, res, _, bookId) {
  Default.booksBookIdGET(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksBookIdPUT = function booksBookIdPUT (_, res, _, body, bookId) {
  Default.booksBookIdPUT(body, bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksGET = function booksGET (_, res, _) {
  Default.booksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksPOST = function booksPOST (_, res, _, body) {
  Default.booksPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesCategoryIdDELETE = function categoriesCategoryIdDELETE (_, res, _, categoryId) {
  Default.categoriesCategoryIdDELETE(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesCategoryIdGET = function categoriesCategoryIdGET (_, res, _, categoryId) {
  Default.categoriesCategoryIdGET(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesCategoryIdPUT = function categoriesCategoryIdPUT (_, res, _, body, categoryId) {
  Default.categoriesCategoryIdPUT(body, categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesGET = function categoriesGET (_, res, _) {
  Default.categoriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesPOST = function categoriesPOST (_, res, _, body) {
  Default.categoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
