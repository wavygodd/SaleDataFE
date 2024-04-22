export interface Sales {
    transactionKey: number;
    transactionDate: Date;
    guid: string;
    ticketNumber: number;
    locationName: string;
    deviceName: string;
    cashierName: string;
    customerName: string;
    saleLines: SaleLines[];
  }
  
  export interface SaleLines {
    saleLineId: number;
    transactionKey: number;
    itemNumber: string;
    itemName: string;
    quantity: number;
    price: number;
    discount: number;
    vat: number;
    vatRate: number;
  }
  