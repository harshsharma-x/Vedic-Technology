import React from 'react';
import { motion } from 'framer-motion';
import './service.css'

const Card = ({ title, description, tags, img, button }) => {
  return (
    <div
      whileHover={{ scale: 1.05 }}
      className="card w-[49%] bg-gray-200 rounded-lg shadow-md p-6  h-[320px] flex flex-col cursor-pointer transition-transform duration-300 gap-2"
    >
      <div className='relative z-0 rounded-lg mt-14 text-detail'>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className='flex gap-20'>
          <div className="text-gray-700  flex w-96 mt-5">{description}</div>
          <div>
            <img className=" photo w-36  object-cover  rounded flex" src={img} alt={title} />
          </div>
        </div>
        <ul className="list-none p-0 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{tag}</li>
          ))}
        </ul>

        <button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" animated-button mt-32 bg-black text-white py-1 px-2 rounded  "
        >
          {button}
          <i className="fa-solid fa-arrow-right ext-black py-1 mx-2"></i>


        </button>
        {/* <  i className='' class ="fa-solid fa-arrow-right"></i> */}
      </div>
    </div>
  );
};
const Home = () => {
  const array = [
    {
      title: "Team Augmentation",
      description: "We provide engineers or teams tailored to your project, ensuring skill and compatibility with your goals and culture. They will collaborate with you closely, infusing fresh energy and ideas.",
      tags: ['Cultural fit', 'Top 1%', 'Instant hire'],
      img: "https://diffco.us/wp-content/uploads/2024/05/s-3.svg",
      button: "Let's Chat"
    },
    {
      title: "Mobile Development",
      description: "We specialize in developing native and cross-platform mobile applications for iOS and Android.",
      tags: ["Swift", "React Native", "Flutter", "Java", "Kotlin"],
      img: "https://diffco.us/wp-content/uploads/2024/05/s-1.svg",
      button: "Let's Chat"
    },
    {
      title: "Back-end Development",
      description: "We are experienced in high-load and complex backend infrastructure development for mobile or web apps and enterprise services.",
      tags: ["Node.js", "Go", "Python", "C#", "Java"],
      img: "https://diffco.us/wp-content/uploads/2024/05/s-2.svg",
      button: "Let's Chat"
    },
    {
      title: "AI Development",
      description: "Our team is experienced in AI, data analysis, machine learning, and implementing cutting-edge technologies.",
      tags: ["LLM", "Tensorflow", "Python", "PyTorch", "Computer vision"],
      img: "https://diffco.us/wp-content/uploads/2024/05/s-4.svg",
      button: "Let's Chat"
    },
    {
      title: "Front-end Development",
      description: "We are experienced in building modular, high-performance web applications for corporate clients and startups. We utilize modern and robust technology stacks.",
      tags: ["React", "Angular", "Electron", "Next.js"],
      img: "https://diffco.us/wp-content/uploads/2024/05/s-5.png",
      button: "Let's Chat"
    },
    {
      title: "Web Development",
      description: "Our developers can create web solutions that are tailored to your needs, easy to manage with popular CMS, and can be seamlessly integrated with your existing internal systems.",
      tags: ["Contentful", "Magento", "WP", "Shopify"],
      img: "https://diffco.us/wp-content/uploads/2024/05/s-6.svg",
      button: "Let's Chat"
    },
  ];

  return (
    <div className='w-full p-10  m-auto bg-gray-100'>
      <h1 className="text-4xl font-bold text-center mb-10">Services We Provide</h1>
      <div className="flex flex-wrap gap-2 m-auto w-[90%]">
        {array.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            tags={item.tags}
            img={item.img}
            button={item.button}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;


// // src/components/Home.js
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const services = [
//   {
//     title: 'Website Development',
//     description: 'We create responsive, user-friendly, and visually appealing websites that enhance your online presence and engage your audience.',
//     imgSrc: 'https://img.freepik.com/free-photo/diverse-young-people-being-digital-nomads-working-remotely-from-dreamy-locations_23-2151187901.jpg?t=st=1717394296~exp=1717397896~hmac=b244165c1346314b097d040a533b078eb6e833f373dad2b1e1565bee1834f29e&w=1380', // Replace with your image URLs
//     url: '/website'
//   },
//   {
//     title: 'Web Application Development',
//     description: 'Our web application solutions are designed to streamline your business processes and improve efficiency through customized, scalable, and secure applications.',
//     imgSrc: 'https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252491.jpg?t=st=1717394348~exp=1717397948~hmac=1c7961c2a57fc52417ab0c925c4f6212d3bfd8e6e1911ceaecb4e284f2a46bd9&w=1380', // Replace with your image URLs
//     url: '/webdev'
//   },
//   {
//     title: 'Mobile Application Development',
//     description: 'We develop intuitive and engaging mobile applications for both Android and iOS platforms, ensuring a seamless user experience.',
//     imgSrc: 'https://img.freepik.com/free-photo/realistic-phone-studio-social-media-concept_23-2151459505.jpg?t=st=1717394398~exp=1717397998~hmac=a6e45b34275513aa1f0419478d58698e5026dc5afa17d8b7b346e56b11a41084&w=1380', // Replace with your image URLs
//     url: '/mobileapp'
//   },
// ];

// const Home = () => {
//   return (
//     <div>
//       <section className="bg-gradient-to-r z--100 from-green-100 to-pink-200 min-h-screen text-white flex flex-col items-center justify-center p-8">
//         <div className="text-center mb-12 mt-12">
//           {/* <h1 className="text-5xl font-bold mb-4">Welcome to Vedic Technologies</h1> */}
//           <motion.p
//             className="text-3xl text-slate-600 mb-8 z-0 "
//             initial={{ x: '-100%', opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1, ease: 'easeOut' }}
//           >
//             Innovative solutions for your business needs
//           </motion.p>
//           {/* <a href="#services" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200">Welcome</a> */}
//         </div>
//         <div id="services" className="w-full">
//           <h2 className="text-3xl text-slate-600 font-bold text-center mb-8">Our Services</h2>
//           <div className="flex flex-wrap justify-center gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="max-w-sm bg-gray-100 p-6 rounded-lg shadow-md"
//                 whileHover={{ scale: 1.05 }}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >

//                 <Link to={service.url} className="">
//                 <img src={service.imgSrc} alt={service.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
//                   <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
//                   <p className='text-gray-500'>{service.description}</p></Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;







