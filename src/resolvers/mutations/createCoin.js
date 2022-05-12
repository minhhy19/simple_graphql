// const ERC20CoinModel = require('../../models/coin');
module.exports = async (_, {input}, {models}) => {
    try {
        newERC20Coin = await models.ERC20Coin.create(input);    
    } catch (err) {
        console.log(err);
    }
    
    return newERC20Coin;
}