import React from 'react';
import handleFileUploadExcelJS from '@/helpers/handleFileUploadExcelJS';


const FileInputExcelJS = ({ setWorksheet }) => {
    return (
            <input type="file" onChange={event =>handleFileUploadExcelJS(event,setWorksheet)} />
    );
}

export default FileInputExcelJS;