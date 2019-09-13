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
        <p>1355 Market St,Suite 900</p>
        <p>San Fransisco, CA 94103</p>
        <p>P:(123) 456-7890</p>
        </div>
        <div className="Contact">
          <h5 className="bold">Kontakt</h5>
          <p>yaddie@gmail.com</p>
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