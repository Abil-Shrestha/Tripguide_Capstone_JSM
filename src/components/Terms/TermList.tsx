import { terms } from '@constants';

const TermList = () => (
  <div className='flex flex-col gap-8 mt-8'>
    {terms.map((rule) => (
      <div key={rule.id}>
        <h3 className='mb-2 text-2xl'>{rule.id}. {rule.name}</h3>
        <p className='text-gray-400 text-sm leading-[2rem]'>{rule.description}</p>
      </div>
    ))}
  </div>
);

export default TermList;
