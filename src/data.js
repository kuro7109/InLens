/* ===== Sample data: pre-analysed demo projects. Participants and companies are fictional. ===== */
const SAMPLE_PROJECTS = [
/* ---------- 1. Flatmate finder ---------- */
{ id:'pr_demo', name:'Flatmate finder · discovery', goal:'Why young professionals struggle to find a flat and flatmates in a new city', daysAgo:{created:14, updated:2},
  tldr:'Across 5 interviews, the clearest pattern is that nobody knows the real deal before moving in: house rules, flatmate habits and the true rent surface too late (5 of 5 and 3 of 5). Trust in listings is low, and 3 participants were asked for money before they could see a flat.',
  interviews:[
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
    tldr:'P1 spent almost five weeks finding a flat near their Bengaluru office; outdated photos and a token-money request slowed the search. After moving in, unclear kitchen rules with a flatmate caused friction.',
    sentiment:{label:'mixed', note:'Happy with the flat now, but the search and the first weeks with flatmates were frustrating.'},
    pain_points:[
      {title:"Listings don't match reality", detail:'Photos were outdated and flats looked different in person, wasting weekend visits.', emotion:'frustrated', severity:2, confidence:'high', quotes:[{text:'half the flats looked nothing like the pictures'},{text:'the photos were from five years ago'}]},
      {title:'Token money asked before a visit', detail:'A self-described owner asked for a token amount before allowing a visit.', emotion:'anxious', severity:3, confidence:'high', quotes:[{text:'a so-called owner asked for a token amount before even allowing a flat visit'}]},
      {title:'No house rules agreed upfront', detail:'Kitchen hygiene became a source of friction because nothing was agreed before moving in.', emotion:'frustrated', severity:2, confidence:'high', quotes:[{text:'a flatmate used to leave the kitchen very dirty after cooking'},{text:'We never agreed on any rules before I moved in'}]},
      {title:'Hard to find quiet places near office', detail:'Clean, peaceful flats close to work were scarce, so the search took weeks.', emotion:'frustrated', severity:2, confidence:'medium', quotes:[{text:'My main concern was finding a clean and peaceful place close to my office'}]}
    ],
    feature_requests:[
      {title:'Video intro with flatmates', detail:'A short video or call before moving in.', confidence:'high', quotes:[{text:"Even a short video or a quick call can give a better sense of who you'll be living with"}]},
      {title:'Verified flatmate profiles', detail:'Workplace and length of stay on profiles, with LinkedIn as proof.', confidence:'high', quotes:[{text:'I wish flatmate profiles showed basic things like where they work and how long they plan to stay'}]}
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
    tldr:'P3 relocated to Pune without seeing any flat and relied on a friend\'s video walkthrough to decide. They worry about scams, dislike sharing their number with every lister, and live with flatmates whose routines clash with theirs.',
    sentiment:{label:'mixed', note:'Anxious during the search, relieved by the video tour, unhappy with the flatmate match.'},
    pain_points:[
      {title:"Can't verify flats from another city", detail:'Could not visit before moving and had to trust photos and strangers.', emotion:'anxious', severity:3, confidence:'high', quotes:[{text:"I couldn't visit any flat before moving"}]},
      {title:'Deposit asked before viewing', detail:'Two people asked for a deposit transfer before the place was seen.', emotion:'anxious', severity:3, confidence:'high', quotes:[{text:'Two people asked me to transfer a deposit before I had even seen the place'}]},
      {title:'Lifestyle mismatch with flatmates', detail:'Schedules clash and nobody checked lifestyle fit before matching.', emotion:'frustrated', severity:2, confidence:'high', quotes:[{text:"Our schedules don't match at all"},{text:'Nobody asked about lifestyle before matching us'}]},
      {title:'Sharing phone number too early', detail:'Had to give their number to every lister.', emotion:'anxious', severity:1, confidence:'medium', quotes:[{text:"I didn't like sharing my phone number with every lister"}]},
      {title:'Unsure which listings are real', detail:'No way to tell genuine listings from fake ones.', emotion:'confused', severity:2, confidence:'medium', quotes:[{text:"I'm not sure which listings are real"}]}
    ],
    feature_requests:[
      {title:'Video tour before moving', detail:'A live walkthrough for people moving from another city.', confidence:'high', quotes:[{text:'That video tour was the only reason I felt confident'}]},
      {title:'Lifestyle matching', detail:'Match on sleep time, cleanliness and guests.', confidence:'high', quotes:[{text:'I would love some kind of lifestyle matching, like sleep time, cleanliness, guests'}]},
      {title:'Chat in the app before sharing number', detail:'Keep contact in-app until they are sure.', confidence:'high', quotes:[{text:"I'd rather chat inside the app first and share my number only when I'm sure"}]},
      {title:'Verified badge on listings', detail:'A visible badge for checked listings.', confidence:'medium', quotes:[{text:'Some kind of verified badge would make me feel safer'}]}
    ],
    memorable_quotes:[{text:'I was basically trusting photos and strangers on WhatsApp.'},{text:'That video tour was the only reason I felt confident.'}]
  }},
  { id:'i_p4', participant:'P4', title:'P4 · Married couple, Mumbai', lang:'English', date:'2026-10-31',
text:`Interviewer: You and your partner moved to Mumbai in August. How did the search go?
P4: Honestly, it was harder than we expected. A lot of societies in Andheri said they don't rent to couples who aren't from the city, or they wanted a letter from our employer.
P4: Two listings went silent the moment we mentioned we're a couple.
Interviewer: What did you use to search?
P4: Three different apps and a broker. Every app showed the same flat at different prices, so we never knew what the real rent was.
P4: The broker charged us one month's rent and still didn't tell us the society had a no-pets rule. We have a cat.
Interviewer: How did you handle that?
P4: We had to move again after six weeks. That cost us the brokerage twice and a painting charge from the deposit.
Interviewer: What would have helped?
P4: A filter for society rules, like couples allowed, pets allowed, would have saved us a month.
P4: And one verified price per flat. I'd happily pay a fee for that instead of a broker.`,
  analysis:{
    tldr:'P4 and their partner were turned away by societies that don\'t rent to couples and saw the same flat at different prices across apps. A no-pets rule they learnt about too late forced a second move and a second brokerage.',
    sentiment:{label:'negative', note:'Frustrated by gatekeeping, inconsistent prices and paying twice.'},
    pain_points:[
      {title:'Societies turn away couples', detail:'Some societies refused couples from outside the city or demanded employer letters.', emotion:'frustrated', severity:3, confidence:'high', quotes:[{text:"said they don't rent to couples who aren't from the city"},{text:"Two listings went silent the moment we mentioned we're a couple"}]},
      {title:'Same flat, different prices', detail:'Each app listed the same flat at a different rent.', emotion:'confused', severity:2, confidence:'high', quotes:[{text:'Every app showed the same flat at different prices'}]},
      {title:'Society rules discovered too late', detail:'A no-pets rule surfaced only after moving in, forcing a second move.', emotion:'frustrated', severity:3, confidence:'high', quotes:[{text:"still didn't tell us the society had a no-pets rule"},{text:'We had to move again after six weeks'}]},
      {title:'Paid brokerage twice', detail:'The second move meant brokerage again plus a deposit deduction.', emotion:'frustrated', severity:3, confidence:'medium', quotes:[{text:'That cost us the brokerage twice and a painting charge from the deposit'}]}
    ],
    feature_requests:[
      {title:'Filters for society rules', detail:'Couples allowed, pets allowed, visible before visiting.', confidence:'high', quotes:[{text:'A filter for society rules, like couples allowed, pets allowed, would have saved us a month'}]},
      {title:'One verified price per flat', detail:'A single checked rent instead of different prices per app.', confidence:'high', quotes:[{text:'And one verified price per flat'}]}
    ],
    memorable_quotes:[{text:"I'd happily pay a fee for that instead of a broker."},{text:'Honestly, it was harder than we expected.'}]
  }},
  { id:'i_p5', participant:'P5', title:'P5 · Fresher, Noida (Hinglish)', lang:'Hinglish', date:'2026-11-03',
text:`Interviewer: Noida mein pehli job ke liye flat kaise mila?
P5: Mere paas zyada budget nahi tha, toh PG aur shared flats dono dekhe. Sabse badi problem thi ki koi bhi rent ka exact breakup nahi batata.
P5: Electricity, maintenance, wifi, sab alag se maangte the. Pehle 9,000 bola, baad mein 12,500 ho gaya.
Interviewer: Flatmates ko kaise choose kiya?
P5: Sach mein choose nahi kiya, jo mila uske saath reh gaya. Ek flatmate raat bhar gaming karta tha aur mera sleep kharab hota tha.
Interviewer: Kya cheez trust banati?
P5: Agar pehle se reviews hote previous tenants ke, toh pata chal jaata owner kaisa hai.
P5: Aur rent ka poora breakup ek jagah likha ho, bina hidden charges ke. Bas itna chahiye.`,
  analysis:{
    tldr:'P5, on a fresher\'s budget, kept finding charges added after the quoted rent: ₹9,000 became ₹12,500. With no real choice of flatmates, a flatmate\'s late-night gaming now disrupts their sleep.',
    sentiment:{label:'negative', note:'Feels misled on price and stuck with a poor flatmate match.'},
    pain_points:[
      {title:'Rent breakup hidden until late', detail:'Electricity, maintenance and wifi were added after the quote, taking ₹9,000 to ₹12,500.', emotion:'frustrated', severity:3, confidence:'high', quotes:[{text:'koi bhi rent ka exact breakup nahi batata'},{text:'Pehle 9,000 bola, baad mein 12,500 ho gaya'}]},
      {title:'No real choice of flatmates', detail:'Took whoever was available; late-night gaming disrupts their sleep.', emotion:'frustrated', severity:2, confidence:'high', quotes:[{text:'jo mila uske saath reh gaya'},{text:'Ek flatmate raat bhar gaming karta tha aur mera sleep kharab hota tha'}]}
    ],
    feature_requests:[
      {title:'Reviews from previous tenants', detail:'To judge the owner before renting.', confidence:'high', quotes:[{text:'Agar pehle se reviews hote previous tenants ke, toh pata chal jaata owner kaisa hai'}]},
      {title:'Full rent breakup upfront', detail:'Every charge in one place, no hidden extras.', confidence:'high', quotes:[{text:'rent ka poora breakup ek jagah likha ho, bina hidden charges ke'}]}
    ],
    memorable_quotes:[{text:'Pehle 9,000 bola, baad mein 12,500 ho gaya.'},{text:'Sach mein choose nahi kiya, jo mila uske saath reh gaya.'}]
  }}],
  themes:[
    {title:'House rules and lifestyle clashes', summary:'Food, cleanliness, smoking, pets and schedules are not discussed before moving in, so friction or even a second move follows.', emotion:'frustrated', verified:true, members:['i_p1:pp3','i_p2:pp4','i_p3:pp3','i_p4:pp3','i_p5:pp2']},
    {title:"Listings can't be trusted", summary:'Photos are outdated or misleading, the same flat shows different prices, and people cannot tell which listings are real.', emotion:'frustrated', members:['i_p1:pp1','i_p2:pp1','i_p3:pp1','i_p3:pp5','i_p4:pp2']},
    {title:'Scams and unsafe contact', summary:'People are asked to pay before visiting and must share personal numbers with unknown listers.', emotion:'anxious', members:['i_p1:pp2','i_p2:pp2','i_p3:pp2','i_p3:pp4']},
    {title:'Hidden and unfair costs', summary:'Brokerage, add-on charges and deposit deductions appear after people have committed.', emotion:'frustrated', members:['i_p2:pp3','i_p2:pp5','i_p4:pp4','i_p5:pp1']},
    {title:'Couples and newcomers turned away', summary:'Some societies refuse couples or people from outside the city.', emotion:'frustrated', members:['i_p4:pp1']},
    {title:'Slow search near work', summary:'Finding a clean, quiet flat close to the office takes weeks.', emotion:'frustrated', members:['i_p1:pp4']}
  ],
  requests:[
    {title:'Verified listings and owners', members:['i_p2:fr1','i_p3:fr4','i_p4:fr2']},
    {title:'House rules and lifestyle on profiles', members:['i_p2:fr3','i_p3:fr2','i_p4:fr1']},
    {title:'Video intro or tour before moving', members:['i_p1:fr1','i_p3:fr1']},
    {title:'Transparent rent breakup', members:['i_p5:fr2']},
    {title:'Reviews from previous tenants', members:['i_p5:fr1']},
    {title:'Verified flatmate profiles', members:['i_p1:fr2']},
    {title:'Deposit protection', members:['i_p2:fr2']},
    {title:'In-app chat before sharing number', members:['i_p3:fr3']}
  ]},

