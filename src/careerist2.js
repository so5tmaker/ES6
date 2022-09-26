// Users = {
//     id: int PK,
//     name: string
//     email string
// }

// Contracts = {
//     id: int PK,
//     UserId: Users indx, oneToMany to Users tbl
//     Name: string,
//     ContractDate: Date,
//     StartDate: Date,
//     EndDate: Date,
//     SignDate: Date,
//     Sum: Double,
//     OuterId: 
// }

// OuterData = {
//     id: int PK,
//     UserId: Users indx, oneToMany to Users tbl
//     Name: string,
//     ContractDate: Date,
//     StartDate: Date,
//     EndDate: Date,
//     SignDate: Date,
//     Sum: Double,
//     OuterId:
// }

// Invoices = {
//     id: int PK,
//     ContractId: Contract indx, oneToMany to Contracts tbl
//     number: int,
//     InvoiceDate: Date,
//     Sum: Double,
// }

// Payments = {
//     id: int PK,
//     InvoiceId: Invoice indx, oneToMany to Invoices tbl
//     Number: int,
//     PaymentDate: Date,
//     Sum: Double,
//     PaymentType: enum ['card', 'cash', 'check']
// }

