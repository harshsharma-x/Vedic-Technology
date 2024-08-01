import React from 'react';
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic Plan",
    price: "$0",
    features: [
      "15h Fast generations",
      "limited Relaxed generations",
      "General commercial terms",
      "Access to member gallery",
      "Optional credit top ups",
      "3 concurrent fast jobs",
    ],
    button: "Current Plan",
  },
  // {
  //   name: "Standard Plan",
  //   price: "$30",
  //   features: [
  //     "30h Fast generations",
  //     "unlimited Relaxed generations",
  //     "General commercial terms",
  //     "Access to member gallery",
  //     "Optional credit top ups",
  //     "3 concurrent fast jobs",
  //   ],
  //   button: "Choose Plan",
  // },
  {
    name: "Pro Plan",
    price: "$60",
    features: [
      "30h Fast generations",
      "Unlimited Relaxed generations",
      "General commercial terms",
      "Access to member gallery",
      "Optional credit top ups",
      "3 concurrent fast jobs",
      "12 concurrent fast jobs",
    ],
    button: "Choose Plan",
  },
  {
    name: "Unlimited Plan",
    price: "$120",
    features: [
      "60h Fast generations",
      "Unlimited Relaxed generations",
      "General commercial terms",
      "Access to member gallery",
      "Optional credit top ups",
      "11 concurrent fast jobs",
      "17 concurrent fast jobs",
    ],
    button: "Choose Plan",
  },
];

const SubscriptionPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-4">Purchase a subscription</h1>
      <p className="text-lg mb-8 font-semibold">Choose the plan that works for you.</p>
      <div className="flex justify-center mb-6 bg-gray-200 rounded-3xl">
        {/* <button className="mr-2 px-4 py-2 bg-black text-white rounded-3xl font-bold">Monthly</button>
        <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-3xl">Yearly - 20% off</button> */}
      </div>
      <div className="grid lg:grid-cols-4 gap-4 w-full max-w-6xl p-4 bg-gray-100 rounded-3xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
            whileHover={{ scale: 1.07, transition: { duration: 0.2 } }}
            className={`border rounded-lg p-6 shadow-lg cursor-default hover:shadow-purple-400 hover:bg-gradient-to-r from-purple-400 to-blue-400  ${
              index % 2 === 0 ? "  border-grey-300" : "border-grey-300"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-2xl font-extrabold mb-4">{plan.price}</p>
            <ul className="mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="mb-2 flex items-center">
                  <span className="text-green-500 mr-2">✔</span>{feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-2 rounded hover:bg-purple-500 hover:text-white bg-gray-300 text-gray-600">
              {plan.button}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
