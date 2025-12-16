import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type EmailFormData = z.infer<typeof emailSchema>;

interface ComingSoonCardProps {
  title: string;
  description: string | React.ReactNode;
  buttonText?: string;
  onSubmit: (data: EmailFormData) => void;
  placeholder?: string;
}

export const ComingSoonCard: React.FC<ComingSoonCardProps> = ({
  title,
  description,
  buttonText = 'Update Me',
  onSubmit,
  placeholder = 'Enter your email',
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const handleFormSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    handleSubmit(onSubmit)();
  };

  return (
    <Card className=" w-full md:max-w-2xl flex flex-col h-fit md:mi-h-[80vh] border-none shadow-none px-4 md:px-0 gap-4">
      <CardHeader className="py-0">
        <h1 className="text-[24px] md:text-[32px] font-medium leading-tight text-center mx-auto text-[#013941]">
          {title}
        </h1>
      </CardHeader>

      <CardContent className="flex flex-col min-h-82.5 px-0 w-full">
        <div className="grid gap-8">
          <p className="w-full text-[#4f4f4f] leading-[150%] tracking-tight text-center text-[14px] md:text-[20px] px-2 md:px-0">
            {description}
          </p>

          <div className="w-full md:w-[93%] mx-auto grid gap-3">
            <Label className="text-left text-[14px] md:text-[16px] ml-1 font-semibold text-[#013941]">
              Email
            </Label>

            <Input
              {...register('email')}
              placeholder={placeholder}
              className="w-full h-12 md:h-15 rounded-[30px] border py-3 md:py-4 px-5 md:px-6 border-[#E0E0E0] placeholder:text-[14px] md:placeholder:text-[16px] placeholder:text-[#828282]"
            />

            {errors.email && (
              <p className="text-red-500 text-sm px-5">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <Button
          onClick={handleFormSubmit}
          disabled={isSubmitting}
          className="mt-8 md:mt-auto w-full md:w-[93%] mx-auto h-12 md:h-15 rounded-[30px] py-3 md:py-5 px-5 bg-[#013941] text-[#E6FBF2] font-bold hover:bg-[#025159] disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};
