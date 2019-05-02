import React from 'react';

/* eslint-disable global-require */
export const siteColors = {
  offBlack: '#46484a',
  offWhite: '#EFEFEF',
  warning: '#F4A867',
  error: '#F07285',

  darkerPurple: '#854DD0',
  primary: '#9A71D1',
  lighterPurple: '#E2D4F5',

  darkerBlue: '#4270DE',
  secondary: '#4B97E0',
  lighterBlue: '#A9C2F8'
};

export const siteStructure = {
  sections: [
    { name: 'Agenda', scrollTo: 'agenda' },
    { name: 'Sponsors', scrollTo: 'sponsors' },
    { name: 'Prizes', scrollTo: 'prizes' },
    { name: 'FAQ', scrollTo: 'faq' }
  ]
};

export const siteButtons = {
  contactButton: {
    text: 'Contact',
    link: 'mailto:team@hackarizona.org',
    location: '_self'
  },
  applyButton: {
    text: 'Apply',
    link: 'https://hackarizona.org',
    location: '_self'
  },
  statusButton: {
    text: 'Register',
    link: 'https://airtable.com/shrXWfagMcHHGnhVI',
    location: '_self'
  },
  signupButton: {
    text: 'Stay Posted',
    link:
      'https://www.google.com/search?q=this+should+sign+the+user+up+for+a+mailing+list&oq=this+should+sign+the+user+up+for+a+mailing+list&aqs=chrome..69i57.5475j0j1&sourceid=chrome&ie=UTF-8',
    location: '_blank'
  }
};

export const mobileMenuData = {
  links: siteStructure.sections
};

export const headerData = {
  logoSrc: '',
  links: siteStructure.sections,
  actionButton: siteButtons.statusButton
};

export const footerdata = {};

export const mainPageData = {
  header: 'Be a part of the change.',
  actionText:
    'Join us in working towards social equity at Equithon on May 3-5, 2019.',
  actionButton: siteButtons.contactButton
};

export const aboutPageData = {
  header: 'What is Equithon?',
  desc:
    'Equithon is a student-run hackathon held at the University of Waterloo where participants create solutions for a variety of social equity challenges. Our goal is to create an inclusive environment where all attendees feel comfortable learning, sharing their ideas, and developing something amazing that can improve the world around us.',
  testimonials: [
    {
      authorName: 'Mandy Meindersma',
      authorDesc: 'Equithon 2018 Category Winner',
      authorQuote:
        'I was able to meet three amazing badass women who helped me grow and made me a better person. We all found our own strengths and we made something amazing together.'
    },
    {
      authorName: 'Mandy Meindersma',
      authorDesc: 'University of Alberta CS, Equithon 2018 Category Winner',
      authorQuote:
        'I was able to meet three amazing bad ass women who helped me grow and made me a better person. We all found our own strengths and we made something amazing together.'
    }
  ]
};

