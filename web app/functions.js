const abi = [
    "function freeMint() public",
    "function freeMintTo() public",
    "function balanceOf(address) public view returns (uint256)"
]

async function freeMint() {
    const ethers = window.ethers;
    const signer = await window.provider.getSigner();
    const contract = new ethers.Contract("0x810f7a29Ea6120a0408Dc2916A0902F105e32987", abi, signer); //contract address based on the deploy
    const tx = await contract.freeMint();
    console.log(tx);
}

async function balanceOf() {
    const ethers = window.ethers;
    const signer = await window.provider.getSigner();
    const contract = new ethers.Contract("0x810f7a29Ea6120a0408Dc2916A0902F105e32987", abi, signer); //contract address based on the deploy
    const balance = await contract.balanceOf("42ea6dfba9ff796ac408cf7ab3e91edcd9475c486779b58284a1037c14e0dd37"); //active metamask wallet
    console.log("balance", balance)
}

async function freeMintTo() {
    const ethers = window.ethers;
    const signer = await window.provider.getSigner();
    const contract = new ethers.Contract("0x2dFFBdEaE896020235629DD1b58d2d1d467a805a", abi, signer); //address of the receiver data
    const tx = await contract.freeMintTo();
    console.log(tx);
}
