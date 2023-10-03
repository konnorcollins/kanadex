import { Storage } from "./storage/storage";

export class DownloadRequest {
    private readonly storage: Storage;

    constructor(storage: Storage) {
        this.storage = storage;
    }

    async download(attachment_id: string) {

        return await this.storage.download(attachment_id)
    }
}