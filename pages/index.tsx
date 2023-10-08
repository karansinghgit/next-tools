// pages/index.tsx
import { useState } from 'react';
import { Textarea, Button } from '@nextui-org/react';
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleInput1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(e.target.value);
  };

  return (
    <DefaultLayout>
      <div className="flex w-full justify-around ml-20"> {/* Changed to justify-between */}
        <div className="w-1/3 "> {/* Adjusted width */}
          <Textarea
            className="" // Set height to 24rem (96 * 0.25rem)
            value={input1}
            onChange={handleInput1Change}
            placeholder="Enter up to 4000 words here..."
            maxLength={4000 * 5} // assuming an average of 5 characters per word
          />
        </div>
        <div className="w-1/3"> {/* Adjusted width */}
          <Textarea
            className="h-96" // Set height to 24rem (96 * 0.25rem)
            value={input2}
            onChange={handleInput2Change}
            placeholder="Enter up to 4000 words here..."
            maxLength={4000 * 5} // assuming an average of 5 characters per word
          />
        </div>
      </div>
      <Button className="mt-10 ml-64" color="primary" onClick={() => console.log(input1, input2)}>
        Submit
      </Button>
    </DefaultLayout>
  );
}
