// 'use client';
// import { shipengine } from "../../../../../helper/shipEngine"; // Import ShipEngine client
// import { Address, Package } from "../../../../../types"; // Import custom types
// import { NextRequest } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const {
//       shipeToAddress,
//       packages,
//     }: { shipeToAddress: Address; packages: Package[] } = await req.json();

//     // Validate required fields
//     if (!shipeToAddress || !packages) {
//       return new Response(
//         JSON.stringify({
//           error: "Missing required fields: shipeToAddress and packages",
//         }),
//         { status: 400 }
//       );
//     }
// // in testing api you can use your  address which you have selected in create account
// // Define the "ship from" address (e.g., your warehouse or business address)
//     const shipFromAddress: Address = {
//       name: "Michael Smith",
//       phone: "+1 555 987 6543",
//       addressLine1: "456 Oak Avenue",
//       addressLine2: "Suite 200",
//       cityLocality: "Los Angeles",
//       stateProvince: "CA",
//       postalCode: "90001",
//       countryCode: "US",
//       addressResidentialIndicator: "no", // Indicates a commercial address
//     };

//     // Fetch shipping rates from ShipEngine
//     const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
//       shipment: {
//         shipTo: shipeToAddress,
//         shipFrom: shipFromAddress,
//         packages: packages,
//       },
//       rateOptions: {
//         carrierIds: [
//           process.env.SHIPENGINE_FIRST_COURIER || "",
//           process.env.SHIPENGINE_SECOND_COURIER || "",
//           process.env.SHIPENGINE_THIRD_COURIER || "",
//           process.env.SHIPENGINE_FOURTH_COURIER || "",
//         ].filter(Boolean), // Remove empty strings
//       },
//     });

//     // Log details for debugging
//     console.log("Ship To Address:", shipeToAddress);
//     console.log("Packages:", packages);
//     console.log("Shipment Details:", shipmentDetails);

//     // Return the response with shipment details
//     return new Response(
//       JSON.stringify({ shipeToAddress, packages, shipmentDetails }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log("Error fetching shipping rates:", error)
//     return new Response(JSON.stringify({ error: error }), {
//       status: 500,
//     });
//   }
// }

import { NextRequest } from "next/server";
import { shipengine } from "../../../../../helper/shipEngine"; // Ensure correct import path
import { Address, Package } from "../../../../../types"; // Import custom types

export async function POST(req: NextRequest) {
  try {
    const { shipToAddress, packages }: { shipToAddress: Address; packages: Package[] } = await req.json();

    // Validate required fields
    if (!shipToAddress || !packages) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: shipToAddress and packages" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Define the "ship from" address (e.g., warehouse address)
    const shipFromAddress: Address = {
      name: "Michael Smith",
      phone: "+1 555 987 6543",
      addressLine1: "456 Oak Avenue",
      addressLine2: "Suite 200",
      cityLocality: "Los Angeles",
      stateProvince: "CA",
      postalCode: "90001",
      countryCode: "US",
      addressResidentialIndicator: "no", // Commercial address
    };

    // Ensure environment variables are properly set
    const carrierIds = [
      process.env.SHIPENGINE_FIRST_COURIER,
      process.env.SHIPENGINE_SECOND_COURIER,
      process.env.SHIPENGINE_THIRD_COURIER,
      process.env.SHIPENGINE_FOURTH_COURIER,
    ].filter(Boolean) as string[]; // Ensure only valid values are used

    // Fetch shipping rates
    const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipToAddress,
        shipFrom: shipFromAddress,
        packages: packages,
      },
      rateOptions: { carrierIds },
    });

    console.log("Ship To Address:", shipToAddress);
    console.log("Packages:", packages);
    console.log("Shipment Details:", shipmentDetails);

    return new Response(
      JSON.stringify({ shipToAddress, packages, shipmentDetails }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching shipping rates:", error);

    return new Response(
      JSON.stringify({ error: (error as Error).message || "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
