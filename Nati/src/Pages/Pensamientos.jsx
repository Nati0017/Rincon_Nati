
import { Container, ListGroup } from 'react-bootstrap';

const Pensamientos = () => {
    return (
        <Container>
            <h2 className="text-primary">Pensamientos</h2>
            <ListGroup>
                <ListGroup.Item>Amor</ListGroup.Item>
                <ListGroup.Item>Vida y Muerte</ListGroup.Item>
                <ListGroup.Item>Desconocido</ListGroup.Item>
                <ListGroup.Item>Tonterías</ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Pensamientos;
