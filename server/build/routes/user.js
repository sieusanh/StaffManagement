"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const promise = new Promise((resolve, reject) => {
    //     // resolve(true);
    //     console.log('promise 1');
    //     reject('logic error');
    // });
    // const promise2 = new Promise((resolve, reject) => {
    //     throw new Error('He is not sleeping!');
    // });
    try {
        // await promise;
        console.log('promise 2');
        // Promise.reject('Invalid password');
        res.status(200).json({});
    }
    catch (error) {
        console.log('catch');
        console.log(error);
        next(error);
        // return;
    }
    // promise.then(rs => {
    //     throw new Error('He is not sleeping!');
    // })
}));
exports.default = router;
//# sourceMappingURL=user.js.map