import express from 'express';
import bodyParser from 'body-parser';
import { ExpressAdapter } from '@bull-board/express';

const serverAdapter = new ExpressAdapter();

const app = express();
app.use(bodyParser.json());

serverAdapter.setBasePath('/admin/queues');
app.use('/admin/queues', serverAdapter.getRouter());

app.post('/send-email', async (req, res) => {
    res.send({ status: 'ok' });
});

app.listen(5000, () => console.log('App running on port 5000'));