import React from 'react'
import './index.css'


function MultiSelectPicker(props) {

    const [items, updateItems] = React.useState(props.options);
    const allItems = () => updateItems(props.options);
    const searchResults = searchTerm => updateItems(props.options.filter(item => item.toLowerCase().includes(searchTerm)));

    const [selected, updateSelected] = React.useState([]);
    const addSelection = item => updateSelected(selected.concat(item));
    const removeSelection = removedItem => updateSelected(selected.filter(item => item !== removedItem));


    // Items List Function
    function listItems() {
        return items ? items.map((item, index) =>
            <div className="item" key={index}>
                <input id={item} className="item-checkbox" type="checkbox" value={item} onChange={() => addSelection(item)} disabled={selected.includes(item)}/>
                <label htmlFor={item} className={`item-label ${selected.includes(item) ? "item-selected" : "item-unselected"}`}>{item}</label>
            </div>
        ) : null;
    }


    // Items Search Function
    function itemSearch(e) {
        if (e.target.value.length !== 0)
            searchResults(e.target.value.toLowerCase());
        else
            allItems();
    }


    // Chips List Function
    function listChips() {
        return selected ? selected.map((item, index) =>
            <div className="chip" key={index} onClick={() => removeSelection(item)}>
                {item}
            </div>
        ) : null;
    }


    return (
        <div className="multiselect-picker">

            <div className="picker-card">
                <input type="text" className="search-input" placeholder="Search questions" onChange={e => itemSearch(e)}/>

                <div className="items-list">
                    {listItems()}
                </div>
            </div>

            <div className="chips">
                {listChips()}
            </div>

        </div>
    );
}

export default MultiSelectPicker;
