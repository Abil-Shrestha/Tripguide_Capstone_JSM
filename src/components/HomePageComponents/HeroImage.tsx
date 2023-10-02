import Image from 'next/image';

const HeroImage = ({ activeTab }: {activeTab: string | string[]}) => {
  switch (activeTab) {
    case 'flight':
      return <Image src='/flightTest.jpg' alt='hero' priority layout='fill' objectFit='cover' />;
    case 'car':
      return <Image src='/assets/background-images/carTest.jpg' alt='hero' priority layout='fill' objectFit='cover' />;
    default:
      return <Image src='/assets/background-images/hotelTest.jpg' alt='hero' priority layout='fill' objectFit='cover' />;
  }
};

export default HeroImage;
