const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },]
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  //!! Tag.findone()
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body).then((dbTagData) => {
    res.json(dbTagData)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id } }).then((dbTagData) => {
    res.json(dbTagData)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  //!! Tag.destroy()
  // delete on tag by its `id` value
});

module.exports = router;
