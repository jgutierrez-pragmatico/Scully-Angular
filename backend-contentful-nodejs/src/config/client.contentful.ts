import * as dotenv from "dotenv";
import { createClient } from 'contentful';

dotenv.config({
    path:
        process.env.NODE_ENV !== undefined
            ? `.${process.env.NODE_ENV.trim()}.env`
            : ".env",
});

const client = {
    space: "dl6l1y9bwvau",
    accessToken: "tu-OEx7LgS3f_AqbS91qbYGUXivFPC6_4N-M77kM_JU"
}

export const ClientContentful = createClient(client); 