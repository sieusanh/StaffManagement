
import React from 'react';
import { Container, Row, Col, Title, Button } from '../Style/Grid';

export default function Login() {
    return (
        <Container style={{ textAlign: 'center' }}>
            <Row justify='center' style={{ height: '800px' }}>
                <Col span={8}>
                    <Title
                        style={{ textAlign: 'center', fontSize: '30px' }}
                    >
                        Fun Chat
                    </Title>
                    <Button style={{ width: '100%', marginBottom: 5 }}>
                        Đăng nhập bằng Google
                    </Button>
                    <Button
                        style={{ width: '100%' }}
                        onClick={handleFbLogin}
                    >
                        Đăng nhập bằng Facebook
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
