import UserCard from '../../UserCard';
export default function HeroCardMainRow(){
  return (
    <>
      <div className='flex-between mb-12 h-50'>
        <UserCard img='Ellipse 1563.png' name='Ali Ahmad' position='Junior Software Engineer'/>
        <div className='flex-between'>
          <select className='h-30 mr-64'>
            <option>Option 1</option>
          </select>
          <a href='/'>
            <img alt='' src='icons/trash.svg' width='25px'/>
          </a>
        </div>
      </div>
    </>
  );
}