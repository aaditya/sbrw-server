const mongoose = require('mongoose');

const schema = mongoose.Schema;

const basketSchema = new schema({
  OwnedCarTrans: {
    CustomCar: {
      BaseCar: Number,
      CarClassHash: Number,
      IsPreset: Boolean,
      Level: Number,
      Name: String,
      Id: Number,
      Paints: mongoose.Schema.Types.Mixed,
      PerformanceParts: mongoose.Schema.Types.Mixed,
      PhysicsProfileHash: Number,
      Rating: Number,
      ResalePrice: Number,
      SkillModParts: mongoose.Schema.Types.Mixed,
      SkillModSlotCount: Number,
      Vinyls: mongoose.Schema.Types.Mixed,
      VisualParts: mongoose.Schema.Types.Mixed,
    },
    Durability: Number,
    ExpirationDate: String,
    Heat: Number,
    Id: Number,
    OwnershipType: String,
  },
  productId: String,
});

module.exports = mongoose.model('Basket', basketSchema);