/* ---------- 2. Bill payments (fintech) ---------- */
{ id:'pr_bills', name:'Bill payments · drop-off', goal:'Why users start a bill payment in our app and finish it somewhere else', daysAgo:{created:34, updated:20},
  tldr:'Across 3 interviews, trust breaks at the moment of payment: people can\'t tell whether money left their account or autopay ran (2 of 3). Late-revealed fees and slow refunds push them to rival apps, while reminders are valued.',
  interviews:[
  { id:'i_b1', participant:'P1', title:'P1 · Salaried, Mumbai', lang:'English', date:'2026-10-09',
text:`Interviewer: When did you last pay a bill in the app?
P1: Last Sunday, my electricity bill. The app fetched the amount fine, but the payment page kept spinning for almost a minute.
P1: I wasn't sure if the money was deducted, so I checked my bank SMS before trying again. I didn't want to pay twice.
Interviewer: What happened next?
P1: It failed, and the refund note said five to seven working days. I paid on another app in thirty seconds.
Interviewer: Would you use the app again for bills?
P1: Maybe for the reminder. The due-date reminder is actually useful, I just don't trust the payment part yet.
P1: If it showed clearly whether money left my account, I'd give it another chance.`,
  analysis:{
    tldr:'P1\'s electricity payment hung for a minute with no clear status, failed, and promised a refund in 5 to 7 working days. They finished on a rival app in 30 seconds but still value the due-date reminder.',
    sentiment:{label:'negative', note:'Lost trust in payments, still likes reminders.'},
    pain_points:[
      {title:'Payment hangs with no status', detail:'The page spun for a minute and gave no sign whether money was taken.', emotion:'anxious', severity:3, confidence:'high', quotes:[{text:'the payment page kept spinning for almost a minute'},{text:"I wasn't sure if the money was deducted"}]},
      {title:'Slow refund after a failure', detail:'A failed payment means waiting 5 to 7 working days.', emotion:'frustrated', severity:2, confidence:'high', quotes:[{text:'the refund note said five to seven working days'}]},
      {title:'Finishes on a rival app', detail:'After the failure, paid elsewhere in seconds.', emotion:'frustrated', severity:3, confidence:'high', quotes:[{text:'I paid on another app in thirty seconds'}]}
    ],
    feature_requests:[
      {title:'Clear money-left-account status', detail:'Show plainly whether the amount was debited.', confidence:'high', quotes:[{text:"If it showed clearly whether money left my account, I'd give it another chance"}]}
    ],
    memorable_quotes:[{text:"I just don't trust the payment part yet"},{text:"I didn't want to pay twice."}]
  }},
  { id:'i_b2', participant:'P2', title:'P2 · Pays bills for parents, Jaipur (Hinglish)', lang:'Hinglish', date:'2026-10-14',
text:`Interviewer: Aap kis kis ke bills pay karte ho?
P2: Mere mummy-papa ke bijli aur gas ke bills main hi bharta hoon, unke account se nahi, mere account se.
P2: Har baar consumer number dhoondhna padta hai. Purane bill ki photo phone mein search karta hoon, bahut time jaata hai.
Interviewer: App mein kya confusing laga?
P2: Convenience fee last screen pe aata hai. Pehle bataya hota toh theek tha, baad mein dikhta hai toh dhoka jaisa lagta hai.
Interviewer: Kya hona chahiye?
P2: Family ke saare billers ek jagah save ho jaayein, naam ke saath, jaise Mummy ka bijli bill.
P2: Aur fee pehle screen pe hi dikhni chahiye.`,
  analysis:{
    tldr:'P2 pays electricity and gas bills for their parents and has to dig up consumer numbers from old bill photos every time. A convenience fee that appears only on the last screen feels like a trick.',
    sentiment:{label:'negative', note:'Tedious setup every time and distrust of the late fee.'},
    pain_points:[
      {title:'Hunting for consumer numbers', detail:'Searches old bill photos for consumer numbers each time.', emotion:'frustrated', severity:2, confidence:'high', quotes:[{text:'Har baar consumer number dhoondhna padta hai'}]},
      {title:'Fee revealed on the last screen', detail:'The convenience fee shows up only at the end and feels deceptive.', emotion:'frustrated', severity:3, confidence:'high', quotes:[{text:'Convenience fee last screen pe aata hai'},{text:'baad mein dikhta hai toh dhoka jaisa lagta hai'}]}
    ],
    feature_requests:[
      {title:'Saved family billers with names', detail:'All family billers in one place, labelled by person.', confidence:'high', quotes:[{text:'Family ke saare billers ek jagah save ho jaayein, naam ke saath'}]},
      {title:'Fee shown upfront', detail:'Show the convenience fee on the first screen.', confidence:'high', quotes:[{text:'fee pehle screen pe hi dikhni chahiye'}]}
    ],
    memorable_quotes:[{text:'Purane bill ki photo phone mein search karta hoon, bahut time jaata hai.'}]
  }},
  { id:'i_b3', participant:'P3', title:'P3 · Freelancer, Bengaluru', lang:'English', date:'2026-10-20',
text:`Interviewer: You set up autopay for your broadband. How has that been?
P3: It worked twice, then silently failed in September. I only found out when the internet was cut.
P3: There was no notification from the app, nothing. The bank said the mandate had expired.
Interviewer: How did you fix it?
P3: I had to set up the mandate again, which needed another OTP, and the OTP took ages to come.
Interviewer: What would make autopay feel safe?
P3: Tell me two days before it runs, and shout loudly if it fails. Even a WhatsApp message would do.
P3: Honestly, I love the idea of autopay. I just need to know it actually happened.`,
  analysis:{
    tldr:'P3\'s broadband autopay failed silently after the mandate expired, and they learnt only when the internet was cut. They like autopay but want alerts before it runs and loudly when it fails.',
    sentiment:{label:'mixed', note:'Likes autopay, burned by a silent failure.'},
    pain_points:[
      {title:'Autopay fails silently', detail:'An expired mandate stopped payments with no alert from the app.', emotion:'anxious', severity:3, confidence:'high', quotes:[{text:'silently failed in September'},{text:'There was no notification from the app, nothing'}]},
      {title:'Mandate re-setup is painful', detail:'Setting it up again needed another slow OTP.', emotion:'frustrated', severity:2, confidence:'medium', quotes:[{text:'the OTP took ages to come'}]}
    ],
    feature_requests:[
      {title:'Alerts before and after autopay', detail:'A heads-up two days before, and a loud alert on failure.', confidence:'high', quotes:[{text:'Tell me two days before it runs, and shout loudly if it fails'}]},
      {title:'WhatsApp notifications', detail:'Payment alerts on WhatsApp.', confidence:'medium', quotes:[{text:'Even a WhatsApp message would do'}]}
    ],
    memorable_quotes:[{text:'I just need to know it actually happened.'},{text:'I only found out when the internet was cut.'}]
  }}],
  themes:[
    {title:'Payment status is unclear', summary:'People can\'t tell whether a payment or autopay went through, so they retry, switch apps or get cut off.', emotion:'anxious', members:['i_b1:pp1','i_b3:pp1']},
    {title:'Fees and failures push users away', summary:'A fee revealed late and slow refunds after failures send people to rival apps.', emotion:'frustrated', members:['i_b1:pp2','i_b1:pp3','i_b2:pp2']},
    {title:'Too much re-entry', summary:'Consumer numbers and mandate OTPs have to be found or redone every time.', emotion:'frustrated', members:['i_b2:pp1','i_b3:pp2']}
  ],
  requests:[
    {title:'Clear status and failure alerts', members:['i_b1:fr1','i_b3:fr1']},
    {title:'Fee shown upfront', members:['i_b2:fr2']},
    {title:'Saved family billers', members:['i_b2:fr1']},
    {title:'WhatsApp notifications', members:['i_b3:fr2']}
  ]},

