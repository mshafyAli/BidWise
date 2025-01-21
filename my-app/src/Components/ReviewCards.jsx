import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";


const reviews = [
  {
    name: "CHARLOTTE",
    rating: 4.9,
    reviewCount: 1,
    reviewText:
      "I have always topped my class but this time, my economics research paper was proving difficult to handle. I was at to give up when a friend recommended your writing services. I was still sceptical until I saw the outline your writer had prepared. I immediately ordered the paper and relaxed, waiting for the outcome. I must confess that your writers are professionals. They delivered beyond what I would have done with my advanced economics degree.",
  },
  {
    name: "JIMMY",
    rating: 5.0,
    reviewCount: 1,
    reviewText:
      `I am not at all surprised by there service as I have been using their service from past 1 year and never got less marks. But this time I was very tensed as our professor gave me to write 20,000 words dissertation writing. But I trusted British PhD Writer and gave them work and I got a grade of 86% which is really amazing as our professors are very stricting regarding marking criteria.
Thank you British PhD Writers.`,
  },
  {
    name: "LAURA WILLAIMS",
    rating: 5.0,
    reviewCount: 1,
    reviewText:
      "The most trustworthy e-learning site I have ever seen. My Friend, Adam introduced me to Assignment consultancy to get help for an assignment, and now, this site has become my online professor. I enjoy learning from here. Thank you British PhD Writers. It would not be possible for me to understand the concepts in such an easy manner, if you people were not there. Highly Recommended website for MBA help as well as Graduate courses.",
  },
  {
    name: "JOAN",
    rating: 4.9,
    reviewCount: 1,
    reviewText:
      "Very few people understand anthropology. That’s why I was not sure of getting any quality help with my paper. Though I ordered the paper, I continued working on it because I was expecting disappointment. I felt dumb once your writer emailed the complete paper. It read like the best research paper you will in anthropology. I am grateful I met you because my college assignments will never be the same again. You people are amazing.",
  },
  {
    name: "SYLVIA LORRAINE",
    rating: 4.7,
    reviewCount: 1,
    reviewText:
      "I have not ordered a paper online for a while. I was discouraged by the thought of plagiarism and delayed work. I kept talking to the support team in the course of completing the essay, yet he never got tired. Once the paper was returned, all my fears were gone. I loved everything from the title to the introduction and the ideas discussed in the paper. The paper has exceeded my expectations.",
  },
  {
    name: "MARTIN A",
    rating: 5.0,
    reviewCount: 1,
    reviewText:
      "I found this site a year ago and it was a truly life changing experience. Prior to that moment I tried to deal with all my assignments by myself, being torn apart in between my work and studies. However, when I realized that I could not handle that pressure anymore and I wanted to concentrate on my job I felt that I needed some professional help. I mostly use this site to do some physics and chemistry labs. It always takes a lot of time to double check all the formulas and calculations that were used in the lab. Yet, I am so lucky that today it´s not my job anymore because I found this website British PhD Writer, one of the best experts in these sciences here. He does that work for me and the only thing I need to care about is submitting my labs right before the deadline so that I could get my full points!",
  },

  {
      name: "BISHNU NARAYAN SAHU",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "I like the transparency of all the processes from placing the order and clarifying possible issues with the writer to receiving the order and paying for it. The support team is very collaborative and ready to help. Thanks.",
    },

    {
      name: "ANDREW HARRIS",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "Never thought I’ll be the one to write the review on writing service, but here I am and it’s nothing to be ashamed of! British PhD Writer is great for real, their exceptional care I felt from the start. They called me and asked is it okay to talk now. Wow, not every company asking about it! They cared me through the order completely. I was notified when my writer was assigned, that he or she started writing, that my order is under the review. I received polished work everyone will be pleased to receive! Very good choice of words, accurate formatting, any visible mistakes (I guess invisible are absent too). Can recommend British PhD Writer to everyone who seek for quality writing services.",
    },
    {
      name: "CLIVE BULMER",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "Best of the best of the best! I was afraid I’ll leave college after the first year because my grades were so bad and I really weren’t able to find a way to improve them myself. But then I realized I need my college and classmates badly and I really can pay a lot to leave things as theu are. Writers from British PhD Writer are god-given for sure, don’t know if it were real for real people to do so many papers. You are my heroes and I’ll give a lot of good revies everywhere. Other people deserve to know how to save themselves in a college.",
    },
    {
      name: "CRYSTAL VARGAS",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "It’s insane that I can’t find good writing companies online! Some write like they are from kindergarten, some charge enormous amount of money for ordinary article. I was in rage, but then I found British PhD Writers. They are pretty reasonable too, also they do exactly what you ask for. Nice writing, so I want to proceed my work with them.",
    },
    {
      name: "CYNTHIA PIKE",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "If you’re a lucky client of these talented geeks, expect total understanding from their side, following all your requirements, and caring support available 24/7. Great service.",
    },

    {
      name: "MAGGIE GALLE",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "If you want quality, better pay the right price, or get ready for surprises. Here everything’s fair and square. Discounts, proper customer support, and writing experts with good English and zero plagiarism. I’m really happy I found you.",
    },

    {
      name: "KIM MILLER",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        `If you’re not a fan of big texts, I’ll say short – British PhD Writer is legit writing service. 
        You can rely on it.I recommend British PhD Writer to everyone and will use their help in future more.`,
    },
    {
      name: "ZAINAB BATOOL",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "Your writers are extremely talented and kind. They followed all the guidelines that I provided them regarding my assignment and they made sure that they were being followed.",
    },

    {
      name: "JANITA R.",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "My essay was very well written, it had no errors and was written according to the guidelines I gave the writers. They patiently took my instructions and followed it accordingly. it seemed 100% original.",
    },
    {
      name: "SHAKUR",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "We have been working with British PhD Writer regularly for about a year and experienced professional writing. British PhD Writer can also easily handle complicated technical assignments too.",
    },
    {
      name: "SUSAN LEE",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "British PhD Writer is one of the best writing services that I have come across. They have ensured that they hire the best people who can generate outstanding work that gives competitors a run for their money. Their customer support is extremely professional and helpful.",
    },

    {
      name: "G.WESTON",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "Working with British PhD Writer was great, from the customer representatives to the dedicated manager, all of them were very patient and also understanding. Thumbs up to the team.",
    },
    {
      name: "KORBYN MACLEROY",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "The writers at British PhD Writer know what they are doing. I was surprised at the level of research and the quality of writing they produced on my research paper.",
    },
    {
      name: "LINDA TINDELL",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "As a student I am always looking for a cheap and smart solutions for my academic writings. Fortunately, British PhD Writer never fails to deliver exactly that.",
    },
    {
      name: "JULIE LANCASTER",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "I am impressed by the writing quality and that that too in such a short time. I had totally forgotten about my pending assignment and would have definitely messed it up if I would have done it my own. The sales guy assured me I will receive in 6 hrs something but I received it just in 5. I recommend 5/5",
    },
    {
      name: "MARIE",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "For students a writing service that is available 24/7 is a gift from heavens. They help you with all your writing issues and add content that is unique and factual.",
    },
    {
      name: "AMBROSE SHAW",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "My writing skills are average I can manage assignments but dissertations are a different game. The day I hired British PhD Writer to write my dissertation. I decided they will be writing my assignments too.",
    },

    {
      name: "DEBBIE W.",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "My dissertation was due and didn’t feel like I could write a good one. British PhD Writers took over and delivered what I had in mind, the quality and the research were all top notch also the work was plagiarism free.",
    },
    {
      name: "DAN WEYMOUTH",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "Bravo to the team of British PhD Writers. They are proactive and have a sense of responsibility. They never delayed my order and responds quite fast. I’m in love with their services.",
    },

    {
      name: "DAN WEYMOUTH",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "Bravo to the team of British PhD Writers. They are proactive and have a sense of responsibility. They never delayed my order and responds quite fast. I’m in love with their services.",
    },
    {
      name: "LYNDA MILES",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "Doubtlessly, they are the best essay writers. They had written argumentative, narrative, and descriptive essays for me. They were written professionally. Each of them was unique and error-free.",
    },
    {
      name: "KATHERINE J.",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "I was so bad when it comes to economics assignment, since it always requires analysis and critical evaluation. Thank you very much to British PhD Writers for providing me with quality work I needed. I can’t believe how easy it has become now for their help. Lots of love",
    },
    {
      name: "KEN MARQUEZ",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "I want to share the best experience with British PhD Writers. Till now I only had bad experiences with other academic websites, but this website proved to be the best in the business.",
    },
    {
      name: "NICHOLAS WHITE",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "I love this so much. British PhD Writers experts has always been my life saver since day one, it made my all assignments looks so perfect and professional.",
    },
    {
      name: "MOHAMMAD SALAHDIN",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "I was struggling with English assignment since my friend recommended me this lovely assignment help website. They helped me a lot with structure and literature analysis. Highly recommend for English literature students.",
    },
    {
      name: "VANESSA WILLIAMS",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "For a Nursing case study on Elderly Care, I got a very good grade. Thanks to British PhD Writers. I highly recommend them to others for quality assignment help and support.",
    },
    {
      name: "VIVEK NAGPAL",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "Thanks to British PhD Writers team for the wonderful assistance given throughout the process. I truly recommend their services for support.",
    },
    {
      name: "CHRISTOS RILLEY",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "I recently placed an order for computer networking dissertation using this service. They delivered truly outstanding quality work in accordance with the specifications. I am grateful to the expert since they knew everything that was necessary by the dissertation and did a fantastic job communicating it with words. They provide dissertation with simulation, which assisted me in receiving good scores. Excellent work. Thank you Team British PhD Writers. Would Highly Recommended!",
    },
    {
      name: "JOE KING",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "I was lost and they took the additional time to assist me in learning the programming and help me complete the project ahead of schedule. I would highly recommend them not only for tutoring but all types of programming needs. Top notch, reliable, dependable, trustworthy,and communicative on progression.",
    },
    {
      name: "ELVIN ROSS",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "Great work, fast, and cooperative person. There was some issues in coding and it had many wrong outputs in the beginning but they responded very fast to all my requests many times to solve these issues smoothly. The codes uses comlex algorithm and classes such as HashMap, Map, Collections, Set, and HashSet which is hard to understand for me but the program works perfectly. I wish there was more comments on each method to illustrate more about how they are working and there implementation. Everything else looks very good.",
    },
    {
      name: "JOBAYER IMAM",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "Don’t user fiverr. for programming. I got scammed twice! Then I was thankful to discover these guys. They are the best! Legit no plagiarism. Great accountability and communication. Thank you! Keep it rocking.",
    },
    {
      name: "CRAIG",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "The team worked with me with the pricing and the assignment I had. They pushed it back to me within the time I needed it and everything worked perfectly. I definitely recommend using this team! They were friendly and made me feel better about the situation I was in. Thank you again.",
    },
    {
      name: "RANDER",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "I have used this service a few times now. Customer service is great and the programmers are very professional and polite. The assignments are always done on time and correctly. I will definitely continue to use this service.",
    },
    {
      name: "MEAUX",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "They helped me with one of my computer programming assignments and they did an amazing job! They reply quickly to your emails and turn over the assignment before the deadline every time. This is my second time working with them and I will continue to in the future as well. Best assignment help I’ve ever received!",
    },
    {
      name: "MEAUX",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "They helped me with one of my computer programming assignments and they did an amazing job! They reply quickly to your emails and turn over the assignment before the deadline every time. This is my second time working with them and I will continue to in the future as well. Best assignment help I’ve ever received!.",
    },
    {
      name: "MAKPAL MEYER",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "We have annual sports tournaments in different sports disciplines that requires us to keep track of the changes in personal data of the participants. At the office we used to do it manually and it gave us headaches. But since I discovered this wonderful company British PhD Writers, it has become an easy task. Now we have the best program that makes our job easy. Highly recommended.",
    },
    {
      name: "SHAAN M.",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "I had a lot of Java assignments and was not able to understand the advance java concepts due to lack of knowledge and did not have enough time to study and write the coding assignments. These guys helped me get an A in all my assignments and I passed my class with flying colors. They are very professional to deal with and always delivered my projects on time. They really take the time to write the code rather than copying it from somewhere and create a solution that is tailored to your need. I would defiantly recommend them to students that are struggling with coding assignments and would definitely reach back out to them when I need them.",
    },
    {
      name: "BETH COUSIN",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "Could not be more satisfied and would recommend it to anyone. You can trust this company to help you out even if your deadline is only some hours away – they are there for you 24/7 like ‘family’… you do not get only the solution but also the explanation (you have also teachers)",
    },
    {
      name: "LULU GARIBAY",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "First time using this professional… great communication and recieved the assignment before the due date. Assignment was done professionally and accurate. Just waiting for the grade now.",
    },
    {
      name: "OLIVIER ST-ONGE",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "I got 92 thanks for the hard work and dedication!! I appreciate the urgency to finish the MATLAB in statistics assignment on time.",
    },
    {
      name: "JENNA",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "Had a final assignment due in a few hours and they just did it so quickly! So detailed too! Reasonable price for such speed and loads of work! Thank you again!",
    },
    {
      name: "CIAN",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "So happy I chose this website for my network simulation assignment. I could not be happier, it has been so helpful during this very hard and stressful times. I will recommend and continue to use the services during my studies.",
    },
    {
      name: "CINDY",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "I did not have any challenges working with this team. The pricing was in line with my budget, and the quality was excellent. The expert dealing with my paper clearly understood what was expected of them. I will hire them again.",
    },
    {
      name: "PETER P.",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "When it comes to certain essays, you’re not sure where to begin. Writing a reaction to a classical music piece calls for work like this. It’s difficult to get the words right when the source material doesn’t have any. This service, fortunately, did not have any issues with it. I highly recommend them.",
    },
    {
      name: "JOSEPH SHADRICK",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "I’ve been struggling with English and marketing papers. The writers at British PhD Writers did work a lot on my behalf. It was really very difficult to come up with topic ideas, and write on those topics. Putting all information together and researching wasn’t an easy task but the subject-matter expert made it easy for me. I even wanted to see sample work and team British PhD Writers did not hesitate to let me have a look at what excellent work they provide. I loved their confidence. They were so prompt and started working on my assignments as soon as they received all the information from my end. They have even handled my urgent requests seamlessly with awesome quality. I even compared the package prices and guess what? I saw that these people are actually reasonable plus the kind of work they provide is just amazing. So, I don’t see any reason to visit any other website because with British PhD Writers everything is so simple. Thanks, lovely people!",
    },
    {
      name: "DIANA LORAINE",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "I took help for my complete dissertation, I was not sure about the topics so they help with the topics first then provide me complete services till my dissertation final submission. they are very prompt with replies and provide legit reports. highly recommended to other students",
    },
    {
      name: "JOHN NEECE",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "I found their “unlimited free revisions” feature very interesting and was more than glad to find out that they don’t just promise. They stand by it and try to provide as many revisions as the client wants. I asked them to revise four times and they did it without asking a single question. They checked my report again and again to ensure flawlessness. I adore their patience and loyalty. My report now looks good I think I will get a pretty great score. Let’s see, fingers crossed, but in any case, I just can’t thank British PhD Writers enough for not asking any question while I was repeatedly asking for changes, at one point even I felt ashamed of asking to make so many changes. But, they were humble and polite from start to end and reassured me that it was their job to make me feel comfortable.",
    },
    {
      name: "JAMES MORTINSON",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "It's really important to find dissertation writing service if you want to get a degree. It might be really useful, especially if you have job and need to earn money. I had such difficulties in college so I found dissertationauthors. I will definitely use it one more time in the future and of course, I recommend it to you! It's just great!",
    },
    {
      name: "JACQUELYN SMITH",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "They promised that my paper woud not be plagiarized. Well, they fulfilled their promise. Thanks guys for original material.",
    },
    {
      name: "FRANKIE BONILLA",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "I had heard stories of students who go plagiarized essays resulting in penalties and disqualification. This fear always stopped me from ordering my dissertation online. However, the work was overwhelming and I decided to test British PhD Writers. I am proud of the quality of work I received in return. The paper drove me to the top of the class. The dissertation on finance is now hotcake as other students seek to copy my example.",
    },
    {
      name: "ISOBEL ALEXANDER",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "Because of you, I had the option to save my life! British PhD Writersis the most trustworthy and obliging composing administration accessible. I set three exploration papers with you and had no troubles during our productive relationship. You were fastidious in your execution and really focused on the smallest subtleties. Every one of my inclinations were thought about, and accordingly, I just at any point acquired great imprints from you and your group.",
    },
    {
      name: "KEBIN LOPES",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "At first, I wasn't sure whether I could put my faith in them. Rebecca Lawrence assured me that they had the greatest authors and the most unique content, so I decided to give it a go. I'm glad I did! Achieving an A in this subject despite the difficult professor this semester was nothing short of a miracle! I'm sure I'll be placing additional orders with you guys in the future!",
    },
    {
      name: "CINDY MURPHY",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "I have 3 papers done by British PhD Writers so far. Have no complains about any of them. The first one got me 93 points out of 100, the other one 89/100 and the last one - my final online test on Stats 100/100. Thank you Team British PhD Writers",
    },
    {
      name: "ADELE HOCKEY",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "Finding a qualified writer to proofread and edit my research paper proved challenging. It took me almost a day to locate it. I was hesitant about the pricing, but Hannah Moris from customer support department suggested I may receive a discount, so I accepted. To be honest, this is a great website to work with for custom writing. The company offers 24/7 customer assistance, experienced writers that can meet any deadline, and professional writing services.",
    },
    {
      name: "LEILA MOHAMED",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "I ordered an assignment and it was due urgently. I thankfully had no issues and my assignment writer sent the draft before my deadline. Highly recommend them for any assignment writing or academic writing. The client support is too good!",
    },
    {
      name: "DONALD SENDALL",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "Your website's rates piqued my interest, so I immediately contacted your Support Department. My purchase was for Case Studies, and I had little faith that someone could be an expert in this field. However, you comforted me, and I completed 17 pages of Master's level work in four days.",
    },
    {
      name: "JENNIFER WHITE",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "A very big thank you to Rebecca for helping me out with the coursework. On any given day, she would follow up with me regarding the project's progress. The in-house team they got, is a blessing. Quick turnaround and on time delivery has just earned you a customer for all my academic work.",
    },
    {
      name: "GEORGIA L.",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "Despite my restricted time, I was given a large number of things to do at the same time. I'm concerned because I don't want to fall behind in my studies. The paper was meant to be 5000 words long, yet it only cost me a fraction of what I anticipated. I appreciate your dedication and hard effort. Everything was delivered on schedule and without errors. I'll always tell my friends and family about your services. I hope to work with you again in the future. Maintain your good work!.",
    },
    {
      name: "EDDI P.",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "Writing services have previously been nothing short of horrible for me, with copied work and unexpected costs being only two of the many issues I have encountered. Even though I was skeptical when a friend suggested British PhD Writers to me, I decided to give it a go. It turned out that I made the right selection since my essay was excellent.",
    },
    {
      name: "MIRANDA F.",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "Because of you, I was able to save my life! British PhD Writers is the most dependable and considerate writing service available. I placed three research papers with you and had no difficulties during our fruitful relationship. You were meticulous in your execution and paid special attention to the tiniest details. All of my preferences were taken into consideration, and as a result, I only ever earned good marks from you and your team.",
    },
    {
      name: "IRIANA",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "Finally, a service that does charge down-to-earth prices. I placed an order for 2 essays and one Dissertation chapter and I paid an affordable cost. They also offered me some generous discounts, so I could also save important money. Whoever is a student, understands the need of saving money on your papers.",
    },
    {
      name: "JAMIE K.",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "I only have one word to describe them: Top writing service! I've tried the services of several other companies, and superior papers much outperformed them. They have it all: excellent authors, nice customer service, and competitive cost. I wasn't convinced they could provide quality when I noticed their price policy. However, they have completely blown my mind. They have a significantly superior writing team — one that is informed, quick, and competent.",
    },
    {
      name: "SHERIDAN A.",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "I was determined to finish my dissertation on my own, but the methodology part turned out to be much more complicated than I expected. And it was a British PhD Writers writer who saved the day and delivered a flawless, well-research chapter just in a few days. I don't know how you did that, man, but that was impressive.",
    },
    {
      name: "JAMIE K.",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "I only have one word to describe them: Top writing service! I've tried the services of several other companies, and superior papers much outperformed them. They have it all: excellent authors, nice customer service, and competitive cost. I wasn't convinced they could provide quality when I noticed their price policy. However, they have completely blown my mind. They have a significantly superior writing team — one that is informed, quick, and competent.",
    },
    {
      name: "JACKIE R.",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "Really like their thorough approach to work, the punctuation, well-researched statements, accurate citations... Best writing service I've seen so far, don't hesitate to use them!",
    },
    {
      name: "ANDREW T.",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "This website has a lot going for it, including a well-versed writing staff and helpful customer service reps. You'll get high-quality work at a fair price, plus extras like coupons and unlimited revisions as part of our value-added services. There's no need to be concerned about plagiarism, since they claim to check every paper before it's uploaded. I haven't had a problem with that since I began using them. It's a speedy and dependable service.",
    },
    {
      name: "STELLA O.",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "I am a student at a prestigious university. I work part-time, it is very difficult to work and study, many tasks have to be performed at the university. My friend told me to go here and I did not regret it, the work was done ahead of schedule and with high quality. At a price not expensive, which really attracted me. Thank you so much",
    },
    {
      name: "MAX BRAYAN",
      rating: 4.6,
      reviewCount: 1,
      reviewText:
        "My name is Max Brayan, I am a student. Recently I had an examinational period and this service helped me, because I didn't have enough time to complete all my tasks. I express my gratitude, everything was fine,well-written and without grammar mistakes. Essay was done precisely on time actually. Wanted you to know, I have already recommended the service to all my friends and relatives! Great thanks one more time for opportunity, which was given to me.",
    },
    {
      name: "CHRIS A.",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "I am student and a lack of time is main problem. I decided to order an essay in this service. Eventually it was quality and well written, I got the highest score. It's clear that all work was done by professionals of their own business. I will definitely make an order here repeatedly.",
    },
    {
      name: "YANNI T.",
      rating: 4.6,
      reviewCount: 1,
      reviewText:
        "Finding a qualified writer to proofread and edit my research paper proved challenging. It took me almost a day to locate it. I was hesitant about the pricing, but the Rebecca suggested I may receive a discount, so I accepted. To be honest, this is a great website to work with for custom writing. The company offers 24/7 customer assistance, experienced writers that can meet any deadline, and professional writing services.",
    },
    {
      name: "NEIL T.",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "I am in love with this writing service, but it is a pity that I had not found them before. Right now I am at the process of writing dissertation and needed a research part. I had some details, but couldn't to sum up them. So, I tried this service and they were excellent.",
    },
    {
      name: "ADELE HOCKEY",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "Finding a qualified writer to proofread and edit my research paper proved challenging. It took me almost a day to locate it. I was hesitant about the pricing, but Hannah Moris from customer support department suggested I may receive a discount, so I accepted. To be honest, this is a great website to work with for custom writing. The company offers 24/7 customer assistance, experienced writers that can meet any deadline, and professional writing services.",
    },
];

