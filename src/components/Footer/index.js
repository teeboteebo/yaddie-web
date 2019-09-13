import React from 'react'
import './styles.scss'
import { Row, Col, Container} from 'reactstrap';
import logo from '../../img/yaddie-logo-orange.png';


class Footer extends React.Component {
  render(){
    return(
      <footer>
      <Container>
    <Row className="text-center py-4">
      <Col md={6}>
        <div className="info">
        <h5 className="bold">Yaddie</h5>
        <ul className="info-style">
          <li><span>1355 Market St,Suite 900</span></li>
          <li><span>San Fransisco, CA 94103</span></li>
          <li><span>P:(123) 456-7890</span></li>

        </ul>
        </div>
        <div className="Contact">
          <h5 className="bold">Kontakt</h5>
          <ul className="info-style">
            <li><span>yaddie@gmail.com</span></li>
          </ul>
        </div>
       
      </Col>
      <Col md={6}>
      <img className="mx-auto d-block logo-footer" src={logo} alt={"logo"}/>

      </Col>
    </Row>
</Container>
</footer>
    )
  }
}
export default Footer