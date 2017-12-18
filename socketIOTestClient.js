
const socket = require('socket.io-client')('http://localhost:8000');
socket.on('connect', () => {
    console.log('socket connected');
});

let cnt=0;
socket.on('who', function(data){
    console.log('who on',data);

    socket.emit('go', {cnt : cnt++} );

});

socket.on('come', (data) => {
   console.log('come:',data);
    socket.emit('go',{cnt : cnt++});

});

socket.on('disconnect', function(){});