import React from 'react';

import { Bloc1 } from '../bloc1/Bloc1';
import { Bloc2 } from '../bloc2/Bloc2';
import { Bloc3 } from '../bloc3/Bloc3';
import { Bloc4 } from '../bloc4/Bloc4';
import { Bloc5 } from '../bloc5/Bloc5';

const Landing: React.FC = () => {
  return (
    <>
      <div className="w-full bg-stone-100 p-10 lg:p-32">
        <div className="m-auto flex items-center justify-center xl:max-w-screen-2xl 2xl:mx-auto">
          <div className="grid min-h-96 grid-cols-1 gap-8 md:grid-cols-2 xl:max-w-screen-2xl">
            <Bloc1 />
          </div>
        </div>
      </div>
      <Bloc2 />
      {/* <div className="mt-[-50px] flex flex-col justify-center"> */}
      <Bloc3 />
      {/* </div> */}
      <div className="w-full bg-stone-700 lg:mt-48 lg:py-48">
        <div className="grid min-h-96 grid-cols-1 gap-8 p-0 md:grid-cols-2 lg:p-8 xl:max-w-screen-2xl 2xl:mx-auto">
          <Bloc4 />
        </div>
      </div>
      <Bloc5 />
      {/* <Bloc6 /> */}
    </>
  );
};

export { Landing };
