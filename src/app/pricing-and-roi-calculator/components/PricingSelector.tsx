'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const PricingSelector = () => {
  const [activeTab, setActiveTab] = useState<'suppliers' | 'company'>('company');
  const [companySize, setCompanySize] = useState<'XS' | 'S' | 'M' | 'L'>('M');
  const [currency, setCurrency] = useState<'USD' | 'EUR'>('USD');
  const [country, setCountry] = useState('India');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // New state for contact form
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const sizes = [
    { id: 'XS', label: 'up to 25 employees' },
    { id: 'S', label: '26-99 employees' },
    { id: 'M', label: '100-999 employees' },
    { id: 'L', label: '1000+ employees' },
  ];

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt',
    'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon',
    'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
    'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
    'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan',
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar',
    'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia',
    'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal',
    'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan',
    'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar',
    'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia',
    'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
    'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan',
    'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan',
    'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
    'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  // Filter countries based on search query
  const filteredCountries = countries.filter(countryName =>
    countryName.toLowerCase().includes(countrySearchQuery.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
        setCountrySearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = (countryName: string) => {
    setCountry(countryName);
    setIsCountryDropdownOpen(false);
    setCountrySearchQuery('');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      {/* Tabs */}
      <div className="flex border-b-2 border-gray-200 mb-12">
        <button
          onClick={() => setActiveTab('suppliers')}
          className={`pb-5 px-6 text-xl font-semibold transition-colors relative ${
            activeTab === 'suppliers' 
              ? 'text-green-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Product Pricing
          {activeTab === 'suppliers' && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-t-full" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('company')}
          className={`pb-5 px-6 text-xl font-semibold transition-colors relative ${
            activeTab === 'company' 
              ? 'text-green-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Consulting Pricing
          {activeTab === 'company' && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-t-full" />
          )}
        </button>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
            <input 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full font-medium"
                placeholder="John Doe"
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
            <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full font-medium"
                placeholder="+1 (555) 000-0000"
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email</label>
            <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full font-medium"
                placeholder="john@company.com"
            />
        </div>
      </div>

      {/* Filters Row (Country & Currency) */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:items-center mb-12">
        {/* Country Selector with Search */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 w-full lg:w-auto">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider leading-tight whitespace-nowrap">
            SELECT <br className="hidden sm:block"/> COUNTRY/TERRITORY
          </span>
          <div className="relative w-full sm:w-auto" ref={dropdownRef}>
            <button
              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
              className="appearance-none bg-gray-100 border border-gray-200 text-gray-700 py-3 pl-5 pr-12 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full sm:w-auto sm:min-w-[240px] text-left text-base font-medium"
            >
              {country}
            </button>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
              <Icon name="ChevronDownIcon" size={18} className={`transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {/* Dropdown Menu */}
            {isCountryDropdownOpen && (
              <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-80 overflow-hidden">
                {/* Search Input */}
                <div className="p-3 border-b border-gray-200 sticky top-0 bg-white">
                  <div className="relative">
                    <Icon name="MagnifyingGlassIcon" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search countries..."
                      value={countrySearchQuery}
                      onChange={(e) => setCountrySearchQuery(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 text-base border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
                
                {/* Country List */}
                <div className="overflow-y-auto max-h-64">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((countryName) => (
                      <button
                        key={countryName}
                        onClick={() => handleCountrySelect(countryName)}
                        className={`w-full text-left px-5 py-2.5 text-base hover:bg-gray-100 transition-colors ${
                          country === countryName ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {countryName}
                      </button>
                    ))
                  ) : (
                    <div className="px-5 py-4 text-base text-gray-500 text-center">
                      No countries found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Currency Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 w-full lg:w-auto">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider leading-tight whitespace-nowrap">
            SELECT <br className="hidden sm:block"/> CURRENCY
          </span>
          <div className="flex border border-gray-200 rounded-md overflow-hidden w-full sm:w-auto">
            <button
              onClick={() => setCurrency('USD')}
              className={`flex-1 sm:flex-none px-5 py-3 text-base font-medium transition-colors ${
                currency === 'USD' 
                  ? 'bg-gray-200 text-gray-900' 
                  : 'bg-white text-gray-500 hover:bg-gray-50'
              }`}
            >
              $ USD
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`flex-1 sm:flex-none px-5 py-3 text-base font-medium transition-colors ${
                currency === 'EUR' 
                  ? 'bg-gray-200 text-gray-900' 
                  : 'bg-white text-gray-500 hover:bg-gray-50'
              }`}
            >
              € EUR
            </button>
          </div>
        </div>
      </div>

      {/* Company Size */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-8">Choose Your Company Size</h3>
        <div className="flex flex-wrap gap-10">
          {sizes.map((size) => (
            <label 
              key={size.id} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <input
                  type="radio"
                  name="companySize"
                  value={size.id}
                  checked={companySize === size.id}
                  onChange={() => setCompanySize(size.id as any)}
                  className="sr-only"
                />
                <div 
                  className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
                    companySize === size.id 
                      ? 'border-green-500 bg-green-500' 
                      : 'border-gray-300 group-hover:border-gray-400'
                  }`}
                >
                  {companySize === size.id && (
                    <Icon name="CheckIcon" size={18} className="text-white" />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-gray-900 text-lg">{size.id}</span>
                <span className="text-gray-500 text-base">- {size.label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-start mt-8">
        <button
          className="bg-green-600 text-white text-lg font-bold py-4 px-12 rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
        >
          Submit Request
        </button>
      </div>

    </div>
  );
};

export default PricingSelector;
