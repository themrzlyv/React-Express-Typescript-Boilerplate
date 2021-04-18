import * as express from 'express';
import ConnectDb from './helpers/ConnectDb';
import routes from './routes/routes';

const app = express();
const port = process.env.PORT || 3000;

// ConnectDb()

app.use(express.static('public'))
app.use(routes)


app.listen(port, () => console.log(`Server listening on port: ${port}`));
