import React from 'react';
import './styles.scss';
import { Row, Col, ListGroup} from 'reactstrap';
import background from '../../img/bröd.jpg';




class Categories extends React.Component {
    render() {
        return (
         <div>
             <Row>
                 <Col md={3}>col 1
                 <div className="card">
 <div className="card-body">
    <h5 className="card-title text-center">Kyckling</h5>
        <ListGroup variant="flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Cras justo odio</li>
         </ListGroup>
  </div>
</div>

                 </Col>
                 <Col md={3}>col 2
                 <div className="card categories-vy">
                 <img className="card-img" src={background} alt={"background"}/>
 <div class="card-img-overlay">
 <div className="card-body">
     
    <h5 className="card-title text-center">Bröd</h5>
    </div>
  </div>
</div>
                 </Col>
                 <Col md={3}>col 3
                 <div className="card">
 <div className="card-body">
     <div class="card-img-overlay">
    <h5 className="card-title text-center">Picknik</h5>
    <ListGroup variant="flush">
            <li className="list-group-item">1</li>
            <li className="list-group-item">2</li>
            <li className="list-group-item">3</li>
         </ListGroup>
  </div>
</div>
</div>
</Col>
                 <Col md={3}>col 4
                 <div className="card">
 <div className="card-body">
    <h5 className="card-title text-center">Snabbt</h5>
    <ListGroup variant="flush">
            <li className="list-group-item">1</li>
            <li className="list-group-item">2</li>
            <li className="list-group-item">3</li>
         </ListGroup>  </div>
</div></Col>
             </Row>
         </div>
        )
      }
}

export default Categories