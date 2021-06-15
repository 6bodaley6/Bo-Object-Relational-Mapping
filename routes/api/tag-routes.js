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
  //?? worked with JT after class on get below refence for the destroy
  Tag.findOne(
    {
      include: [
        {
          model: Product,
          through: ProductTag,
        },]
    },
    { where: { id: req.params.id } },
  ).then(dbTagData => {
    if (!dbTagData) {
      return res.status(404).json({ errorMessage: "id not found" })
    }
    res.json(dbTagData)
  }
  )
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Tag.create(req.body)
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
  /* follow the get statment above but instead of returning data we want to
   * destroy the data 
   */
  // delete on tag by its `id` value
});

module.exports = router;
