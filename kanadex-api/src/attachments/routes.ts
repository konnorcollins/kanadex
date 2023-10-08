import express, { Router } from 'express'
import multer from 'multer'
import 'dotenv/config'

import { SftpStorage } from './storage/sftp';
import { Storage } from './storage/storage'
import { DownloadRequest } from './download_request';
import { UploadRequest } from './upload_request';
import { Attachment } from './attachment';



const upload = multer({ dest: 'uploads/' });

const SFTP_SERVER = process.env.SFTP_SERVER || "localhost";
const SFTP_PORT = parseInt(process.env.SFTP_PORT || "2222");
const SFTP_USER = process.env.SFTP_USER || "foo";
const SFTP_PASSWORD = process.env.SFTP_PASSWORD || "lol";
const storage: Storage = new SftpStorage(SFTP_SERVER, SFTP_PORT, SFTP_USER, SFTP_PASSWORD);

const router: Router = express.Router();

// POST /attachment/upload
router.post('/attachment/upload', upload.single('upload'), async (req, res) => {

    const file = req.file;
    if (!file) {
        res.status(400).send('No file was uploaded');
        return;
    }

    console.log(file, req.body);

    const attachment: Attachment = {
        local_path: file.path
    }

    const request: UploadRequest = new UploadRequest(storage);
    const attachment_id = await request.upload(attachment, file.mimetype);

    res.status(201).send({ attachment_id: attachment_id })
});

// GET /attachment/download/:id
router.get('/attachment/download/:id', async (req, res) => {

    const attachment_id = req.params.id;
    if (!attachment_id) {
        // TODO: send some error back
        return;
    }
    
    console.log(attachment_id);
    return;

    // WIP
    const request: DownloadRequest = new DownloadRequest(storage);
    const attachment = request.download(attachment_id);

});

export default router;