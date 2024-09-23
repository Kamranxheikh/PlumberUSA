import { useState } from 'react'
import './index.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {



  return (
    <>
      <Navbar />
      <Banner />
      <div className='flex justify-center  items-center text-orange-400 mt-10 text-5xl font-extrabold'>
        <h1>
          Professional Plumber services Near Me
        </h1>
      </div>
      <div className='card flex flex-row '>

        <Card title="Emergency Plumbing Services Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
        <Card title="Leak Detection Services Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
        <Card title="Water Leak Detection Services Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
      </div>
      <div className='card flex flex-row'>
        <Card title="Leak Repair Services Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
        <Card title="Garbage Disposal Repair Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
        <Card title="Garbage Disposal Replacement Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
      </div>
      <div className='card flex flex-row '>
        <Card title="Sink Repair Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
        <Card title="Faucet Repairs Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
        <Card title="Faucet Replacement Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
      </div>
      <div className='card flex flex-row '>
        <Card title="Shower Installation Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
        <Card title="Water Pipe Unclogging Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
        <Card title="Floor Drain Cleaning Services Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
      </div>
      <div className='card flex flex-row '>
        <Card title="Sump Pump Repair Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
        <Card title="Sump Pump Replacement Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
        <Card title="Drain Cleaning Service Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
      </div>
      <div className='card flex flex-row '>
        <Card title="Running Toilet Repair Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
        <Card title="Frozen Pipe Repair Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
        <Card title="Dishwasher Repair Near Me" description="Get top-rated emergency plumbing services in near me. Call (877) 674-0877 for immediate assistance near you.." buttontext="" />
      </div>
      <Footer />



    </>
  )
}

export default App
