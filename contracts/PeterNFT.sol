// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

                                //any name  //acronym
contract PeterNFT is ERC721 ("PlanetNFT", "PLNT") 
{
   address owner;

   mapping(address=>bool) public whiteList;
   
    uint tokenId=1;
 
constructor (){
   owner= msg.sender;
}


 function freeMint() public payable {
//msg.sender(wallet address of who called thew fucntion)
//msg.value (how many sepolia/eth/mumbai/rnikeby/goerli)

    _mint(msg.sender, tokenId);
    tokenId++;

    if ( whiteList[msg.sender]==false)
    {
      //1 ether/matic=1 trillion wei
      require(msg.value==500000000000, "Insufficient Value");

     bool sent = payable(owner).send(msg.value);
          require(sent, "Didn't receive fee.");

    }
 }

//check if address is whitelisted
//if whitelisted, just mint
//if not whitelisted, make the msg.sender pay

function addTowhiteList(address _wallet) public {
   whiteList[_wallet]=true;
}
 

 function freeMintTo (address to) public { //calling of the address itself by use of a private key

    _mint(to, tokenId);
    tokenId++;

 }
 

 function tokenURI(uint256) override pure public returns(string memory)
 {
    return "ipfs://bafkreiclakz3bed6rrbl4vemdk3u3rhdl6i62mubvjkz4vmzvobpoqknji"; //metadata uploaded
 }


}