const ReviewCard = ({ name, rating, reviewCount, reviewText }) => (
  <div className="bg-white w-full rounded-2xl shadow-lg p-6">
    <div className="flex items-center gap-4">
      {/* <img src={cardicon} className="w-14 h-14 md:w-16 md:h-16" alt="cardicon image" /> */}
      <Image src="/cardicon.png" className="w-14 h-14 md:w-16 md:h-16" alt="cardicon image" width="100" height="100"/>
      <div>
        <h1 className="text-lg md:text-xl font-semibold">{name}</h1>
        <div className="flex items-center">
          <h1 className="font-bold pr-2">{rating}</h1>
          {[...Array(Math.floor(rating))].map((_, i) => (
            <FaStar key={i} color="#F0AC44" />
          ))}
          {rating % 1 !== 0 && <FaStarHalfAlt color="#F0AC44" />}
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2 py-4">
      {/* <img src={pencilicon} className="w-5 h-5 md:w-6 md:h-6" alt="" /> */}

      <Image src="/pencilicon.png" alt="pencilicon" className="w-5 h-5 md:w-6 md:h-6" width="60" height="60"   />
      <span className="text-sm md:text-base">{reviewCount} Review{reviewCount > 1 ? 's' : ''}</span>
    </div>
    <p className="text-sm text-gray">{reviewText}</p>
  </div>
);

const ReviewCards = () => {
  return (
    <div className="bg-[#FAFBFF]  w-full py-10">
      <div className="w-[90%] md:w-[80%] mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
