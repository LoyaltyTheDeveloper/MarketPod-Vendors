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

function Register() {
  const navigate = useNavigate();
  const items = ["Produce", "Meat & Seafood", "Diary & Eggs", "Herbs & Spice", "Oil & Vinegar", "Beverage & Packed Foods", "Plasticware & Bags", "Laundry", "Health & Beauty", "Baby & Kids", "Stationery"];

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
  const [businessName, setBusinessName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [storeAddress, setStoreAddress] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [years, setYears] = useState('');
  const [idType, setIdType] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [primaryContact, setPrimaryContact] = useState('');
  const [alternateContact, setAlternateContact] = useState('');
  const [email, setEmail] = useState('');

  const toggleSelection = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item) 
        : [...prevSelected, item] 
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedItems.length === 0) {
      alert("Please select at least one item.");
      return;
    }
    console.log("Selected Items:", selectedItems);
    alert(`Submitted items: ${selectedItems.join(", ")}`);

    if (!selectedBank) {
      alert("Please select a bank!");
      return;
    }
    console.log("Selected Bank:", selectedBank);
    console.log(days);

  };
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

function getStyles(name, days, theme) {
  return {
    fontWeight: days.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

 
const theme = useTheme();
const [days, setDays] = React.useState([]);

const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setDays(
    
    typeof value === 'string' ? value.split(',') : value,
  );
};

const GroupHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: theme.palette.primary.main,
  backgroundColor: lighten(theme.palette.primary.light, 0.85),
  ...theme.applyStyles('dark', {
    backgroundColor: darken(theme.palette.primary.main, 0.8),
  }),
}));

const GroupItems = styled('ul')({
  padding: 0,
});

const banks = [
  
  { name: 'Access Bank' },
  { name: 'Citibank Nigeria' },
  { name: 'Ecobank Nigeria' },
  { name: 'Fidelity Bank' },
  { name: 'First Bank of Nigeria' },
  { name: 'First City Monument Bank (FCMB)' },
  { name: 'Globus Bank' },
  { name: 'Guaranty Trust Bank (GTBank)' },
  { name: 'Heritage Bank' },
  { name: 'Keystone Bank' },
  { name: 'Polaris Bank' },
  { name: 'Providus Bank' },
  { name: 'Stanbic IBTC Bank' },
  { name: 'Standard Chartered Bank' },
  { name: 'Sterling Bank' },
  { name: 'SunTrust Bank' },
  { name: 'Union Bank of Nigeria' },
  { name: 'United Bank for Africa (UBA)' },
  { name: 'Unity Bank' },
  { name: 'Wema Bank' },
  { name: 'Zenith Bank' },
  { name: 'AB Microfinance Bank' },
  { name: 'Accion Microfinance Bank' },
  { name: 'LAPO Microfinance Bank' },
  { name: 'Seedvest Microfinance Bank' },
  { name: 'FinaTrust Microfinance Bank' },
  { name: 'Infinity Microfinance Bank' },
  { name: 'Nirsal Microfinance Bank' },
  { name: 'Renmoney Microfinance Bank' },
  { name: 'Boctrust Microfinance Bank' },
  { name: 'Fina Microfinance Bank' },
  { name: 'Opay' },
  { name: 'PalmPay' },
  { name: 'Moniepoint' },
  { name: 'FirstMonie' },
  { name: 'Paga' },
  { name: 'Kuda Bank' },
  { name: 'Rubies Bank' },
  { name: 'ALAT by Wema' },
  { name: 'Eyowo' },
  { name: 'Carbon' },
  { name: 'Branch' },
  { name: 'FairMoney' },
  { name: 'VFD Microfinance Bank' },
  { name: 'Mintyn Bank' },
  { name: 'Sparkle' },
  { name: 'Paycom' },
  { name: 'Chipper Cash' }
];

