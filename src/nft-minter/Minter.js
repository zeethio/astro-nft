import { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import Tooltip from "@material-ui/core/Tooltip";
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
  getNetworkString,
  SupportedNetworkIds,
} from "./util/interact.js";

import './Minter.css';
import { BsWindowSidebar } from "react-icons/bs";

/* global BigInt */

const Minter = (props) => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const [url, setURL] = useState(props.url + "/" + props.tokenId);
  const [tokenId, setTokenId] = useState(props.tokenId);
  const [weiValue, setWeiValue] = useState(props.weiValue);

  const [copyFeedback, setCopyFeedback] = useState("");
  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  const textAreaRef = useRef(null);
  
  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);

    addWalletListener();
    setTokenId(props.tokenId.toString())
    setURL(props.url + "/" + props.tokenId)
    setWeiValue(props.weiValue)
  }, [props.url, props.tokenId, props.weiValue]);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          if(window.ethereum.networkVersion in SupportedNetworkIds) {
            console.log("Connecting to " + window.ethereum.networkVersion);
            setWallet(accounts[0]);
            setStatus("🦊 Connected to Rinkeby test-net.");
          } else {
            setStatus("🦊 Unsupported network. Switch to Rinkeby.");
          }
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using connect button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { success, status } = await mintNFT(tokenId, weiValue);
    setStatus(status);
  };
  
  const copyToClipBoard = async () => {
    try {
      //await navigator.clipboard.writeText(text);
      textAreaRef.current.select();
      document.execCommand('copy');      
      setCopyFeedback("Copied Successfully");
      setOpen(true);
    } catch (err) {
      console.log("INSIDE ", { open }, err);
      setCopyFeedback("Failed to copy. Please check browser persmissions");
      setOpen(true);
    }
  };

  return (
    <div className="Minter">
      <UrlCopyGroup>
          <Textarea 
              ref={textAreaRef}
              value={url}
              type="text"
              rows="1"
          />     
          <Tooltip
            open={open}
            title={copyFeedback}
            onClose={handleClose}
            placement="top"
            leaveDelay={500}
          >
          <img src="icon-copy.svg" onClick={copyToClipBoard} />
          </Tooltip>
      </UrlCopyGroup>
      <button className="mintbutton" id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>
      <button className="mintbutton" id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <StatusArea id="status" style={{ color: "blue" }}>
        {status}
      </StatusArea>
    </div>
  );
};

const Input = styled.input`
font-size: 20px;
padding: 0.5em;
margin: 0.5em;
width: 100%;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 3px;
`;

const Textarea = styled.textarea`
font-size: 16px;
padding: 0.5em;
margin: 0.5em;
width: 100%;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 3px;
`;

const CopyButton = styled.button`
  color: palevioletred;
  font-size: 16px;
  width: 15%;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const UrlCopyGroup = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

const StatusArea = styled.div`
font-size: 16px;
padding: 0.5em;
margin: 0.5em;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 3px;
`;


export default Minter;
