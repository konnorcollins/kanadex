import Client from 'ssh2-sftp-client'

import { Storage } from "./storage";

export class SftpStorage implements Storage {
    private readonly host: string;
    private readonly port: number;
    private readonly username: string;
    private readonly private_key: Buffer;
    private readonly sftp_client: Client = new Client();

    constructor(host: string, port: number, username: string, private_key: Buffer) {
        this.host = host;
        this.port = port;
        this.username = username;
        this.private_key = private_key;
    }

    upload(attachment: any): Promise<string> {
        const config: Client.ConnectOptions = {
            host: this.host,
            port: this.port,
            username: this.username,
            privateKey: this.private_key
        };

        return this.sftp_client.connect(config)
            .then(() => {
                return this.sftp_client.cwd();
            })
    }

    download(attachment_id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}