/* ---------- 3. EdTech sign-up usability test ---------- */
{ id:'pr_edu', name:'Study planner · sign-up test', goal:'Where new students and parents get stuck between download and their first study plan', daysAgo:{created:5, updated:3},
  tldr:'Across 2 usability sessions, sign-up asks too much before showing any value: both participants stalled in the first minute. Families also need a parent role, more than one child per account and plans in regional languages.',
  interviews:[
  { id:'i_u1', participant:'P1', title:'P1 · Class 12 student, Lucknow (Hinglish)', lang:'Hinglish', date:'2026-11-05',
text:`Interviewer: Sign up karke dekho, aur bolte jao kya soch rahe ho.
P1: Okay, phone number daala, OTP aaya. Ab yeh poochh raha hai board, stream, target exam, school ka naam. Itna kyun chahiye abhi?
P1: School ka naam list mein nahi hai. Skip ka option bhi nahi dikh raha.
Interviewer: Aage kya karoge?
P1: Pricing page aa gaya bina plan dekhe. Mujhe pehle dekhna hai ki app kaam ka hai ya nahi, phir paise ki baat.
P1: Agar ek free study plan pehle mil jaaye toh main zaroor try karunga.`,
  analysis:{
    tldr:'P1 hit four profile questions right after the OTP, got stuck when their school wasn\'t listed and there was no skip, then saw pricing before any study plan. A free first plan would get them to try the app.',
    sentiment:{label:'negative', note:'Blocked and put off early, though open to trying a free plan.'},
    pain_points:[
      {title:'Too many sign-up questions', detail:'Board, stream, target exam and school are asked right after the OTP.', emotion:'frustrated', severity:2, confidence:'high', quotes:[{text:'Itna kyun chahiye abhi'}]},
      {title:'Stuck without a skip option', detail:'Their school is not in the list and the step cannot be skipped.', emotion:'frustrated', severity:3, confidence:'high', quotes:[{text:'School ka naam list mein nahi hai. Skip ka option bhi nahi dikh raha'}]},
      {title:'Paywall before any value', detail:'Pricing appears before they have seen a single plan.', emotion:'frustrated', severity:3, confidence:'high', quotes:[{text:'Pricing page aa gaya bina plan dekhe'}]}
    ],
    feature_requests:[
      {title:'Free study plan first', detail:'Show one free plan before asking to pay.', confidence:'high', quotes:[{text:'Agar ek free study plan pehle mil jaaye toh main zaroor try karunga'}]}
    ],
    memorable_quotes:[{text:'Mujhe pehle dekhna hai ki app kaam ka hai ya nahi, phir paise ki baat.'}]
  }},
  { id:'i_u2', participant:'P2', title:'P2 · Parent of a Class 9 student, Pune', lang:'English', date:'2026-11-06',
text:`Interviewer: Please set up the app for your daughter and think aloud.
P2: I'm creating the account in my name, but it keeps calling me the student. Is this for me or for her?
P2: There's no place to add a second child. My son is in Class 6, so we'd need two accounts?
Interviewer: How do you feel about the plan screen?
P2: The plan looks good, but it's all in English. My daughter studies in Marathi medium for some subjects.
P2: A parent view where I can see her progress weekly would make me pay for this.`,
  analysis:{
    tldr:'P2, setting up the app for their daughter, wasn\'t sure whether the account was for the parent or the student and found no way to add a second child. The plan looked good but came only in English; a weekly parent view would make them pay.',
    sentiment:{label:'mixed', note:'Likes the plan, confused by roles and missing family support.'},
    pain_points:[
      {title:'Unclear who the account is for', detail:'The parent is addressed as the student during setup.', emotion:'confused', severity:2, confidence:'high', quotes:[{text:'it keeps calling me the student. Is this for me or for her'}]},
      {title:'No support for siblings', detail:'A second child would need a separate account.', emotion:'frustrated', severity:2, confidence:'medium', quotes:[{text:"There's no place to add a second child"}]},
      {title:'Plan only in English', detail:'The child studies some subjects in Marathi medium.', emotion:'frustrated', severity:2, confidence:'medium', quotes:[{text:"it's all in English"}]}
    ],
    feature_requests:[
      {title:'Parent view with weekly progress', detail:'A parent dashboard showing progress every week.', confidence:'high', quotes:[{text:'A parent view where I can see her progress weekly would make me pay for this'}]},
      {title:'More than one child per account', detail:'Add siblings under one parent account.', confidence:'medium', quotes:[{text:"so we'd need two accounts"}]}
    ],
    memorable_quotes:[{text:'A parent view where I can see her progress weekly would make me pay for this.'}]
  }}],
  themes:[
    {title:'Sign-up asks too much, too early', summary:'Profile questions, a missing skip and unclear roles block people before they see any value.', emotion:'frustrated', members:['i_u1:pp1','i_u1:pp2','i_u2:pp1']},
    {title:'Families and languages not supported', summary:'Parents can\'t add siblings, and plans come only in English.', emotion:'frustrated', members:['i_u2:pp2','i_u2:pp3']},
    {title:'Paywall before value', summary:'Pricing appears before the first study plan.', emotion:'frustrated', members:['i_u1:pp3']}
  ],
  requests:[
    {title:'Free study plan first', members:['i_u1:fr1']},
    {title:'Parent view with weekly progress', members:['i_u2:fr1']},
    {title:'More than one child per account', members:['i_u2:fr2']}
  ]},

