import React from 'react';
import ImageLoadIcon from "../../Ui/Icons/ImageLoadIcon";
import PdfIcon from "../../Ui/Icons/PdfIcon";
import './Files.css'
const Files = () => {
    return (
        <div className="files">
            <div className="title__Info__Field shadow__Item">Files</div>
            <div className="files_list">
                <div className="files_list_item shadow__Item">
                    <p>Open</p>
                </div>
                <div className="files_list_item shadow__Item">
                    <ImageLoadIcon/>
                </div>
                <div className="files_list_item shadow__Item">
                    <PdfIcon/>
                </div>
            </div>
        </div>
    );
};

export default Files;