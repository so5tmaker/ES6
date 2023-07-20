dealTrucks = [
    {
        id: "0fac590d-49ea-4c37-94e6-519f6d5e7aba",
        dealId: "d-a04ea6a495",
        truckId: "t-667506",
        createdAt: "2023-07-14T06:39:01.002Z",
        updatedAt: "2023-07-14T06:39:01.002Z",
        deal: {
            statusId: "DRAFT",
        },
        truck: {
            id: "t-667506",
            plateNumber: "430llq08",
            comment: "comment from postman 1",
            userId: "u-f9310e89",
            trailerTypeId: "truck",
            truckTypeId: "flatbed-truck",
        },
    },
    {
        id: "bc888276-fca3-4b70-af6c-35bfa29d9cee",
        dealId: "d-efcb58962e",
        truckId: "t-426815",
        createdAt: "2023-07-12T05:11:35.682Z",
        updatedAt: "2023-07-12T05:11:35.682Z",
        deal: {
            statusId: "DRAFT",
        },
        truck: {
            id: "t-426815",
            plateNumber: "430llq06",
            comment: "comment from postman",
            userId: "u-f9310e89",
            trailerTypeId: "truck",
            truckTypeId: "flatbed-truck",
        },
    },
    {
        id: "804aa26d-ac4e-485e-8508-01e6719dccb5",
        dealId: "d-6d1b928c04",
        truckId: "t-667506",
        createdAt: "2023-07-14T06:58:08.389Z",
        updatedAt: "2023-07-14T06:58:08.389Z",
        deal: {
            statusId: "DRAFT",
        },
        truck: {
            id: "t-667506",
            plateNumber: "430llq08",
            comment: "comment from postman 1",
            userId: "u-f9310e89",
            trailerTypeId: "truck",
            truckTypeId: "flatbed-truck",
        },
    },
    {
        id: "b8e42069-f14a-4c7d-965f-cd1bef224412",
        dealId: "d-4b815a3c51",
        truckId: "t-667506",
        createdAt: "2023-07-12T05:11:35.682Z",
        updatedAt: "2023-07-12T05:11:35.682Z",
        deal: {
            statusId: "DRAFT",
        },
        truck: {
            id: "t-667506",
            plateNumber: "430llq08",
            comment: "comment from postman 1",
            userId: "u-f9310e89",
            trailerTypeId: "truck",
            truckTypeId: "flatbed-truck",
        },
    },
    {
        id: "7c59720a-8bfe-4d2b-a084-b47ff630f026",
        dealId: "d-c869a5f41f",
        truckId: "t-667508",
        createdAt: "2023-07-14T06:55:33.216Z",
        updatedAt: "2023-07-14T06:55:33.216Z",
        deal: {
            statusId: "PROCESS",
        },
        truck: {
            id: "t-667509",
            plateNumber: "430llq08",
            comment: "comment from postman 1",
            userId: "u-f9310e89",
            trailerTypeId: "truck",
            truckTypeId: "flatbed-truck",
        },
    },
    {
        id: "ee1fc0fc-1e34-44f2-bf12-165f1dcb7644",
        dealId: "d-83a75dfbb5",
        truckId: "t-667508",
        createdAt: "2023-07-14T06:56:47.733Z",
        updatedAt: "2023-07-14T06:56:47.733Z",
        deal: {
            statusId: "APPLIED",
        },
        truck: {
            id: "t-667508",
            plateNumber: "430llq08",
            comment: "comment from postman 1",
            userId: "u-f9310e89",
            trailerTypeId: "truck",
            truckTypeId: "flatbed-truck",
        },
    },
    {
        id: "57183a91-2f1d-4fea-814d-8a81ed7e1411",
        dealId: "d-5546bf2771",
        truckId: "t-667506",
        createdAt: "2023-07-14T09:09:02.439Z",
        updatedAt: "2023-07-14T09:09:02.439Z",
        deal: {
            statusId: "DRAFT",
        },
        truck: {
            id: "t-667507",
            plateNumber: "430llq08",
            comment: "comment from postman 1",
            userId: "u-f9310e89",
            trailerTypeId: "truck",
            truckTypeId: "flatbed-truck",
        },
    },
    {
        id: "14344203-f818-42da-8f4c-3a78d48303cd",
        dealId: "d-453350f32c",
        truckId: "t-426815",
        createdAt: "2023-07-19T01:28:29.631Z",
        updatedAt: "2023-07-19T01:28:29.631Z",
        deal: {
            statusId: "PROCESS",
        },
        truck: {
            id: "t-426815",
            plateNumber: "430llq06",
            comment: "comment from postman",
            userId: "u-f9310e89",
            trailerTypeId: "truck",
            truckTypeId: "flatbed-truck",
        },
    },
    {
        id: "77237a64-c4a6-4307-9a24-936545088db3",
        dealId: "d-fc7df630d5",
        truckId: "t-667506",
        createdAt: "2023-07-14T07:25:37.790Z",
        updatedAt: "2023-07-14T07:25:37.790Z",
        deal: {
            statusId: "PROCESS",
        },
        truck: {
            id: "t-667506",
            plateNumber: "430llq08",
            comment: "comment from postman 1",
            userId: "u-f9310e89",
            trailerTypeId: "truck",
            truckTypeId: "flatbed-truck",
        },
    },
];

const notStatus = 'PROCESS';

const deals = dealTrucks.map((item) => ({ ...item.truck, ...item.deal }));
const ids = deals.filter(t => t.statusId === notStatus).map(item => item.id);

console.log(deals.filter((t, index, arr) => !ids.includes(t.id) &&
    arr.findIndex((item) => item.id === t.id) === index));


const data = { "liveness_result": { "result": true }, "document_recognition_result": { "result": true }, "edocument_result": { "result": true } };

const getBiometricResult = (data, resident) => {
    const parameters = resident
        ? ['liveness_result', 'face2face_result']
        : ['edocument_result', 'document_recognition_result'];
    let results = 0;
    for (const parameter of parameters) {
        if (data[parameter]?.result) results++;
    }

    return parameters.length === results;
}

console.log(getBiometricResult(data, true))
