export default class PostService {
  static async getAll() {
    let response = [
      {
        name: "HONOR 70 8GB",
        price: 1500,
        url: "./img/HONOR_70_8GB.jpeg",
        amount: 7,
      },
      {
        name: "Huawei nova Y70 4GB",
        price: 528,
        url: "./img/Huawei_nova_Y70_4GB.jpeg",
        amount: 17,
      },
      {
        name: "Tecno Spark 8C 4GB",
        price: 369,
        url: "./img/Tecno_Spark_8C_4GB.jpeg",
        amount: 2,
      },
      {
        name: "Infinix Zero X Pro 8GB",
        price: 899,
        url: "./img/Infinix_Hot_11_Helio_G37_4GB.jpeg",
        amount: 11,
      },
      {
        name: "Apple iPhone 14 128GB",
        price: 2610,
        url: "./img/Apple_iPhone_14_128GB.jpeg",
        amount: 37,
      },
      {
        name: "Xiaomi Redmi Note 11 6GB",
        price: 799,
        url: "./img/Xiaomi_Redmi_Note_11_6GB.jpeg",
        amount: 23,
      },
    ];
    return response;
  }
}
