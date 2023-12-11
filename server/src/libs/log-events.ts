

import fs from 'fs/promises';
import path from 'path';

const fileName = path.join(__dirname, '../../logs', 'logs.log');
async function logEvents(msg: string) {
    // const time = `dd-MM-yyyy\tss:mm:HH`;
    const time = JSON.stringify(new Date());
    const contentLog = `${time}-----${msg}`;
    try {
        await fs.appendFile(fileName, contentLog);
    } catch (error) {
        console.log(error);
    }
}

export default logEvents;
