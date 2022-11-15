import './plugins/moduleAlias';
import express from "express";
import qrcode from 'qrcode-terminal'
const { Client } = require('whatsapp-web.js');

const app = express();
const client = new Client();

client.on('qr', (qr: any) => {
    qrcode.generate(qr, {small: true})
});

client.on('ready', () => {
    console.log('Cliente Conectado');
});

client.on('message', (message: { body: any; }) => {
	console.log(message.body);
});
 

client.initialize();

app.listen(3001,() => {
    console.log("Servidor iniciado")
})