const board_default = {
    name: 'board_default',
    model: {
        title: {
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        },
        mac: {
            type: String,
            required: true
        },
        board_id:{
            type: String,
            required: true
        },
        board_group:{
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now()
        }
    }
}

module.exports = board_default
