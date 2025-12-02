import React from 'react';
import register1 from '../assets/register1.svg';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useState } from 'react';
import vendor from '../assets/vendor.svg';
import Footer from '../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled, lighten, darken } from '@mui/system';
import 'ldrs/ring';
import { ring } from 'ldrs';
import { toast } from 'react-hot-toast';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function Register() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  ring.register()
  const navigate = useNavigate();
  const items = ["Produce", "Meat & Seafood", "Diary & Eggs", "Herbs & Spice", "Oil & Vinegar", "Beverage & Packed Foods", "Plasticware & Bags", "Laundry", "Health & Beauty", "Baby & Kids", "Stationery"];

  const [products, setSelectedItems] = useState([]);
  const [bankName, setSelectedBank] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [storeAddress, setStoreAddress] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [years, setYears] = useState();
  const [idType, setIdType] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phonePrimary, setPhonePrimary] = useState('');
  const [phoneAlternate, setPhoneAlternate] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [closingTime, setClosingTime] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [isPending, setIsPending] = useState(false);

  // 

  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
    const [bankInput, setBankInput] = useState("");
     const [showBankSuggestions, setShowBankSuggestions] = useState(false);

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  //   setShowSuggestions(true);
  // };

  // const handleSuggestionClick = (day) => {
  //   const currentDays = inputValue
  //     .split(",")
  //     .map((d) => d.trim())
  //     .filter((d) => d);

  //   if (!currentDays.includes(day)) {
  //     currentDays.push(day);
  //     setInputValue(currentDays.join(", ") + ", ");
  //   }

  //   setShowSuggestions(false);
  // };
  

  const [formData, setFormData] = useState({  businessName: "",
      firstName: "",
      lastName: "",
      storeAddress: "",
      state: "",
      country: "",
      years: "",
      idType: "",
      idNumber: "",
      phonePrimary: "",
      phoneAlternate: "",
      email: "",
      whatsapp: "",
      // activeDays: [],
      openingTime: "",
      closingTime: "",
      // bankName: "",
      accountNumber: "",
      accountName: "",
      // products: [] 
    });

       const [formData2, setFormData2] = useState({  products: [] });

       const [formData3, setFormData3] = useState({   bankInput: "" });
        
       const [formData4, setFormData4] = useState({  activeDays: ["Monday"] });

      const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];



   const [errors, setErrors] = useState({});
    const [errors2, setErrors2] = useState({});
     const [errors3, setErrors3] = useState({});
     const [errors4, setErrors4] = useState({});

    const toggleSelection = (item) => {
  let updatedItems;

  if (formData2.products.includes(item)) {
 
    updatedItems = formData2.products.filter((i) => i !== item);
  } else {
   
    updatedItems = [...formData2.products, item];
  }

    const fakeEvent = {
    target: {
      name: "products",
      value: updatedItems,
    },
  };

  handleFormChange2(fakeEvent);
};


 
   const handleFormChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
     setErrors({ ...errors, [e.target.name]: "" }); 
   };

    const handleFormChange2 = (e) => {
     setFormData2({ ...formData2, [e.target.name]: e.target.value });
     setErrors2({ ...errors2, [e.target.name]: "" }); 
   };

   const handleFormChange3 = (e) => {
  setFormData3({ ...formData3, [e.target.name]: e.target.value });
  setErrors3({ ...errors3, [e.target.name]: "" });
};

const handleSelect = (bank) => {
  setFormData3({ ...formData3, bankInput: bank });
  setErrors3({ ...errors3, bankInput: "" });
  setShowBankSuggestions(false);
};

 const handleFormChange4 = (e) => {
  setFormData4({ ...formData4, [e.target.name]: e.target.value });
  setErrors4({ ...errors4, [e.target.name]: "" });
};

// const handleActiveDaysSelect = (day) => {
//   setFormData4({ ...formData4, activeDays: day });
//   setErrors4({ ...errors4, activeDays: "" });
//   setShowSuggestions(false);
// };

