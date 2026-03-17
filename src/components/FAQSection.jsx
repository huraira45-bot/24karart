import { useState } from 'react';
import '../styles/FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is 24 Karat Bakery?",
      answer: "24 Karat Bakery is a community-owned cooperative bakery focused on great food, fair jobs, and shared ownership. Workers, customers, and community members can all take part in its success."
    },
    {
      question: "How does a co-op work?",
      answer: "A co-op is a business owned by its members. Members can buy shares, have a voice in decisions, and help guide the future of the bakery."
    },
    {
      question: "What type of cuisine will 24 Karat Bakery offer?",
      answer: "24 Karat Bakery offers fresh breads, bagels, pastries, desserts, and drinks made with wholesome, organic, and locally sourced ingredients."
    },
    {
      question: "Where will the bakery be located?",
      answer: "24 Karat Bakery was founded in Chicago, with plans to grow the cooperative model into more communities."
    },
    {
      question: "This sounds awesome! How can I get involved?",
      answer: "You can get involved by becoming a community owner, working with us, selling your products through the co-op, or supporting us as a customer."
    },
    {
      question: "What is community ownership at 24 Karat Bakery?",
      answer: "Community ownership allows local supporters to buy shares and become part-owners of the bakery."
    },
    {
      question: "What does it mean to be a Community Owner?",
      answer: "Community Owners help support the bakery's mission and may participate in important decisions about its future."
    },
    {
      question: "What community ownership is not",
      answer: "Community ownership does not involve managing daily operations. The bakery is run by professional staff."
    },
    {
      question: "Community ownership contribution",
      answer: "Community ownership contributions help launch, grow, and support the bakery and its community programs."
    },
    {
      question: "How to become a Community Owner",
      answer: "Simply purchase ownership shares and join the co-op community."
    },
    {
      question: "What does it mean to be a customer at 24 Karat Bakery?",
      answer: "Customers enjoy great baked goods while supporting local workers, entrepreneurs, and community projects."
    },
    {
      question: "What is your story?",
      answer: "24 Karat Bakery started with a simple idea: great food and shared ownership can strengthen communities."
    },
    {
      question: "What is your philosophy?",
      answer: "We believe food should nourish people and communities, using real ingredients and fair opportunities for workers."
    },
    {
      question: "What is your promise?",
      answer: "We promise to serve high-quality food, support our workers, and reinvest in the community."
    },
    {
      question: "How do you help food entrepreneurs?",
      answer: "We provide a year-round marketplace where food makers can sell their products without the cost of running their own store."
    },
    {
      question: "How do you help workers?",
      answer: "Workers receive fair pay, training, and the opportunity to become co-owners of the bakery."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#372720" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="faq-answer-wrapper">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
