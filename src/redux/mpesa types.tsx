export interface MPesaStkPushParams {
  businessShortCode: string;
  password: string;
  timestamp: string; // YYYYMMDDhhmmss
  transactionType?: "CustomerPayBillOnline" | string;
  amount: number;
  partyA: string; // payer phone (2547xxxxxxxx)
  partyB: string; // till/shortcode (e.g. "174379")
  phoneNumber: string; // same as partyA
  callbackURL: string;
  accountReference: string;
  transactionDesc?: string;
}

/**
 * Convert camelCase params to the PascalCase keys expected by Safaricom STK Push.
 */
export function toMpesaApiPayload(p: MPesaStkPushParams) {
  return {
    BusinessShortCode: p.businessShortCode,
    Password: p.password,
    Timestamp: p.timestamp,
    TransactionType: p.transactionType ?? "CustomerPayBillOnline",
    Amount: String(p.amount),
    PartyA: p.partyA,
    PartyB: p.partyB,
    PhoneNumber: p.phoneNumber,
    CallBackURL: p.callbackURL,
    AccountReference: p.accountReference,
    TransactionDesc: p.transactionDesc ?? "",
  } as const;
}

/**
 * Example usage / sample payload (typed)
 */
export const sampleParams: MPesaStkPushParams = {
  businessShortCode: "174379",
  password:
    "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",
  timestamp: "20160216165627",
  transactionType: "CustomerPayBillOnline",
  amount: 1,
  partyA: "254708374149",
  partyB: "174379",
  phoneNumber: "254708374149",
  callbackURL: "https://mydomain.com/pat",
  accountReference: "Test",
  transactionDesc: "Test",
};

export const sampleApiPayload = toMpesaApiPayload(sampleParams);