const Baskets = require('../../models/baskets');
const Categories = require('../../models/categories');
const ChatRooms = require('../../models/chatRooms');
const Events = require('../../models/events');
const LevelRep = require('../../models/levelRep');
const Products = require('../../models/products');
const Vinyls = require('../../models/vinyls');

// Datasets
const baskets = require('../../datasets/set_baskets.json');
const categories = require('../../datasets/set_categories.json');
const chatRooms = require('../../datasets/set_chat_rooms.json');
const events = require('../../datasets/set_events.json');
const levelRep = require('../../datasets/set_level_rep.json');
const products = require('../../datasets/set_products.json');
const vinyls = require('../../datasets/set_vinyl_products.json');

const buildAssets = async () => {
  try {
    const productCount = await Products.countDocuments();
    if (productCount === 0) {
      await Promise.allSettled([
        Baskets.insertMany(baskets),
        Categories.insertMany(categories),
        ChatRooms.insertMany(chatRooms),
        Events.insertMany(events),
        LevelRep.insertMany(levelRep),
        Products.insertMany(products),
        Vinyls.insertMany(vinyls),
      ]);
      console.log(new Date(), 'Assets generated');
    } else {
      console.log(new Date(), 'Assets already generated');
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = buildAssets;
