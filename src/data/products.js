import bakedCookieImg from '../assets/Store page/24-karat-bakery-product-baked-cookie-dozen.jpg'
import breadClubImg from '../assets/Store page/24-karat-bakery-product-bread-club-subscription.jpg'
import cookbookBundleImg from '../assets/Store page/24-karat-bakery-product-cookbook-collectors-bundle.jpg'
import cookbookImg from '../assets/Store page/24-karat-bakery-product-cookie-pastry-cookbook-founders-edition.jpg'
import deluxePantryImg from '../assets/Store page/24-karat-bakery-product-deluxe-pantry-box.jpg'
import hoodieImg from '../assets/Store page/24-karat-bakery-product-founders-hoodie.jpg'
import pastryTrioImg from '../assets/Store page/24-karat-bakery-product-founders-pastry-box-trio-bundle.jpg'
import pastryBoxImg from '../assets/Store page/24-karat-bakery-product-founders-pastry-box.jpg'
import tshirtImg from '../assets/Store page/24-karat-bakery-product-founders-t-shirt.jpg'
import frozenCookieImg from '../assets/Store page/24-karat-bakery-product-frozen-cookie-dozen-dough.jpg'
import storeGiftcardImg from '../assets/Store page/24-karat-bakery-product-giftcard.jpg'
import goldBundleImg from '../assets/Store page/24-karat-bakery-product-gold-supporter-bundle.jpg'
import legacyBundleImg from '../assets/Store page/24-karat-bakery-product-legacy-bundle.jpg'
import pantryStapleImg from '../assets/Store page/24-karat-bakery-product-pantry-staple-box.jpg'
import platinumBundleImg from '../assets/Store page/24-karat-bakery-product-platinum-bundle.jpg'
import signatureCookieImg from '../assets/Store page/24-karat-bakery-product-signature-cookie-set.jpg'

