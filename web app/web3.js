import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.0.2/ethers.min.js";
let signer = null;
let provider;

if (window.ethereum == null) {
    // metamask is not installed
    console.log("MetaMask not installed; using read-only defaults");
    provider = ethers.getDefaultProvider();
} else {
    console.log('has Metamask');
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    window.provider = provider;
}
window.ethers = ethers;

