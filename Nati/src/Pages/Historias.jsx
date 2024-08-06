

import { Container, ListGroup } from 'react-bootstrap';

const Historias = () => {
    return (
        <Container>
            <h2 className="text-primary">Historias</h2>
            <ListGroup>
                <ListGroup.Item>La niña helada</ListGroup.Item>
                <ListGroup.Item>Corazón Misterioso</ListGroup.Item>
                <ListGroup.Item>Crisis de color</ListGroup.Item>
                <ListGroup.Item>Aventuras del pensamiento</ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Historias;
