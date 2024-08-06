
import { Container, Row, Col, Table, Image } from 'react-bootstrap';

const WebPrincipal = () => {
    return (


        <Container>
            <Row className="my-4">
                <Col>
                    <h1 className="text-center text-dark" style={{ fontSize: '3rem', fontFamily: 'Calibri' }}>
                        El Rincón de Naty
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <h2 className="text-primary">Mis creaciones</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Historias cortas</th>
                                <th>Pensamientos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>La niña helada</td>
                                <td>Amor</td>
                            </tr>
                            <tr>
                                <td>Corazón Misterioso</td>
                                <td>Vida y Muerte</td>
                            </tr>
                            <tr>
                                <td>Crisis de color</td>
                                <td>Desconocido</td>
                            </tr>
                            <tr>
                                <td>Aventuras del Pensamiento</td>
                                <td>Tonterías</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md={4}>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Books_HD_%288314929977%29.jpg" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
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
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Aquí la autora dejará relatadas una serie de historias o pensamientos fantásticos realizados de manera anónima. Los links llevarán a las secciones donde están las historias para ser disfrutadas con comodidad, al igual que pensamientos propios.</p>
                    <p>Cada historia se irá actualizando progresivamente...</p>
                </Col>
            </Row>
        </Container>
    );
};

export default WebPrincipal;