const handleActiveDaysSelect = (day) => {
  const currentDays = formData4.activeDays.split(",").map(d => d.trim());
  if (!currentDays.includes(day)) {
    const updatedDays = [...currentDays, day].filter(Boolean).join(", ");
    setFormData4({ ...formData4, activeDays: updatedDays });
  }
  setErrors4({ ...errors4, activeDays: "" });
  setShowSuggestions(false);
};




//    const validateForm = () => {
//   const newErrors2 = {};

//   if (formData2.products.length === 0) {
//     newErrors2.products = "*At least one product must be selected";
//   }

//   setErrors2(newErrors2);

//   return Object.keys(newErrors2).length === 0;
// };


 
   const validate = () => {
    const newErrors = {};
   
if (!formData.businessName.trim()) newErrors.businessName = "*Business Name is required";
if (!formData.firstName.trim()) newErrors.firstName = "*First Name is required";
if (!formData.lastName.trim()) newErrors.lastName = "*Last Name is required";
if (!formData.storeAddress.trim()) newErrors.storeAddress = "*Store Address is required";
if (!formData.state.trim()) newErrors.state = "*State is required";
if (!formData.country.trim()) newErrors.country = "*Country is required";
if (!formData.years.trim()) newErrors.years = "*Years of experience is required";
if (!formData.idType.trim()) newErrors.idType = "*ID Type is required";
if (!formData.idNumber.trim()) newErrors.idNumber = "*ID Number is required";
if (!formData.phonePrimary.trim()) newErrors.phonePrimary = "*Primary Phone Number is required";
if (!formData.phoneAlternate.trim()) newErrors.phoneAlternate = "*Alternate Phone Number is required";
// if (!formData.email.trim()) newErrors.email = "*Email is required";
if (!formData.whatsapp.trim()) newErrors.whatsapp = "*WhatsApp number is required";
// if (!formData.activeDays) newErrors.activeDays = "*Active Days are required";
if (!formData.openingTime.trim()) newErrors.openingTime = "*Opening Time is required";
if (!formData.closingTime.trim()) newErrors.closingTime = "*Closing Time is required";
// if (!formData.bankName.trim()) newErrors.bankName = "*Bank Name is required";
if (!formData.accountNumber.trim()) newErrors.accountNumber = "*Account Number is required";
if (!formData.accountName.trim()) newErrors.accountName = "*Account Name is required";
// if (!formData2.products) newErrors.products = "*Products information is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    return newErrors;
  };

//      const validate2 = () => {
//   const newErrors2 = {};

//   if (formData2.products.length === 0) {
//     newErrors2.products = "*At least one product must be selected";
//   }

//   setErrors2(newErrors2);

//   return Object.keys(newErrors2).length === 0;
// };



const theme = useTheme();
const [activeDays, setDays] = React.useState([]);

  // const toggleSelection = (item) => {
  //   setSelectedItems((prevSelected) =>
  //     prevSelected.includes(item)
  //       ? prevSelected.filter((i) => i !== item) 
  //       : [...prevSelected, item] 
  //   );
  // };

  const handleSubmit = (e) => {
  
    setIsPending(true);
    e.preventDefault();

    console.log(formData);
     console.log(formData2);
     console.log(formData3);
      console.log(formData4);

    // const validationErrors = validate();
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   setIsPending(false);
    //   return;
    // }

    // if (formData2.products.length === 0) {
    //   setErrors2({ products: "*At least one product must be selected" });
    //   setIsPending(false);
    //   return;
    // }

    const validationErrors = validate(); 
const productError = formData2.products.length === 0
  ? { products: "*At least one product must be selected" }
  : {};

  const bankError = formData3.bankInput === ""
  ? { bankInput: "*Bank Name is required" }
  : {};

  const activeDaysError = formData4.activeDays === ""
  ? { activeDays: "*Active days are required" }
  : {};

const hasAnyErrors =
  Object.keys(validationErrors).length > 0 || Object.keys(productError).length > 0 || Object.keys(bankError).length > 0 || Object.keys(activeDaysError).length > 0;

if (hasAnyErrors) {
  setErrors(validationErrors); 
  setErrors2(productError);     
  setErrors3(bankError);   
  setErrors4(activeDaysError); 
  setIsPending(false);
  return;
}



    
   

    // if (products.length === 0 || !bankName || businessName === '' || firstName === '' || lastName === '' || storeAddress === '' || state === '' || country === '' || years === null || idType === '' || idNumber === '' || phonePrimary === '' || phoneAlternate === '' || email === '' || whatsapp === '' || activeDays === '' || openingTime === '' || closingTime === '' || accountNumber === '' || accountName === '') {
    //   toast.error("Fill in all required fields");
    //   setIsPending(false);
    //   console.error;
    //   return;
    // }
    // const formData = {
    //   businessName,
    //   firstName,
    //   lastName,
    //   storeAddress,
    //   state,
    //   country,
    //   years,
    //   idType,
    //   idNumber,
    //   phonePrimary,
    //   phoneAlternate,
    //   email,
    //   whatsapp,
    //   activeDays,
    //   openingTime,
    //   closingTime,
    //   bankName,
    //   accountNumber,
    //   accountName,
    //   products
    // };

    fetch('https://apis.emarketpod.com/site/onboard-vendor', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
          .then((data) => {
            if (data.status === true) {
              setIsPending(false);
              setOpen(true);
            } else {
             toast.error(data.message);
              setIsPending(false);
              return;
            }
          })
          .catch((error) => {
            toast.error('An error occurred. Please try again');
            console.log(error);
            setIsPending(false);
            });
          
          }
  const goHome = () => {
    navigate("/");
  }


  // The active days schedule

  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thurday',
  'Friday',
  'Saturday',
  'Sunday'
];

