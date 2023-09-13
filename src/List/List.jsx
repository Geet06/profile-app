import React, { useEffect, useState } from "react";
import celebretiesListfromJSON from '../resources/celebrities.json';
import './List.css';
import OpenedListItem from '../OpenedListItem/OpenedListItem.jsx';
import ClosedListItem from "../ClosedListItem/ClosedListItem.jsx";

const List = () => {
    const [celebretiesList, setCelbretiesList] = useState(celebretiesListfromJSON);
    const [searchValue, setSearchValue] = useState('');
    const [selectedItem, setSelectedItem] = useState({});
    const [listPostDeletion,setListPostDeletion]=useState(celebretiesListfromJSON);

    useEffect(() => {
        let _celebretiesList = listPostDeletion.filter((item) => {
            return item.first.toLocaleLowerCase().includes(searchValue) ||
                item.last.toLocaleLowerCase().includes(searchValue)
        })
        setCelbretiesList(_celebretiesList);
    }, [searchValue]);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value.toLocaleLowerCase());
    }
    const handleItemClicked = (item) => {
        setSelectedItem(selectedItem.id == item.id ? {} : item)
    }
    const updateList=(updateType,updatedItem)=>{
        let _celebretiesList;
        switch(updateType){
            case 'DELETE':
                _celebretiesList = celebretiesList.filter((item) => item.id !== updatedItem.id);
                setListPostDeletion(_celebretiesList);
                break;
            case 'EDIT':
                
            default:
                console.log('no operation');
                break;
        }
        setCelbretiesList(_celebretiesList)
    }
    return <>
        <input type="text" placeholder="Search user" onChange={handleSearchChange} className="searchBar" />
        {celebretiesList.map((item) => {
            return <div key={item.id} >
                {selectedItem.id == item.id ?
                    <OpenedListItem dataObj={selectedItem} handleItemClicked={handleItemClicked} updateList={updateList} />
                    :
                    <ClosedListItem dataObj={item} handleItemClicked={handleItemClicked}/>}
            </div>
        })}
    </>
}
export default List;