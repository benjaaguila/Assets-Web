export interface Manager {
    managerName: string;
    totalAmountManaged: number;
  }
  
  export interface Client {
    clientId: string;
    name: string;
    totalPaymentsRecibedFromDebtors: number;
  }