const board_group = {
    name: 'board_group',
    model: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now()
        }
    }
}

module.exports = board_group
