import { Card, CardContent, CardHeader } from "./ui/card";
import { CryptoDropdown } from "./ui/cryptoDropdown";
import { Tabs, TabsContent } from "./ui/tabs";
import { useCryptoData } from "@/hooks/useCryptoData";
import { Button } from "./ui/button";
import { ComingSoonCard, type EmailFormData } from "./comingSoonCard";
import { TabslistTrigger } from "./TabslistTrigger";

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
    <Card className="rounded-4xl px-4 pt-8 h-fit overflow-hidden w-full max-w-full sm:max-w-md md:max-w-xl lg:w-1/2 mx-auto box-border">
      <Tabs
        defaultValue="crypto-to-cash"
        className="w-full flex flex-col sm:flex-col md:grid md:space-y-10 space-y-5"
      >
        <TabslistTrigger />

      
        <TabsContent
          className="w-full min-h-fit md:h-auto flex flex-col md:grid md:grid-cols-1 gap-6 md:gap-10"
          value="crypto-to-cash"
        >
          <div className="w-full flex flex-col gap-4 h-fit md:gap-0">

         
            <Card className="w-full px-1 md:px-4 mx-auto text-left shadow-none rounded-[30px] border p-4 md:p-6 gap-2 box-border h-fit max-h-30.5">
              <CardHeader className="my-0 px-0">
                <span className="text-[14px] md:text-[16px] text-[#828282] font-family-outfit font-medium">
                  You Pay
                </span>
              </CardHeader>
              <CardContent className="px-1 flex items-center gap-4 justify-between">
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

           
            <Card className="w-full mt-5 px-1 md:px-4 mx-auto text-left shadow-none rounded-[30px] border p-4 md:p-6 gap-2 box-border h-fit  max-h-30.5 ">
              <CardHeader className="my-0 px-0">
                <span className="text-[14px] md:text-[16px] text-[#828282] font-family-outfit font-medium">
                  You Receive
                </span>
              </CardHeader>
              <CardContent className="px-1 flex items-center gap-4 justify-between">
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

          
            <div className="w-full  grid gap-8 md:gap-10 h-fit md:mt-6">
              <Card className="w-full bg-transparent border-none shadow-none gap-4 px-1 md:px-0 box-border max-h-24">
                <CardHeader className="py-0 px-2 font-family-outfit font-medium text-left text-[16px] text-[#013941]">
                  Pay From
                </CardHeader>
                <CardContent className="px-0">
                  <CryptoDropdown
                    {...cryptoData3}
                    onSelectCoin={cryptoData3.handleSelect}
                    enableSearch={false}
                    buttonClass="flex justify-between border border-[#E0E0E0] h-14 md:h-16 px-6 rounded-[30px] w-full font-family-outfit"
                    popoverContentClass="p-0 max-h-[400px] md:w-[300px] w-full"
                    placeholder="Select an option"
                  />
                </CardContent>
              </Card>

              <Card className="bg-transparent w-full border-none shadow-none gap-4 px-1 md:px-0 box-border h-fit max-h-24">
                <CardHeader className="py-0 px-2 font-family-outfit font-medium text-left text-[16px] text-[#013941]">
                  Pay To
                </CardHeader>
                <CardContent className="px-0">
                  <CryptoDropdown
                    {...cryptoData3}
                    onSelectCoin={cryptoData3.handleSelect}
                    enableSearch={false}
                    buttonClass="flex justify-between border border-[#E0E0E0] h-14 md:h-16 px-6 rounded-[30px] w-full font-family-outfit"
                    popoverContentClass="p-0 max-h-[400px] md:w-[300px]"
                    placeholder="Select an option"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          <Button className="w-full sm:w-[95%] md:w-full mt-10 h-14 md:h-15 font-family-instrument rounded-[30px] py-4 md:py-5 px-6 md:px-10 bg-[#013941] text-[16px] font-bold mx-auto">
            Convert now
          </Button>
        </TabsContent>

      
        <TabsContent className="min-h-fit md:h-auto w-full" value="cash-to-crypto">
          <ComingSoonCard
            title="Coming Soon!"
            description={
              <>
                Cash to Crypto is almost here.<br />
                Enter your email and we'll let you know the moment it's live.
              </>
            }
            buttonText="Update Me"
            onSubmit={handleEmailSubmit}
            placeholder="Enter your email"
          />
        </TabsContent>

      
        <TabsContent className="min-h-fit md:h-auto w-full" value="crypto-fiat-loan">
          <ComingSoonCard
            title="Coming Soon!"
            description={
              <>
                Crypto to Fiat Loan is almost here.<br />
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
