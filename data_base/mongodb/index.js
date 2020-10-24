const mongoose = require('mongoose');
const fs = require('fs');

let data = fs.readFileSync('./mongoDB.ini', 'utf-8');
let CONFIG = readINI(data);

const DB_NAME = CONFIG['data_base'];
const DB_URL = CONFIG['url'];

// 数据库连接
const mongodb = new Promise((resolve, reject) => {
    mongoose.set('useCreateIndex', true);

    // 连接数据库
    mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true});

    // 监听回调
    mongoose.connection.on('open', (err) => !err ? resolve() : reject(err));
})

// 模型创建
const Model = function (collectionName, model) {
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

// 读取INI
function readINI(data) {
    if (!data || typeof data !== 'string') return
    let config = {}
    let lines = data.split(/\r\n|\r|\n/);
    lines.forEach(line => {
        if (line) {
            let entrise = line.split('=')
            config[entrise[0]] = entrise[1] || entrise[0]
        }
    })
    return config
}

module.exports = {mongodb, Model}
