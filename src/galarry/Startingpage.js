import React, { useState } from 'react';
import UploadForm from './Form/UploadForm';
import RoutingPage from './RoutingPage';
import { storage, db, timestamp } from './Config/fire'

const Startingpage = () => {
    const [file, setfile] = useState(null);
    const [progress, setprogress] = useState(0);
    const [modaltoggle, setmodaltoggle] = useState(false);
    const [toggle, settoggle] = useState(false);
    const [filename, setFilename] = useState('');

    const types = ['jpg','png', 'jpeg','JPEG','JPG','PNG'];
    const UploadHandeler = () => {
        settoggle(prestate => !prestate);
        let filetype = file.name.split('.').pop();

        let bucketname = '';
        if (types.includes(filetype)) bucketname = 'image'
        else
            bucketname = 'video';

        const storageref = storage.ref(`${bucketname}/${file.name}`).put(file);
        const firestoreref = db.collection(`${bucketname}`)
        const firestoreallref = db.collection('allfile')
        storageref.on('state_changed', (p) => {
            let pro = Math.round((p.bytesTransferred / p.totalBytes) * 200);
            setprogress(pro);

        }, (err) => {
            console.log(err);
        }, () => {
            storageref.snapshot.ref.getDownloadURL().then((url) => {
                const createdAt = new timestamp();
                setfile(null);
                setFilename('')
                settoggle(prestate => !prestate);
                setmodaltoggle(prev=>!prev);

                firestoreref.add({ url, createdAt, filetype })
                firestoreallref.add({ url, createdAt, filetype });
            })

        })
    }

    return (
        <div>
            <RoutingPage
                file={file}
                setfile={setfile}
                progress={progress}
                setprogress={setprogress}
                modaltoggle={modaltoggle}
                setmodaltoggle={setmodaltoggle}
                toggle={toggle}
                settoggle={settoggle} 
                />
            {modaltoggle ?
                (<UploadForm
                    file={file}
                    setfile={setfile}
                    progress={progress}
                    setprogress={setprogress}
                    modaltoggle={modaltoggle}
                    setmodaltoggle={setmodaltoggle}
                    toggle={toggle}
                    settoggle={settoggle}
                    filename={filename}
                    setFilename={setFilename}
                    UploadHandeler={UploadHandeler} />) : null}
        </div>
    );
};

export default Startingpage;