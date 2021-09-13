import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Modal, Button } from "antd";

class App extends Component {
  state = {
    result: "Braj",
    openModal: false,
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  render() {
    return (
      <div>
        <Button type="primary" 
        onClick={()=>this.setState({ openModal: true })}>
          Scancode
        </Button>
        <Modal
          type="Scan the Qr Code"
          visible={this.state.openModal}
          onCancel={() => this.setState({ openModal: false })}
          footer={null}
        >
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%" }}
          />
          <p style={{color:'black'}}>{this.state.result}</p>
        </Modal>
      </div>
    );
  }
}
export default App;
