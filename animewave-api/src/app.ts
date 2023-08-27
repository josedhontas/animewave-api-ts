import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { conectarServidorNoBD } from './config/db'; 

export const app = express();