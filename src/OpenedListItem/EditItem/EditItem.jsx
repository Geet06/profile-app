import React from "react";
import './EditItem.css';

const EditItem = ({ dataObj, handleEditClick, handleSaveEdit }) => {
    return <>
        <div className="profileInfo">
            <div>
                <div className="profileItem">Age</div>
                <input type='text' className="editInput" value={dataObj.dob}/>
            </div>
            <div>
                <div className="profileItem">Gender</div>
                <input type='dropdown'className="editInput" value={dataObj.gender}/>
            </div>
            <div>
                <div className="profileItem">Country</div>
                <input type='text'className="editInput" value={dataObj.country}/>
            </div>
        </div>
        <div className="description">
            <div className="profileItem">Description</div>
            <textarea className="textareaDesc">{dataObj.description}</textarea> 
        </div>
        <div className="icons">
            <span className="svgIcon" onClick={handleEditClick}>
                <svg xmlns="http://www.w3.org/2000/svg" color="#ff3500" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </span>
            <span className="svgIcon" onClick={handleSaveEdit}>
                <svg xmlns="http://www.w3.org/2000/svg" color="#38b000" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
            </span>

        </div>
    </>
}
export default EditItem;
