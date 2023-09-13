import React, { useState } from "react";
import ClosedListItem from "../ClosedListItem/ClosedListItem";
import './OpenedListItem.css';
import DeleteDialog from '../DeleteDialog/DeleteDialog.jsx';
import ReadListItem from "./ReadListItem/ReadListItem.jsx";
import EditItem from "./EditItem/EditItem.jsx";

const OpenedListItem = ({ dataObj, handleItemClicked, updateList }) => {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [inEditState, setEditState] = useState(false);

    const toggleDeleteDialog = () => {
        setShowDeleteDialog(!showDeleteDialog);
    }
    const handleDeleteItem = () => {
        setShowDeleteDialog(!showDeleteDialog);
        updateList('DELETE', dataObj)
    }
    const handleEditClick = (event) => {
        setEditState(!inEditState);
    }
    const handleSaveEdit = () => {

    }
    return <div className="openListCtn">
        <ClosedListItem dataObj={dataObj} isOpen={true} handleItemClicked={handleItemClicked} />
        {inEditState ? <EditItem dataObj={dataObj}
            handleEditClick={handleEditClick} handleSaveEdit={handleSaveEdit} /> :
            <ReadListItem dataObj={dataObj}
                handleEditClick={handleEditClick}
                toggleDeleteDialog={toggleDeleteDialog} />
        }
        {showDeleteDialog ? <DeleteDialog cancelDeleteClick={toggleDeleteDialog} handleDeleteItem={handleDeleteItem} /> : null}
    </div>
}
export default OpenedListItem;
