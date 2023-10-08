import { Attachment } from "./attachment";
import { Storage } from "./storage/storage";

export class UploadRequest {
    private readonly storage: Storage;

    constructor(storage: Storage) {
        this.storage = storage;
    }

    async upload(attachment: Attachment, mime_type: string) {

        console.log(mime_type)
        return await this.storage.upload(attachment)
    }
}