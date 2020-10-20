const { mongodb, Model } = require('../index');
const student = require('../model/student');
const studentModel = new Model(student.name, student.model);

mongodb.then(res => {
    studentModel.find({ name: /阿测/ }, { name: 1, _id: 0 }).then((data) => {
        console.log(data);
    })
})