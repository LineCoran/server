import express from 'express';
import cors from 'cors';

const getOrder = async (req, res) => {
    const q = 'SELECT * FROM orders'

    return res.status(200).json('hello from server');
}

const app = express();

const port = process.env.PORT || 3001;

const orderRouter =  express.Router();

orderRouter.get('/orders', getOrder);

app.use(express.json());
app.use(cors())
app.use('/', orderRouter);


async function start() {
    app.listen(port, async () => {
            process.stdout.write(`Server is running. PORT: ${port} \n`);
        }
    )
}

start()