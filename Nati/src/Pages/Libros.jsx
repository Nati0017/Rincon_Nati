
import { Container, Table } from 'react-bootstrap';

const Libros = () => {
    return (
        <Container>
            <h2 className="text-primary">Top 5 libros</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Ficción</th>
                        <th>Literatura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cazadores de sombras</td>
                        <td>El niño del pijama de rayas</td>
                    </tr>
                    <tr>
                        <td>Los juegos del hambre</td>
                        <td>La sociedad de los poetas muertos</td>
                    </tr>
                    <tr>
                        <td>Alicia en el país de las maravillas</td>
                        <td>Los ojos del perro siberiano</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default Libros;
