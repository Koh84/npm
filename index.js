function isWds(string) {
    return string === 'WDS'
}

let ws = null;
let i = 0;

const handleSocketConnect = async () => {
    console.log('handleSocketConnect');
    let serverAddress = 'ws:' + '127.0.0.1' + ':' + '3030';
    ws = new WebSocket(serverAddress);
    ws.onmessage = (message) => {
        console.log('WebSocket: Message recieved: ' + message.data);
    };
    ws.onerror = (event) => {
        console.log('Websocket: Error ' + event);
    };
    ws.onopen = () => {
        console.log('Websocket: Connected to Server');
    };
    ws.onclose = () => {
        console.log('WebSocket: Closing');
    };
    console.log('WebSocket: ready ');
}

const handleSocketSend = async () => {
    if (ws !== null) {
        ws.send(`This is a test message ${i++}`);
        console.log('handleSocketSend: message sent ');
    }
}

const handleSocketClose = async () => {
    if (ws !== null) {
        ws.close();
        console.log('handleSocketClose');
    }
}

module.exports = {
    isWds,
    handleSocketConnect,
    handleSocketSend,
    handleSocketClose
}