// "use client"

// import { createContext, useState } from "react";

// interface Product {
//     _id: string;
//     price: number;
//     quantity: number;
//     stock: number; // Tracks remaining inventory
//     // Other product properties here
//   }
// export const CartContext = createContext({});

// export const CartProvider = ({children}:any) =>{

//     const [showCart,setShowCart] = useState(false);
//     const [qty, setQty] = useState(1);
//     const [cartItems, setCartItems] = useState<any[]>([]);
//     const [totalQuantity, setTotalQuantity] = useState(0);
//     const [totalPrice, setTotalPrice] = useState(0);


//     const incQty = () =>{
//         setQty((prevQty)=> prevQty + 1)
//     }

//     const decQty = () =>{
//         setQty((prevQty)=> {
//             if(prevQty-1 < 1 ) return 1;
//             return prevQty - 1;
//         })
//     }

//     const addProduct = (product:any, quantity:number) =>{

//         const checkProductInCart = cartItems.find((item:any)=>item._id === product._id);
//         setTotalQuantity((prev)=>prev+quantity);
//         setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.price*quantity)

//         if(checkProductInCart){
//             const updatedCartItems = cartItems.map((cartProduct:any)=>{
//                 if(cartProduct._id === product._id)
//                 {
//                    return { 
//                         ...cartProduct,
//                         quantity:cartProduct.quantity + quantity
//                     }  
//                 } else{
//                     return cartProduct;
//                 }
//             });
//             setCartItems(updatedCartItems);


//         }else{
//             product.quantity = quantity;
//             setCartItems([...cartItems, {...product}]);
//         }

//     }

//     const toggleCartItemQty = (id:any, value:any) =>{
//         let foundProduct = cartItems.find((item)=> item._id === id);
//         const index = cartItems.findIndex((product)=>product._id === id);
//         const updatedCartItems = [...cartItems];

//         if(value === 'plus'){
//             updatedCartItems[index] = { ...updatedCartItems[index], quantity:updatedCartItems[index].quantity + 1 }
//             setCartItems([...updatedCartItems]);
//             setTotalPrice((prevTotalPrice)=> prevTotalPrice + foundProduct.price);
//             setTotalQuantity((prevTotalQty) => prevTotalQty + 1)

//         }else if(value === 'minus'){
//             if(foundProduct.quantity > 1 ){
//                 updatedCartItems[index] = { ...updatedCartItems[index], quantity:updatedCartItems[index].quantity - 1 }
//                 setCartItems([...updatedCartItems]);
//                 setTotalPrice((prevTotalPrice)=> prevTotalPrice - foundProduct.price);
//                 setTotalQuantity((prevTotalQty) => prevTotalQty - 1);
//             }

//         }

//     }

//     const onRemove = (product:any) => {
//         let foundProduct = cartItems.find((item)=> item._id === product._id);
//         const newCartItems = cartItems.filter((item) => item._id !== product._id);

//         setCartItems(newCartItems);
//         setTotalPrice((prevTotal) => prevTotal - foundProduct.price*foundProduct.quantity)
//         setTotalQuantity((prevTotalQty) => prevTotalQty - foundProduct.quantity);

//     }


//     return(
//         <CartContext.Provider
//          value={{onRemove, toggleCartItemQty, totalPrice, totalQuantity, showCart, setShowCart, qty, incQty, decQty, cartItems, addProduct}}
//         >
//             <div>{children}</div>

//         </CartContext.Provider>
//     )

// }



// "use client";

// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext({});

// export const CartProvider = ({ children }: any) => {
//   const [showCart, setShowCart] = useState(false);
//   const [qty, setQty] = useState(1);
//   const [cartItems, setCartItems] = useState<any[]>([]);
//   const [totalQuantity, setTotalQuantity] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Save cart state to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
//     localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
//   }, [cartItems, totalPrice, totalQuantity]);

//   // Load cart state from localStorage on page load
//   useEffect(() => {
//     const storedCartItems = localStorage.getItem("cartItems");
//     const storedTotalPrice = localStorage.getItem("totalPrice");
//     const storedTotalQuantity = localStorage.getItem("totalQuantity");

//     if (storedCartItems) setCartItems(JSON.parse(storedCartItems));
//     if (storedTotalPrice) setTotalPrice(JSON.parse(storedTotalPrice));
//     if (storedTotalQuantity) setTotalQuantity(JSON.parse(storedTotalQuantity));
//   }, []);

