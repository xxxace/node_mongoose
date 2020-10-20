const mongoose = require('mongoose');
const DB_NAME = `demo`
const DB_URL = 'localhost:27017';

// 数据库连接
const mongodb = new Promise((resolve, reject) => {
    mongoose.set('useCreateIndex', true);

    // 连接数据库
    mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

    // 监听回调
    mongoose.connection.on('open', (err) => !err ? resolve() : reject(err));
})

// 模型创建
const Model = function(collectionName, model) {
    if (!collectionName) {
        console.log(new Error("集合名称为必传项！ collectionName is require!"))
        return
    }
    if (!model) {
        console.log(new Error("模型为必传项！ collectionName is require!"))
        return
    }
    if (!isObject(model)) {
        console.log(new Error("模型必须为Object类型！ model is not type of Object !"))
        return
    }

    let Schema = mongoose.Schema;

    // 创建一个约束实例对象
    let model_schema = new Schema(model);

    // 创建模型对象 参数1：指定的集合 | 参数2：指定的约束对象
    let collectionModel = mongoose.model(collectionName, model_schema);

    return collectionModel
}

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

module.exports = { mongodb, Model }