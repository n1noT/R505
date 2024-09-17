import React from 'react';
import './App.css'
import ButtonCVA from './components/button.jsx'
import { useToast } from "./hooks/useToast";
import 'react-toastify/dist/ReactToastify.css';

function PlusIcon(props) {
  return (
    <svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

function App() {
  const toast = useToast();

  return(
    <div className='bg-blue-950 h-screen flex gap-4 justify-center items-center flex-col'>
      <ul className='flex gap-4 items-center'>
        <li>
          <ButtonCVA size='small' onClick={() => toast.success("Success toast notification")}>Learn more</ButtonCVA>
        </li>
        <li>
          <ButtonCVA>Learn more</ButtonCVA>
        </li>
        <li>
          <ButtonCVA size='large'>Learn more</ButtonCVA>
        </li>
      </ul>
      <ul className='flex gap-4 items-center'>
        <li>
          <ButtonCVA intent='outline' size='small'>Learn more</ButtonCVA>
        </li>
        <li>
          <ButtonCVA intent='outline' >Learn more</ButtonCVA>
        </li>
        <li>
          <ButtonCVA intent='outline' size='large'>Learn more</ButtonCVA>
        </li>
      </ul>
      <ul className='flex gap-4 items-center'>
        <li>
          <ButtonCVA intent='ghost' size='small'>Learn more</ButtonCVA>
        </li>
        <li>
          <ButtonCVA intent='ghost'>Learn more</ButtonCVA>
        </li>
        <li>
          <ButtonCVA intent='ghost' size='large'>Learn more</ButtonCVA>
        </li>
      </ul>
      <ul className='flex gap-4 items-center'>
        <li>
          <ButtonCVA intent='ghost' size='small' rounde='full'>
            <PlusIcon className='w-6 h-6'/>
          </ButtonCVA>
        </li>
        <li>
          <ButtonCVA intent='ghost' rounde='full'>
            <PlusIcon className='w-8 h-8'/>
          </ButtonCVA>
        </li>
        <li>
          <ButtonCVA intent='ghost' size='large' rounde='full'>
            <PlusIcon className='w-10 h-10'/>
          </ButtonCVA>
        </li>
      </ul>
      
    </div>
  )
}

export default App
