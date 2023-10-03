import { Storage } from "./storage";

export class SftpStorage implements Storage {
    private readonly host: string;
    private readonly port: number;
    private readonly username: string;
    private readonly private_key: Buffer;

    constructor(host: string, port: number, username: string, private_key: Buffer) {
        this.host = host;
        this.port = port;
        this.username = username;
        this.private_key = private_key;
    }

    upload(attachment: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    download(attachment_id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}