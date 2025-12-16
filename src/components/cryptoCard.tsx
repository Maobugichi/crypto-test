
import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card"
import { CryptoDropdown } from "./ui/cryptoDropdown"
import { Tabs, TabsList , TabsTrigger, TabsContent } from "./ui/tabs"
import { SiCoinbase, SiWalletconnect } from "react-icons/si";
import { useCryptoData } from "@/hooks/useCryptoData";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";


export const CryptoCard = () => {
   const cryptoData1 = useCryptoData({
    autoSelectFirst: true,
    onSelect: (coin) => console.log("Dropdown 1 selected:", coin),
  });


  const cryptoData2 = useCryptoData({
    autoSelectFirst: false,
    onSelect: (coin) => console.log("Dropdown 2 selected:", coin),
  });

  // Example 3: Your custom styled dropdown
  const cryptoData3 = useCryptoData({
    autoSelectFirst: false,
    onSelect: (coin) => console.log("Custom dropdown selected:", coin),
  });
    return(
        <Card className="rounded-4xl py-0 pt-8 h-fit">
          <Tabs  className="mx-auto  grid space-y-10">
            <TabsList className="w-98   bg-[#F2F2F2]  h-8.5  flex  mx-auto p-0 text-[14px] rounded-full">
               <TabsTrigger className="font-family-outfit rounded-[30px] w-30.75 h-full py-2 px-4 text-[#828282] data-[state=active]:bg-[#013941] tracking-normal   m-0 data-[state=active]:text-[#F8FEFB]" value="crypto-to-cash">Crypto to cash</TabsTrigger>
               <TabsTrigger className="rounded-[30px] w-30.75 h-full py-2 px-4 text-[#828282] data-[state=active]:bg-[#013941] tracking-normal  font-family-outfit m-0 data-[state=active]:text-[#F8FEFB]" value="cash-to-crypto">Cash to crypto</TabsTrigger>
               <TabsTrigger className="rounded-[30px] w-30.75 h-full py-2 px-4 text-[#828282] data-[state=active]:bg-[#013941] tracking-normal  font-family-outfit m-0 data-[state=active]:text-[#F8FEFB]" value="crypto-fiat-loan">Crypto to fiat loan</TabsTrigger>
            </TabsList>
         
            <TabsContent className="grid space-y-10 w-lg gap-0" value="crypto-to-cash">
                <div className="h-122 grid ">
                    <div className="grid ">
                        <Card className="w-lg shadow-none text-left  h-28 rounded-[30px] mx-auto grid border p-6 gap-2">
                            <CardHeader className="my-0  px-0  h-5 w-166">
                                <span className="text-[16px] text-[#828282] leading-none tracking-normal font-family-outfit font-medium">You pay</span>
                            </CardHeader>
                            <CardContent className="flex my-0 w-116 h-9 rounded-[30px] justify-between items-center px-0 ">
                                <p className="w-12 h-7.5 text-[24px] font-semibold leading-none tracking-normal font-family-outfit">1.00</p>
                                <CryptoDropdown
                                    {...cryptoData1}
                                    onSelectCoin={cryptoData1.handleSelect}
                                    enableSearch={true}
                                    />
                            </CardContent>
                            
                            
                        </Card>   

                        <Card className="w-lg text-left shadow-none  h-28 rounded-[30px] mx-auto grid border p-6 gap-2">
                            <CardHeader className="my-0  px-0  h-5 w-166">
                                <span className="text-[16px] text-[#828282] leading-none tracking-normal font-family-outfit font-medium">You Receive</span>
                            </CardHeader>
                            <CardContent className="flex my-0 w-116 h-9 rounded-[30px] justify-between px-0  items-center">
                                <p className="w-12 h-7.5 text-[24px] font-semibold font-family-outfit text-black leading-none tracking-normal">1.00</p>
                            <CryptoDropdown
                                    {...cryptoData1}
                                    onSelectCoin={cryptoData1.handleSelect}
                                    enableSearch={true}
                                    />
                            </CardContent>
                        </Card>
                    </div> 

                    <div className="grid space-y-5">
                        <Card className="w-lg border-none shadow-none h-24 gap-4">
                            <CardHeader className="py-0 font-family-outfit font-medium  h-5 text-left text-[16px] leading-none tracking-normal text-[#013941]">
                                Pay From
                            </CardHeader>
                            <CardContent className=" px-0">
                        <CryptoDropdown
                            {...cryptoData3}
                            onSelectCoin={cryptoData3.handleSelect}
                            enableSearch={false}
                            buttonClass="flex font-family-outfit justify-between border border-[#E0E0E0] h-[60px] !px-6 rounded-[30px] w-full"
                            popoverContentClass="p-0 max-h-[400px] w-[300px]"
                            placeholder="Select an option"
                            searchPlaceholder="Find your crypto..."
                            />
                            </CardContent>
                            
                        </Card> 

                        <Card className="w-lg border-none shadow-none  h-24 gap-4">
                            <CardHeader className="font-family-outfit font-medium   py-0 h-5 text-left text-[16px] leading-none tracking-normal text-[#013941]">
                                Pay To
                            </CardHeader>
                            <CardContent className=" px-0">
                            <CryptoDropdown
                            {...cryptoData3}
                            onSelectCoin={cryptoData3.handleSelect}
                            enableSearch={false}
                            buttonClass="flex justify-between font-family-outfit  border border-[#E0E0E0]  !px-6 h-[60px] p-[24px] rounded-[30px] w-full"
                            popoverContentClass="p-0 max-h-[400px] w-[300px]"
                            placeholder="Select an option"
                            searchPlaceholder="Find your crypto..."
                            />
                            </CardContent>
                            
                        </Card> 
                    </div>
                </div>
                <Button className="w-full h-15 font-family-instrument rounded-[30px] py-5 px-10 bg-[#013941] text-[16px] font-bold leading-none tracking-normal">
                    Convert now
                </Button>
            </TabsContent> 
            <TabsContent value="cash-to-crypto">
                <Card className="w-130 flex  h-[80vh] border-none shadow-none px-0 gap-4">
                   <CardHeader className="flex py-0 my-0 ">
                     <h1 className="w-53.25 h-9.75 font-family-clash font-medium leading-none mx-auto tracking-normal text-[#013941] text-[32px]">Coming Soon!</h1>
                   </CardHeader>
                   <CardContent className="flex flex-col min-h-[330px] px-0 ">
                    <div className="grid gap-10">
                        <p className="w-full text-[#4f4f4f] font-family-outfit leading-[150%] tracking-tight text-center text-[20px]">
                        Cash to Crypto is almost here.<br/>
                        Enter your email and we'll let you know the moment it's live.
                    </p>
                    <div className="w-full grid gap-4">
                        <Label className="text-left text-[16px] font-semibold text-[#013941] w-[95%] mx-auto  h-5 font-family-outfit">Email</Label>
                        <Input 
                        placeholder="Enter your email"
                        className="w-full  h-15 placeholder:font-family-outfit placeholder:font-[16px] placeholder:text-[#828282] rounded-[30px] border py-4 px-6 border-[#E0E0E0]"/>
                    </div>
                    </div>
                    
                    <Button className="mt-auto w-full h-15 rounded-[30px] py-5 px-5 bg-[#013941] text-[#E6FBF2] font-family-instrument font-bold">
                        Update Me
                    </Button>
                    </CardContent>
                </Card>   
            </TabsContent> 
            <TabsContent value="crypto-fiat-loan">
                <Card className="w-lg h-28 rounded-[30px] border p-6">
                    <div>
                        <span>You pay</span>
                        <p>1.00</p>
                    </div>
                </Card>   
            </TabsContent> 
           </Tabs> 
        </Card>
    )
}