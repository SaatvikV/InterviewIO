import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';


class Products extends Component {
    render() {
    var x="Hi";

        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>{x}</h2>
                </div>
            </div>
        );
        
    }
    
  
}

export default Products;