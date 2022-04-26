//import { pinJSONToIPFS } from "./pinata.js";
require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../contract-abi.json");
const contractAddress = "0x996662181C7ed8B1e1AD16f128cd83B73E1E8999";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
//const web3 = createAlchemyWeb3(alchemyKey);
export const SupportedNetworkIds = ["4"];
const SupportedNetworkStrings = ["Rinkeby"];

let web3 = null;

export const connectPolygon = async () => {
try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '137' }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{ chainId: '137', rpcUrl: 'https://...' /* ... */ }],
        });
      } catch (addError) {
        return {
          address: "",
          status: "😥 " + addError.message,
        };    
          }
    }
    return {
      address: "",
      status: "😥 " + switchError.message,
    };    
  }
}

export function getNetworkString(networkId) {
  switch(networkId) {
    case '137': return "Polygon Main";
    case '4': return "Rinkeby";
    case '1': return "Ethereum Main";
    case '5': return "Goerli";
    case '3' : return "Ropsten";
    case '42' : return "Kovan";    
    default: return networkId;
  }

}

export const connectWallet = async () => {
  if (window.ethereum) {
    if(SupportedNetworkIds.includes(window.ethereum.networkVersion)) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          address: addressArray[0],
          status: "Connected to " + getNetworkString(window.ethereum.networkVersion) + ".",
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address:"",
        status: "🦊 Unsupported network " + getNetworkString(window.ethereum.networkVersion) + ". Switch to " + SupportedNetworkStrings + ".",
      }      
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a  style={{color:"#61AEEF"}} target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        if(SupportedNetworkIds.includes(window.ethereum.networkVersion)) {
          console.log("Connecting to " + window.ethereum.networkVersion);
          return {
            address: addressArray[0],
            status: "🦊 Connected to " + getNetworkString(window.ethereum.networkVersion) + ".",
          }
        } else {
          return {
            address:"",
            status: "🦊 Unsupported network " + getNetworkString(window.ethereum.networkVersion) + ". Switch to " + SupportedNetworkStrings + ".",
          }
        }        
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the connet wallet button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a  style={{color:"#61AEEF"}} target="blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

//export const mintNFT = async (url, name, description) => {
export const mintNFT = async (tokenId, weiValue) => {

  let transactionParameters = null;
  try{
    if(web3 === null) {
      web3 = createAlchemyWeb3(alchemyKey);
    }
    console.log("TokenId: " + tokenId + " weiValue: " + weiValue);
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

    transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        value: "0x"+(weiValue).toString(16),
        data: window.contract.methods
            .mint(window.ethereum.selectedAddress, tokenId, 1, [])
            .encodeABI(),
    };
  }  catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      status:
        "✅ Check out your transaction on Etherscan " + txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};