export const previewPageData = {
  header: "What's in store?",
  previewDesc: [
    'Whether you’re a talented and curious beginner who wants to learn more about technology and its role in improving social equity, or a veteran of the hackathon scene looking for a unique challenge, Equithon invites you to take part and work towards a brighter future.',
    'We want you to improve the world and yourself in the process; at the event, you’ll encounter enriching workshops, fun activities, and the chance to work with brilliant idea and technical mentors, fellow hackers, and professionals in various fields.'
  ],
  lastYear: {
    header: 'A Look Back At 2018',
    statBubbles: [
      {
        desc: 'Gender Representation at Equithon 2018',
        contents: (
          <div>
            <span style={{ fontWeight: 600 }}>58% Female</span>,{' '}
            <span style={{ fontWeight: 600 }}>40% Male</span>, and{' '}
            <span style={{ fontWeight: 600 }}>2% Non-Binary</span>{' '}
            Representation
          </div>
        ),
        backgroundColor: '#AE85E6',
        color: 'white'
      },
      {
        desc: 'Location Presence at Equithon 2018',
        contents: (
          <div>
            Global presence from{' '}
            <span style={{ fontWeight: 600 }}>Canada, USA, Europe</span>, and{' '}
            <span style={{ fontWeight: 600 }}>India</span>
          </div>
        ),
        backgroundColor: '#E2D4F5',
        color: 'siteColors.offBlack'
      },
      {
        desc: 'Hacker Backgrounds at Equithon 2018',
        contents: (
          <div>
            Hackers with{' '}
            <span style={{ fontWeight: 600 }}>
              diverse academic backgrounds
            </span>{' '}
            ranging from <span style={{ fontWeight: 600 }}>Engineering</span> to{' '}
            <span style={{ fontWeight: 600 }}>Arts</span>
          </div>
        ),
        backgroundColor: '#AE85E6',
        color: 'white'
      }
    ]
  },
  thisYear: {
    header: 'A Sneak Peek At 2019',
    statCounters: [
      {
        start: 0,
        end: 500,
        suffix: '+',
        subtitle: 'Attendees',
        gridArea: 'statAttendees'
      },
      { start: 0, end: 36, subtitle: 'Hours', gridArea: 'statDuration' },
      {
        start: 0,
        end: 5,
        textAbove: 'Participants will work towards one of:',
        subtitle: 'Tracks',
        color: '#854dd0',
        gridArea: 'statCategories'
      },
      {
        start: 100,
        end: 1,
        subtitle: 'Common Goal',
        color: 'white',
        gridArea: 'statGoal'
      }
    ],
    categories: [
      {
        name: 'Physical Accessibility',
        contents: <div style={{ fontWeight: 500 }}>Physical Accessibility</div>,
        backgroundColor: '#E2D4F5',
        color: 'siteColors.offBlack'
      },
      {
        name: 'Female Empowerment',
        contents: <div style={{ fontWeight: 500 }}>Female Empowerment</div>,
        backgroundColor: '#AE85E6',
        color: 'white'
      },
      {
        name: 'Economic Disparity',
        contents: <div style={{ fontWeight: 500 }}>Economic Disparity</div>,
        backgroundColor: '#E2D4F5',
        color: 'siteColors.offBlack'
      },
      {
        name: 'Mobility Rights',
        contents: <div style={{ fontWeight: 500 }}>Mobility Rights</div>,
        backgroundColor: '#E2D4F5',
        color: 'siteColors.offBlack'
      },
      {
        name: 'Mental Health',
        contents: <div style={{ fontWeight: 500 }}>Mental Health</div>,
        backgroundColor: '#AE85E6',
        color: 'white'
      }
    ]
  }
};

export const sponsorBubbleTiers = {
  diamond: 250,
  gold: 220,
  silver: 190,
  bronze: 160
};

export const sponsorsPageData = {
  header: 'Previous Sponsors',
  sponsorUsBlurb:
    'Equithon would not be possible without the generous sponsorship of companies and individuals who have all exhibited a passion for social innovation and are commited to helping us improve the world, one project at a time.',
  sponsorAction: {
    actionText: 'Interested in sponsoring?',
    link: {
      text: 'Shoot us an email.',
      to:
        'mailto: hello@equithon.org?subject=Equithon Sponsorship/Partnership Inquiry'
    }
  },
  shouldShowSponsorBubbles: true,
  sponsorBubbles: [
    {
      name: 'Facebook',
      size: sponsorBubbleTiers.silver,
      link: 'https://www.facebook.com',
      //imgSrc: require('../static/img/sponsors/logos/logo_facebook.png'),
      color: '#fff',
      backgroundColor: '#3b5998',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Google',
      size: sponsorBubbleTiers.silver,
      link: 'https://www.facebook.com',
      //imgSrc: require('../static/img/sponsors/logos/logo_google.png'),
      color: '#fff',
      backgroundColor: '#fff',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'WiCS',
      size: sponsorBubbleTiers.silver,
      link: 'https://cs.uwaterloo.ca/wics',
      //imgSrc: require('../static/img/sponsors/logos/logo_wics.png'),
      color: '#fff',
      backgroundColor: '#f6e2e7',
      x: 230,
      y: 120,
      vy: 0.1
    },
    {
      name: 'University of Waterloo',
      size: sponsorBubbleTiers.diamond,
      link: 'https://uwaterloo.ca/',
      //imgSrc: require('../static/img/sponsors/logos/logo_uw.png'),
      color: '#fff',
      backgroundColor: '#FFD54F',
      x: 0,
      y: 260,
      vy: -0.1
    },
    {
      name: 'Stripe',
      size: sponsorBubbleTiers.silver,
      link: 'https://stripe.com',
      //imgSrc: require('../static/img/sponsors/logos/logo_stripe.png'),
      color: '#fff',
      backgroundColor: '#6676de',
      x: 225,
      y: 550,
      vy: 0.1
    },
    {
      name: 'BMO',
      size: sponsorBubbleTiers.silver,
      link: 'https://www.bmo.com/main/personal',
      //imgSrc: require('../static/img/sponsors/logos/logo_bmo.png'),
      color: '#fff',
      backgroundColor: '#0079c1',
      x: 225,
      y: 550,
      vy: 0.1
    },
    {
      name: 'PagerDuty',
      size: sponsorBubbleTiers.bronze,
      link: 'https://www.pagerduty.com/',
      //imgSrc: require('../static/img/sponsors/logos/logo_pagerduty.png'),
      color: '#fff',
      backgroundColor: '#25c151',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Mathematics Society',
      size: sponsorBubbleTiers.bronze,
      link: 'http://mathsoc.uwaterloo.ca/',
      //imgSrc: require('../static/img/sponsors/logos/logo_mathsoc.png'),
      color: '#fff',
      backgroundColor: '#C60078',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'HeForShe',
      size: sponsorBubbleTiers.bronze,
      link: 'https://www.heforshe.org/en',
      //imgSrc: require('../static/img/sponsors/logos/logo_heforshe.png'),
      color: '#fff',
      backgroundColor: '#fff',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Math Endowment Fund',
      size: sponsorBubbleTiers.diamond,
      link: 'https://uwaterloo.ca/math-endowment-fund/',
      //imgSrc: require('../static/img/sponsors/logos/logo_mef.png'),
      color: '#fff',
      backgroundColor: '#fff',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Microsoft',
      size: sponsorBubbleTiers.bronze,
      link: 'https://www.microsoft.com/en-ca',
      //imgSrc: require('../static/img/sponsors/logos/logo_microsoft.png'),
      color: '#fff',
      backgroundColor: '#575352',
      x: 1050,
      y: 100,
      vy: 0.1
    },
    {
      name: 'Balsamiq',
      size: sponsorBubbleTiers.bronze,
      link: 'https://www.balsamiq.com',
      //imgSrc: require('../static/img/sponsors/logos/logo_balsamiq.png'),
      color: '#fff',
      backgroundColor: '#cc0000',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'DigitalOcean',
      size: sponsorBubbleTiers.bronze,
      link: 'https://www.digitalocean.com',
      //imgSrc: require('../static/img/sponsors/logos/logo_digitalocean.png'),
      color: '#fff',
      backgroundColor: '#0080FF',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Sticker Mule',
      size: sponsorBubbleTiers.bronze,
      link: 'https://www.stickermule.com/ca',
      //imgSrc: require('../static/img/sponsors/logos/logo_stickermule.png'),
      color: '#fff',
      backgroundColor: '#4E2817',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'GoDaddy',
      size: sponsorBubbleTiers.bronze,
      link: 'https://ca.godaddy.com/',
      //imgSrc: require('../static/img/sponsors/logos/logo_godaddy.png'),
      color: '#fff',
      backgroundColor: '#00a63f',
      x: 10,
      y: 20,
      vy: 0.1
    }
  ]
};



