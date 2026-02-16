import React, { useState } from 'react';
import './FAQS.css';

const FAQ = () => {
    const faqData = [
        {
            id: 1,
            question: 'How does the debt collection process work?',
            answer: 'Our debt collection process begins with a thorough review of your overdue accounts. We then initiate professional communication with your debtors through structured letters, calls, and emails. Our approach is always compliant with UAE banking regulations while maintaining your business reputation. We keep you updated throughout the process and only escalate when necessary.'
        },
        {
            id: 2,
            question: 'How long does the debt recovery process take?',
            answer: 'The timeline varies depending on the age of the debt, amount owed, and debtor responsiveness. Typically, our initial contact shows results within 7-14 days. Complex cases may take 30-90 days. We work efficiently while maintaining professionalism throughout the process.'
        },
        {
            id: 3,
            question: 'What is your commission structure?',
            answer: 'We operate on a simple 20% commission model — No recovery, No fee. This means you only pay when we successfully recover your money. There are no hidden charges or upfront fees. All terms are clearly outlined in our agreement before we begin.'
        },
        {
            id: 4,
            question: 'Do you handle international debt collection?',
            answer: 'Yes, we handle both local UAE and international debt collection. Our agents speak English, Arabic & Urdu, allowing us to communicate effectively with debtors worldwide. We understand cross-border collection complexities and work within international regulations.'
        },
        {
            id: 5,
            question: 'Is your debt collection process compliant with UAE laws?',
            answer: 'Absolutely. We strictly follow UAE Central Bank regulations and local collection laws. Our British-owned management ensures UK-standard professionalism while maintaining full compliance with UAE legal requirements. We prioritize ethical collection practices.'
        },
        {
            id: 6,
            question: 'How do you protect our client relationships?',
            answer: 'We understand the importance of your business relationships. Our approach is professional, respectful, and confidential. We use tactful communication strategies that aim to recover your money while preserving your reputation and potentially maintaining positive client relationships where possible.'
        },
        {
            id: 7,
            question: 'What types of debts do you collect?',
            answer: 'We handle various types of commercial and consumer debts including unpaid invoices, overdue accounts, B2B collections, and retail debt. Our team has experience across multiple industries and can adapt to your specific business needs.'
        },
        {
            id: 8,
            question: 'How do I start the debt collection process?',
            answer: 'Getting started is simple. Contact us via phone at 05 03346768 or email at info@silvermoon.ae. We\'ll discuss your case, provide initial advice, and if you decide to proceed, we\'ll send you a clear agreement outlining our terms. Once signed, we begin work immediately.'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='faq-main section-padding' id='faq'>
            <div className='container'>

                <div className="headings-parent">
                    <h3 className='sub-heading text-center'>FAQ's</h3>
                    <h1 className='main-heading text-center'>Frequently Asked Questions</h1>
                </div>
                <div className="faq-container">
                    {faqData.map((item) => (
                        <div className="faq-item" key={item.id} onClick={() => toggleAnswer(item.id)}>
                            <div className="question d-flex justify-content-between">
                                {item.question}
                                <div className="plus d-flex">
                                    <h3 className="m-0">{activeIndex === item.id ? '-' : '+'}</h3>
                                </div>
                            </div>
                            {activeIndex === item.id && (
                                <div className="answer" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                            )}
                            <hr className='faqs-hr' />
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default FAQ;
