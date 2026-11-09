/* ===== Sample data: a pre-analysed demo project (participants are fictional) ===== */
const SAMPLE_INTERVIEWS = [
{ id:'i_p1', participant:'P1', title:'P1 · Software engineer, Bengaluru', lang:'English', date:'2026-10-21',
text:`Interviewer: Thanks for joining. Can you tell me how you found your current flat?
P1: Sure. I moved to Bengaluru last year for my first job, and honestly the search took almost five weeks.
Interviewer: What made it take so long?
P1: My main concern was finding a clean and peaceful place close to my office. Most listings near Bellandur were either too far from the metro or the photos were from five years ago.
P1: When I went for visits, half the flats looked nothing like the pictures. It was a waste of my weekends.
Interviewer: How did you search?
P1: Mostly Facebook groups and two apps. One time on Facebook, a so-called owner asked for a token amount before even allowing a flat visit. That felt like a scam, so I backed out.
Interviewer: What happened after you moved in?
P1: The flat is fine, but I had an issue where a flatmate used to leave the kitchen very dirty after cooking. We never agreed on any rules before I moved in, so it became awkward.
Interviewer: What would have helped?
P1: Even a short video or a quick call can give a better sense of who you'll be living with. It can avoid surprises later.
P1: I wish flatmate profiles showed basic things like where they work and how long they plan to stay. A LinkedIn link would be enough for me.
Interviewer: Would you pay for something like that?
P1: I would be okay paying a small premium if the listings are trustworthy and the process is smooth.
P1: If you want, you can reach me at 98765 43210 for a follow-up.`,
analysis:{
  tldr:'P1 spent almost five weeks finding a flat near her Bengaluru office; outdated photos and a token-money request slowed her down. After moving in, unclear kitchen rules with a flatmate caused friction.',
  sentiment:{label:'mixed', note:'Happy with the flat now, but the search and the first weeks with flatmates were frustrating.'},
  pain_points:[
    {title:"Listings don't match reality", detail:'Photos were outdated and flats looked different in person, wasting weekend visits.', emotion:'frustrated', severity:2, confidence:'high', quotes:[{text:'half the flats looked nothing like the pictures'},{text:'the photos were from five years ago'}]},
    {title:'Token money asked before a visit', detail:'A self-described owner asked for a token amount before allowing a visit.', emotion:'anxious', severity:3, confidence:'high', quotes:[{text:'a so-called owner asked for a token amount before even allowing a flat visit'}]},
    {title:'No house rules agreed upfront', detail:'Kitchen hygiene became a source of friction because nothing was agreed before moving in.', emotion:'frustrated', severity:2, confidence:'high', quotes:[{text:'a flatmate used to leave the kitchen very dirty after cooking'},{text:'We never agreed on any rules before I moved in'}]},
    {title:'Hard to find quiet places near office', detail:'Clean, peaceful flats close to work were scarce, so the search took weeks.', emotion:'frustrated', severity:2, confidence:'medium', quotes:[{text:'My main concern was finding a clean and peaceful place close to my office'}]}
  ],
  feature_requests:[
    {title:'Video intro with flatmates', detail:'A short video or call before moving in.', confidence:'high', quotes:[{text:"Even a short video or a quick call can give a better sense of who you'll be living with"}]},
    {title:'Verified flatmate profiles', detail:'Workplace and length of stay on profiles, LinkedIn as proof.', confidence:'high', quotes:[{text:'I wish flatmate profiles showed basic things like where they work and how long they plan to stay'}]}
  ],
  memorable_quotes:[{text:'I would be okay paying a small premium if the listings are trustworthy and the process is smooth.'},{text:'It was a waste of my weekends.'}]
}},
{ id:'i_p2', participant:'P2', title:'P2 · Analyst, Gurugram (Hinglish)', lang:'Hinglish', date:'2026-10-24',
text:`Interviewer: Aap Gurugram mein flat kaise dhundh rahe the?
P2: Main Cyber City ke paas dhundh raha tha. Honestly, broker ne ek mahine ka rent as brokerage maanga, which is crazy for a shared flat.
Interviewer: Aur listings ke baare mein?
P2: Bahut saari fake listings thi yaar. Photo mein balcony dikhaya, wahan jaake dekha toh balcony hi nahi thi.
P2: Ek baar maine 5,000 token de diya aur owner ne phone uthana band kar diya. Woh paisa abhi tak wapas nahi aaya.
Interviewer: Flatmates ke saath kaisa experience raha?
P2: Mere flatmate non-veg banate the aur mujhe pehle se pata nahi tha. Smoking ka bhi koi rule nahi tha. House rules pehle se clear hone chahiye.
Interviewer: Deposit ka kya hua jab aap shift hue?
P2: Deposit wapas lene mein do mahine lag gaye. Owner ne painting ke naam pe aadha kaat liya.
Interviewer: Aapko ideal app mein kya chahiye?
P2: Verified listings chahiye, jahan owner ki identity check hui ho. Aur deposit ke liye koi escrow type cheez ho toh tension kam hogi.
P2: Agar profile pe likha ho ki veg hai ya non-veg, smoking allowed hai ya nahi, toh bahut time bachega.`,
analysis:{
  tldr:'P2 was asked for a month\'s rent as brokerage, met fake listings and lost ₹5,000 in token money while searching near Cyber City. Unspoken food and smoking rules and a slow, partial deposit refund added to the frustration.',
  sentiment:{label:'negative', note:'Mostly frustrated: money lost, misleading listings and a deposit cut.'},
  pain_points:[
    {title:'Fake listings with misleading photos', detail:'Photos showed features, like a balcony, that did not exist.', emotion:'frustrated', severity:2, confidence:'high', quotes:[{text:'Bahut saari fake listings thi yaar'},{text:'Photo mein balcony dikhaya, wahan jaake dekha toh balcony hi nahi thi'}]},
    {title:'Lost token money to an owner', detail:'Paid ₹5,000 as token; the owner stopped answering and never refunded it.', emotion:'frustrated', severity:3, confidence:'high', quotes:[{text:'Ek baar maine 5,000 token de diya aur owner ne phone uthana band kar diya'}]},
    {title:'High brokerage for shared flats', detail:'A broker asked for one month\'s rent as brokerage.', emotion:'frustrated', severity:2, confidence:'high', quotes:[{text:'broker ne ek mahine ka rent as brokerage maanga, which is crazy for a shared flat'}]},
    {title:'House rules not clear upfront', detail:'Food and smoking preferences were not shared before moving in.', emotion:'frustrated', severity:2, confidence:'high', quotes:[{text:'House rules pehle se clear hone chahiye'}]},
    {title:'Deposit refunds are slow and cut', detail:'The refund took two months and half was deducted for painting.', emotion:'frustrated', severity:2, confidence:'medium', quotes:[{text:'Deposit wapas lene mein do mahine lag gaye'}]}
  ],
  feature_requests:[
    {title:'Verified listings and owners', detail:'Owner identity checked before a listing goes live.', confidence:'high', quotes:[{text:'Verified listings chahiye, jahan owner ki identity check hui ho'}]},
    {title:'Deposit held in escrow', detail:'A neutral holder for the deposit.', confidence:'medium', quotes:[{text:'deposit ke liye koi escrow type cheez ho toh tension kam hogi'}]},
    {title:'House rules on profiles', detail:'Veg or non-veg, smoking allowed or not, shown upfront.', confidence:'high', quotes:[{text:'Agar profile pe likha ho ki veg hai ya non-veg, smoking allowed hai ya nahi, toh bahut time bachega'}]}
  ],
  memorable_quotes:[{text:'Woh paisa abhi tak wapas nahi aaya.'},{text:'Owner ne painting ke naam pe aadha kaat liya.'}]
}},
{ id:'i_p3', participant:'P3', title:'P3 · Product designer, moved to Pune', lang:'English', date:'2026-10-28',
text:`Interviewer: You moved from Kochi to Pune. How did the flat search work from another city?
P3: It was stressful. I couldn't visit any flat before moving, so I was basically trusting photos and strangers on WhatsApp.
P3: I was scared of getting scammed. Two people asked me to transfer a deposit before I had even seen the place.
Interviewer: How did you decide in the end?
P3: A friend of a friend did a video call walkthrough for me. That video tour was the only reason I felt confident.
Interviewer: How is living with your flatmates?
P3: Our schedules don't match at all. They party on weeknights and I start work at eight. Nobody asked about lifestyle before matching us.
P3: I would love some kind of lifestyle matching, like sleep time, cleanliness, guests, before you even talk to someone.
Interviewer: Anything about the process itself?
P3: I didn't like sharing my phone number with every lister. I'd rather chat inside the app first and share my number only when I'm sure.
P3: Also, I'm not sure which listings are real. Some kind of verified badge would make me feel safer.`,
analysis:{
  tldr:'P3 relocated to Pune without seeing any flat and relied on a friend\'s video walkthrough to decide. She worries about scams, dislikes sharing her number with every lister, and lives with flatmates whose routines clash with hers.',
  sentiment:{label:'mixed', note:'Anxious during the search, relieved by the video tour, unhappy with the flatmate match.'},
  pain_points:[
    {title:"Can't verify flats from another city", detail:'She could not visit before moving and had to trust photos and strangers.', emotion:'anxious', severity:3, confidence:'high', quotes:[{text:"I couldn't visit any flat before moving"}]},
    {title:'Deposit asked before viewing', detail:'Two people asked for a deposit transfer before she had seen the place.', emotion:'anxious', severity:3, confidence:'high', quotes:[{text:'Two people asked me to transfer a deposit before I had even seen the place'}]},
    {title:'Lifestyle mismatch with flatmates', detail:'Schedules clash and nobody checked lifestyle fit before matching.', emotion:'frustrated', severity:2, confidence:'high', quotes:[{text:"Our schedules don't match at all"},{text:'Nobody asked about lifestyle before matching us'}]},
    {title:'Sharing phone number too early', detail:'She had to give her number to every lister.', emotion:'anxious', severity:1, confidence:'medium', quotes:[{text:"I didn't like sharing my phone number with every lister"}]},
    {title:'Unsure which listings are real', detail:'No way to tell genuine listings from fake ones.', emotion:'confused', severity:2, confidence:'medium', quotes:[{text:"I'm not sure which listings are real"}]}
  ],
  feature_requests:[
    {title:'Video tour before moving', detail:'A live walkthrough for people moving from another city.', confidence:'high', quotes:[{text:'That video tour was the only reason I felt confident'}]},
    {title:'Lifestyle matching', detail:'Match on sleep time, cleanliness and guests.', confidence:'high', quotes:[{text:'I would love some kind of lifestyle matching, like sleep time, cleanliness, guests'}]},
    {title:'Chat in the app before sharing number', detail:'Keep contact in-app until she is sure.', confidence:'high', quotes:[{text:"I'd rather chat inside the app first and share my number only when I'm sure"}]},
    {title:'Verified badge on listings', detail:'A visible badge for checked listings.', confidence:'medium', quotes:[{text:'Some kind of verified badge would make me feel safer'}]}
  ],
  memorable_quotes:[{text:'I was basically trusting photos and strangers on WhatsApp.'},{text:'That video tour was the only reason I felt confident.'}]
}}];

