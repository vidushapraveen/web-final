import Accordion from 'react-bootstrap/Accordion';

function OpenHours() {
    return (
        <div className="container mt-5">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Open Hours</Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <div className="col-md-6">
                                <p>Monday - 7.30 a.m to 11.00 p.m</p>
                                <p>Tuesday - 7.30 a.m to 11.00 p.m</p>
                                <p>Wednesday - 7.30 a.m to 11.00 p.m</p>
                                <p>Thursday - 7.30 a.m to 11.00 p.m</p>
                            </div>
                            <div className="col-md-6">
                                <p>Friday - 7.30 a.m to 11.00 p.m</p>
                                <p>Saturday - 9.30 a.m to 9.00 p.m</p>
                                <p>Sunday - 9.30 a.m to 9.00 p.m</p>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
}

export default OpenHours;