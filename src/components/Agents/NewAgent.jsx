import React, {Component} from 'react';
import {Button,Jumbotron,Checkbox} from 'react-bootstrap';
import './NewAgent.css';

export default class NewAgent extends Component{
    constructor(props){
        super(props);
        this.state={
          step1 : true,
          step2 : false,
          step3 : false,
          step4 : false,
          step5 : false,
          currentStep : "step1",
          typeAgent : true,
          type : "",
          name : "",
          identifier : "",
          hostname : "",
          username : "",
          port : "",
          keypair : null
        }
      }
    
      handleNext = (props) =>{
        if(props === "step2"){
          this.setState({step2: true,
            currentStep:"step2"
          });
        }
        if(props === "step3"){
          this.setState({step3: true,
            currentStep:"step3",
            keypair:""
          });
        }
        if(props === "step4"){
          this.setState({step4: true,
            currentStep:"step4",
            keypair:""
          });
        }
        if(props === "step5"){
          this.setState({step5: true,
            currentStep:"step5"});
        }
      }
    
      handlePrevious = (props) =>{
        if(props === "step1"){
          this.setState({step2: false,
            currentStep:"step1"
          });
        }
        if(props === "step2"){
          this.setState({step3: false,
            currentStep:"step2"
          });
        }
        
        if(props === "step3"){
          this.setState({step4: false,
            currentStep:"step3",
            keypair:""
          });
        }
        
        if(props === "step4"){
          this.setState({step5: false,
            currentStep:"step4",
            keypair:""
          });
        }
      }
    
      handleCheckBox = (event) =>{
        if(event.target.value === "Agent"){
          this.setState({typeAgent:!this.state.typeAgent,
              type : "Agent"
            });
        }
      }

      fileSelectHandler = event =>{
        console.log(event.target.files[0])
        this.setState({keypair: event.target.files[0]})
      }

      step = () =>{
        const step1 = 
        <Jumbotron>
            <div className="step">
              <div className="step1">
                <div className="custom-input">
                  <div className="label">Choose your request type</div>
                    <div className="checkbox"><Checkbox value="Agent" onChange={(e)=>this.handleCheckBox(e)} checked={!this.state.typeAgent}>Agent</Checkbox></div>
                  </div>
              </div>
              <div className="navButton">
                <Button disabled={this.state.typeAgent} onClick={()=>this.handleNext("step2")}>Next</Button>
              </div>
            </div>
        </Jumbotron>
    
        const step2 =
         <Jumbotron>
          <div className="step">
            <div>
            <div className="custom-input"><div className="label">Name</div><div className="input"><input type="text" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/><sup>*</sup></div></div>
            <div className="custom-input"><div className="label">Identifier</div><div className="input"><input type="text" value={this.state.identifier} onChange={(e)=>this.setState({identifier: e.target.value})}/></div></div>
            </div>
            <div className="navButton">
              <Button onClick={()=>this.handlePrevious("step1")}>Previous</Button>
              <Button onClick={()=>this.handleNext("step3")} disabled={this.state.name === ""}>Next</Button></div>
          </div>
        </Jumbotron>
    
        const step3 =
        <Jumbotron>
        <div className="step">
          <div>
            <div className="custom-input"><div className="label">Hostname</div><div className="input"><input type="text" value={this.state.hostname} onChange={(e)=>this.setState({hostname: e.target.value})}/><sup>*</sup></div></div>
            <div className="custom-input"><div className="label">Username</div><div className="input"><input type="text" value={this.state.username} onChange={(e)=>this.setState({username: e.target.value})}/><sup>*</sup></div></div>
            <div className="custom-input"><div className="label">Port</div><div className="input"><input type="text" value={this.state.port} onChange={(e)=>this.setState({port: e.target.value})}/></div></div>
            <div className="custom-input"><div className="label">Keypair</div> <div className="input"><input type="file" value={this.state.keypair} onChange={ (e)=>this.setState({keypair: e.target.value})}/></div></div>
            {/* (e)=>this.setState({keypair: e.target.value}) */}
            {/* this.fileSelectHandler */}
          </div>
          <div className="navButton">
            <Button onClick={()=>this.handlePrevious("step2")}>Previous</Button>
            <Button disabled={(this.state.hostname === "" || this.state.username === "")} onClick={()=>this.handleNext("step4")}>Next</Button></div>
        </div>
        </Jumbotron>
    
        const step4 =
        <Jumbotron>
          <div className="step">
          <table class="table table-hover table-bordered">
            <tbody>
              <tr>
                <th scope="col">1</th>
                <td>Type</td>
                <td>{this.state.type}</td>
              </tr>
              <tr>
                <th scope="col">2</th>
                <td>Name</td>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <th scope="col">3</th>
                <td>Identifier</td>
                <td>{this.state.identifier}</td>
              </tr>
              <tr>
                <th scope="col">4</th>
                <td>Hostname</td>
                <td>{this.state.hostname}</td>
              </tr>
              <tr>
                <th scope="col">5</th>
                <td>Username</td>
                <td>{this.state.username}</td>
              </tr>
              <tr>
                <th scope="col">6</th>
                <td>Port</td>
                <td>{this.state.port}</td>
              </tr>
            </tbody>
        </table>
            <div className="navButton">
              <Button onClick={()=>this.handlePrevious("step3")}>Previous</Button>
              <Button onClick={()=>this.handleNext("step5")}>Next</Button></div>
          </div>
        </Jumbotron>
    
        const step5 =
        <Jumbotron>
          <div className="step">Agent Created</div>
        </Jumbotron>
    
        try {
          if(this.state.currentStep === "step1"){
            return step1;
          }else if(this.state.currentStep ==="step2"){
            return step2;
          }else if(this.state.currentStep ==="step3"){
            return step3;
          }else if(this.state.currentStep ==="step4"){
            return step4;
          }else if(this.state.currentStep ==="step5"){
            return step5;
          }
        } catch (error) {
          console.log("Error handled : ",error);
          
        }
      }
    
      render(){
          return(
          <div>
            <div className="container">
            <ul className="progressBar">
                <li className={this.state.step1?"active":""}>Request type</li>
                <li className={this.state.step2?"active":""}>Define agent</li>
                <li className={this.state.step3?"active":""}>Remote machine</li>
                <li className={this.state.step4?"active":""}>Verify details</li>
                <li className={this.state.step5?"active":""}>Finish</li>
            </ul>
            </div>
            <this.step />
          </div>
          );
      }
}