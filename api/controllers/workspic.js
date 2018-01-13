const mongoose = require('mongoose');

module.exports.getWork = (req, res) => {
  const Works = mongoose.model('works');

  Works.find().then(items => {
    res.status(200).json({ works : items });
  });

};

module.exports.setWork = (req, res) => {
  //создаем новую запись работы и передаем в нее поля из формы
  const Model = mongoose.model('works');

  let item = new Model({
    title: req.body.title,
    techs: req.body.techs,
    img: req.body.img
  });
  //сохраняем запись в базе
  item
    .save()
    .then(item => {
      return res.status(201).json({ message: 'Запись успешно добавлена' });
    })
    .catch(err => {
      res.status(400).json({
        message: `При добавление записи произошла ошибка:  + ${err.message}`
      });
    });
};