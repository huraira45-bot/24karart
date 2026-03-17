import { useState } from 'react';
import { redirectToCheckout } from '../utils/checkout';
import '../styles/Section2.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <span className="faq-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <div className="faq-answer-wrapper" style={{ 
        maxHeight: isOpen ? '1000px' : '0', 
        overflow: 'hidden', 
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isOpen ? 1 : 0,
        paddingTop: isOpen ? '15px' : '0'
      }}>
        <div className="faq-answer">{answer}</div>
      </div>
    </div>
  );
};

const Section2 = () => {
  const [shares, setShares] = useState(1);

  const sharePrice = 100;

  const total = shares * sharePrice;

  const getTierInfo = (count) => {
    if (count >= 10) {
      return {
        name: "FOUNDING MEMBER",
        perks: [
          "10+ or more co-op shares",
          "Founding member recognition",
          "Annual Strategic Forum Invitation",
          "Private tasting experience",
          "Limited-edition gift",
          "Quarterly wholesale pricing window"
        ]
      };
    } else if (count >= 3) {
      return {
        name: "GOLD MEMBER",
        perks: [
          "3 or more co-op shares",
          "Premium physical member card",
          "Discount on purchases",
          "Exclusive tastings & events",
          "Priority access to new products"
        ]
      };
    } else {
      return {
        name: "COMMUNITY MEMBER",
        perks: [
          "1 or more co-op shares",
          "Lifetime membership",
          "1 vote in community governance",
          "Member-only perks"
        ]
      };
    }
  };

  const tierInfo = getTierInfo(shares);

  const handleCheckout = () => {
    redirectToCheckout('1929', shares);
  };

  const faqs = [
    {
      question: "What is community ownership at 24 Karat Bakery?",
      answer: "24 Karat Bakery is a community-owned cooperative. That means customers, neighbors, and supporters can become owners, not just shoppers. Community ownership helps us keep baking jobs local and fair, invest in quality ingredients and craft, and grow without corporate control."
    },
    {
      question: "What Does It Mean to Be a Community Owner?",
      answer: "As a Community Member, you receive: One vote in community-level co-op decisions, a voice in the future of the bakery, invitations to member events and meetings, eligibility for patronage distributions (if declared), and the pride of supporting a worker-owned local bakery. Ownership is about participation and stewardship, not speculation."
    },
    {
      question: "What Community Ownership Is Not",
      answer: "To be clear and transparent: It is NOT a stock purchase, NOT a guaranteed financial return, NOT a short-term investment, and NOT transferable or resellable. Community ownership is membership equity governed by our bylaws."
    },
    {
      question: "Community Ownership Contribution",
      answer: "One-time ownership contribution: $250. One member = one vote. Additional contributions do not increase voting power. Contributions are recorded as member equity."
    },
    {
      question: "How to Become a Community Owner?",
      answer: "Complete the ownership contribution through our website. You'll receive a welcome email and membership materials. Your membership becomes active once your contribution is received and the membership agreement is acknowledged."
    },
    {
      question: "Prefer to Join In Person?",
      answer: "You can also sign up at our bakery or at farmers markets and community events (after we're open!). Look for the \"Become an Owner\" sign or ask a team member."
    },
    {
      question: "Transparency & Disclosure",
      answer: "Community ownership contributions are membership equity in 24 Karat Bakery Co-op. They are not deposits, donations, or securities, and do not guarantee financial returns. Ownership rights and responsibilities are governed by the co-op's bylaws."
    },
    {
      question: "Questions?",
      answer: "Email us at: hello@24karatbakery.com. We're happy to explain how co-op ownership works."
    }
  ];

  return (
    <section id="ownership" className="founding-member ownership-movement-unified">
      <div className="container">
        <div className="ownership-intro-block">
          <h2 className="section-title text-white anton-font">JOIN THE MOVEMENT, BE A<br />FOUNDING MEMBER AS LOW AS $100</h2>
          <p className="section-description text-white">
            Join us in building a community-owned bakery. By becoming a founding member,
            you're supporting local food systems, sustainable practices, and a business designed to
            serve its neighbors. Your ownership share connects you to a network of members who
            believe in good bread, fair practices, and a stronger local economy.
          </p>
          <div className="intro-actions">
            <a href="#" className="bylaws-btn">READ THE BYLAWS</a>
          </div>
        </div>

        <div className="tiers-grid">
          <div className="tiers-wrapper">
            <div className="tier-card">
              <div className="tier-header">
                <h3>COMMUNITY MEMBER</h3>
                <span className="share-count">1+ OWNERSHIP SHARE</span>
              </div>
              <div className="tier-body">
                <p className="perks-title">Perks</p>
                <p className="tier-description">For individuals who want to co-own the bakery. Includes:</p>
                <ul className="mockup-perks">
                  <li>1 or more co-op shares</li>
                  <li>Lifetime membership</li>
                  <li>1 vote in community governance</li>
                  <li>Member-only perks</li>
                </ul>
              </div>
              <div className="tier-footer">
                <div className="tier-price">$100</div>
              </div>
            </div>

            <div className="tier-card">
              <div className="tier-header">
                <h3>GOLD MEMBER</h3>
                <span className="share-count">3+ OWNERSHIP SHARE</span>
              </div>
              <div className="tier-body">
                <p className="perks-title">Perks</p>
                <p className="tier-description">For supporters who want deeper involvement. Includes everything from previous tier plus:</p>
                <ul className="mockup-perks">
                  <li>3 or more co-op shares</li>
                  <li>Premium physical member card</li>
                  <li>Discount on purchases</li>
                  <li>Exclusive tastings & events</li>
                  <li>Priority access to new products</li>
                </ul>
              </div>
              <div className="tier-footer">
                <div className="tier-price">$300</div>
              </div>
            </div>

            <div className="tier-card">
              <div className="tier-header">
                <h3>FOUNDING MEMBER</h3>
                <span className="share-count">10+ OWNERSHIP SHARE</span>
              </div>
              <div className="tier-body">
                <p className="perks-title">Perks</p>
                <p className="tier-description">For early leaders and major supporters. Includes everything from previous tier plus:</p>
                <ul className="mockup-perks">
                  <li>10+ or more co-op shares</li>
                  <li>Founding member recognition for the first 100 members</li>
                  <li>Invitation to Annual Strategic Forum with Worker Leadership</li>
                  <li>Private tasting experience</li>
                  <li>Limited-edition gift</li>
                  <li>Quarterly wholesale pricing window</li>
                </ul>
              </div>
              <div className="tier-footer">
                <div className="tier-price">$1000</div>
              </div>
            </div>
          </div>

          <div className="membership-widget">
            <div className="widget-header">
              <span>How many shares<br />would you like to buy?</span>
              <div className="share-inputs">
                <div 
                  className={`share-option ${shares === 1 ? "active" : ""}`}
                  onClick={() => setShares(1)}
                >1</div>
                <div 
                  className={`share-option ${shares === 3 ? "active" : ""}`}
                  onClick={() => setShares(3)}
                >3</div>
                <div 
                  className={`share-option ${shares === 10 ? "active" : ""}`}
                  onClick={() => setShares(10)}
                >10</div>
                
                <div className="custom-share-container keyboard-input">
                  <input
                    type="number"
                    placeholder={shares === 0 || shares === 1 || shares === 3 || shares === 10 ? "+" : ""}
                    value={shares !== 1 && shares !== 3 && shares !== 10 && shares !== 0 ? shares : ""}
                    className={`share-option ${shares !== 1 && shares !== 3 && shares !== 10 && shares !== 0 ? "active" : ""}`}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (!isNaN(val)) setShares(val);
                      else setShares(0);
                    }}
                    onFocus={(e) => {
                      if (shares === 1 || shares === 3 || shares === 10) {
                         setShares(0);
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="widget-body">
              <div className="tier-badge-mockup">{tierInfo.name} perks</div>
              <div className="scrollable-perks">
                <ul className="cumulative-perks-list">
                  {shares >= 1 && (
                    <>
                      <li className="perk-category">COMMUNITY PERKS</li>
                      <li>1 or more co-op shares</li>
                      <li>Lifetime membership</li>
                      <li>1 vote in community governance</li>
                      <li>Member-only perks</li>
                    </>
                  )}
                  {shares >= 3 && (
                    <>
                      <li className="perk-divider"></li>
                      <li className="perk-category">GOLD PERKS</li>
                      <li>Premium physical member card</li>
                      <li>Discount on purchases</li>
                      <li>Exclusive tastings & events</li>
                      <li>Priority access to new products</li>
                    </>
                  )}
                  {shares >= 10 && (
                    <>
                      <li className="perk-divider"></li>
                      <li className="perk-category">FOUNDING PERKS</li>
                      <li>Founding member recognition (first 100)</li>
                      <li>Annual Strategic Forum access</li>
                      <li>Private tasting experience</li>
                      <li>Limited-edition gift</li>
                      <li>Quarterly wholesale pricing window</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            <div className="widget-footer">
              <div className="total-row">
                <span>Total:</span>
                <span className="total-price">${total}{total >= 1000 ? '+' : ''}</span>
              </div>
              <button className="checkout-btn-mockup" onClick={handleCheckout}>Checkout</button>
              <p className="community-note-mockup">2.5% of your purchase goes back into our community.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section (Merged & Accordion) */}
      <div className="faq-section-new">
        <div className="container">
          <h2 className="faq-main-title anton-font">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
