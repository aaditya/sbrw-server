const Baskets = require('../../models/baskets');
const ChatRooms = require('../../models/chatRooms');
const Products = require('../../models/products');
const Vinyls = require('../../models/vinyls');

// Datasets
const { data: baskets } = require('../../datasets/soapbox_table_basketdefinition.json');
const { data: chatRooms } = require('../../datasets/soapbox_table_chat_room.json');
const products = require('../../datasets/soapbox_table_product.json');
const { data: vinyls } = require('../../datasets/soapbox_table_vinylproduct.json');

const buildAssets = async () => {
  try {
    const productCount = await Products.countDocuments();
    if (productCount === 0) {
      await Promise.allSettled([
        Baskets.insertMany(baskets),
        ChatRooms.insertMany(chatRooms),
        Products.insertMany(products),
        Vinyls.insertMany(vinyls),
      ]);
      console.log(new Date(), 'Assets Generated');
    } else {
      console.log(new Date(), 'Assets already generated');
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = buildAssets;