const SAMPLE_PROJECT = { id:'pr_demo', sample:true, name:'Flatmate finder · discovery',
  goal:'Why young professionals struggle to find a flat and flatmates in a new city',
  tldr:'Across 3 interviews, trust is the core problem: people meet fake listings and token-money demands before they can even see a flat. Once they move in, unspoken house rules and lifestyle clashes cause friction.',
  themes:[
    {title:'Scams and unsafe contact', summary:'People are asked to pay before visiting and must share personal numbers with unknown listers.', emotion:'anxious', confidence:'high', members:['i_p1:pp2','i_p2:pp2','i_p3:pp2','i_p3:pp4']},
    {title:"Listings can't be trusted", summary:'Photos are outdated or misleading, and people cannot tell which listings are real.', emotion:'frustrated', confidence:'high', members:['i_p1:pp1','i_p2:pp1','i_p3:pp1','i_p3:pp5']},
    {title:'House rules and lifestyle clashes', summary:'Food, cleanliness, smoking and schedules are not discussed before moving in.', emotion:'frustrated', confidence:'high', members:['i_p1:pp3','i_p2:pp4','i_p3:pp3']},
    {title:'Hidden and unfair costs', summary:'Brokerage and deposit deductions feel arbitrary.', emotion:'frustrated', confidence:'low', members:['i_p2:pp3','i_p2:pp5']},
    {title:'Slow search near work', summary:'Finding a clean, quiet flat close to the office takes weeks.', emotion:'frustrated', confidence:'low', members:['i_p1:pp4']}
  ],
  requests:[
    {title:'Verified listings and owners', members:['i_p2:fr1','i_p3:fr4']},
    {title:'Video intro or tour before moving', members:['i_p1:fr1','i_p3:fr1']},
    {title:'House rules and lifestyle on profiles', members:['i_p2:fr3','i_p3:fr2']},
    {title:'Verified flatmate profiles', members:['i_p1:fr2']},
    {title:'Deposit protection', members:['i_p2:fr2']},
    {title:'In-app chat before sharing number', members:['i_p3:fr3']}
  ]};

