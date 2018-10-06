
//blockChain function using constructor function
function blockChain(){
    this.chain=[];
    this.newTransactions = [];
}
//blockChain function using class
/*
class blockChain {
    constructor(){
        this.chain = [];
        this.newTransactions = [];
    }
}
*/

blockChain.prototype.createNewBlock = function(nonce,previousBlockHash,hash){
    const newBlock = {
        index: this.chain.length = 1 ,
        timestamp: Date.now(),
        transaction: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    }

    this.newTransactions = [];
    this.chain.push(newBlock);

    return newBlock;

}