function getStyles(name, activeDays, theme) {
  return {
    fontWeight: formData.activeDays.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}



const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setDays(
    
    typeof value === 'string' ? value.split(',') : value,
  );
};

// const GroupHeader = styled('div')(({ theme }) => ({
//   position: 'sticky',
//   top: '-8px',
//   padding: '4px 10px',
//   color: theme.palette.primary.main,
//   backgroundColor: lighten(theme.palette.primary.light, 0.85),
//   ...theme.applyStyles('dark', {
//     backgroundColor: darken(theme.palette.primary.main, 0.8),
//   }),
// }));

// const GroupItems = styled('ul')({
//   padding: 0,
// });

// const banks = [
  
//   { name: 'Access Bank' },
//   { name: 'Citibank Nigeria' },
//   { name: 'Ecobank Nigeria' },
//   { name: 'Fidelity Bank' },
//   { name: 'First Bank of Nigeria' },
//   { name: 'First City Monument Bank (FCMB)' },
//   { name: 'Globus Bank' },
//   { name: 'Guaranty Trust Bank (GTBank)' },
//   { name: 'Heritage Bank' },
//   { name: 'Keystone Bank' },
//   { name: 'Polaris Bank' },
//   { name: 'Providus Bank' },
//   { name: 'Stanbic IBTC Bank' },
//   { name: 'Standard Chartered Bank' },
//   { name: 'Sterling Bank' },
//   { name: 'SunTrust Bank' },
//   { name: 'Union Bank of Nigeria' },
//   { name: 'United Bank for Africa (UBA)' },
//   { name: 'Unity Bank' },
//   { name: 'Wema Bank' },
//   { name: 'Zenith Bank' },
//   { name: 'AB Microfinance Bank' },
//   { name: 'Accion Microfinance Bank' },
//   { name: 'LAPO Microfinance Bank' },
//   { name: 'Seedvest Microfinance Bank' },
//   { name: 'FinaTrust Microfinance Bank' },
//   { name: 'Infinity Microfinance Bank' },
//   { name: 'Nirsal Microfinance Bank' },
//   { name: 'Renmoney Microfinance Bank' },
//   { name: 'Boctrust Microfinance Bank' },
//   { name: 'Fina Microfinance Bank' },
//   { name: 'Opay' },
//   { name: 'PalmPay' },
//   { name: 'Moniepoint' },
//   { name: 'FirstMonie' },
//   { name: 'Paga' },
//   { name: 'Kuda Bank' },
//   { name: 'Rubies Bank' },
//   { name: 'ALAT by Wema' },
//   { name: 'Eyowo' },
//   { name: 'Carbon' },
//   { name: 'Branch' },
//   { name: 'FairMoney' },
//   { name: 'VFD Microfinance Bank' },
//   { name: 'Mintyn Bank' },
//   { name: 'Sparkle' },
//   { name: 'Paycom' },
//   { name: 'Chipper Cash' }
// ].sort();

