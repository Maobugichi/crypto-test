
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

  const cryptoData3 = useCryptoData({
    autoSelectFirst: false,
    onSelect: (coin) => console.log("Custom dropdown selected:", coin),
  });

  const handleEmailSubmit = (data: EmailFormData) => {
    alert(`Thank you! We'll notify ${data.email} when we launch.`);
  };

  return (
    <Card className="rounded-4xl  pt-8 h-fit overflow-hidden w-full md:w-1/2 mx-auto">
      <Tabs className="mx-auto flex md:grid space-y-10">
      
        <TabsList className="w-[95%] mx-auto md:w-98 bg-[#F2F2F2] h-8.5 flex mx-auto p-0 md:text-[14px] rounded-full">
          <TabsTrigger className="font-family-outfit rounded-[30px] text-[12px] md:text-[14px] px-3 md:w-30.75 h-full py-2 md:px-4 text-[#828282] data-[state=active]:bg-[#013941] data-[state=active]:text-[#F8FEFB]" value="crypto-to-cash">
            Crypto to cash
          </TabsTrigger>
          <TabsTrigger className="rounded-[30px] md:w-30.75 h-full text-[12px] md:text-[14px] py-2 px-3 md:px-4 text-[#828282] data-[state=active]:bg-[#013941] data-[state=active]:text-[#F8FEFB]" value="cash-to-crypto">
            Cash to crypto
          </TabsTrigger>
          <TabsTrigger className="rounded-[30px] md:w-30.75 h-full text-[12px] md:text-[14px] py-2 px-3 md:px-4 text-[#828282] data-[state=active]:bg-[#013941] data-[state=active]:text-[#F8FEFB]" value="crypto-fiat-loan">
            Crypto to fiat loan
          </TabsTrigger>
        </TabsList>

    
        <TabsContent
          value="crypto-to-cash"
          className="flex flex-col items-end md:grid space-y-8 md:space-y-10 md:w-lg w-full"
        >
          <div className="w-full md:h-122 md:grid">
            <div className="grid gap-6 md:gap-0">
              <Card className="w-[95%] mx-auto md:w-lg text-left shadow-none md:h-28 rounded-[30px] md:mx-auto border p-4 md:p-6 gap-2">
                <CardHeader className="my-0 px-0 md:h-5 md:w-166">
                  <span className="text-[14px] md:text-[16px] text-[#828282] font-family-outfit font-medium">
                    You Pay
                  </span>
                </CardHeader>

                <CardContent className="flex my-0 md:w-116 md:h-9 justify-between px-0 items-center gap-4">
                  <p className="text-[22px] md:text-[24px] font-semibold font-family-outfit leading-none">
                    1.00
                  </p>

                  <CryptoDropdown
                    {...cryptoData1}
                    onSelectCoin={cryptoData1.handleSelect}
                    enableSearch
                  />
                </CardContent>
              </Card>

            
              <Card className="w-[95%] mx-auto md:w-lg text-left shadow-none md:h-28 rounded-[30px] md:mx-auto border p-4 md:p-6 gap-2">
                <CardHeader className="my-0 px-0 md:h-5 md:w-166">
                  <span className="text-[14px] md:text-[16px] text-[#828282] font-family-outfit font-medium">
                    You Receive
                  </span>
                </CardHeader>

                <CardContent className="flex my-0 md:w-116 md:h-9 justify-between px-0 items-center gap-4">
                  <p className="text-[22px] md:text-[24px] font-semibold font-family-outfit leading-none">
                    1.00
                  </p>

                  <CryptoDropdown
                    {...cryptoData1}
                    onSelectCoin={cryptoData1.handleSelect}
                    enableSearch
                  />
                </CardContent>
              </Card>
            </div>


            <div className="w-[95%] mx-auto grid space-y-0 mt-6 md:mt-0">
              <Card className="w-full md:w-lg border-none shadow-none md:h-24 gap-4">
                <CardHeader className="py-0 font-family-outfit font-medium text-left text-[16px] text-[#013941]">
                  Pay From
                </CardHeader>
                <CardContent className="px-0">
                  <CryptoDropdown
                    {...cryptoData3}
                    onSelectCoin={cryptoData3.handleSelect}
                    enableSearch={false}
                    buttonClass="flex justify-between border border-[#E0E0E0] h-[60px] px-6 rounded-[30px] w-full font-family-outfit"
                    popoverContentClass="p-0 max-h-[400px] md:w-[300px] w-full"
                    placeholder="Select an option"
                  />
                </CardContent>
              </Card>

              <Card className="w-full md:w-lg border-none shadow-none md:h-24 gap-4">
                <CardHeader className="py-0 font-family-outfit font-medium text-left text-[16px] text-[#013941]">
                  Pay To
                </CardHeader>
                <CardContent className="px-0">
                  <CryptoDropdown
                    {...cryptoData3}
                    onSelectCoin={cryptoData3.handleSelect}
                    enableSearch={false}
                    buttonClass="flex justify-between border border-[#E0E0E0] h-[60px] px-6 rounded-[30px] w-full font-family-outfit"
                    popoverContentClass="p-0 max-h-[400px] md:w-[300px]"
                    placeholder="Select an option"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

      
          <Button className="w-[95%] mx-auto md:w-full h-15 font-family-instrument rounded-[30px] py-5 px-10 bg-[#013941] text-[16px] font-bold">
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
  );
};
