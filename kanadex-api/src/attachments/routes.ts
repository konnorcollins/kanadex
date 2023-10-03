import express, { Router } from 'express'
import multer from 'multer'

import { SftpStorage } from './storage/sftp';
import { Storage } from './storage/storage'
import { DownloadRequest } from './download_request';
import { UploadRequest } from './upload_request';



const upload = multer({ dest: 'uploads/' });

const storage: Storage = new SftpStorage('localhost', 5535, 'foo', Buffer.from('bar') );

const router: Router = express.Router();

// POST /attachment/upload
router.post('/attachment/upload', upload.single('upload'), async (req, res) => {

    const file = req.file;
    if (!file) {
        // TODO: send some error back
        return;
    }

    console.log(file, req.body);
    return;

    // WIP
    const attachment = {}

    const request: UploadRequest = new UploadRequest(storage);
    const attachment_id = await request.upload(attachment, 'text/plain');

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