const intell_screen = {
    name: 'intell_screen',
    model: {
        title: {
            type: String,
            require: true
        },
        url: {
            type: String,
            require: true
        },
        imgSrc: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now()
        },
        is_default: {
            type: Number,
            default: 0
        },
        category: {
            id: String,
            name: String
        },
        enable_flag: {
            type: Number,
            default: 1
        }
    }
}

module.exports = intell_screen