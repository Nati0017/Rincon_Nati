

import { Container, ListGroup, Image } from 'react-bootstrap';

const Links = () => {
    return (
        <Container>
            <h2 className="text-danger">Links</h2>
            <ListGroup>
                <ListGroup.Item><a href="https://www.secst.cl/upfiles/documentos/01082018_1159am_5b61f508889a5.pdf">Los ojos del perro siberiano</a></ListGroup.Item>
                <ListGroup.Item><a href="Libros/Cazadores de Sombras/drive-download-20230507T205747Z-001.zip">Cazadores de sombras (Saga Principal)</a></ListGroup.Item>
                <ListGroup.Item><a href="https://www.ucm.es/data/cont/docs/119-2014-02-19-Carroll.AliciaEnElPaisDeLasMaravillas.pdf">Alicia en el país de las Maravillas</a></ListGroup.Item>
                <ListGroup.Item><a href="Libros/Juegos del hambre/drive-download-20230507T211701Z-001.zip">Los juegos del hambre</a></ListGroup.Item>
                <ListGroup.Item><a href="Libros/Divergente/drive-download-20230507T211607Z-001.zip">Divergente</a></ListGroup.Item>
            </ListGroup>
            <Image src="HD-wallpaper-cold-weather-anime-winter-other.jpg" fluid className="my-3" />
            <Image src="Closeup_Heart_Padlock_518840_1280x853.jpg" fluid className="my-3" />
            <Image src="191782188-gato-de-primer-plano-con-ojos-azules-y-colores-del-arco-iris-concepto-de-orgullo-en-los-colores-del.jpg" fluid className="my-3" />
            <Image src="estrategias-para-deshacerte-de-los-pensamientos-obsesivos-ahora-mismo-lg.jpg" fluid className="my-3" />
            <Image src="libros-sobre-el-amor_661d826b_1200x1200.jpg" fluid className="my-3" />
            <Image src="nacimiento-vida-y-muerte.jpg" fluid className="my-3" />
            <Image src="DSCF9251-1024x576.jpg" fluid className="my-3" />
            <Image src="finn-y-jake.png" fluid className="my-3" />
        </Container>
    );
};

export default Links;
