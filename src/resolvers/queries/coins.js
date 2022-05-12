
// const ERC20CoinModel = require('../../models/coin');
module.exports = async (_, {}, {models}) => {
    return await models.ERC20Coin.find();
}