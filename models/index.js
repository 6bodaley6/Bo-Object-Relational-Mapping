// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})
//Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})
//Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'tag_id'
})
//Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

//??cardinality 1-1 || 1-many || many to many these are the 3 different cardinalities 
/* we define on both sides of the relationship becuase that is how sequalize is
 * abile to set up the functions that you would call that you would retrieve to
 * set and get data from the relationship
 */

/*I am creating this many to many relationship between product and tag
* the new table will belong to both product and tag using the foreign keys
*/

// // // Products belongsTo Category
// // Product.belongsTo(Category, { foreignKey: "category_id" });
// // // Categories have many Products

// // // Tags belongToMany Products (through ProductTag)
// // Tag.belongsToMany(Product, { through: ProductTag, foreignKey: "tag_id" })
// // Product.belongsToMany(Tag, { through: ProductTag, foreignKey: "product_id" })

// // // // ProductTag.belongsTo(Product, { foreignKey: "product_id" });
// // // // ProductTag.belongsTo(Tag, { foreignKey: "tag_id" });
// // // // Product.hasMany(ProductTag, { foreignKey: "product_id" });
// // Category.hasMany(Product, { foreignKey: "category_id" })
// // // // Tag.hasMany(ProductTag, { foreignKey: "tag_id" })