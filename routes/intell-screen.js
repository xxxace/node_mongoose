const express = require('express');
const {mongodb, Model} = require('../data_base/mongodb/index');
const intell_screen = require('../data_base/mongodb/model/intell_screen');
const router = express.Router();
const intellScreenModel = new Model(intell_screen.name, intell_screen.model);

// mongodb connection
mongodb.then(res => {
    router.get('/', (req, res, next) => {
        res.send('SUCCESS GET /scm');
    })

    // 获取看板信息列表
    router.get('/list', (req, res, next) => {
        let filters = {}
        let query = Object.assign(req.query)
        let {pageNo, pageSize} = query

        if (query.title) {
            filters.title = new RegExp(`${query.title}`)
        }

        if (query.groupId) {
            filters['group.id'] = query.groupId
        }

        if (query.isDefault) {
            filters.is_default = query.isDefault
        }

        let limit = (pageSize || 20) * 1
        let page = ((pageNo || 1) - 1) * limit
        intellScreenModel.aggregate([{$match: filters}, {
            $project: {
                id: "$_id",
                imgSrc: "$img_src",
                title: 1,
                url: 1,
                date: 1,
                _id: 0,
                groupId:"$group.id",
                groupName:"$group.name"
            }
        }, {$skip: page}, {$limit: limit}]).then((data, error) => {
            intellScreenModel.find(filters).countDocuments({}).then(total => {
                res.send({
                    code: 200,
                    result: {
                        records: data,
                        current: (query.pageNo || 1) * 1,
                        size: limit,
                        total: total || 0,
                    },
                    success: true
                })
            })
        }).catch((err) => {
            res.send({
                code: 500,
                success: false,
                message: `查询失败：${err.message}`,
            });
        })
    })

    // 看板信息新增
    router.post('/add', (req, res, next) => {
        console.log(req.body);
        let body = req.body
        if (body.imgSrc) body.img_src = body.imgSrc
        if (body.groupId) {
            body.group = {
                id: body.groupId,
                name: body.groupName
            }
        }
        intellScreenModel.create(body).then(data => {
            res.send({
                code: 200,
                result: data,
                message: `保存成功！`,
                success: true
            });
        }).catch((err) => {
            console.log(`新增数据失败${err}`)
            res.send({
                code: 500,
                message: `新增数据失败：${err.message}`,
            });
        })
    })

    // 看板信息编辑
    router.put('/edit', (req, res, next) => {
        console.log(req.body);
        let body = req.body
        if (!body.id) {
            res.send({
                code: 500,
                message: `修改数据失败：id不能为空！`,
            });
            return
        }

        if (body.imgSrc) body.img_src = body.imgSrc

        if (body.groupId) {
            body.group = {
                id: body.groupId,
                name: body.groupName
            }
        }
        intellScreenModel.updateOne({_id: body.id}, {$set: body}).then(data => {
            res.send({
                code: 200,
                result: data,
                message: `编辑成功！`,
                success: true
            });
        }).catch((err) => {
            console.log(`编辑数据失败${err}`)
            res.send({
                code: 500,
                message: `编辑数据失败：${err.message}`,
                success: false
            });
        })
    })

    // 看板信息删除
    router.delete('/delete/:id', (req, res, next) => {
        console.log(req.params);
        let params = req.params
        if (!params.id) {
            res.send({
                code: 500,
                message: `删除数据失败：id不能为空！`,
            });
            return
        }
        intellScreenModel.deleteOne({_id: params.id}).then(data => {
            res.send({
                code: 200,
                result: data,
                message: `删除成功！`,
                success: true
            });
        }).catch((err) => {
            console.log(`删除数据失败${err}`)
            res.send({
                code: 500,
                message: `删除数据失败：${err.message}`,
                success: false
            });
        })
    })
}).catch(err => {
    console.log(`mongodb连接失败：${err}`)
});

module.exports = router
