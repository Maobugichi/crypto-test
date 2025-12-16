import React, {  useState } from "react";
import caret from "@/assets/caret-test.svg"
import { Button } from "@/components/ui/button";

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";




interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
}

interface CryptoDropdownProps {

  currencies: Coin[];
  loadingCurrencies: boolean;
  selectedCoin: Coin | null;
  error: string;
  onSelectCoin: (coin: Coin) => void;
 
  enableSearch?: boolean;
  popoverTriggerClass?: string;
  buttonClass?: string;
  popoverContentClass?: string;
  commandClass?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  showError?: boolean;
}

export const CryptoDropdown: React.FC<CryptoDropdownProps> = ({
  currencies,
  loadingCurrencies,
  selectedCoin,
  onSelectCoin,
  enableSearch = true,
  popoverTriggerClass = "",
  buttonClass = " flex font-medium items-center justify-center gap-6 leading-5 text-[14px] border-[#E0E0E0] md:w-[100px] h-9 rounded-4xl border py-2 uppercase",
  popoverContentClass ="max-h-[300px] rounded-xl overflow-hidden",
  commandClass = " ",
  placeholder = "Select a cryptocurrency...",
  searchPlaceholder = "Search currency...",
  
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredCoins = enableSearch
    ? currencies.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.symbol.toLowerCase().includes(search.toLowerCase())
      )
    : currencies;

  const handleSelect = (currency: Coin) => {
    onSelectCoin(currency);
    setOpen(false);
  };

  return (
    <>
      <Popover open={open} onOpenChange={setOpen} modal={true}>
        <PopoverTrigger className={popoverTriggerClass} asChild>
          <Button
            variant="outline"
            role="combobox"
            disabled={loadingCurrencies}
            className={buttonClass}
          >
            {selectedCoin ? (
              <div className="flex items-center gap-1">
                <img
                  src={selectedCoin.image}
                  alt={selectedCoin.name}
                  className="w-5 h-5 rounded-full"
                />
                <span className="w-7 h-5 font-family-clash">{selectedCoin.symbol.toUpperCase()}</span>
              </div>
            ) : loadingCurrencies ? (
              <span className="text-[5px]">'...'</span>
            ) : (
              <span className="w-28.5 text-[16px] leading-none tracking-normal text-[#013941] h-5">{placeholder}</span>
            )}

            <div className="w-5 h-5 grid place-items-center">
                <img src={caret}/>
            </div>
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className={popoverContentClass}
          align="end"
          side="bottom"
          sideOffset={4}
        >
          <Command className={commandClass}>
            {enableSearch && (
              <CommandInput
                placeholder={searchPlaceholder}
              
                value={search}
                onValueChange={setSearch}
              />
            )}
            <CommandList className="h-72 overflow-y-auto">
              <CommandEmpty>No currency found.</CommandEmpty>
              <CommandGroup>
                {filteredCoins.map((currency) => (
                  <CommandItem
                    key={currency.id}
                    value={currency.symbol}
                    onSelect={() => handleSelect(currency)}
                    className="cursor-pointer flex items-center gap-2 px-2 py-1 hover:bg-gray-100"
                  >
                    <img
                      src={currency.image}
                      alt={currency.name}
                      className="w-5 h-5 rounded-full"
                    />
                    <span className="font-medium">{currency.symbol.toUpperCase()}</span>
                    <span className="text-gray-500 text-sm">{currency.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

     
    </>
  );
};