const TRY_SAMPLES = [
{ key:'hinglish', label:'Hinglish · Flat hunt in Hyderabad', participant:'P4', lang:'Hinglish', title:'P4 · First-time renter, Hyderabad (Hinglish)',
text:`Interviewer: Hyderabad mein flat dhoondhne ka experience kaisa tha?
P4: Sach bolun toh bahut thakaane wala tha. Har weekend teen-chaar flats dekhne jaata tha.
P4: Ek listing pe likha tha fully furnished, pahuncha toh sirf ek bed tha. Photos bilkul alag the.
Interviewer: Payment ya deposit ko leke koi issue?
P4: Haan, ek owner ne bola pehle 10,000 advance bhejo, tabhi chabi milegi. Mujhe laga scam hai, maine mana kar diya.
Interviewer: Flatmates kaise mile?
P4: WhatsApp group se. Lekin pehle se pata nahi tha ki unke friends roz raat ko aate hain. Guests ka rule pehle discuss hona chahiye tha.
Interviewer: Ideal solution kya hoga?
P4: Mujhe ek app chahiye jahan owner verified ho aur flat ka live video ho. Aur flatmate ke saath pehle ek chhota video call ho jaaye toh best hai.
P4: Agar koi neutral party deposit hold kare, toh main zyada comfortable feel karunga. Mera email hai p4.renter@example.com agar aur sawaal ho.`},
{ key:'fintech', label:'English · Bill payment drop-off', participant:'P1', lang:'English', title:'P1 · Bill payments user, Mumbai',
text:`Interviewer: Walk me through the last time you tried to pay a bill in the app.
P1: I added my electricity bill, but the OTP took almost two minutes to arrive, so I gave up and paid on another app.
P1: It's frustrating that I have to re-enter my card details every single time.
Interviewer: Anything confusing?
P1: The convenience fee shows up only on the last screen. That felt sneaky, honestly.
P1: I wish the app remembered my billers and reminded me before the due date.
Interviewer: What would make you come back?
P1: Show the fee upfront and let me pay with UPI in one tap. That's all I want.`}
];
