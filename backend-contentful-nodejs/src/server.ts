import express from "express";
import morgan from "morgan";
import cors from "cors";
import { ClientContentful as client } from "./config/client.contentful";
import { ConfigServer } from "./config/config";

class ServerBootstrap extends ConfigServer {
    public app: express.Application = express();
    private port: number = this.getNumberEnv("PORT") || 9000;

    constructor() {
        super();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.get("/api/entries", async (req, res) => {
            const entries = await this.getAllEntries();
            res.json(entries);
        });
        this.app.get("/api/entry/:id", async (req, res) => {
            const { id } = req.params;
            const entry = await this.getEntryById(id);
            res.json(entry);
        });
        this.listen();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log("Server listening on port => " + this.port);
        });
    }

    public getAllEntries() {
        return new Promise(resolve => {
            const entries = client.getEntries();
            resolve(entries);
        });
    }

    public getEntryById(id: string) {
        return new Promise(resolve => {
            const entry = client.getEntry(id);
            resolve(entry);
        });
    }
}

new ServerBootstrap();