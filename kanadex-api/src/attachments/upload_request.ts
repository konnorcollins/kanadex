import { Storage } from "./storage/storage";

export class UploadRequest {
    private readonly storage: Storage;

    constructor(storage: Storage) {
        this.storage = storage;
    }

    async upload(attachment: any, mime_type: string) {

        return await this.storage.upload(attachment)
    }
}