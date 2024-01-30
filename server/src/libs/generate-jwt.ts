import jwt from 'jsonwebtoken';

function genToken(payload: any) {
    const expiredTime: string = process.env.JWT_EXPIRE_PERIOD;
    const secretKey: string = process.env.JWT_SECRET_KEY;

    const token: string = jwt.sign(
        payload,
        secretKey,
        { algorithm: 'HS256', expiresIn: expiredTime }
    );

    return token;
}

export default genToken;