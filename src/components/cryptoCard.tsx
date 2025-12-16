
import { Card, CardContent, CardHeader } from "./ui/card"
import { CryptoDropdown } from "./ui/cryptoDropdown"
import { Tabs, TabsList , TabsTrigger, TabsContent } from "./ui/tabs"
import { useCryptoData } from "@/hooks/useCryptoData";
import { Button } from "./ui/button";
import { ComingSoonCard, type EmailFormData } from "./comingSoonCard";


export const CryptoCard = () => {
   const cryptoData1 = useCryptoData({
    autoSelectFirst: true,
    onSelect: (coin) => console.log("Dropdown 1 selected:", coin),
  });

  const handleEmailSubmit = (data: EmailFormData) => {
    console.log('Email submitted:', data.email);
    alert(`Thank you! We'll notify ${data.email} when we launch.`);
  };


  
  const cryptoData3 = useCryptoData({
    autoSelectFirst: false,
    onSelect: (coin) => console.log("Custom dropdown selected:", coin),
  });
    return(
        <Card className="rounded-4xl py-0 pt-8 h-fit overflow-hidden w-full  md:w-1/2 mx-auto">
          <Tabs  className="mx-auto bg-green-400 flex  md:grid space-y-10">
            <TabsList className="md:w-98   bg-[#F2F2F2]  h-8.5  flex  mx-auto p-0 md:text-[14px]  rounded-full">
               <TabsTrigger className="font-family-outfit rounded-[30px] text-[12px] md:text-[14px] px-3 md:w-30.75 h-full py-2 md:px-4 text-[#828282] data-[state=active]:bg-[#013941] tracking-normal  m-0 data-[state=active]:text-[#F8FEFB]" value="crypto-to-cash">Crypto to cash</TabsTrigger>
               <TabsTrigger className="rounded-[30px] md:w-30.75 h-full text-[12px] md:text-[14px] py-2 px-3 md:px-4 text-[#828282] data-[state=active]:bg-[#013941] tracking-normal  font-family-outfit m-0 data-[state=active]:text-[#F8FEFB]" value="cash-to-crypto">Cash to crypto</TabsTrigger>
               <TabsTrigger className="rounded-[30px] md:w-30.75 h-full text-[12px] md:text-[14px] py-2 px-3 md:px-4 text-[#828282] data-[state=active]:bg-[#013941] tracking-normal  font-family-outfit m-0 data-[state=active]:text-[#F8FEFB]" value="crypto-fiat-loan">Crypto to fiat loan</TabsTrigger>
            </TabsList>
         
            <TabsContent className="flex flex-col items-end md:grid h-screen space-y-10  md:w-lg gap-0 bg-orange-600 w-full" value="crypto-to-cash">
                <div className="w-full h-122 md:grid ">
                    <div className="grid ">
                        <Card className="w-[90%] bg-green-400 md:w-lg shadow-none text-left  h-28 rounded-[30px] md:mx-auto  md:grid border p-6 gap-2">
                            <CardHeader className="my-0  px-0  h-5 w-166">
                                <span className="text-[16px] text-[#828282] leading-none tracking-normal font-family-outfit font-medium">You pay</span>
                            </CardHeader>
                            <CardContent className="flex my-0 md:w-116 h-9 rounded-[30px] justify-between items-center px-0 ">
                                <p className="w-12 h-7.5 text-[24px] font-semibold leading-none tracking-normal font-family-outfit">1.00</p>
                                <CryptoDropdown
                                    {...cryptoData1}
                                    onSelectCoin={cryptoData1.handleSelect}
                                    enableSearch={true}
                                    />
                            </CardContent>
                            
                            
                        </Card>   

                        <Card className="md:w-lg text-left shadow-none  h-28 rounded-[30px] md:mx-auto md:grid border p-6 gap-2">
                            <CardHeader className="my-0  px-0  h-5 w-166">
                                <span className="text-[16px] text-[#828282] leading-none tracking-normal font-family-outfit font-medium">You Receive</span>
                            </CardHeader>
                            <CardContent className="flex my-0 md:w-116 h-9 rounded-[30px] justify-between px-0  items-center">
                                <p className="w-12 h-7.5 text-[24px] font-semibold font-family-outfit text-black leading-none tracking-normal">1.00</p>
                            <CryptoDropdown
                                    {...cryptoData1}
                                    onSelectCoin={cryptoData1.handleSelect}
                                    enableSearch={true}
                                    />
                            </CardContent>
                        </Card>
                    </div> 

                    <div className="w-full grid space-y-5">
                        <Card className="md:w-lg w-full border-none shadow-none h-24 gap-4">
                            <CardHeader className="py-0 font-family-outfit font-medium  h-5 text-left text-[16px] leading-none tracking-normal text-[#013941]">
                                Pay From
                            </CardHeader>
                            <CardContent className=" px-0">
                            <CryptoDropdown
                                {...cryptoData3}
                                onSelectCoin={cryptoData3.handleSelect}
                                enableSearch={false}
                                buttonClass="flex font-family-outfit justify-between border border-[#E0E0E0] h-[60px] !px-6 rounded-[30px] w-full"
                                popoverContentClass="p-0 max-h-[400px] md:w-[300px] w-full"
                                placeholder="Select an option"
                                searchPlaceholder="Find your crypto..."
                                />
                            </CardContent>
                            
                        </Card> 

                        <Card className="md:w-lg border-none shadow-none  h-24 gap-4">
                            <CardHeader className="font-family-outfit font-medium   py-0 h-5 text-left text-[16px] leading-none tracking-normal text-[#013941]">
                                Pay To
                            </CardHeader>
                            <CardContent className=" px-0">
                            <CryptoDropdown
                            {...cryptoData3}
                            onSelectCoin={cryptoData3.handleSelect}
                            enableSearch={false}
                            buttonClass="flex justify-between font-family-outfit  border border-[#E0E0E0]  !px-6 h-[60px] p-[24px] rounded-[30px] w-full"
                            popoverContentClass="p-0 max-h-[400px] md:w-[300px]"
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
            <TabsContent className="h-screen" value="cash-to-crypto">
                <ComingSoonCard
                title="Coming Soon!"
                description={
                    <>
                    Cash to Crypto is almost here.<br/>
                    Enter your email and we'll let you know the moment it's live.
                    </>
                }
                buttonText="Update Me"
                onSubmit={handleEmailSubmit}
                placeholder="Enter your email"
                /> 
            </TabsContent> 
            <TabsContent className="h-screen" value="crypto-fiat-loan">
                <ComingSoonCard
                title="Coming Soon!"
                description={
                    <>
                    Crypto to Fiat Loan is almost here.<br/>
                    Enter your email and we'll let you know the moment it's live.
                    </>
                }
                buttonText="Update Me"
                onSubmit={handleEmailSubmit}
                placeholder="Enter your email"
                />  
            </TabsContent> 
           </Tabs> 
        </Card>
    )
}