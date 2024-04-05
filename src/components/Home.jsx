import React, { useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import SearchBox from './SearchBox'
import { options, help } from '@/utils/utils';
import OptionsCards from './OptionsCards';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Personal from './Personal';
import Business from './Business';
import Technical from './Technical';
import HelpCard from './HelpCard';
import { Link } from 'react-router-dom'
import Alert from './Alert';

export default function Home() {
  const [text, setText] = useState('');

  const alertText = "Recieved a suspicious email, fake invoice, or message? Don't reply, open links, download attachments, or call any listed phone numbers. We'll never ask for your password or financial information in an email or message. Forward suspicious messages to <Link to ='/'>phishing@paypal.com</Link> and then delete them."

  const optionsCard = options.map(option => {
    return (
      <OptionsCards key={option.id} img={option.img} title={option.title} desc={option.desc} />
    )
  })
  const cards = help.map(card => {
    return (
      <li key={card.id}>
        <HelpCard Img={card.img} title={card.title} desc={card.desc} />
      </li>
    )
  })
  return (
    <>
      <MaxWidthWrapper>
        <h4 className='text-blue-500 font-semibold'>Help Center</h4>
        <div className='py-1 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-xl font-semibold tracking-tight text-gray-900 md:text-2xl'>
            How can we help?
          </h1>
          <SearchBox text={text} setText={setText} />
        </div>
        <Alert text={alertText} />
        <div className='pt-5 flex gap-4 justify-center flex-wrap md:px-5'>
          {optionsCard}
        </div>
        <div className='pt-5'>
          <Tabs defaultValue="personal" className="w-full">
            <div className='flex justify-center'>
              <div className='overflow-auto max-w-fit'>
                <TabsList className="rounded-full text-blue-800">
                  {/* Use flex-start to ensure tabs start from the left */}
                  <TabsTrigger value="personal" className="rounded-full px-8">Personal Help</TabsTrigger>
                  <TabsTrigger value="business" className="rounded-full px-8">Business Help</TabsTrigger>
                  <TabsTrigger value="technical" className="rounded-full px-8">Technical Help</TabsTrigger>
                </TabsList>
              </div>
            </div>

            <div className='w-full mt-6'>
              <TabsContent value="personal"><Personal /></TabsContent>
              <TabsContent value="business"><Business /></TabsContent>
              <TabsContent value="technical"><Technical /></TabsContent>
            </div>
          </Tabs>
        </div>
        <div className='mt-16'>
          <h2 className='text-center text-2xl'>More ways to get help</h2>
          <ul className='mt-4 flex flex-wrap justify-center gap-4 lg:gap-12'>
            {cards}
          </ul>
        </div>
        <div className='flex flex-col mt-12 py-5 px-5 lg:px-20 lg:flex-row gap-6 items-center justify-between bg-slate-100'>
          <div className='w-full lg:w-1/2 space-y-2'>
            <h3 className='text-lg font-semibold text-center lg:text-left'>How are we doing?</h3>
            <p className=' text-center lg:text-left'>Help improve the <strong>Paypal Help Center experience</strong> with some quick feedback</p>
          </div>
          <Link to='/' className='text-lg font-medium bg-blue-800 text-white rounded-full px-8 py-2 lg:px-10 lg:py-3'>
            Take the survey
          </Link>
        </div>
      </MaxWidthWrapper>
    </>
  )
}
