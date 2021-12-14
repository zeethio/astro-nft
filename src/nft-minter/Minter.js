import { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import Tooltip from "@material-ui/core/Tooltip";
import { FaCopy } from "react-icons/fa";
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
          <a style={{color:"#61AEEF"}} target="_blank" href={`https://metamask.io/download.html`}>
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
      <TokenUri>NFT URI</TokenUri>
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
          <FaCopy style={{color: "#61AFEF", padding: "5px"}} size={20} onClick={copyToClipBoard} />
          </Tooltip>
      </UrlCopyGroup>
      <ButtonConnect onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </ButtonConnect >
      <ButtonMint onClick={onMintPressed}>
        Mint NFT
      </ButtonMint>
      <StatusArea id="status">
        {status}
      </StatusArea>
    </div>
  );
};

const ButtonConnect = styled.button`
  color: #979FAD;
  background-color: #3A3F4B;
  font-size: 16px;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const ButtonMint = styled.button`
  color: #979FAD;
  background-color: #3A3F4B;
  font-size: 16px;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    color: red;
  }
`;


const Textarea = styled.textarea`
font-size: 16px;
padding: 0.5em;
margin-left: 0.5em;
margin-bottom: 0.5em;
min-height: 3em;
width: 100%;
//color: ${props => props.inputColor || "palevioletred"};
background: #282C34;//papayawhip;
border: none;
border-radius: 3px;
color: #979FAD;
`;


const UrlCopyGroup = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TokenUri = styled.div`
  margin:5px;
  font-size: 16px;
  width: 100%;
  position: relative;
  display: flex;
  color: #979FAD;
`;

const StatusArea = styled.div`
font-size: 16px;
padding: 0.5em;
margin: 0.5em;
//background-color: #282C34;
//color: ${props => props.inputColor || "palevioletred"};
color: #61AEEF;
background: #282C34;
border: none;
border-radius: 3px;
`;


export default Minter;
