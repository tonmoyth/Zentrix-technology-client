import React from 'react';
import { Helmet } from 'react-helmet-async';

const jobOpenings = [
    {
        title: 'PHP Developer',
        location: 'Remote / On-site',
        requirement: [
            'Strong knowledge of core PHP',
            'Experience with MySQL or other databases',
            'Understanding of MVC architecture',
        ],
        type: 'Full Time',
        image: '/images/jobs/php.png', // ← Replace with actual path
        description: 'Looking for a skilled PHP developer with experience in building scalable web applications.',
    },
    {
        title: 'Laravel Developer',
        location: 'Remote / On-site',
        requirement: [
            'Expertise in Laravel framework',
            'RESTful API development experience',
            'Knowledge of version control (Git)',
        ],
        type: 'Full Time',
        image: '/images/jobs/laravel.png', // ← Replace with actual path
        description: 'Seeking a Laravel expert to help build modern backend systems using Laravel and REST APIs.',
    },
    {
        title: 'SEO Expert',
        location: 'Remote / On-site',
        requirement: [
            'Proven SEO experience',
            'Knowledge of Google Analytics, Search Console',
            'Strong keyword research skills',
        ],
        type: 'Contract / Full Time',
        image: '/images/jobs/seo.png', // ← Replace with actual path
        description: 'Need an SEO professional to improve search rankings, manage keyword strategies, and analyze traffic.',
    },
];


function Career() {
    return (
        
       <div>
        <Helmet>
        <title>Career</title>
       
      </Helmet>
         <div className="w-11/12 md:w-10/12 mx-auto pt-26 pb-16">
            <h2 className="text-2xl text-center lg:text-4xl font-bold mb-6  uppercase bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] bg-clip-text text-transparent">
                We're Hiring!
            </h2>


            <div className="space-y-12">
                {jobOpenings.map((job, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow-sm overflow-hidden"
                    >
                        {/* Image */}
                        <div className="md:w-1/2 w-full h-64 md:h-auto">
                            <img
                                src={job.image}
                                alt={job.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="md:w-1/2 w-full p-6 bg-[var(--secondary-low)]">
                            <h3 className="text-2xl font-semibold text-[var(--primary)] mb-1">
                                {job.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-3">
                                {job.location} • {job.type}
                            </p>
                            <p className="text-gray-700 mb-4">{job.description}</p>

                            {/* Requirements */}
                            <span className='font-semibold text-[var(--secondary)]'>Requrement</span>
                            <ul className="list-disc pl-5 mb-4 text-gray-700">
                                {job.requirement.map((req, idx) => (
                                    <li key={idx}>{req}</li>
                                ))}
                            </ul>

                            {/* Apply Button */}
                            <button className="btn px-8 py-6 rounded-full text-white bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] border-0 hover:opacity-90">
                                Apply Now
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
       </div>
    );
}

export default Career;