//   const incQty = () => {
//     setQty((prevQty) => prevQty + 1);
//   };

//   const decQty = () => {
//     setQty((prevQty) => {
//       if (prevQty - 1 < 1) return 1;
//       return prevQty - 1;
//     });
//   };

//   const addProduct = (product: any, quantity: number, size: string) => {
//     const checkProductInCart = cartItems.find((item: any) => item._id === product._id);

//     if (product.stock < quantity) {
//       alert("Not enough stock available!");
//       return;
//     }

//     setTotalQuantity((prev) => prev + quantity);
//     setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);

//     if (checkProductInCart) {
//       const updatedCartItems = cartItems.map((cartProduct: any) => {
//         if (cartProduct._id === product._id) {
//           return {
//             ...cartProduct,
//             quantity: cartProduct.quantity + quantity,
//           };
//         } else {
//           return cartProduct;
//         }
//       });
//       setCartItems(updatedCartItems);
//     } else {
//       product.quantity = quantity;
//       product.stock -= quantity;  // Deduct stock when added to cart
//       setCartItems([...cartItems, { ...product }]);
//     }
//   };

//   const toggleCartItemQty = (id: any, value: any) => {
//     let foundProduct = cartItems.find((item) => item._id === id);
//     const index = cartItems.findIndex((product) => product._id === id);
//     const updatedCartItems = [...cartItems];

//     if (value === "plus") {
//       if (foundProduct.stock > foundProduct.quantity) {
//         updatedCartItems[index] = {
//           ...updatedCartItems[index],
//           quantity: updatedCartItems[index].quantity + 1,
//         };
//         setCartItems([...updatedCartItems]);
//         setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
//         setTotalQuantity((prevTotalQty) => prevTotalQty + 1);
//       } else {
//         alert("Not enough stock available!");
//       }
//     } else if (value === "minus") {
//       if (foundProduct.quantity > 1) {
//         updatedCartItems[index] = {
//           ...updatedCartItems[index],
//           quantity: updatedCartItems[index].quantity - 1,
//         };
//         setCartItems([...updatedCartItems]);
//         setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
//         setTotalQuantity((prevTotalQty) => prevTotalQty - 1);
//       }
//     }
//   };

//   const onRemove = (product: any) => {
//     let foundProduct = cartItems.find((item) => item._id === product._id);
//     const newCartItems = cartItems.filter((item) => item._id !== product._id);

//     setCartItems(newCartItems);
//     setTotalPrice((prevTotal) => prevTotal - foundProduct.price * foundProduct.quantity);
//     setTotalQuantity((prevTotalQty) => prevTotalQty - foundProduct.quantity);

//     // Return the stock after removal
//     foundProduct.stock += foundProduct.quantity;
//   };

// //   return (
// //     <CartContext.Provider
// //       value={{
// //         onRemove,
// //         toggleCartItemQty,
// //         totalPrice,
// //         totalQuantity,
// //         showCart,
// //         setShowCart,
// //         qty,
// //         incQty,
// //         decQty,
// //         cartItems,
// //         addProduct,
// //       }}
// //     >
// //       <div>{children}</div>
// //     </CartContext.Provider>
// //   );
// // };




// "use client";

// import { createContext, useState, useEffect, ReactNode } from "react";

// // Define the context's types for better clarity
// interface Product {
//   _id: string;
//   price: number;
//   quantity: number;
//   stock: number;
//   // Other product properties here
// }

// interface CartContextType {
//   showCart: boolean;
//   setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
//   qty: number;
//   incQty: () => void;
//   decQty: () => void;
//   cartItems: Product[];
//   totalQuantity: number;
//   totalPrice: number;
//   wishlistItems: Product[];
//   addProduct: (product: Product, quantity: number) => void;
//   toggleCartItemQty: (id: string, value: "plus" | "minus") => void;
//   onRemove: (product: Product) => void;
//   addToWishlist: (product: Product) => void;
//   removeFromWishlist: (product: Product) => void;
// }

// export const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [showCart, setShowCart] = useState(false);
//   const [qty, setQty] = useState(1);
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
//   const [totalQuantity, setTotalQuantity] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Save cart and wishlist state to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
//     localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
//     localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
//   }, [cartItems, wishlistItems, totalPrice, totalQuantity]);

