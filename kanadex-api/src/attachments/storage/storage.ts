export interface Storage {

    /**
     * Uploads a file to the storage server
     * @param file the file to upload
     */
    upload(attachment: any): Promise<string>;

    /**
     * Retrieves a file from the storage server
     * @param file_id the file id
     */
    download(attachment_id: string): Promise<any>;
}