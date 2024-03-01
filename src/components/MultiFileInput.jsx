import React from 'react';
import handleMultiFileUpload from '@/helpers/handleMultiFileUpload';


const MultiFileInput = ({ setWorksheets }) => {
    return (
            <input type="file" multiple onChange={event =>handleMultiFileUpload(event,setWorksheets)} />
    );
}

export default MultiFileInput;