//   // Load cart and wishlist state from localStorage on page load
//   useEffect(() => {
//     const storedCartItems = localStorage.getItem("cartItems");
//     const storedWishlistItems = localStorage.getItem("wishlistItems");
//     const storedTotalPrice = localStorage.getItem("totalPrice");
//     const storedTotalQuantity = localStorage.getItem("totalQuantity");

//     if (storedCartItems) setCartItems(JSON.parse(storedCartItems));
//     if (storedWishlistItems) setWishlistItems(JSON.parse(storedWishlistItems));
//     if (storedTotalPrice) setTotalPrice(JSON.parse(storedTotalPrice));
//     if (storedTotalQuantity) setTotalQuantity(JSON.parse(storedTotalQuantity));
//   }, []);

//   const incQty = () => setQty((prevQty) => prevQty + 1);
//   const decQty = () => setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));

//   const addProduct = (product: Product, quantity: number) => {
//     const checkProductInCart = cartItems.find((item) => item._id === product._id);

//     if (product.stock < quantity) {
//       alert("Not enough stock available!");
//       return;
//     }

//     setTotalQuantity((prev) => prev + quantity);
//     setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);

//     if (checkProductInCart) {
//       const updatedCartItems = cartItems.map((cartProduct) => {
//         if (cartProduct._id === product._id) {
//           return { ...cartProduct, quantity: cartProduct.quantity + quantity };
//         } else {
//           return cartProduct;
//         }
//       });
//       setCartItems(updatedCartItems);
//     } else {
//       product.quantity = quantity;
//       product.stock -= quantity; // Deduct stock when added to cart
//       setCartItems([...cartItems, product]);
//     }
//   };

//   const toggleCartItemQty = (id: string, value: "plus" | "minus") => {
//     const foundProduct = cartItems.find((item) => item._id === id);
//     if (!foundProduct) return;

//     const index = cartItems.findIndex((product) => product._id === id);
//     const updatedCartItems = [...cartItems];

//     if (value === "plus" && foundProduct.stock > foundProduct.quantity) {
//       updatedCartItems[index] = { ...updatedCartItems[index], quantity: updatedCartItems[index].quantity + 1 };
//       setCartItems(updatedCartItems);
//       setTotalPrice((prev) => prev + foundProduct.price);
//       setTotalQuantity((prev) => prev + 1);
//     } else if (value === "minus" && foundProduct.quantity > 1) {
//       updatedCartItems[index] = { ...updatedCartItems[index], quantity: updatedCartItems[index].quantity - 1 };
//       setCartItems(updatedCartItems);
//       setTotalPrice((prev) => prev - foundProduct.price);
//       setTotalQuantity((prev) => prev - 1);
//     } else {
//       alert("Not enough stock available!");
//     }
//   };

//   const onRemove = (product: Product) => {
//     const foundProduct = cartItems.find((item) => item._id === product._id);
//     if (!foundProduct) return;

//     const newCartItems = cartItems.filter((item) => item._id !== product._id);

//     setCartItems(newCartItems);
//     setTotalPrice((prev) => prev - foundProduct.price * foundProduct.quantity);
//     setTotalQuantity((prev) => prev - foundProduct.quantity);

//     // Return the stock after removal
//     foundProduct.stock += foundProduct.quantity;
//   };

//   const addToWishlist = (product: Product) => {
//     const productExists = wishlistItems.find((item) => item._id === product._id);
//     if (!productExists) {
//       setWishlistItems((prev) => [...prev, product]);
//     }
//   };

//   const removeFromWishlist = (product: Product) => {
//     const updatedWishlistItems = wishlistItems.filter((item) => item._id !== product._id);
//     setWishlistItems(updatedWishlistItems);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         showCart,
//         setShowCart,
//         qty,
//         incQty,
//         decQty,
//         cartItems,
//         wishlistItems,
//         totalQuantity,
//         totalPrice,
//         addProduct,
//         toggleCartItemQty,
//         onRemove,
//         addToWishlist,
//         removeFromWishlist,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };



// "use client";

// import { createContext, useState, useEffect, ReactNode } from "react";

// // Define the context's types for better clarity
// interface Product {
//   _id: string;
//   price: number;
//   quantity: number;
//   stock: number; // Tracks remaining inventory
//   // Other product properties here
// }

