import { Request, Response, NextFunction } from 'express';
import log from 'log';
import bcrypt from 'bcrypt';
import AccountModel from '../models/account';
import genToken from '../libs/generate-jwt';
const logger = log.get('controller-account');

// Common controllers
async function register(req: Request, res: Response, next: NextFunction) {
    try {
        logger.info(`register`)
        const params = req.body;
        const { email = '', username = '', password, ...otherInfos } = params;

        // Check if this account already existed
        const checkAccount = await AccountModel.findOne({
            $or: [{ email }, { username }]
        });

        console.log('checkAccount: ', checkAccount)

        if (checkAccount) {
            const errorData = {
                status: 403,
                message: 'Email or username already existed'
            }
            next(errorData);
            return;
        }

        // Insert new account
        // Encrypting password

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        const account = await AccountModel.create({
            username,
            email,
            password: hashedPassword,
            ...otherInfos
        });
        console.log('Acc: ', account)

        // Generate new access token
        const token = genToken({
            email,
            username,
            role: account?.role || ''
        });

        res.status(200).json({
            email, username, token,
            role: account?.role
        });

    } catch (err) {
        logger.info(`register`);
        console.log('jaja: ', err)
        next(err);
    }
}


async function login(req: Request, res: Response, next: NextFunction) {
    try {
        logger.info(`login`)
        const params = req.body;

        // Check if this account already existed
        const accountInfo = await AccountModel.findOne({
            $or: [{ email: params?.email }, { username: params?.username }]
        });

        if (!accountInfo) {
            const errorData = {
                status: 404,
                message: 'Account not existed'
            }
            next(errorData);
            return;
        }

        const { email = '', username = '',
            role = '', password = '' } = accountInfo;

        // Check password
        const authenPassword = await bcrypt.compare(
            params.password, password);
        if (!authenPassword) {
            const errorData = {
                status: 404,
                message: 'Incorrect password.'
            }
            next(errorData);
            return;
        }

        // Generate new access token
        const token = genToken({
            email, username, role
        });

        res.status(200).json({ email, username, role, token });

    } catch (err) {
        logger.info(`login`);
        next(err);
    }
}

// Admin controllers
async function count(req: Request, res: Response, next: NextFunction) {
    try {
        logger.info(`count`)
        const params = req.query;

        const queryData = await AccountModel.countDocuments(params);
        console.log('queryData: ', queryData)

        // const data = parseInt(count_num) || 0;
        res.status(200).json({ data: 0 });
    } catch (err) {
        logger.info(`count`);
        next(err);
    }
}

async function find(req: Request, res: Response, next: NextFunction) {
    try {
        logger.info(`find`)
        const params = req.query;
        const queryData = await AccountModel.find(params);

        console.log('queryData: ', queryData);

        res.status(200).json({
            total: 0,
            data: []
        });
    } catch (err) {
        logger.info(`find`);
        next(err);
    }
}

export default {
    register, login, find, count
};
