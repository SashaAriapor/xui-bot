const osutil = require('node-os-utils');


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
    
},5000);