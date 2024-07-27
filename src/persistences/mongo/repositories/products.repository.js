import { licorModel } from "../models/licores.model.js";

const getAll = async (query, options) => {
  const products = await licorModel.paginate(query, options);
  return products;
};

const getById = async (id) => {
  const product = await licorModel.findById(id);
  return product;
};

const create = async (data) => {
  const product = await licorModel.create(data);
  return product;
};

const update = async (id, data) => {
  const product = await licorModel.findByIdAndUpdate(id, data, { new: true });
  return product;
};

const deleteOne = async (id) => {
  const product = await licorModel.deleteOne({ _id: id });
  if (product.deletedCount === 0) return false;
  return true;
};

export default {
  getAll,
  getById,
  update,
  deleteOne,
  create,
};