import React from 'react'

const FilterRow = () => {

    const rowData = ["real estate",
        "home",
        "living room",
        "houses",
        "modern house",
        "apartment",
        "building",
        "interior",
        "room",
        "interior design",
        "kitchen",
        "construction",
        "house interior",
        "horse",
        "car",
        "bedroom"
    ];

    return (
        <div className='filterRow'>{
            rowData.map((itm, ind) => {
                return <div className='singleFilter' key={ind}>{itm}</div>
            })
        }</div>
    )
}

export default FilterRow;