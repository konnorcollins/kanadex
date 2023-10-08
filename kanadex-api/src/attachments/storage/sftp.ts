import Client from 'ssh2-sftp-client'

import { Storage } from "./storage";
import { Attachment } from '../attachment';

export class SftpStorage implements Storage {
    private readonly host: string;
    private readonly port: number;
    private readonly username: string;
    private readonly password: string;

    constructor(host: string, port: number, username: string, password: string) {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
    }

    upload(attachment: Attachment): Promise<string> {
        const config: Client.ConnectOptions = {
            host: this.host,
            port: this.port,
            username: this.username,
            password: this.password,
        };

        const sftp_client = new Client();

        console.log(attachment.local_path);
        return sftp_client.connect(config)
            .then(() => {
                return sftp_client.cwd();
                //return sftp_client.put(attachment.local_path, '/home/foo/share/test-copy.txt');
            })
    }

    download(attachment_id: string): Promise<Attachment> {
        throw new Error("Method not implemented.");
    }
}