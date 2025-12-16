import { TabsList, TabsTrigger } from "./ui/tabs"

export const TabslistTrigger = () => {
    return(
         <TabsList className="w-[95%] md:w-98 bg-[#F2F2F2] h-8.5 flex mx-auto p-0 md:text-[14px] rounded-full overflow-hidden">
          <TabsTrigger className="font-family-outfit rounded-[30px]  md:text-[14px] px-1 data-[state=active]:px-2 md:w-30.75 h-full py-2 md:px-4 text-[#828282] data-[state=active]:bg-[#013941] data-[state=active]:text-[#F8FEFB] text-[clamp(10px,2.5vw,14px)]" value="crypto-to-cash">
            Crypto to cash
          </TabsTrigger>
          <TabsTrigger className="rounded-[30px] md:w-30.75 h-full md:text-[14px] py-2 data-[state=active]:px-2 px-1 md:px-4 text-[#828282] data-[state=active]:bg-[#013941] data-[state=active]:text-[#F8FEFB] text-[clamp(10px,2.5vw,14px)]" value="cash-to-crypto">
            Cash to crypto
          </TabsTrigger>
          <TabsTrigger className="rounded-[30px] md:w-30.75 h-full md:text-[14px] data-[state=active]:px-2 py-2 px-1 md:px-4 text-[#828282] data-[state=active]:bg-[#013941] data-[state=active]:text-[#F8FEFB] text-[clamp(10px,2.5vw,14px)]" value="crypto-fiat-loan">
            Crypto to fiat loan
          </TabsTrigger>
        </TabsList>
    )
}