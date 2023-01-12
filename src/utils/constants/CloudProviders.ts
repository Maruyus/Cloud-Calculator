export enum CLOUD_PROVIDERS {
    AWS,
    Azure,
    Alibaba,
    Oracle
}

export enum PRICING_API_URIS {
    AWSQuery = "https://api.pricing.us-east-1.amazonaws.com",
    AWSBulk = "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json",
    Azure = "https://prices.azure.com/api/retail/prices",
    Alibaba = "https://business.ap-southeast-1.aliyuncs.com/?Action=GetSubscriptionPrice",
    Oracle = "https://apexapps.oracle.com/pls/apex/cetools/api/v1/products/"
}