const options = banks.map((option) => {
  const firstLetter = option.name[0].toUpperCase();
  return {
    firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
    ...option,
  };
});

  return (<>
  <div className="min-h-screen flex flex-col">
    <div className="flex flex-col lg:flex-row md:flex-row">

      <div>
    <div><img src={register1} className="w-full object-cover md:hidden lg:hidden"/></div>
    <div className="w-full max-w-md mx-auto h-[70%]"><img src={vendor} className="hidden w-full object-cover md:flex lg:flex h-full"/></div>
    </div>

    <div className="lg:px-[150px] lg:overflow-y-scroll">

    <div className="mt-[25px]">
        <button onClick={goHome} className="flex ml-[20px] lg:ml-[-100px] items-center border border-[#31603D] bg-[#31603D] text-[white] rounded-[20px] px-[20px] py-[2px]"><IoIosArrowRoundBack className="size-[30px]"/>Back</button>
    </div>

    <div className="mt-[35px] flex flex-col justify-center items-center">
        <h3 className="text-[#31603D] font-semibold">Let's get you started</h3>
        <h1 className="font-bold text-[25px]">Register as a vendor</h1>
    </div>

<form>
    <div className="flex flex-col space-y-4 p-4 mb-[10px]">
      {/* First Field */}
      <div className="flex flex-col">
        <label className="text-gray-500 font-bold text-[20px] mb-[20px]">
          Business Information
        </label>
        <input
          type="text"
          id="businessName"
          className="border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400 "
          placeholder="Business Name"
        />
      </div>

      {/* Second Row: Two Shorter Fields */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {/* Field 1 */}
        <div className="flex-1">
          <input
            type="text"
            id="firstName"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="First Name"
          />
        </div>

        {/* Field 2 */}
        <div className="flex-1">
          <input
            type="text"
            id="lastName"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Last Name"
          />
        </div>

        <div className="flex-1">
          <input
            type="text"
            id="storeAddress"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Store Address (Street & City)"
          />
        </div>

        <div className="flex-1">
          <input
            type="text"
            id="state"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="State"
          />
        </div>

        <div className="flex-1">
          <input
            type="text"
            id="Country"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Country"
          />
        </div>

        <div className="flex-1">
          <input
            type="number"
            min="0"
            id="years"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Years in Operation"
          />
        </div>

        <div className="flex-1">
        <select className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                    placeholder="ID Type"
                >
                   <option className="text-gray-300" value="">ID Type</option>
                   <option value="Zacrac">Business reg no</option>
                   <option value="Diamond Image">NIN</option>
                   <option value="St Jacobs">Driver License</option>
                   <option value="Royal Birds">Passport</option>
                   <option value="Deja Vu">State approved Market Affiliated body ID</option>
                  </select>
        </div>

        <div className="flex-1">
          <input
            type="number"
            min="0"
            id="idNumber"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="ID Number"
          />
        </div>

      </div>
    </div>

    <div className="flex flex-col space-y-4 p-4">
      {/* First Field */}
        <label className="text-gray-500 font-bold text-[20px]">
          Contact Details
        </label>

      {/* Second Row: Two Shorter Fields */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {/* Field 1 */}
        <div className="flex-1">
          <input
            type="number"
            min="0"
            id="phone"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Primary Contact Number"
          />
        </div>

        {/* Field 2 */}
        <div className="flex-1">
          <input
            type="number"
            min="0"
            id="phone"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Alternate Contact Number"
          />
        </div>

        <div className="flex-1">
          <input
            type="text"
            id="email"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Email Address (Optional)"
          />
        </div>

        <div className="flex-1">
          <input
            type="number"
            min="0"
            id="phone"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="WhatsApp or Phone"
          />
        </div>



      </div>
    </div>

<div className="p-4">
    <label className="text-gray-500 font-bold text-[20px]">
          Products
        </label>
    <div className="space-y-4">

{/* Filter Menu */}
<div className="flex flex-wrap gap-2 font-semibold mt-[10px] lg:pr-[100px]">
  {items.map((item) => (
    <button
      key={item}
      type="button"
      onClick={() => toggleSelection(item)}
      className={`px-6 py-2 border border-black rounded-[30px] ${
        selectedItems.includes(item)
          ? "bg-[#31603D] text-white"
          : "text-gray-800"
      }`}
    >
      {item}
    </button>
  ))}
</div>
</div>
</div>

<div className="flex flex-col space-y-4 p-4">
      {/* First Field */}
        <label className="text-gray-500 font-bold text-[20px]">
          Service Details
        </label>

      {/* Second Row: Two Shorter Fields */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {/* Field 1 */}

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
          value={days}
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
              style={getStyles(name, days, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>


      </div>
    </div>

    <div className="flex flex-col space-y-4 p-4">

    <div className="">
      {/* First Field */}
        <label className="text-gray-500 font-bold text-[20px]">
          Opening Time
        </label>

      {/* Second Row: Two Shorter Fields */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {/* Field 1 */}
        <div className="flex-1">
          <input
            type="time"
            id="openingTime"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Bank Name"
          />
        </div>

      </div>
    </div>

    <div className="">
      {/* First Field */}
        <label className="text-gray-500 font-bold text-[20px]">
          Closing Time
        </label>

      {/* Second Row: Two Shorter Fields */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {/* Field 1 */}
        <div className="flex-1">
          <input
            type="time"
            id="closingTime"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Bank Name"
          />
        </div>

      </div>
    </div>
</div>
    
    <div className="flex flex-col space-y-4 p-4">
      {/* First Field */}
        <label className="text-gray-500 font-bold text-[20px]">
          Banking & Payment Information
        </label>

      {/* Second Row: Two Shorter Fields */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {/* Field 1 */}
        <div className="flex-1">
        <Autocomplete
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => setSelectedBank(value)}
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
        </div>



        {/* Field 2 */}
        <div className="flex-1">
          <input
            type="number"
            min="0"
            id="bankAccount"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Bank Account Number"
          />
        </div>

        <div className="flex-1">
          <input
            type="text"
            id="accountName"
            className="w-full border border-gray-300 rounded-[30px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Account Holder's Name"
          />
        </div>

      </div>
    </div>

</form>

<div className="p-4 font-semibold flex flex-wrap lg:whitespace-nowrap">
By proceeding you agree to the <p className="underline text-[#31603D]">Privacy Policy</p> and <p className="underline text-[#31603D]">Terms of Service</p>
  </div>

  <div className="flex justify-center mb-[30px] lg:flex lg:justify-start lg:p-4"><button type="submit" onClick={handleSubmit} className="text-[white] px-[120px] py-3 lg:px-40 rounded-[25px] border border-[#31603D] bg-[#31603D] font-bold">Proceed</button></div>
    </div>


    </div>
    <div className="bg-[white] sticky lg:overflow-x-hidden lg:overflow-y-hidden lg:w-full"><Footer/></div>
  </div>

  
  </>)
}

export default Register
