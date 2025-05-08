import express from 'express';
import bodyParser from 'body-parser';
import Web3 from 'web3';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();

const app = express();

app.use(bodyParser.json());