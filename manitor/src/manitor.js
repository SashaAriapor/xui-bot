const osutil = require('node-os-utils');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io')

// create ws server 
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = 3001;

// get all sys info 
const cpu = osutil.cpu;
const drive = osutil.drive;
const memory = osutil.mem;
const netstat = osutil.netstat;


setInterval(async () => {
    // get cpu core 
    const cpu_count = await cpu.count();
    console.log(cpu_count);

    // get how much is cpu free 
    await cpu.usage()
        .then(info => {
            console.log(info);
        });
    
    // get drive info 
    await drive.info()
        .then(info => {
          console.log(info)
        });
    
    // get memory info
    await memory.info()
        .then(info => {
            console.log(info);
        });
    
    // get netstat info 
    await netstat.inOut()
        .then(info => {
          console.log(info);
        });
    
},10000);

server.listen(PORT, () => {
    console.log(`Manitor Runned on port ${PORT}`);
});