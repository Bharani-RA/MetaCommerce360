import { ethers } from "ethers";
import React, { useState } from "react";
import {
  InputGroup,
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import "./Payment.css"

export default function Payment() {
const location = useLocation();

const navigate = useNavigate();

const handleProduct = (id,price) => {
  navigate("/transaction",{state:{id:id,price:price}})
}

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
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-2 text-uppercase">{location.state.product}</h2>
                <h2 className="fw-bold mb-2 text-uppercase">{location.state.price}</h2>
                <p className=" mb-5">Enter the details to obtain the product you like</p>
                <Form>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formFullName"
                    >
                      <Form.Label className="text-center">
                        Your full name
                      </Form.Label>
                      <Form.Control type="text" placeholder="Enter name" required />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formPhoneNumber"
                    >
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter phone number"
                        required
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formUsername"
                    >
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="email"
                          placeholder="Enter username"
                          required
                        />
                        <InputGroup.Text className="text-primary">
                          @brand.com
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Location</Form.Label>
                      <Form.Control type="text" placeholder="CHENNAI,TAMILNADU" required />
                    </Form.Group>
                  </Row>
                  <div className="d-grid">
                    <Button variant="primary" onClick={connectWallet}>
                      Place Order
                    </Button>
                    <Button type="submit" variant="primary" onClick={sendTransaction}>
                      Make Transaction
                    </Button>
                  </div>
                </Form>
               
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}