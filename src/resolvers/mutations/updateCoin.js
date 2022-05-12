const { models } = require("mongoose")
// const ERC20CoinModel = require('../../models/coin');
module.exports = async (_, {id, input}, {models}) => {
    const ERC20CoinToUpdate = await models.ERC20Coin.findOne({_id: id});

    Object.keys(input).forEach(value => {
        ERC20CoinToUpdate[value] = input[value];
    });

    const updatedERC20Coin = await ERC20CoinToUpdate.save();
    return updatedERC20Coin;
}