// const options = banks.map((option) => {
//   const firstLetter = option.name[0].toUpperCase();
//   return {
//     firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
//     ...option,
//   };
// }
// );

const banks = [
  "AB Microfinance Bank",
  "Access Bank",
  "Accion Microfinance Bank",
  "ALAT by Wema",
  "Boctrust Microfinance Bank",
  "Branch",
  "Carbon",
  "Chipper Cash",
  "Citibank Nigeria",
  "Ecobank Nigeria",
  "Eyowo",
  "FairMoney",
  "Fidelity Bank",
  "Fina Microfinance Bank",
  "FinaTrust Microfinance Bank",
  "First Bank of Nigeria",
  "First City Monument Bank (FCMB)",
  "FirstMonie",
  "Globus Bank",
  "Guaranty Trust Bank (GTBank)",
  "Heritage Bank",
  "Infinity Microfinance Bank",
  "Keystone Bank",
  "Kuda Bank",
  "LAPO Microfinance Bank",
  "Mintyn Bank",
  "Moniepoint",
  "Nirsal Microfinance Bank",
  "Opay",
  "PalmPay",
  "Paga",
  "Paycom",
  "Polaris Bank",
  "Providus Bank",
  "Renmoney Microfinance Bank",
  "Rubies Bank",
  "Seedvest Microfinance Bank",
  "Sparkle",
  "Stanbic IBTC Bank",
  "Standard Chartered Bank",
  "Sterling Bank",
  "SunTrust Bank",
  "Union Bank of Nigeria",
  "United Bank for Africa (UBA)",
  "Unity Bank",
  "VFD Microfinance Bank",
  "Wema Bank",
  "Zenith Bank"
];



  const filteredBanks = banks?.filter((bank) => 
    bank.toLowerCase().includes(bankInput.toLowerCase())
  ); 

  // const handleSelect = (bank) => {
  //   setBankInput(bank);
  //   setShowBankSuggestions(false);
  // };


  return (<>
  <div className="min-h-screen flex flex-col">
    <div className="flex flex-col lg:flex-row md:flex-row">

      <div>
    <div><img src={register1} className="w-full object-cover md:hidden lg:hidden"/></div>
    {/* <div className="w-full max-w-md mx-auto h-[70%]"><img src={vendor} className="hidden w-full object-cover md:flex lg:flex h-full"/></div> */}
    </div>

    <div className="lg:px-[150px] lg:overflow-y-scroll">

    <div className="mt-[25px]">
        <button onClick={goHome} className="flex ml-[20px] lg:ml-[-100px] items-center border border-[#31603D] bg-[#31603D] text-[white] rounded-[20px] px-[20px] py-[2px]"><IoIosArrowRoundBack className="size-[30px]"/>Back</button>
    </div>

    <div className="mt-[35px] flex flex-col justify-center items-center">
        <h3 className="text-[#31603D] font-semibold font-sans">Let's get you started</h3>
        <h1 className="font-bold text-[25px] font-saeada">Register as a vendor</h1>
    </div>

<form>

    <div className="flex flex-col space-y-4 p-4 mb-[10px]">
      {/* First Field */}
      <div className="flex flex-col">
        <label className="font-saeada text-gray-500 font-bold text-[20px] mb-[20px]">
          Business Information
        </label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          onChange={handleFormChange}
          value={formData.businessName}
          // onChange={(e) => setBusinessName(e.target.value)}
          className="border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400 "
          placeholder="Business Name"
        />
         {errors.businessName && <p className="text-red-500 text-md">{errors.businessName}</p>}
      </div>
      

      {/* Second Row: Two Shorter Fields */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {/* Field 1 */}
        <div className="flex-1">
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleFormChange}
            value={formData.firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="First Name"
          />
          {errors.firstName && <p className="text-red-500 text-md">{errors.firstName}</p>}
        </div>

        {/* Field 2 */}
        <div className="flex-1">
          <input
            type="text"
            id="lastName"
            name="lastName"
          onChange={handleFormChange}
            value={formData.lastName}
            // onChange={(e) => setLastName(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Last Name"
          />
           {errors.lastName && <p className="text-red-500 text-md">{errors.lastName}</p>}
        </div>

        <div className="flex-1">
          <input
            type="text"
            id="storeAddress"
            name="storeAddress"
          onChange={handleFormChange}
            value={formData.storeAddress}
            // onChange={(e) => setStoreAddress(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Store Address (Street & City)"
          />
           {errors.storeAddress && <p className="text-red-500 text-md">{errors.storeAddress}</p>}
        </div>

        <div className="flex-1">
          <input
            type="text"
            id="state"
            name="state"
          onChange={handleFormChange}
            value={formData.state}
            // onChange={(e) => setState(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="State"
          />
           {errors.state && <p className="text-red-500 text-md">{errors.state}</p>}
        </div>

        <div className="flex-1">
          <input
            type="text"
            id="Country"
            name="country"
          onChange={handleFormChange}
            value={formData.country}
            // onChange={(e) => setCountry(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Country"
          />
           {errors.country && <p className="text-red-500 text-md">{errors.country}</p>}
        </div>

        <div className="flex-1">
          <input
            type="number"
            min="0"
            id="years"
            name="years"
          onChange={handleFormChange}
            value={formData.years}
            // onChange={(e) => setYears(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Years in Operation"
          />
           {errors.years && <p className="text-red-500 text-md">{errors.years}</p>}
        </div>

        <div className="flex-1">
        <select className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                    name="idType"
          onChange={handleFormChange}
                    value={formData.idType}
                    // onChange={(e) => setIdType(e.target.value)}
                    placeholder="ID Type"
                >
                   <option className="text-gray-300" value="">ID Type</option>
                   <option value="Business reg no">Business reg no</option>
                   <option value="NIN">NIN</option>
                   <option value="Driver License">Driver License</option>
                   <option value="Passort">Passport</option>
                   <option value="State approved Market Affiliated body ID">State approved Market Affiliated body ID</option>
                  </select>
                   {errors.idType && <p className="text-red-500 text-md">{errors.idType}</p>}
        </div>

        <div className="flex-1">
          <input
            type="text"
            min="0"
            id="idNumber"
            name="idNumber"
          onChange={handleFormChange}
            value={formData.idNumber}
            // onChange={(e) => setIdNumber(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="ID Number"
          />
           {errors.idNumber && <p className="text-red-500 text-md">{errors.idNumber}</p>}
        </div>

      </div>
    </div>

    <div className="flex flex-col space-y-4 p-4">
      {/* First Field */}
        <label className="font-saeada text-gray-500 font-bold text-[20px]">
          Contact Details
        </label>

      {/* Second Row: Two Shorter Fields */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {/* Field 1 */}
        <div className="flex-1">
          <input
            type="text"
            min="0"
            id="phone"
            name="phonePrimary"
          onChange={handleFormChange}
            value={formData.phonePrimary}
            // onChange={(e) => setPhonePrimary(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Primary Contact Number"
          />
           {errors.phonePrimary && <p className="text-red-500 text-md">{errors.phonePrimary}</p>}
        </div>

        {/* Field 2 */}
        <div className="flex-1">
          <input
            type="text"
            min="0"
            id="phone"
            name="phoneAlternate"
          onChange={handleFormChange}
            value={formData.phoneAlternate}
            // onChange={(e) => setPhoneAlternate(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Alternate Contact Number"
          />
           {errors.phoneAlternate && <p className="text-red-500 text-md">{errors.phoneAlternate}</p>}
        </div>

        <div className="flex-1">
          <input
            type="text"
            id="email"
            name="email"
          onChange={handleFormChange}
            value={formData.email}
            // onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Email Address (Optional)"
          />
           {/* {errors.email && <p className="text-red-500 text-md">{errors.email}</p>} */}
        </div>

        <div className="flex-1">
          <input
            type="text"
            min="0"
            id="phone"
            name="whatsapp"
          onChange={handleFormChange}
            value={formData.whatsapp}
            // onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="WhatsApp or Phone"
          />
           {errors.whatsapp && <p className="text-red-500 text-md">{errors.whatsapp}</p>}
        </div>


      </div>
    </div>

<div className="p-4">
    <label className="font-saeada text-gray-500 font-bold text-[20px]">
          Products
        </label>
    <div className="space-y-4">

{/* Filter Menu */}
<div className="flex flex-wrap gap-2 font-semibold mt-[10px] lg:pr-[100px]">
  {items.map((item) => (
    <button
      key={item}
      type="button"
      name="products"
      // value={formData2.products}
      // onChange={(e) => setSelectedItems(e.target.value)}
      onClick={() => toggleSelection(item)}
      className={`px-6 py-2 border border-black rounded-[30px] ${
        formData2.products.includes(item)
          ? "bg-[#31603D] text-white"
          : "text-gray-800"
      }`}
    >
      {item}
    </button>
  ))}
</div>
<p className="text-red-500 text-md">{errors2.products}</p>
</div>
</div>

<div className="flex flex-col space-y-4 p-4">
      {/* First Field */}
        <label className="font-saeada text-gray-500 font-bold text-[20px]">
          Service Details
        </label>

      {/* Second Row: Two Shorter Fields */}
      {/* <div className="grid grid-cols-2 gap-x-4 gap-y-4">
      

        <div>
        <FormControl
    sx={{
       "& .MuiOutlinedInput-root": {
        borderRadius: "30px"
      },
      width: {xs:"170px", lg:"400px"}
    }}
  >
        <Select
          multiple
          displayEmpty
          value={activeDays}
          name="activeDays"
          onChange={handleFormChange}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Active Days (Schedule)</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Active Days (Schedule)</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, activeDays, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    
      </div> */}

      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
       <div className="">
      <input
        type="text"
        value={formData4.activeDays}
        name="activeDays"
        onChange={handleFormChange4}
        onFocus={() => setShowSuggestions(true)}
        className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder="Input active days..."
      />
       {errors4.activeDays && 
    <p className="text-red-500 text-md">{errors4.activeDays}</p>
  }
      {showSuggestions && (
        <ul className="absolute z-10 w-[300px] border bg-white mt-1 rounded shadow">
          {weekdays.map((day) => (
            <li
              key={day}
              onClick={() => handleActiveDaysSelect(day)}
              className="p-2 hover:bg-blue-100 cursor-pointer"
            >
              {day}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>

    </div>

    <div className="flex flex-col space-y-4 p-4">

    <div className="">
      {/* First Field */}
        <label className="font-saeada text-gray-500 font-bold text-[20px]">
          Opening Time
        </label>

      {/* Second Row: Two Shorter Fields */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {/* Field 1 */}
        <div className="flex-1">
          <input
            type="time"
            id="openingTime"
            name="openingTime"
            onChange={handleFormChange}
            value={formData.openingTime}
            // onChange={(e) => setOpeningTime(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Bank Name"
          />
           {errors.openingTime && <p className="text-red-500 text-md">{errors.openingTime}</p>}
        </div>

      </div>
    </div>

    <div className="">
      {/* First Field */}
        <label className="font-saeada text-gray-500 font-bold text-[20px]">
          Closing Time
        </label>

      {/* Second Row: Two Shorter Fields */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {/* Field 1 */}
        <div className="flex-1">
          <input
            type="time"
            id="closingTime"
            name="closingTime"
            onChange={handleFormChange}
            value={formData.closingTime}
            // onChange={(e) => setClosingTime(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Bank Name"
          />
           {errors.closingTime && <p className="text-red-500 text-md">{errors.closingTime}</p>}
        </div>

      </div>
    </div>
</div>
    
    <div className="flex flex-col space-y-4 p-4">
      {/* First Field */}
        <label className="font-saeada text-gray-500 font-bold text-[20px]">
          Banking & Payment Information
        </label>

 
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
    
        {/* <div className="flex-1">
        <Autocomplete
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => setSelectedBank(value?.name || '')}
    
      sx={{
        "& .MuiOutlinedInput-root": {
         borderRadius: "30px"
       },
       width: {xs:"170px", lg:"400px"}
     }}
      renderInput={(params) => <TextField {...params} label="Bank Name" />}
      renderGroup={(params) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
    />
        </div> */}

        {/* onChange={(e) => {
          setBankInput(e.target.value);
          setShowBankSuggestions(true);
        }} */}

        <div className="flex-1">
 
      <input
        type="text"
        name = "bankInput"
        value={formData3.bankInput}
        onChange={handleFormChange3} 
        onFocus={() => setShowBankSuggestions(true)}
        className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder="Search your bank"
      />
      {errors3.bankInput && 
    <p className="text-red-500 text-md">{errors3.bankInput}</p>
  }
      {showBankSuggestions && (
        <ul className="absolute z-10 w-[300px] border bg-white mt-1 rounded shadow overflow-y-auto max-h-60">
          {filteredBanks?.map((bank) => (
            <li
              key={bank}
              onClick={() => handleSelect(bank)}
              className="p-2 hover:bg-blue-100 cursor-pointer"
            >
              {bank}
            </li>
          ))}
          {filteredBanks?.length === 0 && (
            <li className="p-2 text-gray-500">No match found</li>
          )}
        </ul>
      )}
    </div>


        {/* Field 2 */}
        <div className="flex-1">
          <input
            type="text"
            min="0"
            id="bankAccount"
            name="accountNumber"
          onChange={handleFormChange}
            value={formData.accountNumber}
            // onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Bank Account Number"
          />
           {errors.accountNumber && <p className="text-red-500 text-md">{errors.accountNumber}</p>}
        </div>

        <div className="flex-1">
          <input
            type="text"
            id="accountName"
            name="accountName"
          onChange={handleFormChange}
            value={formData.accountName}
            // onChange={(e) => setAccountName(e.target.value)}
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Account Holder's Name"
          />
           {errors.accountName && <p className="text-red-500 text-md">{errors.accountName}</p>}
        </div>

      </div>
    </div>

</form>

<div className="font-sans p-4 font-semibold flex flex-wrap lg:whitespace-nowrap">
By proceeding you agree to the <p className="underline text-[#31603D]"><Link to="/privacypolicy">Privacy Policy</Link></p> and <p className="underline text-[#31603D]"><Link to="/termsofuse">Terms of Service</Link></p>
  </div>

  {!isPending &&<div className="font-sans flex justify-center mb-[30px] lg:flex lg:justify-start lg:p-4"><button type="submit" onClick={handleSubmit} className="hover:bg-[green] text-[white] px-[120px] py-3 lg:px-40 rounded-[25px] border border-[#31603D] bg-[#31603D] font-bold">Proceed</button></div>}
  {isPending &&<div className="flex items-center justify-center mb-[30px] lg:flex lg:justify-start lg:p-4"><button disabled className="opacity-[80%] text-[white] px-[140px] py-3 lg:px-40 rounded-[25px] border border-[#31603D] bg-[#31603D] font-bold"><l-ring
  size="20"
  stroke="3"
  bg-opacity="0"
  speed="2" 
  color="white" 
></l-ring></button></div>}
    </div>


    </div>
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className="flex justify-center font-bold">Registration Successful</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="flex text-center">
            <div className="text-[13px] lg:text-[15px]">
          Your registration is successful, Our team would verify
          the submitted details and reach out to you within 3-5 
          business days. Thank you for choosing MarketPod !
          </div>
          </DialogContentText>
        </DialogContent>
        <div className="flex justify-center mb-[30px] lg:flex lg:p-4"><button onClick={goHome} className="flex justify-center text-[white] px-[80px] lg:px-[140px] py-3 lg:px-40 rounded-[25px] border border-[#31603D] bg-[#31603D] font-bold">Continue</button></div>
      </Dialog>
    </React.Fragment>

    <div className="bg-[white] sticky lg:overflow-x-hidden lg:overflow-y-hidden lg:w-full"><Footer/></div>
    </div>
  </>)
}

export default Register
