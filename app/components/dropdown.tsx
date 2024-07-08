// dropdown.tsx
'use client'; // Tambahkan ini di awal file untuk menandai komponen yang menggunakan client-side logic

import { ReactNode, useState, MouseEvent } from 'react';
import Link from 'next/link';

interface SubItem {
  label: string;
  href: string;
}

interface DropdownProps {
  title: ReactNode;
  items: { label: string; href: string; subItems?: SubItem[]; showOnSmallScreen?: boolean }[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSubItems, setActiveSubItems] = useState<SubItem[] | null>(null);
  const [isDaerahActive, setIsDaerahActive] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsHovered(!isOpen);
    if (!isOpen) {
      setActiveSubItems(null);
      setIsDaerahActive(false);
    }
  };

  const handleSubmenuClick = (
    event: MouseEvent<HTMLButtonElement>,
    subItems: SubItem[] | undefined,
    label: string
  ) => {
    event.preventDefault();
    if (subItems) {
      if (label === 'Daerah') {
        setIsDaerahActive(prevState => !prevState);
        setActiveSubItems(prevState => (prevState === subItems ? null : subItems));
      } else {
        setActiveSubItems(subItems);
        setIsDaerahActive(false);
      }
    } else {
      setActiveSubItems(null);
      setIsDaerahActive(false);
    }
  };

  const closeSubMenu = () => {
    setActiveSubItems(null);
    setIsDaerahActive(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className={`flex items-center p-4 transition-all duration-200 ${
          isOpen || isHovered ? 'bg-[#FDCB2C]/60' : ''
        } rounded-t-md active:bg-[#FDCB2C]/75`}
        onClick={toggleDropdown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 w-auto rounded-b-md shadow-lg px-7 pt-4 pb-0.5 bg-[#B4AC36] ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <div key={index} className={`relative group ${item.showOnSmallScreen ? 'lg:hidden' : ''}`}>
                <button
                  className="text-base mb-3.5 text-white hover:font-semibold whitespace-nowrap overflow-hidden flex items-center"
                  onClick={(event) => handleSubmenuClick(event, item.subItems, item.label)}
                >
                  {item.label === 'Daerah' && (
                    <span className={`flex items-center ${isDaerahActive ? 'font-semibold' : ''}`}>
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                      <div className="pl-2.5">{item.label}</div>
                    </span>
                  )}
                  {item.label !== 'Daerah' && <div className="pl-6">{item.label}</div>}
                </button>
                {activeSubItems === item.subItems && item.subItems && (
                  <div className="absolute right-full top-0 mt-[-20px] mr-6 w-auto rounded-b-md shadow-lg px-7 pt-4 pb-0.5 bg-[#B4AC36] ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link href={subItem.href} key={subIndex}>
                          <div onClick={closeSubMenu} className="block text-base mb-3.5 text-white hover:font-semibold whitespace-nowrap overflow-hidden">
                            {subItem.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
