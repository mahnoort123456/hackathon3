// const response = await fetch("/api/shipengine/get-rates", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       shipToAddress: {
//         name: "Michael Smith",
//         phone: "+1 555 987 6543",
//         addressLine1: "456 Oak Avenue",
//         addressLine2: "Suite 200",
//         cityLocality: "Los Angeles",
//         stateProvince: "CA",
//         postalCode: "90001",
//         countryCode: "US",
//         addressResidentialIndicator: "no",
//       },
//       packages: [
//         { weight: { value: 5, unit: "ounce" }, dimensions: { height: 3, width: 15, length: 10, unit: "inch" } },
//       ],
//     }),
//   });
  
//   const data = await response.json();
//   console.log(data);

  const fetchShippingRates = async () => {
    try {
      const response = await fetch("/api/shipengine/get-rates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shipToAddress: {
            name: "Michael Smith",
            phone: "+1 555 987 6543",
            addressLine1: "456 Oak Avenue",
            addressLine2: "Suite 200",
            cityLocality: "Los Angeles",
            stateProvince: "CA",
            postalCode: "90001",
            countryCode: "US",
            addressResidentialIndicator: "no",
          },
          packages: [
            {
              weight: { value: 5, unit: "ounce" },
              dimensions: { height: 3, width: 15, length: 10, unit: "inch" },
            },
          ],
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };
  
  fetchShippingRates();
  