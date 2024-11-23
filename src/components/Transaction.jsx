import { ethers } from 'ethers'
import React from 'react'
import { useState } from 'react'
import "./Transaction.css"
import { useLocation } from 'react-router'
const Transaction = () => {

    const location = useLocation();
    const [errorMessage,setErrorMessage] = useState(null)
    const [defaultAccount,setDefaultAccount] = useState(null)
    const [userBalance,setUserBalance] = useState(null)

    const connectWallet = () => {
        if(window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
                accountChanged([result[0]])
            })
        } else {
            setErrorMessage("Install Metamask app or chrome extension")
        }
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName)
        getUserBalance(accountName)
    }

    const getUserBalance = (accountAddress) => {
        window.ethereum.request({method:"eth_getBalance", params : [String(accountAddress, "latest")]}).then(balance => {
            setUserBalance(ethers.formatEther(balance))
        })
    }

    async function sendTransaction(){
        let params = [
            {
                from:"0x1d7Ce5d81dE008f2999E4eB9c5007Ae12721A8F8",
                to:"0x8443c58d3d6C7fE0ebC70735ea2ef08236e012aA",
                gas:Number(21000).toString(16),
                gasPrice:Number(2500000).toString(16),
              value:Number(10000000000000000).toString(16),
            }
        ]

        let result = await window.ethereum.request({method:"eth_sendTransaction",params}).catch((err)=>{
            console.log(err);
        })
    }

  return (
    //   <div>
    //     <h1>Metamask Connection</h1>
    //     <button onClick={connectWallet}>Connect Wallet</button>
    //     <button type='submit' onClick={sendTransaction}>BUY NOW</button>
        
    //   </div>
    <div className="container p-0">
        {/* <div className="card px-4">
            <p className="h8 py-3">Payment Details</p>
            <div className="row gx-3">
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Person Name</p>
                        <input className="form-control mb-3" type="text" placeholder="Name" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="btn btn-primary mb-3">
                        <span className="ps-3">Pay {location.state.price }</span>
                        <span className="fas fa-arrow-right"></span>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Transaction