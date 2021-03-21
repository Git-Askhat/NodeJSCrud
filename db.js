const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'ckjmqluvjeaunu',
    password: '73f708681e5d1a43334511d93a621f4210ce2e21242f4a9325a483938b1d3891',
    host: 'ec2-54-205-183-19.compute-1.amazonaws.com',
    port: 5432,
    database: 'd7mcigtamkthj6'
});

module.exports = pool;