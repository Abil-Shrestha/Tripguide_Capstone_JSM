const questions = [
  {
    id: 1,
    heading: 'How is TripGuide different from other hotel booking websites?',
    desc: `The major hotel booking websites have fixed prices for rooms and take up to 25% commission from hotels,which considerably increases the 
    final price, OnTripGuide, hoteliers recieve direct reservations, and in    turn, theyre able to offer the best room prices to ourmembers.`,
  },
  {
    id: 2,
    heading: 'What is your policy regarding cancellations?',
    desc: `If your travel plans change, you can cancel or modify your reservation 
    in accordance with the hotel's cancellation policy as stated during the reservation process.`,
  },
];

const FrequentlyAskedQuestions = () => (
  <div className='font-DMSans max-w-4xl lg:mx-auto w-full'>
    <h3 className='text-[30px] leading-[42px] text-cBlack-2 font-[700] dark:text-[#E7ECF3] text-center'>Frequently asked questions</h3>
    <div className='flex flex-col md:flex-row md:gap-4 w-full'>
      {questions.map((question) => (
        <div key={question.id} className='mt-8 bg-[#F4F5F6]  dark:bg-cBlack-2 p-5 rounded-md h-[280px] sm:h-[320px] w-full'>
          <h4 className='text-[24px] font-[500] dark:text-white mb-2 text-cBlack-2'>{question.heading}</h4>
          <p className='text-[14px] text-[#84878B] dark:text-[#B1B5C3] my-4'>{question.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FrequentlyAskedQuestions;
