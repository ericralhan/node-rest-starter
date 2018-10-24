'use strict';

module.exports = {
  get: params => {
    return new Promise((resolve, reject) => {
      reject({ message: 'method call not supported' });
    });
  },
  getById: params => {
    return new Promise((resolve, reject) => {
      reject({ message: 'method call not supported' });
    });
  },
  post: params => {
    return new Promise((resolve, reject) => {
      reject({ message: 'method call not supported' });
    });
  },
  put: params => {
    return new Promise((resolve, reject) => {
      reject({ message: 'method call not supported' });
    });
  },
  delete: params => {
    return new Promise((resolve, reject) => {
      reject({ message: 'method call not supported' });
    });
  }
};
