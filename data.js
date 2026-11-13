/*
  SITE CONTENT
  Everything shown in the Research and Experience galleries, and on each detail page, lives here.

  How to edit:
  - Text between [square brackets] is a placeholder for you to write in your own words. Replace the whole
    bracketed text (brackets included) and the yellow highlight disappears.
  - To add a photo to a card, put the image in the "images" folder and set  cover: 'images/your-photo.jpg'.
  - "area" sets the color dot:  language (blue-lilac) · cognition (salmon) · speech (green) · digital (sand)
  - Each item's "id" becomes its page address, e.g.  detail.html#stuttering-cognition
*/
window.SITE = (function () {

  const projects = [
  {
    "id": "msc-thesis",
    "area": "digital",
    "group": "Theses",
    "kind": "Master's thesis",
    "title": "Digital resources for remote continuing education in speech therapy and audiology",
    "period": "2024",
    "place": "University of São Paulo, Brazil · Graduate Program in Speech-Language Pathology: Communication Processes and Disorders",
    "people": "Advisor: Simone Lopes-Herrera, Ph.D.",
    "summary": "How digital resources can support the continuing education of speech-language pathologists and audiologists at a distance.",
    "sections": [
      {
        "h": "In short",
        "p": [
          "My master's research identified and described the educational technologies used in the continuing education of speech-language pathologists who chose distance learning, and assessed their contributions and limitations for learning and for professional practice."
        ]
      },
      {
        "h": "Methods",
        "list": [
          "A qualitative study, approved by a research ethics committee.",
          "I designed the questionnaire and collected the data online, which made it possible to reach 103 speech-language pathologists from different regions of Brazil, with a wide range of practice areas and years of experience.",
          "Questions covered their experiences in remote training programs; data were analyzed with analysis software."
        ]
      },
      {
        "h": "Main findings",
        "list": [
          "Web conferencing was the most used platform for communication between students and instructors.",
          "Technology proved effective in mediating remote learning.",
          "Interactivity was the key differentiator, which showed what remote programs and tools should prioritize."
        ]
      },
      {
        "h": "Why it matters",
        "p": [
          "The results work as a guide for designing remote training that offers quality education to professionals who need to keep learning throughout their careers."
        ]
      },
      {
        "h": "What I learned",
        "list": [
          "To respect ethical boundaries in research.",
          "That a small result is still a relevant result.",
          "That education needs research, and people committed to studying it.",
          "Research methodology in depth, from systematic reviews to recruiting participants for a study."
        ]
      }
    ],
    "skills": [
      "Study design",
      "Questionnaire development",
      "Research ethics",
      "Participant recruitment",
      "Data analysis",
      "Academic writing"
    ],
    "photos": [
      {
        "src": "images/research/msc-defense-2.jpg",
        "caption": "At my master's defense, University of São Paulo"
      },
      {
        "src": "images/research/msc-defense-1.jpg",
        "caption": "With my advisor, Prof. Simone Lopes-Herrera, at my master's defense"
      }
    ],
    "links": [
      {
        "label": "Thesis (USP repository)",
        "href": "https://repositorio.usp.br/single.php?_id=003243055&locale=en_US",
        "ext": true
      },
      {
        "label": "DOI",
        "href": "https://doi.org/10.11606/D.25.2024.tde-28032025-090553",
        "ext": true
      },
      {
        "label": "Article: Revista CEFAC",
        "href": "detail.html#cefac-2026"
      }
    ]
  },
  {
    "id": "ba-thesis",
    "area": "cognition",
    "group": "Theses",
    "kind": "Bachelor's thesis",
    "title": "Neural basis of COVID-19 symptoms and sequelae",
    "period": "2021",
    "place": "São Miguel University Center, Brazil",
    "people": "Advisor: Tatiana Santana de Paula, Ph.D.",
    "summary": "My first research project in neuroscience, on the brain areas involved in neuromotor symptoms of COVID-19.",
    "sections": [
      {
        "h": "In short",
        "p": [
          "My undergraduate thesis, written during the first year of the COVID-19 pandemic. It asked which neural bases and brain areas are affected in patients who present neuromotor symptoms and sequelae of COVID-19."
        ]
      },
      {
        "h": "Methods",
        "list": [
          "A systematic literature review, my first one.",
          "Qualitative analysis of the studies retrieved from scientific databases."
        ]
      },
      {
        "h": "Why it mattered",
        "p": [
          "It was the first year of the pandemic, and there were very few initiatives on COVID-19 within speech-language pathology. Bringing a neuroscience perspective to the topic at that moment made the study especially relevant."
        ]
      },
      {
        "h": "What I learned",
        "p": [
          "It was my first experience with dense scientific writing, and a chance to learn how scientific work is built: I structured a study from beginning to end, independently."
        ]
      }
    ],
    "skills": [
      "Systematic review",
      "Database searching",
      "Qualitative analysis",
      "Scientific writing",
      "Independent research"
    ],
    "photos": [
      {
        "src": "images/research/ba-graduation.jpg",
        "caption": "Taking the professional oath at my graduation ceremony, 2021"
      }
    ]
  },
  {
    "id": "bits-lab",
    "area": "speech",
    "group": "Research",
    "kind": "Research",
    "title": "Speech sound acoustics at the BITS Lab",
    "cardTitle": "Speech sound acoustics",
    "period": "May 2026 – present",
    "place": "New York University, United States (remote)",
    "people": "Tara McAllister, Ph.D.",
    "summary": "Taking part in the lab's research meetings and training in acoustic analysis of speech.",
    "sections": [
      {
        "h": "About the lab",
        "p": [
          "The Biofeedback Intervention Technology for Speech Lab (BITS Lab) at NYU Steinhardt, directed by Dr. Tara McAllister, studies how technology can improve the way people learn and relearn speech. Much of its NIH-funded work tests visual-acoustic and ultrasound biofeedback for children with speech sound disorders, especially persistent difficulty with /r/. The lab also developed the staRt app for biofeedback practice and works on biofeedback for gender-affirming voice training."
        ]
      },
      {
        "h": "How I joined",
        "p": [
          "I reached out to Dr. McAllister on my own initiative, because I wanted to learn more about this area.",
          "We agreed that I would join the lab's research meetings, contribute to the group's discussions of the scientific papers they study, and complete the lab's trainings to gain hands-on practice in acoustic analysis."
        ]
      },
      {
        "h": "My role",
        "list": [
          "Taking part in the lab's core activities: research meetings, paper discussions and trainings.",
          "Completed the Praat training: segmenting and checking speech sounds such as /r/ in recordings.",
          "Next step: contributing to scientific work, especially presentations at conferences."
        ]
      },
      {
        "h": "What I'm gaining",
        "list": [
          "Hands-on acoustic analysis in Praat: reading waveforms and spectrograms, tracking formants (such as F3 for /r/) and segmenting sounds.",
          "An inside view of how a large US research lab works day to day: meetings, data protocols and paper discussions.",
          "Discussing research in English with researchers in my field.",
          "A closer look at biofeedback and technology-based treatment for speech sound disorders, which connects my clinical work with my interest in digital health.",
          "A professional network in speech-language research in the United States."
        ]
      }
    ],
    "skills": [
      "Praat",
      "Acoustic analysis",
      "Speech sound segmentation",
      "Scientific discussion in English",
      "International collaboration"
    ],
    "photos": [
      {
        "src": "images/research/bits-praat-training.jpg",
        "caption": "Praat training: segmenting and checking speech sounds in a recording"
      }
    ]
  },
  {
    "id": "stuttering-cognition",
    "area": "cognition",
    "group": "Research",
    "kind": "Research",
    "title": "Cognitive skills and fluency in children who stutter",
    "period": "Jan 2023 – Dec 2024",
    "place": "University of São Paulo, Brazil",
    "people": "Supervisor: Simone Lopes-Herrera, Ph.D.",
    "summary": "A study on attention and other cognitive skills in children who stutter, alongside two systematic reviews.",
    "sections": [
      {
        "h": "In short",
        "p": [
          "With my advisor, Prof. Simone Lopes-Herrera, I took part in research at the university's fluency clinic, assessing children who came with speech difficulties and stuttering."
        ]
      },
      {
        "h": "The question",
        "p": [
          "Are children who stutter more likely to show alterations in cognitive skills such as attention and concentration?"
        ]
      },
      {
        "h": "What we did",
        "list": [
          "Assessed 10 children seen at the fluency clinic, in a study approved by a research ethics committee.",
          "Combined direct assessments with a detailed review of each child's clinical records and reports.",
          "At the same time, ran two systematic literature reviews on stuttering, screening more than 6,000 articles.",
          "Followed PRISMA guidelines and registered the reviews on PROSPERO; managed screening in Rayyan and references in EndNote."
        ]
      },
      {
        "h": "What came out of it",
        "list": [
          "More than half of the children showed alterations in cognitive skills.",
          "Results presented at neuropsychology conferences, and groundwork for future research in this area.",
          "Two undergraduate theses and two systematic reviews, now under review at CoDAS."
        ]
      },
      {
        "h": "My role",
        "p": [
          "I co-supervised these studies from start to finish: reviewing how the assessments were administered, reading each clinical record in detail, analyzing the data and writing."
        ]
      },
      {
        "h": "What I learned",
        "list": [
          "Supervision: moving from delivering my own work to reviewing and correcting others', with a more critical eye.",
          "Managing a very large literature at once, organizing thousands of articles across simultaneous reviews.",
          "Academic writing."
        ]
      }
    ],
    "skills": [
      "Research supervision",
      "Child assessment",
      "Systematic review (PRISMA, PROSPERO)",
      "Literature management (Rayyan, EndNote)",
      "Academic writing"
    ],
    "photos": [
      {
        "src": "images/research/stuttering-group.jpg",
        "caption": "With my research group on stuttering and Prof. Simone Lopes-Herrera, University of São Paulo"
      },
      {
        "src": "images/research/stuttering-rayyan.jpg",
        "caption": "Screening studies in Rayyan for one of the systematic reviews"
      }
    ],
    "links": [
      {
        "label": "Review: cognition and stuttering",
        "href": "detail.html#review-cognition-stuttering"
      },
      {
        "label": "Review: intervention in adults who stutter",
        "href": "detail.html#review-adult-stuttering"
      }
    ]
  },
  {
    "id": "ai-ethics",
    "area": "digital",
    "group": "Research",
    "kind": "Research",
    "title": "Ethical limits of AI in children's learning technologies",
    "period": "May – Dec 2025",
    "place": "Fontys University of Applied Sciences, Netherlands (remote)",
    "people": "With Maria Amália Câmara, Ph.D.",
    "summary": "A review I led on where the ethical limits should be when algorithms shape what children see and learn.",
    "sections": [
      {
        "h": "In short",
        "p": [
          "I reached out to Prof. Amália Câmara, now at Fontys University in the Netherlands, to bring an international dimension to my research. We had worked together before, in the research group on bioethics and public health. We started this project together, and a law PhD student joined later. I led the literature review and the execution of the study."
        ]
      },
      {
        "h": "The question",
        "p": [
          "What are the ethical limits of using artificial intelligence with children? Specifically, how far do digital governance laws allow algorithms to shape the content children consume on social media?"
        ]
      },
      {
        "h": "What we did",
        "list": [
          "An integrative review following PRISMA, registered on PROSPERO, with study screening in Rayyan.",
          "I led the team, the literature review and the execution, guiding a co-author who was new to research."
        ]
      },
      {
        "h": "What we found",
        "list": [
          "Ethical limits do exist, but in practice there is little control over them, especially on the parenting side.",
          "Data governance laws still have no specific guidelines for children, and current guidelines need to be updated to protect minors."
        ]
      },
      {
        "h": "What came out of it",
        "list": [
          "Two oral presentations at the I International SPES Congress on open science, artificial intelligence and sustainability (Recife, 2025).",
          "A manuscript under review at Artificial Intelligence in Medicine."
        ]
      },
      {
        "h": "What I'm taking forward",
        "p": [
          "This project opened a new direction in my research. I plan to keep studying the ethical use of technology with children."
        ]
      },
      {
        "h": "What I learned",
        "list": [
          "A new repertoire in ethics and law, which I did not have before and now use broadly.",
          "Leading a research team through a literature review from start to finish."
        ]
      }
    ],
    "skills": [
      "Research leadership",
      "Integrative review (PRISMA, PROSPERO)",
      "Rayyan",
      "Ethics and digital governance",
      "Interdisciplinary collaboration"
    ],
    "photos": [
      {
        "src": "images/research/ai-ethics-spes.jpg",
        "caption": "Presenting our work at the I International SPES Congress, Recife, 2025"
      }
    ],
    "links": [
      {
        "label": "Manuscript under review",
        "href": "detail.html#review-ai-ethics"
      },
      {
        "label": "Where it started: bioethics research",
        "href": "detail.html#research-group"
      }
    ]
  },
  {
    "id": "tele-education",
    "area": "digital",
    "group": "Research",
    "kind": "Research",
    "title": "Tele-education for health professionals in Pernambuco",
    "period": "Aug 2020 – Dec 2021",
    "place": "Federal University of Pernambuco, Brazil",
    "people": "Supervisor: Tatiana de Paula, Ph.D.",
    "summary": "Monthly live sessions for health professionals, moved from hospital screens to YouTube during the pandemic.",
    "sections": [
      {
        "h": "In short",
        "p": [
          "My first research project, as an undergraduate. Its goal was to provide continuing education to professionals working in the hospital network, through web conferences shown on screens inside hospitals. When the pandemic closed hospitals to us, we adapted the format and moved the sessions fully online, streaming them on YouTube."
        ]
      },
      {
        "h": "What changed with the pandemic",
        "list": [
          "From web conferences shown in hospitals to fully remote live sessions on YouTube.",
          "Reach grew far beyond the hospital network: some sessions reached up to 5,000 viewers."
        ]
      },
      {
        "h": "My role",
        "list": [
          "Invited the guest professionals for each monthly session.",
          "Hosted the virtual room and managed everything happening live.",
          "Moderated participants' questions to spark group discussion.",
          "Ran a satisfaction survey after each session and used the feedback to improve the next one."
        ]
      },
      {
        "h": "From practice to research",
        "p": [
          "It was applied research: we analyzed what was carried out, and the satisfaction data became results presented at conferences and in scientific articles."
        ]
      },
      {
        "h": "What I learned",
        "p": [
          "How much technology matters in connecting practicing professionals with education, and how far it can extend their reach. This is where my interest in digital health and education began, and it led to my master's research."
        ]
      }
    ],
    "skills": [
      "Live streaming and virtual events",
      "Project coordination",
      "Science communication",
      "Survey design and analysis",
      "Adapting under pressure"
    ],
    "photos": [
      {
        "src": "images/research/tele-education-live.jpg",
        "caption": "Hosting a live session with a guest speaker"
      },
      {
        "src": "images/research/tele-education-channel.jpg",
        "caption": "The Telefonoaudiologia channel on YouTube"
      }
    ],
    "links": [
      {
        "label": "YouTube channel",
        "href": "https://www.youtube.com/@telefonoaudiologia9311",
        "ext": true
      },
      {
        "label": "Where it led: master's thesis",
        "href": "detail.html#msc-thesis"
      }
    ]
  },
  {
    "id": "research-group",
    "area": "digital",
    "group": "Research",
    "kind": "Research",
    "title": "Research on bioethics and public health policy",
    "period": "Jan 2023 – Dec 2024",
    "place": "University of Pernambuco, Brazil",
    "people": "Supervisors: Maria Amália Câmara, Ph.D., and Gabriel Lins",
    "summary": "Research on COVID-19, digital health data and health ethics, in a team of medicine, biomedicine and law students.",
    "sections": [
      {
        "h": "In short",
        "p": [
          "A research group that came together during the COVID-19 pandemic to study it as a public health problem, first at an international level. It was my first project with Prof. Amália Câmara and Gabriel Lins, who supervised the work."
        ]
      },
      {
        "h": "What I worked on",
        "list": [
          "Law, the internet, blockchain and Brazil's General Data Protection Law (LGPD).",
          "The use of digital resources in public health policy.",
          "All within two contexts: COVID-19 and transhumanism, at a time when we were all working from home."
        ]
      },
      {
        "h": "Highlight: the article",
        "p": [
          "Our article on the Internet of Things and blockchain in Brazil's public health system (SUS) was one of the 5 most accessed articles of the year in the journal.",
          "It asked how to protect the privacy of SUS users as the system starts collecting patient data through connected devices such as wearables. Based on a narrative review of national and international sources and Brazilian legislation, and comparing the LGPD with Europe's GDPR, it found that data collection is still centralized and built for administrative needs, with little transparency. We proposed a decentralized personal data store on blockchain that gives users more control over their health data, and discussed its tensions with data protection law."
        ]
      },
      {
        "h": "What came next",
        "p": [
          "This first project led to an invitation to lead the research group. As its leader, I coordinated a team of 15 undergraduate members and our research agenda, mentored them through their first research projects and oversaw more than six studies on COVID-19 presented at national health conferences."
        ]
      },
      {
        "h": "What I learned",
        "list": [
          "To work in a truly multidisciplinary team: my colleagues came from medicine, biomedicine and law, and no one else from speech-language pathology.",
          "This is where my interest in health ethics began, which later led me to reach out to Prof. Amália again at Fontys University.",
          "It also gave me lasting relationships with mentors who support my work today."
        ]
      }
    ],
    "skills": [
      "Multidisciplinary collaboration",
      "Health law and data protection (LGPD, GDPR)",
      "Narrative review",
      "Digital health policy",
      "Scientific writing"
    ],
    "links": [
      {
        "label": "Article: CIADS 2021",
        "href": "detail.html#ciads-2021"
      },
      {
        "label": "Where it led: AI ethics research",
        "href": "detail.html#ai-ethics"
      },
      {
        "label": "What came next: leadership",
        "title": "Research group leader",
        "href": "experience.html#leadership"
      }
    ]
  }
];

  const publications = [
  {
    "id": "review-cognition-stuttering",
    "group": "Manuscripts Under Review",
    "area": "cognition",
    "kind": "Under review",
    "title": "Cognitive abilities, language development, and association with stuttering: A systematic review",
    "period": "Submitted 2026",
    "place": "CoDAS: Communication Disorders, Audiology and Swallowing",
    "people": "<b>Camelo, E.</b>, Rosa, L., Silva, A., and Herrera, S.",
    "summary": "A systematic review of how attention, memory and other cognitive abilities relate to stuttering in children and adults, and whether training them can improve fluency. It comes from the research on stuttering I co-supervised at the University of São Paulo.",
    "sections": [
      {
        "h": "Summary",
        "p": [
          "A systematic review of how attention, memory and other cognitive abilities relate to stuttering in children and adults, and whether training them can improve fluency. It comes from the research on stuttering I co-supervised at the University of São Paulo."
        ]
      },
      {
        "h": "What the review covers",
        "p": [
          "A systematic review of studies from the last five years, searched in PubMed, BVS and LILACS following PRISMA.",
          "The studies point to a consistent relationship between stuttering and difficulties in attention, working memory and phonological processing. Children who stutter perform worse on short-term memory and non-word repetition tasks, and in adults the differences appear in tasks with a higher memory load or attentional control. Interventions that train working memory and attention improved fluency in children and adults.",
          "Stuttering should be understood as a multifaceted condition, with cognitive, linguistic and cultural factors, and future research needs more culturally diverse samples."
        ],
        "cls": "abstract"
      }
    ],
    "links": [
      {
        "label": "Related project",
        "href": "detail.html#stuttering-cognition"
      }
    ]
  },
  {
    "id": "review-adult-stuttering",
    "group": "Manuscripts Under Review",
    "area": "cognition",
    "kind": "Under review",
    "title": "Effectiveness of speech intervention in adults who stutter: A systematic review",
    "period": "Submitted 2026",
    "place": "CoDAS: Communication Disorders, Audiology and Swallowing",
    "people": "<b>Camelo, E.</b>, Silva, A., Rosa, L., and Herrera, S.",
    "summary": "A systematic review of which speech-language interventions work for adults who stutter, comparing psychosocial, speech-motor and newer approaches such as telepractice. It comes from my research group on stuttering at the University of São Paulo.",
    "sections": [
      {
        "h": "Summary",
        "p": [
          "A systematic review of which speech-language interventions work for adults who stutter, comparing psychosocial, speech-motor and newer approaches such as telepractice. It comes from my research group on stuttering at the University of São Paulo."
        ]
      },
      {
        "h": "What the review covers",
        "p": [
          "A systematic review of studies from the last five years, searched in LILACS and PubMed following PRISMA.",
          "Integrated approaches that combine psychosocial and speech-motor techniques improved both fluency and emotional well-being, especially when started early. Telepractice and newer approaches such as transcranial direct current stimulation showed potential for people with limited access to therapy.",
          "Age at the start of intervention and the person's disfluency profile influenced outcomes. The literature on adults is still limited, and more robust studies are needed."
        ],
        "cls": "abstract"
      }
    ],
    "links": [
      {
        "label": "Related project",
        "href": "detail.html#stuttering-cognition"
      }
    ]
  },
  {
    "id": "review-ai-ethics",
    "group": "Manuscripts Under Review",
    "area": "digital",
    "kind": "Under review",
    "title": "Ethical limits of algorithms and artificial intelligence in early childhood education: An integrative review",
    "period": "Submitted 2026",
    "place": "Artificial Intelligence in Medicine",
    "people": "<b>Camelo, E.</b>, Mendonça, J., and Arruda, A.",
    "summary": "An integrative review of the ethical limits of algorithms and AI in early childhood education. It finds that ethical limits exist but are poorly enforced, especially at home, and that data governance laws still lack specific guidelines for children. Developed with Prof. Amália Câmara at Fontys University, in a project I led.",
    "sections": [
      {
        "h": "Summary",
        "p": [
          "An integrative review of the ethical limits of algorithms and AI in early childhood education. It finds that ethical limits exist but are poorly enforced, especially at home, and that data governance laws still lack specific guidelines for children. Developed with Prof. Amália Câmara at Fontys University, in a project I led."
        ]
      }
    ],
    "links": [
      {
        "label": "Related project",
        "href": "detail.html#ai-ethics"
      }
    ]
  },
  {
    "id": "cefac-2026",
    "group": "Published Articles",
    "area": "digital",
    "kind": "Accepted",
    "title": "Remote continuing education in speech-language pathology and audiology: Educational technologies in professional training",
    "period": "2026",
    "place": "Revista CEFAC Saúde e Educação",
    "people": "<b>Camelo, E.</b>, and Herrera, S.",
    "summary": "This article reports my master's research: an online survey of 103 speech-language pathologists across Brazil about the technologies used in their remote continuing education, and what makes remote training work.",
    "sections": [
      {
        "h": "Summary",
        "p": [
          "This article reports my master's research: an online survey of 103 speech-language pathologists across Brazil about the technologies used in their remote continuing education, and what makes remote training work."
        ]
      },
      {
        "h": "Abstract (from the thesis this article is based on)",
        "p": [
          "Permanent education in speech-language pathology has benefited from remote training, offering flexibility and expanded access for professionals. However, it is essential for the greater benefit of professionals seeking these education, to map the technological resources used in distance learning programs for speech-language pathologists, evaluate their characteristics, training quality, and the support provided, as well as identify aspects that contribute to successful learning and propose guidelines for developing more effective programs. This study aimed to identify and describe the educational technological resources used in the permanent education of speech-language pathologists who opted for remote learning, assessing their contributions and limitations to learning and professional practice. The research was conducted using a questionnaire constructed and administered to 103 speech-language pathologists from different regions of Brazil, including questions about their experiences in remote training programs. The sample included professionals with diverse practice areas and years of experience. The results highlighted that the evaluated programs were widely recognized as relevant, characterized by modalities that combine recorded and live sessions, promoting flexibility and engagement. Communication platforms, such as web conferencing tools, were the most utilized, underscoring their effectiveness in mediating remote training. Interactivity was identified as a key differentiator, with activities such as clinical case discussions and collaborative tools associated with greater engagement and content retention. Additionally, the need for support among trainees emerged as a central point, particularly for participants with lower digital literacy. Based on these findings, it can be inferred that high-quality remote training programs should prioritize interactivity, provide efficient technical and pedagogical support, incorporate accessibility strategies, and align content with practical market demands."
        ],
        "cls": "abstract"
      }
    ],
    "links": [
      {
        "label": "Thesis (USP repository)",
        "href": "https://repositorio.usp.br/single.php?_id=003243055&locale=en_US",
        "ext": true
      },
      {
        "label": "Related project",
        "href": "detail.html#msc-thesis"
      }
    ]
  },
  {
    "id": "dyslexia-bilinguals",
    "group": "Book Chapter",
    "area": "language",
    "kind": "Book chapter",
    "title": "Phonological dyslexia in bilinguals: Challenges and specificities in assessment",
    "period": "2026",
    "place": "Topics in Neuropsychology: Bilingualism and Cognition, Vol. 1, pp. 31–37. Editora Ampla (in Portuguese)",
    "people": "<b>Camelo, E. M. A.</b>, Cardoso, A. D., Silva, A. G. da, and Groetares, M. Eds. V. Guinle and R. P. Fonseca",
    "summary": "A chapter on the challenges of assessing phonological dyslexia in bilingual readers, part of an e-book on bilingualism and cognition written with professionals from different health areas for the education of health professionals.",
    "sections": [
      {
        "h": "Summary",
        "p": [
          "A chapter on the challenges of assessing phonological dyslexia in bilingual readers, part of an e-book on bilingualism and cognition written with professionals from different health areas for the education of health professionals."
        ]
      }
    ],
    "links": [
      {
        "label": "Read the chapter (PDF)",
        "href": "https://drive.google.com/file/d/1943Y4w3GiRfMggjJ6RenG2ToMPvWtArX/view",
        "ext": true
      }
    ]
  },
  {
    "id": "reas-2025",
    "group": "Published Articles",
    "area": "digital",
    "kind": "Article",
    "title": "Speech therapy guidance for teleconsultations of children with neurogenic dysphagia",
    "period": "2025",
    "place": "Revista Eletrônica Acervo Saúde, 25, e17409",
    "people": "Martins, W., <b>Camelo, E.</b>, et al.",
    "summary": "A systematic review of what speech-language pathologists can safely recommend through teleconsultation to families of children with neurogenic dysphagia.",
    "sections": [
      {
        "h": "Summary",
        "p": [
          "A systematic review of what speech-language pathologists can safely recommend through teleconsultation to families of children with neurogenic dysphagia."
        ]
      },
      {
        "h": "Abstract",
        "p": [
          "Objective: Present speech therapy guidance that can be provided via teleconsultation to caregivers and parents of children with neurogenic dysphagia. Methods: Systematic review according to the PRISMA model and PCC strategy, based on the guiding question “What speech therapy guidance can be given during teleconsultation to caregivers and parents of children with neurogenic dysphagia?”. The articles were searched in the LILACS, MEDLINE, PubMed, SciELO and Cochrane Library databases. 3,033 articles were identified and 15 were definitively included to compose the review. Results: Regarding the profile, most research was carried out in South American countries. Possible guidelines to be offered via teleconsultation included suggestions on offering the diet using utensils, the need for adaptations to food consistency and knowledge about posture and carrying out auxiliary swallowing maneuvers during eating. Final considerations: The evidence found is of low methodological quality, but presents important aspects in the teleconsultation scenario, which are generally related to adaptations in the patient's eating dynamics, including learning posture strategies and promoting food safety."
        ],
        "cls": "abstract"
      }
    ],
    "links": [
      {
        "label": "Read the article (DOI)",
        "href": "https://doi.org/10.25248/reas.e17409.2025",
        "ext": true
      }
    ]
  },
  {
    "id": "cadped-2024",
    "group": "Published Articles",
    "area": "digital",
    "kind": "Article",
    "title": "Wearable sensors for cardiological monitoring in the SUS: Regulatory challenges and impacts on Brazilian public health",
    "period": "2024",
    "place": "Caderno Pedagógico, 21(12), e10336",
    "people": "Lins, G., <b>Camelo, E.</b>, et al.",
    "summary": "A scoping review of the regulatory barriers to using wearable heart-monitoring devices in Brazil's public health system.",
    "sections": [
      {
        "h": "Summary",
        "p": [
          "A scoping review of the regulatory barriers to using wearable heart-monitoring devices in Brazil's public health system."
        ]
      },
      {
        "h": "Abstract",
        "p": [
          "Cardiovascular diseases are the leading cause of death in Brazil, with approximately 400,000 deaths annually, which corresponds to almost 30% of all deaths in the country. In addition to the impact on mortality, these conditions generate an enormous economic burden for the health system, with costs associated with the treatment of diseases such as heart attack and heart failure exceeding R$50 billion per year. In this context, the use of wearable devices for continuous monitoring of cardiovascular parameters emerges as an opportunity to improve the management and prevention of these diseases. This study conducts a scoping review of the regulatory challenges involved in the incorporation of wearables into the Unified Health System (SUS), with a focus on cardiological monitoring. Articles published between 2019 and 2024 were analyzed, discussing issues such as data accuracy, interoperability between systems, protection of sensitive data, and training of health professionals. In addition, the study examines the economic and social implications of the adoption of these technologies in a context of profound socioeconomic inequalities. The results indicate that, although wearables have the potential to transform cardiovascular care in Brazil, regulatory and technical barriers still limit their large-scale adoption in the SUS. Adequate regulation, aligned with the General Data Protection Law (LGPD), and investments in infrastructure and training are essential for the safe and effective integration of these technologies into public health."
        ],
        "cls": "abstract"
      }
    ],
    "links": [
      {
        "label": "Read the article (DOI)",
        "href": "https://doi.org/10.54033/cadpedv21n12-066",
        "ext": true
      }
    ]
  },
  {
    "id": "ciads-2021",
    "group": "Published Articles",
    "area": "digital",
    "kind": "Article",
    "title": "Internet of Things and blockchain in the Unified Health System: The protection of sensitive data under the General Data Protection Law",
    "period": "2021",
    "place": "Cadernos Ibero-Americanos de Direito Sanitário, 10(1), 93–112",
    "people": "Camara, A., Lins, G., <b>Camelo, E.</b>, Oliveira, F., and Medeiros, N.",
    "summary": "How to protect patients' privacy as Brazil's public health system collects data through connected devices, with a proposal based on a blockchain personal data store. One of the 5 most accessed articles of the year in the journal.",
    "sections": [
      {
        "h": "Summary",
        "p": [
          "How to protect patients' privacy as Brazil's public health system collects data through connected devices, with a proposal based on a blockchain personal data store. One of the 5 most accessed articles of the year in the journal."
        ]
      },
      {
        "h": "Abstract",
        "p": [
          "Objective: Brazilian Unified Health System (SUS, in Portuguese) has invested in Internet of Things (IoT) technologies to collect data from patients. This article aims to point out the weaknesses regarding the privacy of users of the SUS and to propose a theoretical solution, yet to be evaluated, based on a Personal Data Storages (PDS) infrastructure or on blockchain security. Methods: a narrative review of national and international literature related to instruments, policies, and cases related to information and communication technologies in health was conducted to point out the weaknesses regarding the privacy of users of this system. Results: there is still a lack of transparency in the treatment of personal data and little accountability on the part of citizens, making it necessary to change the technological and governance strategy. Conclusion: PDS empowers users as it gives greater control and transparency over the treatment of data. However, this solution, in a system like the one used by its Computer Department, can compromise the accuracy of the data used in public policies, while it can compromise some citizens' rights, as this data is saved in records and the metadata is publicly available. The implementation of the PDS does not yet have the prospect of an optimal result: there are still methodological restrictions regarding the rights of citizens or the efficiency of the State. But it is a step in civil empowerment and an improvement required by law in terms of privacy and the protection of personal data."
        ],
        "cls": "abstract"
      }
    ],
    "links": [
      {
        "label": "Read the article (DOI)",
        "href": "https://doi.org/10.17566/ciads.v10i1.657",
        "ext": true
      },
      {
        "label": "PDF",
        "href": "https://www.cadernos.prodisa.fiocruz.br/index.php/cadernos/article/download/657/793/3748",
        "ext": true
      },
      {
        "label": "Related research",
        "href": "detail.html#research-group"
      }
    ]
  },
  {
    "id": "cointer-2020",
    "group": "Published Articles",
    "area": "digital",
    "kind": "Article",
    "title": "Satisfaction with learning in times of pandemic: Reports and impressions of health students",
    "period": "2020",
    "place": "COINTER PDVS, 20(13)",
    "people": "Correia, A., <b>Camelo, E.</b>, et al.",
    "summary": "How health students experienced learning during the first months of the COVID-19 pandemic, and how satisfied they were with it.",
    "sections": [
      {
        "h": "Summary",
        "p": [
          "How health students experienced learning during the first months of the COVID-19 pandemic, and how satisfied they were with it."
        ]
      },
      {"h": "Abstract (translated from Portuguese)", "p": ["On growing alert since the end of 2019, the pandemic unfolded worldwide, causing major changes in social structures that had, in theory, been stable. Higher education institutions had to close their doors and suspend in-person classes. The Brazilian Ministry of Education (MEC), in Ordinance No. 343 of March 17, 2020, recommended replacing them with classes delivered through synchronous and/or asynchronous digital tools for as long as the pandemic lasted. Institutions that followed this recommendation had to adapt quickly to the new scenario and create strategies for remote teaching. It is therefore important to assess university students' satisfaction with learning during the pandemic. Methodology: This is a cross-sectional study with a quantitative, descriptive approach. The non-probability sample included health students from a private college in Pernambuco. All students enrolled and attending remote classes were invited. The study was approved by a research ethics committee (approval No. 4,076,216). Data were collected through an electronic instrument built by the researchers in Google Forms, sent by email to the students with the help of the class representatives of each semester, who shared the access link. Results: Of the 77 students who answered the questionnaire, about 33.8% did not agree with Ordinance No. 343; 100% frequently use some information and communication technology device; and 35.1% rated their experience with remote teaching activities as fair. Conclusions: Overall, students reported being dissatisfied with the education offered, and they did not approve of the legal measure for remote educational activities. Unstable connections, the quality of classes and their experiences with the learning environment were the main reasons for dissatisfaction. This highlights the need to rethink the whole model created for remote activities, to reduce dissatisfaction, widen access and improve the learning process of health students."], "cls": "abstract"}],
    "links": [
      {
        "label": "Read the article (DOI)",
        "href": "https://doi.org/10.31692/IICOINTERPDVS.0025",
        "ext": true
      }
    ]
  }
];

  const presentations = [
    ['digital', '2025', 'Artificial intelligence in early childhood education: Necessary measures for digital governance', '<b>Camelo, E.</b>, Mendonça, J., and Arruda, M.', 'Oral presentation, I International SPES Conference: Open Science, Artificial Intelligence, and Sustainability, Recife'],
    ['digital', '2025', 'Artificial intelligence in early childhood education: Ethical and regulatory challenges for child development', '<b>Camelo, E.</b>, Mendonça, J., and Arruda, M.', 'Oral presentation, I International SPES Conference: Open Science, Artificial Intelligence, and Sustainability, Recife'],
    ['cognition', '2025', 'Attentional skills and childhood-onset fluency disorder: A literature review', '<b>Camelo, E.</b>, Rosa, L. A. S., and Herrera, S. A. L.', 'International Conference of Neuropsychology, Foz do Iguaçu'],
    ['digital', '2021', 'Remote educational actions, devices, strategies, and resources in speech therapy: An integrative literature review', '<b>Camelo, E.</b>', 'National Conference of Speech-Language Pathology, São Paulo'],
    ['digital', '2021', 'Impact and satisfaction of virtual educational actions in human communication health in Pernambuco', '<b>Camelo, E.</b>', 'National Conference of Speech-Language Pathology, São Paulo'],
    ['language', '2021', 'Profile of hearing health protection and promotion measures for parents during early childhood', '<b>Camelo, E.</b>', 'National Conference of Speech-Language Pathology, São Paulo'],
    ['digital', '2020', 'Learning in times of COVID-19: Perceptions of speech therapy students about educational tools, resources, and strategies', '<b>Camelo, E.</b>', 'National Conference of Speech-Language Pathology, São Paulo'],
    ['digital', '2020', 'Mobile applications for human communication health: An integrative literature review', '<b>Camelo, E.</b>', 'National Conference of Speech-Language Pathology, São Paulo'],
    ['cognition', '2020', 'Anxiety and stress in times of pandemic: An analysis based on reports from undergraduate students', 'Correia, A., and <b>Camelo, E.</b>', 'International Conference of Health Sciences, Brasília · Honorable mention'],
    ['digital', '2020', 'Digital barriers to learning in times of pandemic: An analysis among undergraduate speech-language pathology students', '<b>Camelo, E.</b>, and Correia, A.', 'International Conference of Health Sciences, Brasília'],
    ['cognition', '2020', 'COVID-19 coping strategies for health students', '<b>Camelo, E.</b>', 'Regional Anatomy Conference, Rio de Janeiro'],
    ['digital', '2020', 'Satisfaction with learning in times of the COVID-19 pandemic: Reports and impressions of health students', 'Correia, A., and <b>Camelo, E.</b>', 'International Conference of Health Sciences, Brasília'],
    ['cognition', '2020', "Impact of gender differences on the development of Alzheimer's disease", '<b>Camelo, E.</b>, and Lins, G.', 'North and Northeast Public Health Conference, Salvador'],
    ['cognition', '2018', 'Autism spectrum disorder and the effects of medication use', '<b>Camelo, E.</b>', 'Regional Meeting on Speech Therapy and Autism, Recife'],
    ['cognition', '2018', 'Sensory collapse and alternative treatment in autism spectrum disorder', '<b>Camelo, E.</b>, and Correia, A.', 'Regional Meeting on Speech Therapy and Autism, Recife']
  ];


  // Conference papers and posters I mentored (shown as a list)
  const posters = [
    ['2024', 'The impact of the kangaroo method on exclusive breastfeeding for premature infants: A literature review', 'Lima, R., and <b>Camelo, E.</b>', 'National Conference on Maternal Health and Child Development, São Paulo'],
    ['2023', 'The importance of breastfeeding in the orofacial development of infants: A literature review', 'Galvão, P. E. B. S., and <b>Camelo, E.</b>', 'National Conference on Maternal Health and Child Development, São Paulo'],
    ['2023', 'The influence of social determinants of health on prenatal dental care: A literature review', 'Borba, L. F. A., Amarante, F. N., Silva, G. R., and Galvão, P. E. B. S. · Dentistry undergraduates, Faculdade Pernambucana de Saúde', 'National Conference on Maternal Health and Child Development'],
    ['2020', 'Impact of the political-institutional scenario on confronting the COVID-19 pandemic in North Africa', '<b>Camelo, E.</b>, and Lins, G.', 'North and Northeast Public Health Conference, Salvador'],
    ['2020', 'Interterritorial traffic control for the containment of COVID-19 in South America', '<b>Camelo, E.</b>, and Lins, G.', 'North and Northeast Public Health Conference, Salvador']
  ];

  // Leadership activities (shown as a list with descriptions)
  const leadership = [
    { title: 'Graduate mentee', period: 'Jan 2026 – present', place: 'BRASA, Brazilian Student Association',
      photos: [
        { src: 'images/activities/brasa-mentees.jpg', caption: "BRASA's team of graduate mentees at Enter, an artificial intelligence startup founded and led by Brazilians studying at international universities." },
        { src: 'images/activities/brasa-bain-speaker.jpg', caption: 'With the mentees and our speaker, a manager of healthcare projects at Bain & Company, after a discussion with her.' },
        { src: 'images/activities/brasa-badge.jpg', caption: 'At a talk held at Bain & Company.' },
        { src: 'images/activities/brasa-event.jpg', caption: "At the BRASA conference in São Paulo, held at the headquarters of iFood, Brazil's largest delivery company." },
        { src: 'images/activities/brasa-panel.jpg', caption: 'The panel "A Resounding Cry: The Forces That Move Brazil", a talk on women\'s entrepreneurship and the place of women in the job market.' }
      ],
      text: "Selected as one of 30 graduate mentees in BRASA's mentoring program for Brazilian students who want to study abroad. More than 8,000 people applied for 60 places (30 graduate and 30 undergraduate), an acceptance rate of about 1%. I joined because I want to build an international career and represent my country abroad.",
      list: ['Weekly activities with experienced mentors who study at universities abroad.', 'Learning how international graduate admissions work, step by step.', 'Part of a network that connects Brazilian students around the world and helps bring more of them abroad to represent Brazil.'] },
    { title: 'Youth Committee member', period: 'Jan 2024 – Aug 2026', place: 'Brazilian Society of Neuropsychology (SBNp)',
      photos: [
        { src: 'images/activities/sbnp-youth-committee.jpg', caption: 'The SBNp Youth Committee at the International and Brazilian Congress of Neuropsychology.' },
        { src: 'images/activities/sbnp-debora.jpg', caption: 'With Deborah Azambuja, founding member of SBNp and my supervisor in the cognitive rehabilitation working group.' },
        { src: 'images/activities/sbnp-colleague.jpg', caption: 'With a fellow speech-language pathologist from our cognitive rehabilitation working group.' },
        { src: 'images/activities/sbnp-congress-23.jpg', caption: 'With members of the Youth Committee at the 23rd International and Brazilian Congress of Neuropsychology.' },
        { src: 'images/activities/sbnp-congress-24.jpg', caption: 'A talk at the 24th International and Brazilian Congress of Neuropsychology.' },
        { src: 'images/activities/sbnp-canoeing.jpg', caption: 'Canoeing into a waterfall: during one of the events, we also made time for outdoor activities together.' },
        { src: 'images/activities/sbnp-news.jpg', caption: 'An issue of SBNp News, the newsletter we published every month.' }
      ],
      text: "Member of the society's Youth Committee, working to bring students closer to neuropsychology.",
      list: ['Organized events for students and early-career professionals.', 'Encouraged other students to take part in training opportunities in neuropsychology.', 'Member of the discussion group on cognitive rehabilitation practices.'] },
    { title: 'Research group leader', period: 'Jan 2023 – Dec 2024', place: 'University of Pernambuco, Brazil · Supervisor: Gabriel Lins, Ph.D.',
      text: 'Led a research group of 15 undergraduate members working on bioethics, transhumanism and public health policy.',
      list: ["Coordinated monthly remote meetings and the group's research agenda.", 'Mentored members through their first research projects.', 'Organized events with invited speakers.', 'Oversaw 6+ studies on COVID-19 presented at national health conferences.'],
      link: { label: 'The research', href: 'detail.html#research-group' } },
    { title: 'Class representative', period: '2018 – 2020', place: 'São Miguel University Center, Brazil · B.A. in Speech-Language Pathology',
      photos: [
        { src: 'images/activities/classrep-class.jpg', caption: 'My undergraduate class in Speech-Language Pathology at São Miguel University Center.' }
      ],
      text: 'Elected representative of my class during the undergraduate program.',
      list: ['Represented the class in meetings with the program coordination and faculty.', "Brought students' questions, requests and feedback to the coordination, and kept the class informed about academic decisions and deadlines.", 'Helped organize class activities and academic events.'] }
  ];

  // Newsletter communications: SBNp News, the official newsletter of the Brazilian Society of Neuropsychology
  const nl = (id, title, date, column, page, drive, about) => ({
    id, area: 'cognition', kind: 'Newsletter', group: 'Newsletter Communications', title,
    period: date, place: `SBNp News · ${column} column, p. ${page}`, people: '',
    summary: about,
    sections: [
      { h: 'About this piece', p: [about] },
      { h: 'Where it was published', p: [`SBNp News, the official newsletter of the Brazilian Society of Neuropsychology for students and professionals, in the \u201c${column}\u201d column (${date}, p. ${page}).`] }
    ],
    links: [{ label: 'Read in SBNp News', href: `https://drive.google.com/file/d/${drive}/view`, ext: true }]
  });

  const ta = (id, area, course, years, place, extra) => ({
    id, area, kind: 'Teaching assistant', group: 'Teaching Assistant', title: course, period: years, place, people: '',
    summary: `Teaching assistant in ${course}.`,
    sections: [
      ...(extra ? [{ h: 'About', p: [extra] }] : []),
      { h: 'What I did', p: ['[Your role in the course: classes you supported, activities you prepared, how you worked with the students.]'] },
      { h: 'Photos', p: ['[Add photos of classes or activities, if you have them.]'] }
    ]
  });
  const mentee = (id, area, name, level, school, year, topic, collab) => ({
    id, area, kind: level === 'MSc' ? "Master's thesis mentoring" : 'Undergraduate thesis mentoring', group: level === 'MSc' ? "Master's Thesis Mentoring" : 'Undergraduate Thesis Mentoring', title: topic, period: year,
    place: school, people: `${name}, ${level === 'MSc' ? "master's student" : 'undergraduate student'}${collab ? ' · with ' + collab : ''}`,
    summary: `${level === 'MSc' ? "Master's thesis" : 'Undergraduate thesis'} · ${name}`,
    sections: [{ h: 'My role as mentor', p: ['[How you supported this student: designing the question, methods, writing, presenting.]'] }]
  });

  const experience = [
    { id: 'private-practice', area: 'language', kind: 'Clinical practice', group: 'Clinical Practice', title: 'Speech-language pathologist in private practice',
      period: 'Jan 2022 – present', place: 'Multidisciplinary clinics, Brazil', people: '',
      summary: 'Speech-language intervention with children in multidisciplinary teams, and training of intern teams.',
      sections: [
        { h: 'In short', p: ['I work as a speech-language pathologist in multidisciplinary clinics, as part of holistic teams with psychologists, occupational therapists, physiotherapists, ABA therapists, educational psychologists and psychomotor therapists.', 'I work mainly with autistic children and with typically developing children who have speech delays. I have also worked with children with developmental language disorder (DLD) and oppositional defiant disorder (ODD).'] },
        { h: 'What I do', list: ['Assess children and plan their intervention, using techniques that help each child improve their speech.', 'Work on speech sound acquisition, with extensive experience in the phonemes of Brazilian Portuguese.', 'Discuss each case with professionals from different fields who work with the same child.', 'Write patient assessments and clinical reports.', 'Helped build clinical protocols for the speech-language pathology service.'] },
        { h: 'Training interns', p: ['I have led more than one team of interns, four in total, training them in clinical practice, especially in behavior management with autistic children and in phoneme stimulation. Today they are excellent professionals, and I recommend them to the teams I work with.'] },
        { h: 'What I take from it', p: ['Years of clinical practice taught me to assess children and choose the right techniques for each one, to manage behavior during sessions and to connect with children. Above all, they taught me to work as part of a team, bringing many professional perspectives together around a single child.'] }
      ],
      skills: ['Speech sound assessment and intervention', 'Brazilian Portuguese phonology', 'Behavior management', 'Interdisciplinary collaboration', 'Intern training and supervision', 'Clinical protocols and reports'],
      photos: [
        { src: 'images/research/clinic-portrait.jpg', caption: 'In front of the speech therapy mural at one of the clinics.' },
        { src: 'images/research/clinic-construir.jpg', caption: 'Grupo Construir, one of the multidisciplinary clinics where I have worked.' },
        { src: 'images/research/clinic-phoneme-game.jpg', caption: 'A phoneme wheel game to stimulate the /s/ sound.' },
        { src: 'images/research/clinic-team-selfie.jpg', caption: "With a colleague and a patient. The child's face is blurred for privacy." },
        { src: 'images/research/clinic-vocabulary-cards.jpg', caption: 'Picture cards for vocabulary and speech practice.' },
        { src: 'images/research/clinic-motor-activity.jpg', caption: 'A movement-based activity in the clinic hallway.' },
        { src: 'images/research/clinic-puzzle.jpg', caption: 'Puzzles and shape activities during a session.' },
        { src: 'images/research/clinic-digital-story.jpg', caption: 'A digital storybook used in therapy.' },
        { src: 'images/research/clinic-computer-activity.jpg', caption: 'A computer activity with headphones.' },
        { src: 'images/research/clinic-drawing.jpg', caption: "Drawing and writing practice. The child's face is blurred for privacy." },
        { src: 'images/research/clinic-lion-puzzle.jpg', caption: 'An animal puzzle on the play mat.' },
        { src: 'images/research/clinic-ball-pit.jpg', caption: 'Sensory play in the ball pit.' },
        { src: 'images/research/clinic-routine-tablet.jpg', caption: 'A visual routine board on a tablet. Names are blurred for privacy.' },
        { src: 'images/research/clinic-picnic.jpg', caption: 'A picnic at the clinic.' }
      ] },
    { id: 'telepractice', area: 'speech', kind: 'Clinical practice', group: 'Clinical Practice', title: 'Telepractice and remote developmental screening',
      period: 'May 2022 – Oct 2025', place: 'Health Center and Kidbrains', people: '',
      summary: '800+ remote developmental screenings of children, from welcoming families to phonetic screening, plus digital materials for online therapy.',
      sections: [
        { h: 'In short', p: ['I worked as the speech-language pathologist in remote developmental screenings and online therapy for children. Beyond the clinical work, I was often the first contact families had with the service: I welcomed them, explained how everything worked and helped them understand what therapy could offer their child.'] },
        { h: 'What I did', list: ['Welcomed families, explained the procedures and presented the therapy plans offered.', "Led the initial briefing with parents and caregivers: how therapy would work and its expected benefits for their child.", 'Carried out a brief assessment and a phonetic screening of each child to identify their speech and language difficulties, in more than 800 remote screenings.', 'Provided online speech-language therapy sessions for children.'] },
        { h: 'Materials I created', p: ['I developed many digital materials for both assessment and therapy, designed to help children stay engaged and participate more during online sessions.'] }
      ],
      skills: ['Telepractice', 'Developmental screening', 'Phonetic analysis', 'Family guidance', 'Digital material design'],
      photos: [
        { src: 'images/research/telepractice-consultation.jpg', caption: 'The online platform used for speech consultations.' },
        { src: 'images/research/telepractice-game.jpg', caption: 'An activity used with children during online sessions.' },
        { src: 'images/research/telepractice-session.jpg', caption: 'Ready for an online session.' },
        { src: 'images/research/telepractice-tablet.jpg', caption: 'Another online session, from a tablet.' }
      ] },
    { id: 'censupeg', area: 'cognition', kind: 'Faculty lecturer', group: 'Faculty and Lecturer', title: 'Technological resources in neuropsychology',
      period: 'Nov 2024 – present', place: 'Censupeg University Center, Brazil · Specialization in Cognitive Neuroscience', people: '',
      summary: 'I lead an online postgraduate course on technology for neuropsychological assessment and rehabilitation.',
      sections: [
        { h: 'In short', p: ['I lead this fully online course for psychologists. My main role is to introduce them to the technologies available in health care today, especially for neuropsychological assessment and rehabilitation, and to encourage them to bring these tools into their own clinical practice.'] },
        { h: 'What I teach', list: ['Neuroimaging and other imaging technologies that support diagnosis today.', 'Software and programs that mediate clinical practice, in both assessment and rehabilitation.', 'How to use technology to make the day-to-day practice of neuropsychology easier.'] },
        { h: 'What I do', list: ['Manage all aspects of the course for classes of about 40 students: content design and curation, exam development, grading and final assessment.'] }
      ],
      skills: ['Course design', 'Online teaching', 'Neuroimaging', 'Digital tools for assessment and rehabilitation', 'Telehealth'] },
    { id: 'usp-fluency', area: 'cognition', kind: 'Lecturer', group: 'Faculty and Lecturer', title: 'Fluency clinical placement',
      period: 'Aug 2023 – Oct 2024', place: 'University of São Paulo, Brazil · B.Sc. in Speech-Language Pathology', people: 'PAE teaching fellowship, 2024',
      summary: 'Co-taught the fluency clinical placement with my supervisor, for a class of 40 students working with children who stutter.',
      sections: [
        { h: 'In short', p: ['At the University of São Paulo speech-language pathology clinic, I was co-teacher of the fluency clinical placement alongside my supervisor. We shared every part of the course: we both taught, we both graded, and we both supervised the students in their therapy sessions with children.', 'We followed a class of 40 undergraduate students, who took turns at the clinic in groups of 20.'] },
        { h: 'What I did', list: ['Taught theoretical classes on childhood stuttering, alongside my supervisor.', "Graded students' work and clinical reports.", "Watched all the students' therapy sessions with children.", 'Adjusted the therapy plans and adapted whatever was needed for each child.', "Made sure each intervention was carried out correctly and supported the child's progress throughout the placement."] }
      ],
      skills: ['Co-teaching', 'Clinical supervision', 'Treatment planning', 'Student assessment', 'Childhood stuttering'],
      photos: [
        { src: 'images/research/fluency-class.jpg', caption: 'The class at the University of São Paulo.' },
        { src: 'images/research/fluency-clinic-team.jpg', caption: 'With students at the clinic.' },
        { src: 'images/research/fluency-supervised-session.jpg', caption: "A supervised session. The child's face is blurred for privacy." },
        { src: 'images/research/fluency-session-game.jpg', caption: 'A game used during a supervised therapy session.' }
      ] },
    ta('ta-linguistics', 'language', 'Linguistics', '2023, 2024', 'University of São Paulo, Brazil', 'In 2023 I co-taught this undergraduate course through a PAE teaching fellowship.'),
    ta('ta-child-language', 'language', 'Child language I', '2023, 2024', 'University of São Paulo, Brazil'),
    ta('ta-digital-health', 'digital', 'Digital health', '2022', 'University of São Paulo, Brazil'),
    ta('ta-aging', 'cognition', 'Language disorders of aging', '2021', 'São Miguel University Center, Brazil'),
    ta('ta-oral-motor', 'speech', 'Oral motor function', '2020', 'São Miguel University Center, Brazil'),
    ta('ta-oral-language', 'language', 'Oral language acquisition', '2019, 2020', 'São Miguel University Center, Brazil'),
    mentee('m-mchat', 'language', 'Monique Nery Bonina', 'MSc', 'Federal University of Pernambuco', '2026', 'M-CHAT-R in well-child care for early autism screening'),
    mentee('m-tms', 'cognition', 'Alexssandra K. da Silva Correia', 'MSc', 'Federal University of Pernambuco', '2024', 'Transcranial magnetic stimulation and oral motor therapy in temporomandibular disorders'),
    mentee('m-dysphagia', 'digital', 'Taciana Melo Cruz', 'MSc', 'Federal University of Pernambuco', '2022', 'A teleconsultation program for caregivers of children with neurogenic dysphagia', 'Prof. Tatiana de Paula'),
    mentee('m-bilingual', 'language', 'Maria Eduarda Paschoalini dos Santos', 'BSc', 'University of São Paulo', '2025', 'Oral language acquisition in children attending bilingual schools', 'Prof. Simone Lopes-Herrera'),
    mentee('m-cannabidiol', 'cognition', 'Eli Alves Camelo Júnior', 'BSc', 'Brazilian Center University', '2025', 'Effects of cannabidiol use on oral health', 'Prof. Ana Carolina Leitão'),
    mentee('m-sr-cognition', 'cognition', 'Laura Antonia Rosa', 'BSc', 'University of São Paulo', '2024', 'Cognitive skills, language development and stuttering: a systematic review', 'Prof. Simone Lopes-Herrera'),
    mentee('m-sr-adults', 'cognition', 'Ariany Toledo da Silva', 'BSc', 'University of São Paulo', '2024', 'Speech therapy intervention in adults who stutter: a systematic review', 'Prof. Simone Lopes-Herrera'),
    { id: 'medical-writing', area: 'digital', kind: 'Medical writing', group: 'Medical Writing', title: 'Medical writer for a global healthcare company',
      period: 'Mar 2026 – present', place: 'London-based company · representative for Brazil', people: '',
      summary: 'Scientific content for major companies in the health sector, bridging Brazilian and global content.',
      text: 'I write scientific content for a London-based global healthcare company, where I represent Brazil. I develop content for major companies in the health sector, such as AstraZeneca, Novartis and Sanofi.',
      list: ['Develop scientific content with a focus on scientific accuracy.', 'Bridge Brazilian and global content, adapting materials into Brazilian Portuguese for the Brazilian audience.', 'Write texts that are scientifically rigorous and also clear for readers on digital channels.'],
      sections: [] },
    nl('nl-adhd-remission', 'Remission of symptoms in ADHD', 'Nov 2025', 'Myths and Truths', 14, '1QIQV4syVVZnj7lU9fYFn8O0F6jaDjhaI', 'Myths and truths about the remission of ADHD symptoms across the lifespan.'),
    nl('nl-sleep-cognition', 'The impacts of sleep disorders on cognition', 'Sep 2025', 'Practice as It Is', 14, '1q8dVPYPaz_NxUzOa6NusrLnM5YFXlA5l', 'How sleep disorders affect cognitive functioning, and what this means in practice.'),
    nl('nl-certification', 'Everything about the SBNp certification exam', 'Aug 2025', 'Inside the Academy', 13, '1IOpUaOhFQ2Q_EqOce7-sMWhLM0VXid8s', 'A guide to the certification exam of the Brazilian Society of Neuropsychology.'),
    nl('nl-abi-quiz', 'Neuropsychological rehabilitation in acquired brain injuries: A scientific quiz', 'Jul 2025', 'Myths and Truths', 11, '15ZMSPJBRiZLsm6ueV1n956aAh2gSk9OK', 'A myths-and-truths quiz on rehabilitation after acquired brain injury.'),
    nl('nl-mirror-writing', 'The neural basis of mirror writing', 'Jun 2025', 'Neuropsychology Curiosities', 13, '1UNSUbjvgbL4VUJbYLWgfQcr-B0JPZ7xv', 'What we know about the brain mechanisms behind mirror writing.'),
    nl('nl-neuroprotection', 'Lifestyle and neuroprotection', 'May 2025', 'Practice as It Is', 15, '1XLhUwyy7UbLw6zDcTBEfYSnKE_w1M00N', 'How lifestyle factors relate to brain health and neuroprotection.'),
    nl('nl-tribute-caramelli', 'A Tribute to Paulo Caramelli', 'Apr 2025', 'Inside the Academy', 20, '12vbE9G0bRwIEE-JhWZh38X5QWTn5-Qhi', 'A tribute to a member of the Brazilian Academy of Neuropsychology.'),
    nl('nl-aphasia-types', 'Decoding and identifying the different manifestations of aphasia', 'Mar 2025', 'Expert Types', 5, '1i0EOkww-HoTj7XdFn0FTmMMALgyE5SKA', 'A guide to recognizing the different types of aphasia.'),
    nl('nl-self-awareness', 'Neuropsychological rehabilitation of alterations in self-awareness', 'Jan 2025', 'Evidence-Based Clinical Practice', 7, '174gdYOmj5eoDhaX9zWZa6GUB9pWEWuRi', 'Evidence on rehabilitation approaches for impaired self-awareness after brain injury.'),
    nl('nl-functionality', 'Functionality', 'Nov 2024', 'Daily Cognitive Functions', 11, '1umjD1TUUM96YOTlCvt_WKPRHiHKiNi5O', 'Functionality as a cognitive and clinical concept in neuropsychology.'),
    nl('nl-memory-faq', 'Memory rehabilitation FAQs', 'Oct 2024', 'Ask SBNp', 12, '1dqpaCDxUwzhGKnKO06hzbfkvu5Z3h4Go', 'Answers to frequent questions about memory rehabilitation.'),
    nl('nl-nomination', 'Nomination', 'Sep 2024', 'Daily Cognitive Functions', 13, '1qXObhbNzOo7dZcRYaxtztpIwXNYzQDG7', 'Naming as an everyday cognitive function: what it involves and how it can be affected.'),
    nl('nl-slp-hospital', 'The speech-language pathologist\'s role in neuropsychology at the hospital', 'Aug 2024', 'Practice as It Is', 18, '1btqcYUYJNtcWCquO2oI-4n2OmoUjMl-g', 'How speech-language pathologists contribute to neuropsychological care in hospital settings.'),
    nl('nl-tribute-azambuja', 'A Tribute to Déborah Amaral de Azambuja', 'Jul 2024', 'Inside the Academy', 21, '1SS1bAeTsn9uhNM8S0mlKzADDw60Qty6p', 'A tribute to a member of the Brazilian Academy of Neuropsychology.'),
    nl('nl-tms-aphasia', 'Transcranial magnetic stimulation for aphasic disorders: What is the evidence?', 'Jun 2024', 'Evidence-Based Clinical Practice', 7, '1GGpLjA-VXQfkVQi_7iB0lUDgneLrbd6w', 'What current evidence says about transcranial magnetic stimulation in the treatment of aphasia.'),
    nl('nl-tribute-fonseca', 'A Tribute to Rochelle Paz Fonseca', 'May 2024', 'Inside the Academy', 17, '1khw8oH1f_K3gjdaSk9aCx3zZ1LivuSzD', 'A tribute to a member of the Brazilian Academy of Neuropsychology.'),
    nl('nl-numerical-cognition', 'Assessment paradigms for numerical cognition', 'Apr 2024', 'Daily Cognitive Functions', 16, '1myZg9_MzcP2PQiaESMXEiSzzZizSm2fZ', 'A curated review of neuropsychological tests and instruments for assessing numerical skills.')
  ];

  return { projects, publications, presentations, posters, leadership, experience };
})();
