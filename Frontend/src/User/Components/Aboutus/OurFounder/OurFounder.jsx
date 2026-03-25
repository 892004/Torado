import React from 'react'
import '../OurFounder/ourfounder.css'
import Team1 from '../../../../assets/Images/About us/team-1.jpg'
import Team2 from '../../../../assets/Images/About us/team-2.jpg'
import Team3 from '../../../../assets/Images/About us/team-3.jpg'
import '../../Aboutus/aboutus.css'

const OurFounder = () => {
  return (
    <section className="our-founder flex flex-col items-center justify-center">
        <h3 className='text-5xl opacity-80'>Our Founder</h3>

        <div className="founders flex flex-row items-center justify-center gap-20 py-10">
            <div className="team1 flex flex-col items-start gap-3">
               <img src={Team1} className='h-120 w-100 '/>
                <h3 className='text-xl'>Catherine Hilley</h3>
                <p className='text-[#CB927A]'>CEO & Founder</p>
            </div>

            <div className="team2 flex flex-col items-start gap-3">
               <img src={Team2} className='h-120 w-100 '/>
                <h3 className='text-xl'>Sheryl Killian</h3>
                <p className='text-[#CB927A]'>Fashion Design</p>
            </div>

            <div className="team3 flex flex-col items-start gap-3">
               <img src={Team3} className='h-120 w-100 '/>
                <h3 className='text-xl'>Shanna Thomas</h3>
                <p className='text-[#CB927A]'>Photographer</p>
            </div>  
        </div>
    </section>
  )
}

export default OurFounder