/* ---------- 4. Empty project, ready for real interviews ---------- */
{ id:'pr_churn', name:'Q1 churn calls', goal:'Why paying teams cancel in their first 90 days', daysAgo:{created:6, updated:6}, tldr:'', interviews:[], themes:[], requests:[] }
];

const SAMPLE_CHATS = {
  pr_demo:[
    {role:'user', content:'What should we build first?'},
    {role:'assistant', content:'Start with house rules and lifestyle on every profile, plus verified listings.\n- House rules and lifestyle clashes came up in all 5 interviews and the theme is verified.\n- 3 participants asked for verified listings or owners (P2, P3, P4).\n- Scams point the same way: "a so-called owner asked for a token amount before even allowing a flat visit" (P1).\nA transparent rent breakup is a cheap follow-up: P5 saw ₹9,000 become ₹12,500.'}
  ]
};

const TRY_SAMPLES = [
{ key:'hinglish', label:'Hinglish · Flat hunt in Hyderabad', lang:'Hinglish', title:'P6 · First-time renter, Hyderabad (Hinglish)',
text:`Interviewer: Hyderabad mein flat dhoondhne ka experience kaisa tha?
P6: Sach bolun toh bahut thakaane wala tha. Har weekend teen-chaar flats dekhne jaata tha.
P6: Ek listing pe likha tha fully furnished, pahuncha toh sirf ek bed tha. Photos bilkul alag the.
Interviewer: Payment ya deposit ko leke koi issue?
P6: Haan, ek owner ne bola pehle 10,000 advance bhejo, tabhi chabi milegi. Mujhe laga scam hai, maine mana kar diya.
Interviewer: Flatmates kaise mile?
P6: WhatsApp group se. Lekin pehle se pata nahi tha ki unke friends roz raat ko aate hain. Guests ka rule pehle discuss hona chahiye tha.
Interviewer: Ideal solution kya hoga?
P6: Mujhe ek app chahiye jahan owner verified ho aur flat ka live video ho. Aur flatmate ke saath pehle ek chhota video call ho jaaye toh best hai.
P6: Agar koi neutral party deposit hold kare, toh main zyada comfortable feel karunga. Mera email hai p6.renter@example.com agar aur sawaal ho.`},
{ key:'fintech', label:'English · Bill payment drop-off', lang:'English', title:'P4 · Bill payments user, Delhi',
text:`Interviewer: Walk me through the last time you tried to pay a bill in the app.
P4: I added my electricity bill, but the OTP took almost two minutes to arrive, so I gave up and paid on another app.
P4: It's frustrating that I have to re-enter my card details every single time.
Interviewer: Anything confusing?
P4: The convenience fee shows up only on the last screen. That felt sneaky, honestly.
P4: I wish the app remembered my billers and reminded me before the due date.
Interviewer: What would make you come back?
P4: Show the fee upfront and let me pay with UPI in one tap. That's all I want.`},
{ key:'usability', label:'English · Demo-class booking test', lang:'English', title:'P3 · Student abroad, Dubai',
text:`Interviewer: Try booking a demo class and tell me what you're thinking.
P3: The home screen has six banners. I don't know where to tap first.
P3: Found it. It asks for my parent's phone number before I can even see the class timings. That's annoying.
Interviewer: Anything else?
P3: The timings are in IST but I'm in Dubai, so I had to do the maths myself.
P3: I wish it just showed the next three free slots in my time zone.
Interviewer: Would you book?
P3: Probably, if it didn't need my parent's number first.`}
];
