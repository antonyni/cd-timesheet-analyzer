import React from 'react';
import handleFileUpload from '@/helpers/handleFileUpload';


const FileInput = ({ setWorksheet }) => {
    return (
            <input type="file" onChange={event =>handleFileUpload(event,setWorksheet)} />
    );
}

export default FileInput;