export const allProducts = [
  {
    id: '1936',
    name: "BAKED COOKIE DOZEN",
    price: "$36",
    img: bakedCookieImg,
    category: "Now In Season",
    description: "● 12 artisan cookies\n● Mix of classic + globally inspired flavors",
    productDetails: "A dozen handcrafted artisan cookies made with premium ingredients and careful technique. Each box features a mix of classic favorites and globally inspired flavors that rotate throughout the year. These cookies are baked fresh in small batches to deliver the perfect balance of crisp edges and soft centers. Ideal for sharing, gifting, or enjoying with a great cup of coffee.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can't always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "yes",
    delivery: "above orders of $80"
  },
  {
    id: '1943',
    name: "FROZEN COOKIE DOUGH DOZEN",
    price: "$36",
    img: frozenCookieImg,
    category: "Now In Season",
    description: "● 12 ready-to-bake dough portions\n● Bake fresh at home anytime",
    productDetails: "Bring the bakery experience home with twelve ready-to-bake portions of our signature cookie dough. Each dough ball is pre-portioned so you can bake just one or the whole batch whenever the craving hits. The dough is made with the same premium ingredients we use in the bakery and freezes beautifully. Fresh, warm bakery cookies in your own kitchen, any time you want them.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can't always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "yes",
    delivery: "above orders of $80"
  },
  {
    id: '1930',
    name: "BREAD CLUB SUBSCRIPTION",
    price: "$350",
    img: breadClubImg,
    category: "Now In Season",
    description: "● 1 artisan loaf per week for 12 months\n● Priority access to limited breads\n● Founders Bread Card (VIP pickup)",
    productDetails: "Join our Bread Club and make artisan bread a delicious part of your routine. Each tier offers freshly baked, seasonal loaves sourced from local ingredients, delivered or ready for pickup on your schedule. Whether you're enjoying a weekly treat, exploring limited seasonal varieties, or indulging in half-year or full-year subscriptions, our bakers ensure every loaf is crafted with care. Choose the tier that fits your appetite and lifestyle, and let us bring the joy of fresh, hand-crafted bread straight to you.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can't always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "yes",
    delivery: "above orders of $80",
    variants: [
        { label: "$350 - Weekly Bread Subscription", price: "$350" },
        { label: "$185 - Half-Year Bread Pass", price: "$185" },
        { label: "$10/week - Weekly Bread Pass", price: "$10/week" }
    ]
  },
  {
    id: '1934',
    name: "GIFTCARD",
    price: "Custom",
    img: storeGiftcardImg,
    category: "Now In Season",
    description: "Choose your amount",
    productDetails: "• Digital gift card purchases are delivered via email and contain instructions on how the code can be redeemed at checkout.\n\n• The redeemable code will be sent via email and can also be printed at home and given to the recipient in person. No physical item will be sent with a digital gift card purchase.\n\n• Good for anything in the storefront, including all physical and digital products. Codes will apply to this storefront only.\n\n• Digital gift cards can be used multiple times until the card balance hits zero.",
    pickup: "N/A",
    delivery: "Digital Delivery"
  },
  {
    id: '1931',
    name: "FOUNDERS PASTRY BOX",
    price: "$45",
    img: pastryBoxImg,
    category: "Pre-Sale",
    description: "● 8–10 premium pastries (rotating seasonal selection)\n● Exclusive flavors only for presale supporters",
    productDetails: "A rotating selection of 8–10 premium pastries created exclusively for presale supporters. Each box showcases seasonal ingredients and creative flavors that may not appear on the regular menu. These pastries are designed as a showcase of what the bakery is capable of when we experiment and innovate. Limited availability makes each box feel special and unique.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can't always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1935',
    name: "FOUNDERS PASTRY BOX TRIO BUNDLE",
    price: "$120",
    img: pastryTrioImg,
    category: "Pre-Sale",
    description: "3 pastry boxes (perfect for gifting or events)",
    productDetails: "Three Founders Pastry Boxes bundled together for gatherings, gifts, or serious pastry lovers. Each box features rotating seasonal pastries and creative flavor combinations. This bundle is perfect for events, office sharing, or stocking up on multiple pickup days. It's also one of the best ways to experience the full range of our pastry program.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can't always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1933',
    name: "SIGNATURE COOKIE SET",
    price: "$70",
    img: signatureCookieImg,
    category: "Pre-Sale",
    description: "● 24 cookies (Baked or Frozen Dough)\n● Limited-edition flavors",
    productDetails: "A premium box of 24 cookies featuring some of our most creative and globally inspired flavors. These cookies are designed to highlight the bakery's signature style, classic technique with unexpected influences. Available baked and ready to eat or as frozen dough to bake at home. Perfect for entertaining, gifting, or cookie enthusiasts.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can't always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1947',
    name: "PANTRY STAPLE BOX",
    price: "$95",
    img: pantryStapleImg,
    category: "Pre-Sale",
    description: "● House-made granola\n● Signature jam and honey butter\n● Specialty flour blend\n● Spiced sugar and salt blend\n● Recipe card set",
    productDetails: "A curated collection of house-made bakery staples designed to bring our flavors into your home kitchen. The box includes house granola, signature jam, honey butter, and a specialty flour blend used in our baking. You'll also receive our house spiced sugar and salt blends along with a recipe card set. It's a simple way to recreate bakery magic at home.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can't always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1938',
    name: "DELUXE PANTRY BOX",
    price: "$175",
    img: deluxePantryImg,
    category: "Pre-Sale",
    description: "● House-made granola\n● Signature jam and honey butter\n● Specialty flour blend\n● Spiced sugar and salt blend\n● Recipe card set\n● Seasonal Bonus Items",
    productDetails: "The Deluxe Pantry Box expands on our core pantry collection with seasonal bonus items and exclusive extras. Each box includes our house granola, signature jam, honey butter, specialty flour blend, and bakery spice blends. The recipe cards guide you through several of our favorite baking techniques and flavor combinations. This collection is perfect for passionate home bakers and food lovers.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can't always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1942',
    name: "FOUNDERS T-SHIRT",
    price: "$35",
    img: tshirtImg,
    category: "Pre-Sale",
    description: "● Heavyweight premium cotton\n● Minimal gold logo design\n● Founders Edition",
    productDetails: "A premium heavyweight cotton t-shirt designed for comfort and durability. The shirt features a minimal gold 24 Karat logo representing the bakery's founding supporters. This limited edition release celebrates the early community that helped build the bakery. Simple, timeless, and made to last. Design is not final, local artists will submit designs and a vote by community members will decide the final design.",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1939',
    name: "FOUNDERS HOODIE",
    price: "$85",
    img: hoodieImg,
    category: "Pre-Sale",
    description: "● Luxury fleece hoodie\n● Embroidered 24 Karat logo\n● Limited-run numbering",
    productDetails: "A luxury fleece hoodie designed to feel as good as it looks. Each piece features an embroidered 24 Karat logo and limited-run numbering for the Founders Edition release. Warm, durable, and crafted for everyday wear. A perfect way to represent the bakery and the community behind it. Design is not final, local artists will submit designs and a vote by community members will decide the final design.",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1937',
    name: "24 KARAT COOKIE & PASTRY COOKBOOK, FOUNDER'S EDITION",
    price: "$45",
    img: cookbookImg,
    category: "Pre-Sale",
    description: "● 20-30 original recipes\n● Global cookie & pastry concepts\n● Co-op story + behind-the-scenes techniques",
    productDetails: "This limited edition cookbook features 20–30 original cookie and pastry recipes developed in our kitchen. The recipes highlight globally inspired flavors and the techniques we use to achieve bakery-level results. Alongside the recipes are stories about the co-op model and the journey of building the bakery. A digital edition is included so you can bake anywhere.",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1936_bundle',
    name: "24 KARAT COOKBOOK, COLLECTOR'S BUNDLE",
    price: "$110",
    img: cookbookBundleImg,
    category: "Pre-Sale",
    description: "● Limited Edition Cookbook\n● Pastry Box\n● Cookie Dozen (Baked or Frozen Dough)",
    productDetails: "The Collector's Bundle pairs our Founder's Edition cookbook with a pastry box and a dozen cookies. It's designed for customers who want to both learn the recipes and taste the finished creations. This bundle also makes an exceptional gift for passionate bakers and food lovers. A perfect introduction to the 24 Karat bakery experience.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can't always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1945',
    name: "GOLD SUPPORTER BUNDLE",
    price: "$150",
    img: goldBundleImg,
    category: "Pre-Sale",
    description: "● Pastry box\n● Founders t-shirt\n● Cookie Dozen (Baked or Frozen Dough)\n● 5 Artisan sourdough loaf vouchers",
    productDetails: "The Gold Supporter Bundle combines some of our most popular items into one package. It includes a pastry box, a Founders t-shirt, a cookie dozen, and five artisan sourdough loaf vouchers. These vouchers can be redeemed anytime for fresh bread. This bundle is a great way to experience the bakery while supporting its launch.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can't always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1948',
    name: "PLATINUM BUNDLE",
    price: "$350",
    img: platinumBundleImg,
    category: "Pre-Sale",
    description: "● Bread for 6 months\n● Pantry staple box\n● Founders hoodie\n● Pastry box",
    productDetails: "The Platinum Bundle is designed for our most dedicated early supporters. It includes six months of bread, a pantry staple box, a Founders hoodie, and a pastry box. This package delivers a full experience of what the bakery offers across bread, pastries, and pantry goods. It's one of the most complete ways to participate in the bakery's founding year.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can't always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  },
  {
    id: '1946',
    name: "LEGACY BUNDLE",
    price: "$750",
    img: legacyBundleImg,
    category: "Pre-Sale",
    description: "● Bread for a year\n● Deluxe pantry box\n● Hoodie + t-shirt\n● Cookbook\n● Signature cookie set\n● VIP Founders recognition",
    productDetails: "The Legacy Bundle represents the deepest level of early support for the bakery. Members receive a full year of bread, a deluxe pantry box, a hoodie, t-shirt, cookbook, and signature cookie set. Supporters are also recognized as VIP Founders of the bakery. This bundle celebrates the people helping build the bakery from the very beginning.",
    ingredients: "Our bakers take pride in sourcing from local farmers and creating treats with seasonal ingredients. While we can't always anticipate exactly what will be available for your pickup, let us know if you have any allergy concerns. Contact us at hello@24karatbakery.com",
    pickup: "At the new bakery after opening",
    delivery: "above orders of $80"
  }
];
