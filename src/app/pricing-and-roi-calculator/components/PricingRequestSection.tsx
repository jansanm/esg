'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const PricingRequestSection = () => {

  const [companySize, setCompanySize] = useState<'100-500' | '501-1000' | '1000+' | null>(null);
  const [country, setCountry] = useState('India');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = useState('');
  const [isCompanySizeDropdownOpen, setIsCompanySizeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const companySizeDropdownRef = useRef<HTMLDivElement>(null);

  // Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const sizes = [
    { id: '100-500', label: '100-500 employees' },
    { id: '501-1000', label: '501-1000 employees' },
    { id: '1000+', label: 'above 1000+ employees' },
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

  const filteredCountries = countries.filter(countryName =>
    countryName.toLowerCase().includes(countrySearchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
        setCountrySearchQuery('');
      }
      if (companySizeDropdownRef.current && !companySizeDropdownRef.current.contains(event.target as Node)) {
        setIsCompanySizeDropdownOpen(false);
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
    <section className="relative w-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 text-white text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Flexible pricing for scalability and sustainability
            </h1>
            





          </div>

          {/* Right Column: Form Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 relative">


              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Get your pricing quote</h2>

              {/* Tabs */}


              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5 relative">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">First Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Icon name="UserIcon" size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5 relative">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Last Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Icon name="UserIcon" size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 relative">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Icon name="EnvelopeIcon" size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 relative">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Icon name="PhoneIcon" size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 relative" ref={dropdownRef}>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Country / Territory</label>
                  <button
                    type="button"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-left text-gray-900 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all relative"
                  >
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Icon name="GlobeAltIcon" size={18} className="text-gray-400" />
                    </div>
                    <span className={country ? 'text-gray-900' : 'text-gray-400'}>{country || 'Select Country'}</span>
                    <Icon name="ChevronDownIcon" size={18} className={`text-gray-400 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isCountryDropdownOpen && (
                    <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-xl max-h-60 overflow-hidden flex flex-col">
                      <div className="p-2 border-b border-gray-100 sticky top-0 bg-white z-10">
                        <input
                          type="text"
                          placeholder="Search..."
                          value={countrySearchQuery}
                          onChange={(e) => setCountrySearchQuery(e.target.value)}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                          autoFocus
                        />
                      </div>
                      <div className="overflow-y-auto flex-1">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((c) => (
                            <button
                              key={c}
                              type="button"
                              onClick={() => handleCountrySelect(c)}
                              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-emerald-50 hover:text-emerald-700 transition-colors ${
                                country === c ? 'bg-emerald-50 text-emerald-700 font-medium' : 'text-gray-700'
                              }`}
                            >
                              {c}
                            </button>
                          ))
                        ) : (
                          <div className="px-4 py-3 text-sm text-gray-500 text-center">No countries found</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5 relative" ref={companySizeDropdownRef}>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Company Size</label>
                  <button
                    type="button"
                    onClick={() => setIsCompanySizeDropdownOpen(!isCompanySizeDropdownOpen)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-left text-gray-900 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all relative"
                  >
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Icon name="BuildingOfficeIcon" size={18} className="text-gray-400" />
                    </div>
                    <span className={companySize ? 'text-gray-900' : 'text-gray-400'}>{sizes.find(s => s.id === companySize)?.label || 'Select Company Size'}</span>
                    <Icon name="ChevronDownIcon" size={18} className={`text-gray-400 transition-transform ${isCompanySizeDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isCompanySizeDropdownOpen && (
                    <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden flex flex-col">
                      <div className="py-1">
                        {sizes.map((size) => (
                          <button
                            key={size.id}
                            type="button"
                            onClick={() => {
                              setCompanySize(size.id as any);
                              setIsCompanySizeDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-emerald-50 hover:text-emerald-700 transition-colors ${
                              companySize === size.id ? 'bg-emerald-50 text-emerald-700 font-medium' : 'text-gray-700'
                            }`}
                          >
                            {size.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-lg rounded-md shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 mt-4"
                >
                  Request Pricing
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingRequestSection;
