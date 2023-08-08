
const trucks = [
    {
        "id": "t-667506",
        "plateNumber": "430llq08",
        "comment": "comment from postman 1",
        "userId": "u-f9310e89",
        "trailerTypeId": "truck",
        "truckTypeId": "flatbed-truck",
        "statusId": "DRAFT"
    },
    {
        "id": "t-426815",
        "plateNumber": "430llq06",
        "comment": "comment from postman",
        "userId": "u-f9310e89",
        "trailerTypeId": "truck",
        "truckTypeId": "flatbed-truck",
        "statusId": "DRAFT"
    },
    {
        "id": "t-667506",
        "plateNumber": "430llq08",
        "comment": "comment from postman 1",
        "userId": "u-f9310e89",
        "trailerTypeId": "truck",
        "truckTypeId": "flatbed-truck",
    },
    {
        "id": "t-426819",
        "plateNumber": "430llq06",
        "comment": "comment from postman",
        "userId": "u-f9310e89",
        "trailerTypeId": "truck",
        "truckTypeId": "flatbed-truck",
        "statusId": "DRAFT"
    },
]

var removeDuplicates = function (items) {
    const newItems = [];
    const sortItems = items.concat()
        .sort((a, b) => (a.id === b.id ? 0 : a.id < b.id ? -1 : 1));

    for (let i = 1; i < sortItems.length; i++) {
        if (sortItems[i - 1].id !== sortItems[i].id) {
            newItems.push(sortItems[i]);
        }
    }
    return newItems;
};

console.log(removeDuplicates(trucks));