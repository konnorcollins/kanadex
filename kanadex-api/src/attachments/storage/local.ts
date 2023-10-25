import fs from 'fs/promises'

import { Attachment } from "../attachment";
import { Storage } from "./storage";


export class LocalStorage implements Storage {
    private readonly root_path: string;

    constructor(root_path: string) {
        this.root_path = root_path;
    }

    upload(attachment: Attachment): Promise<string> {
        const dest = `${this.root_path}/test-copy.txt`

        return fs.copyFile(attachment.local_path, dest).then(() => {
            return dest
        }).catch(() => {
            console.log("Something went horribly wrong")
            return ""
        })
    }

    download(attachment_id: string): Promise<Attachment> {
        throw new Error("Method not implemented.");
    }
    
}