// interface CartContextType {
//   showCart: boolean;
//   setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
//   qty: number;
//   incQty: () => void;
//   decQty: () => void;
//   cartItems: Product[];
//   totalQuantity: number;
//   totalPrice: number;
//   wishlistItems: Product[];
//   addProduct: (product: Product, quantity: number) => void;
//   toggleCartItemQty: (id: string, value: "plus" | "minus") => void;
//   onRemove: (product: Product) => void;
//   addToWishlist: (product: Product) => void;
//   removeFromWishlist: (product: Product) => void;
// }

// export const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [showCart, setShowCart] = useState(false);
//   const [qty, setQty] = useState(1);
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
//   const [totalQuantity, setTotalQuantity] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Save cart and wishlist state to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
//     localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
//     localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
//   }, [cartItems, wishlistItems, totalPrice, totalQuantity]);

//   // Load cart and wishlist state from localStorage on page load
//   useEffect(() => {
//     const storedCartItems = localStorage.getItem("cartItems");
//     const storedWishlistItems = localStorage.getItem("wishlistItems");
//     const storedTotalPrice = localStorage.getItem("totalPrice");
//     const storedTotalQuantity = localStorage.getItem("totalQuantity");

//     if (storedCartItems) setCartItems(JSON.parse(storedCartItems));
//     if (storedWishlistItems) setWishlistItems(JSON.parse(storedWishlistItems));
//     if (storedTotalPrice) setTotalPrice(JSON.parse(storedTotalPrice));
//     if (storedTotalQuantity) setTotalQuantity(JSON.parse(storedTotalQuantity));
//   }, []);

//   const incQty = () => setQty((prevQty) => prevQty + 1);
//   const decQty = () => setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));

//   const addProduct = (product: Product, quantity: number) => {
//     if (product.stock < quantity) {
//       alert("Not enough stock available!");
//       return;
//     }

//     const checkProductInCart = cartItems.find((item) => item._id === product._id);

//     setTotalQuantity((prev) => prev + quantity);
//     setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);

//     if (checkProductInCart) {
//       const updatedCartItems = cartItems.map((cartProduct) => {
//         if (cartProduct._id === product._id) {
//           return { ...cartProduct, quantity: cartProduct.quantity + quantity };
//         }
//         return cartProduct;
//       });
//       setCartItems(updatedCartItems);
//     } else {
//       setCartItems([...cartItems, { ...product, quantity }]);
//     }

//     // Deduct stock after adding to cart
//     product.stock -= quantity;
//   };

//   const toggleCartItemQty = (id: string, value: "plus" | "minus") => {
//     const foundProduct = cartItems.find((item) => item._id === id);
//     if (!foundProduct) return;

//     const updatedCartItems = cartItems.map((item) => {
//       if (item._id === id) {
//         if (value === "plus") {
//           if (item.stock > item.quantity) {
//             item.stock -= 1;
//             setTotalPrice((prev) => prev + item.price);
//             setTotalQuantity((prev) => prev + 1);
//             return { ...item, quantity: item.quantity + 1 };
//           } else {
//             alert("Not enough stock available!");
//           }
//         } else if (value === "minus" && item.quantity > 1) {
//           item.stock += 1;
//           setTotalPrice((prev) => prev - item.price);
//           setTotalQuantity((prev) => prev - 1);
//           return { ...item, quantity: item.quantity - 1 };
//         }
//       }
//       return item;
//     });

//     setCartItems(updatedCartItems);
//   };

//   const onRemove = (product: Product) => {
//     const foundProduct = cartItems.find((item) => item._id === product._id);
//     if (!foundProduct) return;

//     const newCartItems = cartItems.filter((item) => item._id !== product._id);

//     setCartItems(newCartItems);
//     setTotalPrice((prev) => prev - foundProduct.price * foundProduct.quantity);
//     setTotalQuantity((prev) => prev - foundProduct.quantity);

//     // Restore stock after removal
//     foundProduct.stock += foundProduct.quantity;
//   };

//   const addToWishlist = (product: Product) => {
//     const productExists = wishlistItems.find((item) => item._id === product._id);
//     if (!productExists) {
//       setWishlistItems((prev) => [...prev, product]);
//     }
//   };

