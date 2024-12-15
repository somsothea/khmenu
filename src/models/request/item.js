const Joi = require('@hapi/joi');

module.exports = {
  // createItem
  0: {
    body: {
      title: Joi.string().required(),
      category: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
      filename: Joi.string().required(),
    },
    model: 'createItem', // Name of the model
    group: 'Item', // Swagger tag for apis.
    description: 'Create Item and save details in database',
  },
  1: {
    query: {
      limit: Joi.number()
        .optional()
        .default(10)
        .description('Number of items to take'),
      page: Joi.number().optional().default(1),
      sort: Joi.string().optional(),
      query: Joi.string().optional(),
      populate: Joi.string().optional(),
      select: Joi.string().optional(),
    },
    model: 'getAllItems',
    group: 'Item',
    description: 'Get all Items',
  },
  2: {
    path: {
      id: Joi.string().required(),
    },
    group: 'Item', // Swagger tag for apis.
    description: 'Get Item by Id',
  },
  3: {
    path: {
      id: Joi.string().required(),
    },
    group: 'Item', // Swagger tag for apis.
    description: 'Delete Item by Id',
  },
  4: {
    path: {
      id: Joi.string().required(),
    },
    body: {
      title: Joi.string().optional(),
      category: Joi.string().optional(),
      description: Joi.string().optional(),
      price: Joi.number().optional(),
      filename: Joi.string().optional(),
    },
    model: 'updateItem', // Name of the model
    group: 'Item', // Swagger tag for apis.
    description: 'Update Item and save details in database',
  },
};