export const FAQPageData = {
  header: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'What exactly do you do at Equithon?',
      answer:
        'You’ll get the chance to make a difference in the world! Over the course of a 36 hours, you and up to 3 other team members will create a technical project that solves an issue in one of our 5 project tracks.'
    },
    {
      question: 'When is Equithon happening this year?',
      answer:
        'Save the date! Equithon will be held on May 3-5, 2019 at the University of Waterloo. '
    },
    {
      question: "Who's able to attend?",
      answer:
        'As long as you’re currently enrolled in a Canadian post-secondary institution or a local Kitchener-Waterloo high school, we’d love to see you at the event as a hacker! If you’re not, don’t worry - you’ll have the chance to share your knowledge as a mentor or volunteer.'
    },
    {
      question: 'What categories will Equithon be covering this year?',
      answer:
        "Equithon's 5 categories, or tracks, for 2019 are Economic Disparity, Female Empowerment, Mental Health, Mobility Rights, and Physical Accessibility. Participants will get a chance to create a project that contributes meaningfully to one of these fields, and more information regarding each category will be posted on our social media platforms in the coming weeks!"
    },
    {
      question: 'How is Equithon different from other hackathons?',
      answer:
        'Equithon is one of its kind in the hackathon community! We are a non-overnight hackathon and our categories are targeted specifically at tackling today’s most pressing social equity issues.'
    },
    {
      question: 'What if I’ve never been to a hackathon before?',
      answer:
        'Equithon is open to hackers with varying levels of experience. Our workshops will be tailored based on competency levels and we will also be hosting mentors from different industries to guide you and your ideas throughout the hackathon!'
    },
    {
      question: 'When will applications open for 2019?',
      answer:
        'Applications will be live later this term. Be sure to subscribe to our mailing list and/or follow us on our social media platforms to stay updated!'
    },
    {
      question: "I'm interested! Where can I find more information?",
      answer:
        'Subscribe to our mailing list and follow us on Instagram, Twitter, LinkedIn, and Facebook for more updates! Feel free to reach out to us at hello@equithon.org if you have any further questions.'
    }
  ],
  FAQAction: {
    actionText: 'Have another burning question?',
    link: {
      text: "Talk to our team (we don't bite).",
      to: 'mailto: hello@equithon.org'
    }
  }
};