//   const removeFromWishlist = (product: Product) => {
//     const updatedWishlistItems = wishlistItems.filter((item) => item._id !== product._id);
//     setWishlistItems(updatedWishlistItems);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         showCart,
//         setShowCart,
//         qty,
//         incQty,
//         decQty,
//         cartItems,
//         wishlistItems,
//         totalQuantity,
//         totalPrice,
//         addProduct,
//         toggleCartItemQty,
//         onRemove,
//         addToWishlist,
//         removeFromWishlist,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };


"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

// Define the context's types for better clarity
interface Product {
  _id: string;
  price: number;
  quantity: number;
  stock: number; // Tracks remaining inventory
  // Other product properties here
}

interface CartContextType {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  cartItems: Product[];
  totalQuantity: number;
  totalPrice: number;
  wishlistItems: Product[];
  addProduct: (product: Product, quantity: number) => void;
  toggleCartItemQty: (id: string, value: "plus" | "minus") => void;
  onRemove: (product: Product) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (product: Product) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [qty, setQty] = useState<number>(1);

  // Persisted state logic using localStorage
  const getPersistedState = (key: string, defaultValue: any) => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    }
    return defaultValue;
  };

  const setPersistedState = (key: string, value: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const [cartItems, setCartItemsState] = useState<Product[]>(() => getPersistedState("cartItems", []));
  const [wishlistItems, setWishlistItemsState] = useState<Product[]>(() => getPersistedState("wishlistItems", []));
  const [totalQuantity, setTotalQuantityState] = useState<number>(() => getPersistedState("totalQuantity", 0));
  const [totalPrice, setTotalPriceState] = useState<number>(() => getPersistedState("totalPrice", 0));

  const incQty = () => setQty((prevQty) => prevQty + 1);
  const decQty = () => setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));

  const addProduct = (product: Product, quantity: number) => {
    if (product.stock < quantity) {
      alert("Not enough stock available!");
      return;
    }

    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalQuantityState((prev) => prev + quantity);
    setTotalPriceState((prevTotalPrice) => prevTotalPrice + product.price * quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return { ...cartProduct, quantity: cartProduct.quantity + quantity };
        }
        return cartProduct;
      });
      setCartItemsState(updatedCartItems);
    } else {
      setCartItemsState([...cartItems, { ...product, quantity }]);
    }

    // Deduct stock after adding to cart
    product.stock -= quantity;
  };

  const toggleCartItemQty = (id: string, value: "plus" | "minus") => {
    const foundProduct = cartItems.find((item) => item._id === id);
    if (!foundProduct) return;

    const updatedCartItems = cartItems.map((item) => {
      if (item._id === id) {
        if (value === "plus") {
          if (item.stock > item.quantity) {
            item.stock -= 1;
            setTotalPriceState((prev) => prev + item.price);
            setTotalQuantityState((prev) => prev + 1);
            return { ...item, quantity: item.quantity + 1 };
          } else {
            alert("Not enough stock available!");
          }
        } else if (value === "minus" && item.quantity > 1) {
          item.stock += 1;
          setTotalPriceState((prev) => prev - item.price);
          setTotalQuantityState((prev) => prev - 1);
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setCartItemsState(updatedCartItems);
  };

  const onRemove = (product: Product) => {
    const foundProduct = cartItems.find((item) => item._id === product._id);
    if (!foundProduct) return;

    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setCartItemsState(newCartItems);
    setTotalPriceState((prev) => prev - foundProduct.price * foundProduct.quantity);
    setTotalQuantityState((prev) => prev - foundProduct.quantity);

    // Restore stock after removal
    foundProduct.stock += foundProduct.quantity;
  };

  const addToWishlist = (product: Product) => {
    const productExists = wishlistItems.find((item) => item._id === product._id);
    if (!productExists) {
      setWishlistItemsState((prev) => [...prev, product]);
    }
  };

  const removeFromWishlist = (product: Product) => {
    const updatedWishlistItems = wishlistItems.filter((item) => item._id !== product._id);
    setWishlistItemsState(updatedWishlistItems);
  };

  // Persist the states on change
  useEffect(() => {
    setPersistedState("cartItems", cartItems);
    setPersistedState("wishlistItems", wishlistItems);
    setPersistedState("totalPrice", totalPrice);
    setPersistedState("totalQuantity", totalQuantity);
  }, [cartItems, wishlistItems, totalPrice, totalQuantity]);

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        qty,
        incQty,
        decQty,
        cartItems,
        wishlistItems,
        totalQuantity,
        totalPrice,
        addProduct,
        toggleCartItemQty,
        onRemove,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};