export interface STATE {
    name: string;
    abbreviation: string;
    centerCoordinate: {
        longitude: number;
        latitude: number;
    };
    capital?: string;
    zip?: number;
}

export const USA_STATE : STATE[] = [
  {
    name: "USA",
    abbreviation: "USA",
    centerCoordinate: {
      longitude: -98.5795,
      latitude: 39.8283,
    },
  },
  {
    name: "Alabama",
    abbreviation: "AL",
    centerCoordinate: {
      longitude: -86.8073,
      latitude: 32.799,
    },
    capital: "Montgomery",
    zip: 36101,
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    centerCoordinate: {
      longitude: -152.2683,
      latitude: 61.385,
    },
    capital: "Juneau",
    zip: 99801,
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
    centerCoordinate: {
      longitude: -111.3877,
      latitude: 33.7712,
    },
    capital: "Phoenix",
    zip: 85001,
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
    centerCoordinate: {
      longitude: -92.3809,
      latitude: 34.9513,
    },
    capital: "Little Rock",
    zip: 72201,
  },
  {
    name: "California",
    abbreviation: "CA",
    centerCoordinate: {
      longitude: -119.7462,
      latitude: 36.17,
    },
    capital: "Sacremento",
    zip: 94203,
  },
  {
    name: "Colorado",
    abbreviation: "CO",
    centerCoordinate: {
      longitude: -105.3272,
      latitude: 39.0646,
    },
    capital: "Denver",
    zip: 80201,
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
    centerCoordinate: {
      longitude: -72.7622,
      latitude: 41.5834,
    },
    capital: "Hartford",
    zip: "06101",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
    centerCoordinate: {
      longitude: -75.5148,
      latitude: 39.3498,
    },
    capital: "Dover",
    zip: 19901,
  },
  {
    name: "Florida",
    abbreviation: "FL",
    centerCoordinate: {
      longitude: -81.717,
      latitude: 27.8333,
    },
    capital: "Tallahassee",
    zip: 32301,
  },
  {
    name: "Georgia",
    abbreviation: "GA",
    centerCoordinate: {
      longitude: -83.6487,
      latitude: 32.9866,
    },
    capital: "Atlanta",
    zip: 30301,
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
    centerCoordinate: {
      longitude: -157.5311,
      latitude: 21.1098,
    },
    capital: "Honolulu",
    zip: 96801,
  },
  {
    name: "Idaho",
    abbreviation: "ID",
    centerCoordinate: {
      longitude: -114.5103,
      latitude: 44.2394,
    },
    capital: "Boise",
    zip: 83701,
  },
  {
    name: "Illinois",
    abbreviation: "IL",
    centerCoordinate: {
      longitude: -89.0022,
      latitude: 40.3363,
    },
    capital: "Springfield",
    zip: 62701,
  },
  {
    name: "Indiana",
    abbreviation: "IN",
    centerCoordinate: {
      longitude: -86.2604,
      latitude: 39.8647,
    },
    capital: "Indianapolis",
    zip: 46201,
  },
  {
    name: "Iowa",
    abbreviation: "IA",
    centerCoordinate: {
      longitude: -93.214,
      latitude: 42.0046,
    },
    capital: "Des Moines",
    zip: 50301,
  },
  {
    name: "Kansas",
    abbreviation: "KS",
    centerCoordinate: {
      longitude: -96.8005,
      latitude: 38.5111,
    },
    capital: "Topeka",
    zip: 66601,
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
    centerCoordinate: {
      longitude: -84.6514,
      latitude: 37.669,
    },
    capital: "Frankfort",
    zip: 40601,
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
    centerCoordinate: {
      longitude: -91.8749,
      latitude: 31.1801,
    },
    capital: "Baton Rouge",
    zip: 70801,
  },
  {
    name: "Maine",
    abbreviation: "ME",
    centerCoordinate: {
      longitude: -69.3977,
      latitude: 44.6074,
    },
    capital: "Augusta",
    zip: "04330",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
    centerCoordinate: {
      longitude: -76.7902,
      latitude: 39.0724,
    },
    capital: "Annapolis",
    zip: 21401,
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
    centerCoordinate: {
      longitude: -71.5314,
      latitude: 42.2373,
    },
    capital: "Boston",
    zip: "02108",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
    centerCoordinate: {
      longitude: -84.5603,
      latitude: 43.3504,
    },
    capital: "Lansing",
    zip: 48901,
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
    centerCoordinate: {
      longitude: -93.9196,
      latitude: 45.7326,
    },
    capital: "St. Paul",
    zip: 55101,
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
    centerCoordinate: {
      longitude: -89.6812,
      latitude: 32.7673,
    },
    capital: "Jackson",
    zip: 39201,
  },
  {
    name: "Missouri",
    abbreviation: "MO",
    centerCoordinate: {
      longitude: -92.302,
      latitude: 38.4623,
    },
    capital: "Jefferson City",
    zip: 65101,
  },
  {
    name: "Montana",
    abbreviation: "MT",
    centerCoordinate: {
      longitude: -110.3261,
      latitude: 46.9048,
    },
    capital: "Helena",
    zip: 59601,
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
    centerCoordinate: {
      longitude: -98.2883,
      latitude: 41.1289,
    },
    capital: "Lincoln",
    zip: 68501,
  },
  {
    name: "Nevada",
    abbreviation: "NV",
    centerCoordinate: {
      longitude: -117.1219,
      latitude: 38.4199,
    },
    capital: "Carson City",
    zip: 89701,
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
    centerCoordinate: {
      longitude: -71.5653,
      latitude: 43.4108,
    },
    capital: "Concord",
    zip: "03301",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
    centerCoordinate: {
      longitude: -74.5089,
      latitude: 40.314,
    },
    capital: "Trenton",
    zip: "08601",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
    centerCoordinate: {
      longitude: -106.2371,
      latitude: 34.8375,
    },
    capital: "Sante Fe",
    zip: 87501,
  },
  {
    name: "New York",
    abbreviation: "NY",
    centerCoordinate: {
      longitude: -74.9384,
      latitude: 42.1497,
    },
    capital: "Albany",
    zip: 12201,
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
    centerCoordinate: {
      longitude: -79.8431,
      latitude: 35.6411,
    },
    capital: "Raleigh",
    zip: 27601,
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
    centerCoordinate: {
      longitude: -99.793,
      latitude: 47.5362,
    },
    capital: "Bismarck",
    zip: 58501,
  },
  {
    name: "Ohio",
    abbreviation: "OH",
    centerCoordinate: {
      longitude: -82.7755,
      latitude: 40.3736,
    },
    capital: "Columbus",
    zip: 43201,
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
    centerCoordinate: {
      longitude: -96.9247,
      latitude: 35.5376,
    },
    capital: "Oklahoma City",
    zip: 73101,
  },
  {
    name: "Oregon",
    abbreviation: "OR",
    centerCoordinate: {
      longitude: -122.1269,
      latitude: 44.5672,
    },
    capital: "Salem",
    zip: 93701,
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
    centerCoordinate: {
      longitude: -77.264,
      latitude: 40.5773,
    },
    capital: "Harrisburg",
    zip: 17101,
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
    centerCoordinate: {
      longitude: -71.5101,
      latitude: 41.6772,
    },
    capital: "Providence",
    zip: "02901",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
    centerCoordinate: {
      longitude: -80.9066,
      latitude: 33.8191,
    },
    capital: "Columbia",
    zip: 29201,
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
    centerCoordinate: {
      longitude: -99.4632,
      latitude: 44.2853,
    },
    capital: "Pierre",
    zip: 57501,
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
    centerCoordinate: {
      longitude: -86.7489,
      latitude: 35.7449,
    },
    capital: "Nashville",
    zip: 37201,
  },
  {
    name: "Texas",
    abbreviation: "TX",
    centerCoordinate: {
      longitude: -97.6475,
      latitude: 31.106,
    },
    capital: "Austin",
    zip: 73301,
  },
  {
    name: "Utah",
    abbreviation: "UT",
    centerCoordinate: {
      longitude: -111.8535,
      latitude: 40.1135,
    },
    capital: "Salt Lake City",
    zip: 84101,
  },
  {
    name: "Vermont",
    abbreviation: "VT",
    centerCoordinate: {
      longitude: -72.7093,
      latitude: 44.0407,
    },
    capital: "Montpelier",
    zip: "05601",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
    centerCoordinate: {
      longitude: -78.2057,
      latitude: 37.768,
    },
    capital: "Richmond",
    zip: 23218,
  },
  {
    name: "Washington",
    abbreviation: "WA",
    centerCoordinate: {
      longitude: -121.5708,
      latitude: 47.3917,
    },
    capital: "Olympia",
    zip: 98501,
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
    centerCoordinate: {
      longitude: -80.9696,
      latitude: 38.468,
    },
    capital: "Charleston",
    zip: 25301,
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
    centerCoordinate: {
      longitude: -89.6385,
      latitude: 44.2563,
    },
    capital: "Madison",
    zip: 53701,
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
    centerCoordinate: {
      longitude: -107.2085,
      latitude: 42.7475,
    },
    capital: "Cheyenne",
    zip: 82001,
  },
];

export const getStateName = (abbreviation) => {
  return USA_STATE.find((state) => state.abbreviation === abbreviation)["name"];
};

export const getStateZipCode = (abbreviation) => {
  return USA_STATE.find((state) => state.abbreviation === abbreviation)["zip"];
};

export const getStateCenterCoordinate = (abbreviation) => {
  return USA_STATE.find((state) => state.abbreviation === abbreviation)[
    "centerCoordinate"
  ];
};

export const cachedData = [
  {
    id: "3245910403",
    __CLASS__: "Adzuna::API::Response::Job",
    description:
      "Business Title: Manager, Software Engineer Requisition Number: 84986 - 1 Function: Advisory Area of Interest: State: AK City: Anchorage Description: Known for being a great place to work and build a career, KPMG provides audit, tax and advisory services for organizations in today's most important industries. Our growth is driven by delivering real results for our clients. It's also enabled by our culture, which encourages individual development, embraces an inclusive environment, rewards innova\u2026",
    salary_is_predicted: "0",
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    redirect_url:
      "https://www.adzuna.com/land/ad/3245910403?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=DFD200DBBE2CB4212C14B002BF04D640E439B5A5",
    created: "2022-06-20T22:17:53Z",
    title: "Manager, Software Engineer",
    longitude: -149.850373,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzI0NTkxMDQwMyIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.PtSdgXjMw0x-iXTO4pOxv78LmR1YTUaxwz5z1AiXVEA",
    latitude: 61.218923,
    location: {
      display_name: "Anchorage, Alaska",
      area: ["US", "Alaska", "Anchorage"],
      __CLASS__: "Adzuna::API::Response::Location",
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "KPMG",
    },
  },
  {
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Canonical   Jobs",
    },
    location: {
      display_name: "Anchorage, Alaska",
      area: ["US", "Alaska", "Anchorage"],
      __CLASS__: "Adzuna::API::Response::Location",
    },
    latitude: 61.218923,
    longitude: -149.850373,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzIwNjA1MzMwNyIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.PdYn_erU6EQ0VnC24aTD6_HQQQvmauKq-m36Pbkzmkc",
    created: "2022-06-07T11:45:50Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/3206053307?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=DCC36EF6572571BB1FDED705E4BA9D0CC8B37EA3",
    title: "Software Engineer - MAAS",
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    description:
      "This is an exciting opportunity for a software engineer passionate about open source software, Linux, and Data Centre automation. Come build a rewarding, meaningful career working with the best and brightest people in technology at Canonical, a growing international software company. The Ubuntu MAAS team is responsible for delivering our Metal As A Service hyperscale provisioning technology. Ubuntu strives to be the most scalable, cloud ready server distribution and MAAS is our platform to get \u2026",
    salary_is_predicted: "0",
    id: "3206053307",
    __CLASS__: "Adzuna::API::Response::Job",
  },
  {
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    redirect_url:
      "https://www.adzuna.com/land/ad/3240734650?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=6EF28348B86BE6F8F6E767CBA65BBE50F591C7B3",
    created: "2022-06-18T23:15:48Z",
    title: "Senior Software Engineer",
    id: "3240734650",
    __CLASS__: "Adzuna::API::Response::Job",
    description:
      "Shogun is on a mission to empower brands to create exceptional ecommerce experiences, and in the process, build the best remote company. Since being in the Winter 2018 batch of Y-Combinator, we've seen tremendous growth while intentionally creating a culture where people from all backgrounds belong. Our company and products are informed by diverse perspectives from the best talent around the world. We are fully remote, have no offices, and are looking for team members who are excited to work re\u2026",
    salary_is_predicted: "0",
    location: {
      display_name: "Anchorage, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Anchorage"],
    },
    company: {
      display_name: "Shogun",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    longitude: -149.850373,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzI0MDczNDY1MCIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.qETra5KgOSihil2pXlMZlvBIVvXa2AU9Mtn5kcN_3a4",
    latitude: 61.218923,
  },
  {
    category: {
      tag: "it-jobs",
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
    },
    created: "2022-06-20T22:21:48Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/3245924078?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=C58F6EA20BFA15A100800313431CE775F0887B9A",
    title: "Director, Software Engineering",
    id: "3245924078",
    __CLASS__: "Adzuna::API::Response::Job",
    salary_is_predicted: "0",
    description:
      "Title Director, Engineering (Enterprise Platform Engineering, EDTS) Position Description Are you passionate about healthcare and solving complex problems with secure data transfer solutions? Are you looking for an exciting opportunity to build a cloud-based enterprise platform aimed to democratize access to healthcare data? The Platform Engineering team at Change Healthcare is looking for a Director of Engineering to lead development of our strategic enterprise-wide data transfer solution platf\u2026",
    location: {
      display_name: "Juneau, Alaska",
      area: ["US", "Alaska", "Juneau"],
      __CLASS__: "Adzuna::API::Response::Location",
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Change Healthcare",
    },
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzI0NTkyNDA3OCIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.VQIdOzlj--2Myf9gFwAJTTSTMhrnAYC9X23cMzThIvg",
    longitude: -134.533577,
    latitude: 58.330535,
  },
  {
    redirect_url:
      "https://www.adzuna.com/land/ad/3245907924?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=B2479C9948CD4C7138D677C8771F12215FB28D19",
    created: "2022-06-20T22:17:31Z",
    title: "Product Software Engineer",
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    description:
      "Wolters Kluwer is a global leader in professional information services. Professionals in the areas of legal, business, tax, accounting, finance, audit, risk, compliance, and healthcare rely on Wolters Kluwer's market leading information-enabled tools and software solutions to manage their business efficiently, deliver results to their clients, and succeed in an ever more dynamic world. Wolters Kluwer combines deep domain knowledge with specialized technology. Our portfolio offers software tools\u2026",
    salary_is_predicted: "0",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "3245907924",
    company: {
      display_name: "Wolters Kluwer",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    location: {
      area: ["US", "Alaska", "Juneau"],
      __CLASS__: "Adzuna::API::Response::Location",
      display_name: "Juneau, Alaska",
    },
    latitude: 58.330535,
    longitude: -134.533577,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzI0NTkwNzkyNCIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.o1wGpJosMzmaLuUszeYH7kNfCXPDEaoAtBX50vyN4jI",
  },
  {
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2699696567",
    contract_time: "full_time",
    salary_is_predicted: "0",
    description:
      "Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. A fully paid training program designed to provide you with the information and training necessary to succeed at TCS and excel at client sites. However, the learning does not stop there TCS is committed to the continuous growth of i\u2026",
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    created: "2021-12-02T00:06:52Z",
    title: "Software Engineer",
    redirect_url:
      "https://www.adzuna.com/land/ad/2699696567?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=EE5CDEA27CA92C9C274ADA470DA4C3C4283576E1",
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjY5OTY5NjU2NyIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.896Z51yz9YU8ellFya70Ox_mfWqBcFkZ7szCTO5V0xk",
    longitude: -161.79762,
    latitude: 60.78561,
    location: {
      display_name: "Kongiganak, Bethel",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Bethel", "Kongiganak"],
    },
    company: {
      display_name: "TATA Consultancy Services",
      __CLASS__: "Adzuna::API::Response::Company",
    },
  },
  {
    id: "2734593934",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    description:
      "Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. A fully paid training program designed to provide you with the information and training necessary to succeed at TCS and excel at client sites. However, the learning does not stop there TCS is committed to the continuous growth of i\u2026",
    salary_is_predicted: "0",
    category: {
      tag: "it-jobs",
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
    },
    title: "Software Engineer",
    created: "2021-12-13T11:51:02Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2734593934?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=450458A028CF871558F6CBB5A9588E08B9F3C264",
    longitude: -134.533577,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNzM0NTkzOTM0In0.aWZw_q7UVqYp2vt8P-x3Qwbo4wj3my74FkCMcZwqsMY",
    latitude: 58.330535,
    location: {
      display_name: "Juneau, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Juneau"],
    },
    company: {
      display_name: "TATA Consultancy Services",
      __CLASS__: "Adzuna::API::Response::Company",
    },
  },
  {
    redirect_url:
      "https://www.adzuna.com/land/ad/2857043108?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=09E53EC2245F27E2BD3C7743C88B9829B6D1FB27",
    created: "2022-01-31T11:33:16Z",
    title: "Software Engineer",
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    description:
      "Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. A fully paid training program designed to provide you with the information and training necessary to succeed at TCS and excel at client sites. However, the learning does not stop there TCS is committed to the continuous growth of i\u2026",
    salary_is_predicted: "0",
    contract_time: "full_time",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2857043108",
    company: {
      display_name: "TATA Consultancy Services",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    location: {
      display_name: "Southeast Fairbanks, Alaska",
      area: ["US", "Alaska", "Southeast Fairbanks"],
      __CLASS__: "Adzuna::API::Response::Location",
    },
    latitude: 63.674914,
    longitude: -143.377822,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyODU3MDQzMTA4In0.h65ZR6f9XzMr8g1c9y4G88XbPHzUd-gXgbJxpuPfzE0",
  },
  {
    location: {
      display_name: "Anchorage, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Anchorage"],
    },
    company: {
      display_name: "TATA Consultancy Services",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    longitude: -149.850373,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNjk5NzA0Njg0In0.PUKyZEyxGXWU9AGPpKoVbRdKzl81_Rl3J7Bu9E7HSzk",
    latitude: 61.218923,
    category: {
      tag: "it-jobs",
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
    },
    redirect_url:
      "https://www.adzuna.com/land/ad/2699704684?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=40E6195FDCDF707F7F90F860722DC18BE8C6BA8A",
    created: "2021-12-02T00:08:27Z",
    title: "Software Engineer",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2699704684",
    contract_time: "full_time",
    description:
      "Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. A fully paid training program designed to provide you with the information and training necessary to succeed at TCS and excel at client sites. However, the learning does not stop there TCS is committed to the continuous growth of i\u2026",
    salary_is_predicted: "0",
  },
  {
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Change Healthcare",
    },
    location: {
      display_name: "Juneau, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Juneau"],
    },
    latitude: 58.330535,
    longitude: -134.533577,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIzMjQ1OTMwNDk0In0.itr_c8FFsNZzr5FHOKnya4TdRs5xbOpXeZn_4Qbodsk",
    title: "Software Engineer III (Java)",
    created: "2022-06-20T22:22:40Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/3245930494?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=DE7D3030FA9E5E9ACDF35B101E604A79F5F9C5E4",
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    description:
      "Job Profile Summary We are looking for a Software Engineer responsible for building Java applications. This includes anything between complex groups of back-end services and their client-end (React Web UI) counterparts. Your primary responsibility will be to design and develop these applications, and to coordinate with the rest of the team working on different layers of the infrastructure. Thus, a commitment to collaborative problem solving, sophisticated design, and product quality is essentia\u2026",
    salary_is_predicted: "0",
    id: "3245930494",
    __CLASS__: "Adzuna::API::Response::Job",
  },
  {
    created: "2022-06-07T11:46:02Z",
    title: "Software Engineer - Python and K8s",
    redirect_url:
      "https://www.adzuna.com/land/ad/3206054830?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=15375CBECAA2A8A39E68BFEFCA791FBA291791FE",
    category: {
      tag: "it-jobs",
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
    },
    description:
      "Our mission is to reinvent the way companies manage their open source information systems - on public clouds and in their own data centres. To achieve that we are building a new community around Python opscode for open source applications, running on Kubernetes. We want to move all of Canonical and Ubuntu IS onto this new, open source codebase. We are confident that we can dramatically improve the experience of running complex business operations - and then we can help our customers embrace tho\u2026",
    salary_is_predicted: "0",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "3206054830",
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Canonical   Jobs",
    },
    location: {
      area: ["US", "Alaska", "Anchorage"],
      __CLASS__: "Adzuna::API::Response::Location",
      display_name: "Anchorage, Alaska",
    },
    latitude: 61.218923,
    longitude: -149.850373,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIzMjA2MDU0ODMwIn0.40y6MRbt4JvBatLDsc26_C1hohAr4dpvEtvyxuucEW4",
  },
  {
    description:
      "Company Description Twitter is where you go to talk about what\u2019s happening; it carries some of the most important commentary and conversations and mobilizes people into action. Joining the team today means you\u2019ll have an impact on the conversation of tomorrow. We want every Tweep regardless of location or job to understand their role in creating a culture where everyone is empowered to bring their full authentic selves to work, experience belonging, and do the best work of their career. Job Des\u2026",
    salary_is_predicted: "0",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2795815690",
    contract_time: "full_time",
    redirect_url:
      "https://www.adzuna.com/land/ad/2795815690?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=9E918440336DB83608B3362E48FD71769D8DDBCC",
    created: "2022-01-07T03:17:32Z",
    title: "Software Engineer 1",
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    latitude: 63.674914,
    longitude: -143.377822,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjc5NTgxNTY5MCIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.234vvI_Frl8x26Xu76-TUJCap9LayH07hd0i59wmqPw",
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Twitter",
    },
    location: {
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Southeast Fairbanks"],
      display_name: "Southeast Fairbanks, Alaska",
    },
  },
  {
    salary_is_predicted: "0",
    description:
      "Company Description Twitter is where you go to talk about what\u2019s happening; it carries some of the most important commentary and conversations and mobilizes people into action. Joining the team today means you\u2019ll have an impact on the conversation of tomorrow. We want every Tweep regardless of location or job to understand their role in creating a culture where everyone is empowered to bring their full authentic selves to work, experience belonging, and do the best work of their career. Job Des\u2026",
    id: "2795871806",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    created: "2022-01-07T03:28:26Z",
    title: "Software Engineer 1",
    redirect_url:
      "https://www.adzuna.com/land/ad/2795871806?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=3E81D118FCDFD1DB5B787C016551E1F8C8BDD96A",
    category: {
      tag: "it-jobs",
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
    },
    latitude: 61.218923,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNzk1ODcxODA2In0.Awcz9hyEVf-rMLUPvuR7HCERZ4KrGNB58mfpJWigB9Y",
    longitude: -149.850373,
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Twitter",
    },
    location: {
      area: ["US", "Alaska", "Anchorage"],
      __CLASS__: "Adzuna::API::Response::Location",
      display_name: "Anchorage, Alaska",
    },
  },
  {
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2795847056",
    contract_time: "full_time",
    description:
      "Company Description Twitter is where you go to talk about what\u2019s happening; it carries some of the most important commentary and conversations and mobilizes people into action. Joining the team today means you\u2019ll have an impact on the conversation of tomorrow. We want every Tweep regardless of location or job to understand their role in creating a culture where everyone is empowered to bring their full authentic selves to work, experience belonging, and do the best work of their career. Job Des\u2026",
    salary_is_predicted: "0",
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    created: "2022-01-07T03:24:33Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2795847056?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=C48B27CA1C5E377BB605E469CDBA80755C6C68C8",
    title: "Software Engineer 1",
    longitude: -134.533577,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNzk1ODQ3MDU2In0.2nU8Bnx5YeRx-gwrdrXFc1thQbT8xAjRjvAbhIKP_FU",
    latitude: 58.330535,
    location: {
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Juneau"],
      display_name: "Juneau, Alaska",
    },
    company: {
      display_name: "Twitter",
      __CLASS__: "Adzuna::API::Response::Company",
    },
  },
  {
    location: {
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Bethel", "Kongiganak"],
      display_name: "Kongiganak, Bethel",
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Twitter",
    },
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjc5NTcyODIzMyIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.kn45wNcZhHcdHTeyp6-NV1er_4qUHZuasoqPtf8IBq0",
    longitude: -161.79762,
    latitude: 60.78561,
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    title: "Software Engineer 1",
    created: "2022-01-07T03:08:49Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2795728233?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=CA2F067EB8D14D237688D89FAAB6FE99D40E0149",
    contract_time: "full_time",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2795728233",
    salary_is_predicted: "0",
    description:
      "Company Description Twitter is where you go to talk about what\u2019s happening; it carries some of the most important commentary and conversations and mobilizes people into action. Joining the team today means you\u2019ll have an impact on the conversation of tomorrow. We want every Tweep regardless of location or job to understand their role in creating a culture where everyone is empowered to bring their full authentic selves to work, experience belonging, and do the best work of their career. Job Des\u2026",
  },
  {
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Acxiom",
    },
    location: {
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Southeast Fairbanks"],
      display_name: "Southeast Fairbanks, Alaska",
    },
    latitude: 63.674914,
    longitude: -143.377822,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzExODk4Mzc4NyIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.pz-CtDB8SjRksf6IWsy1DPjpIxAsTEWdjbwA8fDFzjQ",
    created: "2022-05-09T22:08:28Z",
    title: "Software Engineer - (Remote)",
    redirect_url:
      "https://www.adzuna.com/land/ad/3118983787?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=A30539691E0E6BA71432EBF2B801292CC29CD2F7",
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    description:
      "Join our team of hardworking technology associates who are active in their communities and support each other while building outstanding data and identity products used by many Fortune 500 brands. We\u2019re building multi-function teams of technologists who enjoy working together to build market leading data products that everyday brands depend on. Do you enjoy solving difficult technology challenges, working with data, and protecting privacy? We\u2019d love to hear from you This role can be located alm\u2026",
    salary_is_predicted: "0",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    id: "3118983787",
  },
  {
    __CLASS__: "Adzuna::API::Response::Job",
    id: "3118984182",
    contract_time: "full_time",
    salary_is_predicted: "0",
    description:
      "Join our team of hardworking technology associates who are active in their communities and support each other while building outstanding data and identity products used by many Fortune 500 brands. We\u2019re building multi-function teams of technologists who enjoy working together to build market leading data products that everyday brands depend on. Do you enjoy solving difficult technology challenges, working with data, and protecting privacy? We\u2019d love to hear from you This role can be located alm\u2026",
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    created: "2022-05-09T22:08:30Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/3118984182?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=36742A5FEE5916634E50671C5717EE0B7DE01A07",
    title: "Software Engineer - (Remote)",
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzExODk4NDE4MiIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.24523PMW-O2xtZBmIkRCwXD-i2N8bAAkGGB-lBrLzKY",
    longitude: -134.533577,
    latitude: 58.330535,
    location: {
      display_name: "Juneau, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Juneau"],
    },
    company: {
      display_name: "Acxiom",
      __CLASS__: "Adzuna::API::Response::Company",
    },
  },
  {
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Acxiom",
    },
    location: {
      display_name: "Anchorage, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Anchorage"],
    },
    latitude: 61.218923,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzExOTAxMjI5NCIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.NtmJnXRtZFofB-SJ2nwuje_cINN9bOwR4y75OE0KF9c",
    longitude: -149.850373,
    redirect_url:
      "https://www.adzuna.com/land/ad/3119012294?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=E213A6CF50031A59B5FBC2C7053CF856FF3D1491",
    created: "2022-05-09T22:10:23Z",
    title: "Software Engineer - (Remote)",
    category: {
      tag: "it-jobs",
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
    },
    salary_is_predicted: "0",
    description:
      "Join our team of hardworking technology associates who are active in their communities and support each other while building outstanding data and identity products used by many Fortune 500 brands. We\u2019re building multi-function teams of technologists who enjoy working together to build market leading data products that everyday brands depend on. Do you enjoy solving difficult technology challenges, working with data, and protecting privacy? We\u2019d love to hear from you This role can be located alm\u2026",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    id: "3119012294",
  },
  {
    id: "3118963827",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    salary_is_predicted: "0",
    description:
      "Join our team of hardworking technology associates who are active in their communities and support each other while building outstanding data and identity products used by many Fortune 500 brands. We\u2019re building multi-function teams of technologists who enjoy working together to build market leading data products that everyday brands depend on. Do you enjoy solving difficult technology challenges, working with data, and protecting privacy? We\u2019d love to hear from you This role can be located alm\u2026",
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    title: "Software Engineer - (Remote)",
    created: "2022-05-09T22:04:59Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/3118963827?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=E3E613DBD4141F38B77EBA14BFCA6B61BCE3EDFF",
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIzMTE4OTYzODI3In0.0BG6woJKHPqIgQqRQztbe9af19SLp0q2x4jqxR_P9mk",
    longitude: -161.79762,
    latitude: 60.78561,
    location: {
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Bethel", "Kongiganak"],
      display_name: "Kongiganak, Bethel",
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Acxiom",
    },
  },
  {
    company: {
      display_name: "Saga Education",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    location: {
      area: ["US", "Alaska", "Southeast Fairbanks"],
      __CLASS__: "Adzuna::API::Response::Location",
      display_name: "Southeast Fairbanks, Alaska",
    },
    latitude: 63.674914,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzIxNTI2MjczNyIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.FJF_XMDb1Kqy7z1-n3Szz6AX956SXuPgM5CrdDSA7Qs",
    longitude: -143.377822,
    created: "2022-06-10T06:38:52Z",
    title: "Software Engineer III",
    redirect_url:
      "https://www.adzuna.com/land/ad/3215262737?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=08701457CE5D0CA3AFB556D8BD9FF0E35B739981",
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    salary_is_predicted: "0",
    description:
      "Employment Status: Full-time; Remote Position Reports To: VP of Engineering Start date: Immediate _Anticipated compensation:_ Starting at $99,300_, commensurate with experience _ Who We Are Saga Education is a national nonprofit that has served over 17,600 students with high-dose math tutoring during their regular school day. Fueling this work is a bold vision to combat educational inequity by working with school districts to unlock the power of personal relationships to nurture academic, socia\u2026",
    contract_time: "full_time",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "3215262737",
  },
  {
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    title: "Software Engineer III",
    created: "2022-06-10T06:44:10Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/3215282722?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=0E9195FD75B371A669696A2AADCA166C96AF6BF2",
    id: "3215282722",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    description:
      "Employment Status: Full-time; Remote Position Reports To: VP of Engineering Start date: Immediate _Anticipated compensation:_ Starting at $99,300_, commensurate with experience _ Who We Are Saga Education is a national nonprofit that has served over 17,600 students with high-dose math tutoring during their regular school day. Fueling this work is a bold vision to combat educational inequity by working with school districts to unlock the power of personal relationships to nurture academic, socia\u2026",
    salary_is_predicted: "0",
    location: {
      display_name: "Anchorage, Alaska",
      area: ["US", "Alaska", "Anchorage"],
      __CLASS__: "Adzuna::API::Response::Location",
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Saga Education",
    },
    longitude: -149.850373,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIzMjE1MjgyNzIyIn0.AUZmwtkSSIyl2QEVM2KaPLNXfOCidb7xH1A7cv_1gII",
    latitude: 61.218923,
  },
  {
    longitude: -134.533577,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIzMjE1Mjg1NzI0In0.yod8GRASWDNMA7ijmdJugq6WhzDbHjcbhpf6xUmx_TU",
    latitude: 58.330535,
    location: {
      display_name: "Juneau, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Juneau"],
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Saga Education",
    },
    contract_time: "full_time",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "3215285724",
    description:
      "Employment Status: Full-time; Remote Position Reports To: VP of Engineering Start date: Immediate _Anticipated compensation:_ Starting at $99,300_, commensurate with experience _ Who We Are Saga Education is a national nonprofit that has served over 17,600 students with high-dose math tutoring during their regular school day. Fueling this work is a bold vision to combat educational inequity by working with school districts to unlock the power of personal relationships to nurture academic, socia\u2026",
    salary_is_predicted: "0",
    category: {
      tag: "it-jobs",
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
    },
    redirect_url:
      "https://www.adzuna.com/land/ad/3215285724?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=296316DED96B54CD842F7904F7DF1D67D5D5654A",
    created: "2022-06-10T06:44:57Z",
    title: "Software Engineer III",
  },
  {
    id: "3215285509",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    salary_is_predicted: "0",
    description:
      "Employment Status: Full-time; Remote Position Reports To: VP of Engineering Start date: Immediate _Anticipated compensation:_ Starting at $99,300_, commensurate with experience _ Who We Are Saga Education is a national nonprofit that has served over 17,600 students with high-dose math tutoring during their regular school day. Fueling this work is a bold vision to combat educational inequity by working with school districts to unlock the power of personal relationships to nurture academic, socia\u2026",
    category: {
      tag: "it-jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
    },
    created: "2022-06-10T06:44:54Z",
    title: "Software Engineer III",
    redirect_url:
      "https://www.adzuna.com/land/ad/3215285509?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=947DBDB9F4F9939EDA73DD4DECFE60400224A7D1",
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIzMjE1Mjg1NTA5In0.A013nwemXcyE3J_XAWySd_5_nKL6oYjYKkO252-IeUA",
    longitude: -161.79762,
    latitude: 60.78561,
    location: {
      display_name: "Kongiganak, Bethel",
      area: ["US", "Alaska", "Bethel", "Kongiganak"],
      __CLASS__: "Adzuna::API::Response::Location",
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Saga Education",
    },
  },
  {
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Open Learning Exchange",
    },
    location: {
      display_name: "Juneau, Alaska",
      area: ["US", "Alaska", "Juneau"],
      __CLASS__: "Adzuna::API::Response::Location",
    },
    latitude: 58.330535,
    longitude: -134.533577,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNjI3NzgzODg4In0.dE8bDzCAwsZoVG2pd8gQ_h7ikkbtOjruUINEEAct2rQ",
    created: "2021-11-09T16:08:16Z",
    title: "Software Engineering Intern",
    redirect_url:
      "https://www.adzuna.com/land/ad/2627783888?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=739A263BEC2C408DE184F423E24A6BDCCD7C632C",
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    description:
      "Our organization seeks a dedicated, passionate Virtual / Remote Software Engineering Intern to assist with delivering hardware, software, and technical support to various e-learning programs around the globe. This position is ideal for an undergraduate or graduate student interested in software development, mechanical engineering, and/or low-cost technologies. We ask that our interns commit to a minimum schedule of 16 hours/week with a minimum 3-month contract (with an opportunity to extend). P\u2026",
    salary_is_predicted: "0",
    contract_time: "part_time",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2627783888",
  },
  {
    salary_is_predicted: "0",
    description:
      "Our organization seeks a dedicated, passionate Virtual / Remote Software Engineering Intern to assist with delivering hardware, software, and technical support to various e-learning programs around the globe. This position is ideal for an undergraduate or graduate student interested in software development, mechanical engineering, and/or low-cost technologies. We ask that our interns commit to a minimum schedule of 16 hours/week with a minimum 3-month contract (with an opportunity to extend). P\u2026",
    contract_time: "part_time",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2627755788",
    created: "2021-11-09T16:02:46Z",
    title: "Software Engineering Intern",
    redirect_url:
      "https://www.adzuna.com/land/ad/2627755788?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=90ABCE00E276DB585AEA6C6DFBB50BD006311015",
    category: {
      tag: "it-jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
    },
    latitude: 61.218923,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNjI3NzU1Nzg4In0.n9yf54TYYq8qTASzbyQ02yqokPYpYlUpu1nEEw4ugkA",
    longitude: -149.850373,
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Open Learning Exchange",
    },
    location: {
      display_name: "Anchorage, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Anchorage"],
    },
  },
  {
    location: {
      display_name: "Southeast Fairbanks, Alaska",
      area: ["US", "Alaska", "Southeast Fairbanks"],
      __CLASS__: "Adzuna::API::Response::Location",
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Open Learning Exchange",
    },
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjcyMzAzMTA5OSIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.zUmv9ZYlMtgPpOUBdKGy2qGldpNStUPb2sJXmyRxZNw",
    longitude: -143.377822,
    latitude: 63.674914,
    category: {
      tag: "it-jobs",
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
    },
    created: "2021-12-09T03:01:53Z",
    title: "Software Engineering Intern",
    redirect_url:
      "https://www.adzuna.com/land/ad/2723031099?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=8D85E14349532E59FCF46ECC86BF4B38DABB674F",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "part_time",
    id: "2723031099",
    salary_is_predicted: "0",
    description:
      "Our organization seeks a dedicated, passionate Virtual / Remote Software Engineering Intern to assist with delivering hardware, software, and technical support to various e-learning programs around the globe. This position is ideal for an undergraduate or graduate student interested in software development, mechanical engineering, and/or low-cost technologies. We ask that our interns commit to a minimum schedule of 16 hours/week with a minimum 3-month contract (with an opportunity to extend). P\u2026",
  },
  {
    redirect_url:
      "https://www.adzuna.com/land/ad/2798935006?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=8024F3382B8D9D052347DE720732EA55069EB594",
    created: "2022-01-08T03:15:09Z",
    title: "Software Engineering Intern",
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    description:
      "Our organization seeks a dedicated, passionate Virtual / Remote Software Engineering Intern to assist with delivering hardware, software, and technical support to various e-learning programs around the globe. This position is ideal for an undergraduate or graduate student interested in software development, mechanical engineering, and/or low-cost technologies. We ask that our interns commit to a minimum schedule of 16 hours/week with a minimum 3-month contract (with an opportunity to extend). P\u2026",
    salary_is_predicted: "0",
    contract_time: "part_time",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2798935006",
    company: {
      display_name: "Open Learning Exchange",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    location: {
      display_name: "Kongiganak, Bethel",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Bethel", "Kongiganak"],
    },
    latitude: 60.78561,
    longitude: -161.79762,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNzk4OTM1MDA2In0.fXZyDRIPguPmbHPEH3szQ3ltxcgER1wRXNXQnHxkspk",
  },
  {
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Wiley Edge",
    },
    location: {
      display_name: "Anchorage, Alaska",
      area: ["US", "Alaska", "Anchorage"],
      __CLASS__: "Adzuna::API::Response::Location",
    },
    latitude: 61.218923,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzIwNzMzODQ4MyIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.uuZgBQTBQwNUh7Peju55NuQ2D2ETb4pIjQhCanyjxes",
    longitude: -149.850373,
    created: "2022-06-07T22:33:25Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/3207338483?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=A7B3FD70868549E39681BAD8559AB94CBAEBC58C",
    title: "Junior Software Engineer",
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    salary_is_predicted: "0",
    description:
      "WANT TO START YOUR CAREER AS A JAVA DEVELOPER? Paid graduate training, ongoing support, opportunities at leading global employers - the Alumni graduate program gives you everything you need. (And don\u2019t worry, there\u2019s no training bond. No exit fees, no hidden catches). Here at Wiley Edge, we pair great graduates with brilliant global businesses. Our clients include tier one investment banks and other organizations across a range of industries, from insurance to healthcare to travel. WHAT YOU\u2019LL \u2026",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    id: "3207338483",
  },
  {
    description:
      "WANT TO START YOUR CAREER AS A JAVA DEVELOPER? Paid graduate training, ongoing support, opportunities at leading global employers - the Alumni graduate program gives you everything you need. (And don\u2019t worry, there\u2019s no training bond. No exit fees, no hidden catches). Here at Wiley Edge, we pair great graduates with brilliant global businesses. Our clients include tier one investment banks and other organizations across a range of industries, from insurance to healthcare to travel. WHAT YOU\u2019LL \u2026",
    salary_is_predicted: "0",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    id: "3207300516",
    created: "2022-06-07T22:28:26Z",
    title: "Junior Software Engineer",
    redirect_url:
      "https://www.adzuna.com/land/ad/3207300516?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=737586A69FFB17E0C736E7C3113552520FA9CF00",
    category: {
      tag: "it-jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
    },
    latitude: 63.674914,
    longitude: -143.377822,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzIwNzMwMDUxNiIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.xMAJXarbT58sOVi5n6J7taCc0xThcFRdq0_plaoQtYw",
    company: {
      display_name: "Wiley Edge",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    location: {
      area: ["US", "Alaska", "Southeast Fairbanks"],
      __CLASS__: "Adzuna::API::Response::Location",
      display_name: "Southeast Fairbanks, Alaska",
    },
  },
  {
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzIwNzI5OTIwNiIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.T231zob2O0Sh-4E3w1SxNDB5yBxqO2dAAEtQZSCqtu0",
    longitude: -161.79762,
    latitude: 60.78561,
    location: {
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Bethel", "Kongiganak"],
      display_name: "Kongiganak, Bethel",
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Wiley Edge",
    },
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    id: "3207299206",
    salary_is_predicted: "0",
    description:
      "WANT TO START YOUR CAREER AS A JAVA DEVELOPER? Paid graduate training, ongoing support, opportunities at leading global employers - the Alumni graduate program gives you everything you need. (And don\u2019t worry, there\u2019s no training bond. No exit fees, no hidden catches). Here at Wiley Edge, we pair great graduates with brilliant global businesses. Our clients include tier one investment banks and other organizations across a range of industries, from insurance to healthcare to travel. WHAT YOU\u2019LL \u2026",
    category: {
      tag: "it-jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
    },
    created: "2022-06-07T22:27:25Z",
    title: "Junior Software Engineer",
    redirect_url:
      "https://www.adzuna.com/land/ad/3207299206?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=85172E861F4F84F6AD7DFB3E18E74BEA09785BBE",
  },
  {
    salary_is_predicted: "0",
    description:
      "WANT TO START YOUR CAREER AS A JAVA DEVELOPER? Paid graduate training, ongoing support, opportunities at leading global employers - the Alumni graduate program gives you everything you need. (And don\u2019t worry, there\u2019s no training bond. No exit fees, no hidden catches). Here at Wiley Edge, we pair great graduates with brilliant global businesses. Our clients include tier one investment banks and other organizations across a range of industries, from insurance to healthcare to travel. WHAT YOU\u2019LL \u2026",
    contract_time: "full_time",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "3207301171",
    redirect_url:
      "https://www.adzuna.com/land/ad/3207301171?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=0B85365A715E47D49C7FC898467BEB68B13A0316",
    created: "2022-06-07T22:29:05Z",
    title: "Junior Software Engineer",
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    latitude: 58.330535,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIzMjA3MzAxMTcxIn0.eBJdUaewj7CIlueVL1dI_k6WuvpdEaQbtUVPy3c6VGs",
    longitude: -134.533577,
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Wiley Edge",
    },
    location: {
      display_name: "Juneau, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Juneau"],
    },
  },
  {
    location: {
      area: ["US", "Alaska", "Anchorage"],
      __CLASS__: "Adzuna::API::Response::Location",
      display_name: "Anchorage, Alaska",
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Canonical   Jobs",
    },
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIzMjA2MDUxNzUxIn0.KJsXC8aBJBXjzNGhdnCjj2mhjksGeikS18NgJaLFNQE",
    longitude: -149.850373,
    latitude: 61.218923,
    category: {
      tag: "it-jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
    },
    title: "Senior Software Engineer - Python - Kubernetes",
    created: "2022-06-07T11:45:38Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/3206051751?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=5520DB2844D3B378DE76DB425AE6D32AE8DFF92D",
    id: "3206051751",
    __CLASS__: "Adzuna::API::Response::Job",
    salary_is_predicted: "0",
    description:
      "Summary This is an exciting opportunity for a software engineer passionate about open source software, Linux, Python and Kubernetes. Come build a rewarding, meaningful career working with the best and brightest people in technology at Canonical, the growing international software company behind Ubuntu. As a member of the Kubernetes product team you will develop operators for deploying and managing Kubernetes with a model-driven, pluggable approach. You will bring Kubernetes to a wide range of u\u2026",
  },
  {
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    created: "2022-06-16T23:04:21Z",
    title: "Senior Software Engineer - Data Platform",
    redirect_url:
      "https://www.adzuna.com/land/ad/3235097956?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=855EE4C498F07CA2BC868454D0BA770CD9EC00C0",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "3235097956",
    salary_is_predicted: "0",
    description:
      "Canonical is building a comprehensive automation suite to deliver a multi-cloud and on-premise data solution for the enterprise, which spans the full range of data stores and data technologies from big data, with Hadoop and Spark, through NoSQL and cache-layer capabilities like Redis and Mongo and Scylla, all the way to structured SQL engines. This is an exceptional opportunity for an experienced software engineer passionate about high quality and high reliability open source software running o\u2026",
    location: {
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Anchorage"],
      display_name: "Anchorage, Alaska",
    },
    company: {
      display_name: "Canonical   Jobs",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIzMjM1MDk3OTU2In0.h-VySc4BzSbNyh9e11ZLo7jv_n4fciA8DskJppGHLls",
    longitude: -149.850373,
    latitude: 61.218923,
  },
  {
    longitude: -149.850373,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzIzNTA5NTk0MSIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.8OjNHby_eIMOyjuLANYJjryZTvMGX2TmSIov0usQs-U",
    latitude: 61.218923,
    location: {
      display_name: "Anchorage, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Anchorage"],
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Canonical   Jobs",
    },
    __CLASS__: "Adzuna::API::Response::Job",
    id: "3235095941",
    description:
      "Canonical is building a new generation of Ubuntu-based Docker images to simplify open source application deployment across the world. These container images will be free to use with long term security commitments, and engineered for performance, security and usability. As with Ubuntu, we will work in the open and welcome community participation. This role is to lead the team to design and build images, tools, technology, and community processes. This is an exciting opportunity for a software en\u2026",
    salary_is_predicted: "0",
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    redirect_url:
      "https://www.adzuna.com/land/ad/3235095941?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=595EDCCC76EB143FB1EACE591023B9320EF54198",
    created: "2022-06-16T23:03:54Z",
    title: "Software Engineer - Docker Images & Community",
  },
  {
    latitude: 61.518794,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzI0NTg5ODEwOCIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.Fd8JcgT_0tQkfvwBHgYjHGerfWpPaUD6LGW-EgEJAQ4",
    longitude: -145.974695,
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "General Dynamics Information Technology",
    },
    location: {
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Valdez-Cordova"],
      display_name: "Valdez-Cordova, Alaska",
    },
    salary_is_predicted: "0",
    description:
      "Type of Requisition: Regular Clearance Level Must Be Able to Obtain: None Job Family: Software Development GDIT is seeking a well-versed, hands-on Software Engineering Leader to join our Federal program team to collaborate and work closely with our Federal customer stakeholders and leadership to understand, document, enhance, implement, maintain, and continuously improve the business processes and supporting Unified Case Management (UCM) low code applications (e.g. Appian, Pega, etc.). You will\u2026",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "3245898108",
    created: "2022-06-20T22:14:49Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/3245898108?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=63198E50DE73269F9DF1212227CF0F4EC7B0BD2A",
    title: "Software Engineering Team Lead (Remote)",
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
  },
  {
    location: {
      area: ["US", "Alaska", "Anchorage"],
      __CLASS__: "Adzuna::API::Response::Location",
      display_name: "Anchorage, Alaska",
    },
    company: {
      display_name: "Ad Hoc Team",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzIzNTA5NTI4OCIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.CBe279Nq0N7sK3TVL7z6Uks5b2oWK9QTYRIXF9MCvIw",
    longitude: -149.850373,
    latitude: 61.218923,
    category: {
      tag: "it-jobs",
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
    },
    redirect_url:
      "https://www.adzuna.com/land/ad/3235095288?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=E2EA20A976A43B25FEE18D8BB785411EB0CE0A02",
    created: "2022-06-16T23:03:34Z",
    title: "Staff Software Engineer Architecture (remote)",
    id: "3235095288",
    __CLASS__: "Adzuna::API::Response::Job",
    salary_is_predicted: "0",
    description:
      "This is a remote position. Ad Hoc is a digital services company that helps the federal government better serve people. Our team of experts from across the commercial industry and government brings the modern skills necessary to help agencies transform public services into digital services. Our work enables agencies to meet the needs of their users while closing the gap between consumer expectations and government. Ad Hoc is looking for a senior-level Staff Platform Engineer. The ideal candidate\u2026",
  },
  {
    longitude: -134.533577,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjczNDU0MjMzMCIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.uzoJMFqOaSd3w4O270rt2WYtiifqOUcFgn5czvvngNw",
    latitude: 58.330535,
    location: {
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Juneau"],
      display_name: "Juneau, Alaska",
    },
    company: {
      display_name: "Tata Consultancy Services",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    contract_time: "full_time",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2734542330",
    description:
      "This role is based out of TCS's West Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 Texas, Arkansas - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. A fully paid training pr\u2026",
    salary_is_predicted: "0",
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    created: "2021-12-13T11:31:30Z",
    title: "Software Engineer - West Hub",
    redirect_url:
      "https://www.adzuna.com/land/ad/2734542330?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=4CA1896CE3B3A4361D4909CD972AFCC675822ACE",
  },
  {
    location: {
      display_name: "Anchorage, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Anchorage"],
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Tata Consultancy Services",
    },
    longitude: -149.850373,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNjI3Nzk2OTk0In0.HQpJHp3nOJJ4JsOYxBMBR9tO72FO5BT4csd5DtwNIts",
    latitude: 61.218923,
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    created: "2021-11-09T16:09:50Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2627796994?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=5ED368096CC99C9687B81FF54512A1E84C9D8521",
    title: "Software Engineer - West Hub",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    id: "2627796994",
    description:
      "This role is based out of TCS's West Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 Texas, Arkansas - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. A fully paid training pr\u2026",
    salary_is_predicted: "0",
  },
  {
    created: "2021-12-13T11:46:08Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2734577716?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=7838E9A58D71D8BA736C67FD129FB02CAEC9B9AD",
    title: "Software Engineer - West Hub",
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    description:
      "This role is based out of TCS's West Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 Texas, Arkansas - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. A fully paid training pr\u2026",
    salary_is_predicted: "0",
    contract_time: "full_time",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2734577716",
    company: {
      display_name: "Tata Consultancy Services",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    location: {
      display_name: "Kongiganak, Bethel",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Bethel", "Kongiganak"],
    },
    latitude: 60.78561,
    longitude: -161.79762,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjczNDU3NzcxNiIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.RlpmbsMsS4zAe4Dxe41d0aqwClM-RrUDcqxIxEdVowc",
  },
  {
    title: "Software Engineer - West Hub",
    created: "2021-09-09T02:25:46Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2443660542?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=CC89B0AC74A49197F0DA310419DFF6C2161D9556",
    category: {
      tag: "it-jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
    },
    description:
      "This role is based out of TCS's West Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 Texas, Arkansas - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. A fully paid training pr\u2026",
    salary_is_predicted: "0",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    id: "2443660542",
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Tata Consultancy Services",
    },
    location: {
      display_name: "Southeast Fairbanks, Alaska",
      area: ["US", "Alaska", "Southeast Fairbanks"],
      __CLASS__: "Adzuna::API::Response::Location",
    },
    latitude: 63.674914,
    longitude: -143.377822,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNDQzNjYwNTQyIn0.siDeT2G9Qn16j8IkHie2bKH-G8UYnVKq9oBFPE0BQbo",
  },
  {
    location: {
      area: ["US", "Alaska", "Southeast Fairbanks"],
      __CLASS__: "Adzuna::API::Response::Location",
      display_name: "Southeast Fairbanks, Alaska",
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Tata Consultancy Services",
    },
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNzY5NTQwODk1In0.-60jtMVxjA7G1fEumqIXh4c5MWpDvHYUVmKt-GGNu-Y",
    longitude: -143.377822,
    latitude: 63.674914,
    category: {
      tag: "it-jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
    },
    created: "2021-12-27T00:28:59Z",
    title: "Software Engineer - Midwest Hub",
    redirect_url:
      "https://www.adzuna.com/land/ad/2769540895?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=2BE30E562B9B685BE7E7BB44BEC4158F4EDF6C99",
    contract_time: "full_time",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2769540895",
    salary_is_predicted: "0",
    description:
      "This role is based out of TCS's Midwest Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 Indiana, Ohio, MIchigan, Kentucky - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. A f\u2026",
  },
  {
    title: "Software Engineer - Midwest Hub",
    created: "2022-01-04T04:45:57Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2788637773?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=F7BAEB232AC53D0FAEA0DCB0E782490B89F3C1B0",
    category: {
      tag: "it-jobs",
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
    },
    salary_is_predicted: "0",
    description:
      "This role is based out of TCS's Midwest Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 Indiana, Ohio, MIchigan, Kentucky - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. A f\u2026",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2788637773",
    contract_time: "full_time",
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Tata Consultancy Services",
    },
    location: {
      area: ["US", "Alaska", "Anchorage"],
      __CLASS__: "Adzuna::API::Response::Location",
      display_name: "Anchorage, Alaska",
    },
    latitude: 61.218923,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjc4ODYzNzc3MyIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.5qRKASEfnnp6f6DLxrCTjXfd74hOCYV9A1K3-tmeMPY",
    longitude: -149.850373,
  },
  {
    title: "Software Engineer - Central Hub",
    created: "2021-12-13T11:30:46Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2734540412?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=E05A7D2498243E7934ECF6C0C5D60F5E92515EFE",
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    salary_is_predicted: "0",
    description:
      "This role is based out of TCS's Central Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 Illinois, Wisconsin, Iowa, Minnesota - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. \u2026",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    id: "2734540412",
    company: {
      display_name: "TATA Consultancy Services",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    location: {
      display_name: "Southeast Fairbanks, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Southeast Fairbanks"],
    },
    latitude: 63.674914,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjczNDU0MDQxMiIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.wHu3A8yoSBvi-Jx18AaGYQZcgqdvpkj7Lw8kXt92dnQ",
    longitude: -143.377822,
  },
  {
    longitude: -161.79762,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjczNDU3NzgwOCIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.KbSHQUw4eaWNRR3vvEir5E1h4tGqic65bKvNIGLwcLw",
    latitude: 60.78561,
    location: {
      area: ["US", "Alaska", "Bethel", "Kongiganak"],
      __CLASS__: "Adzuna::API::Response::Location",
      display_name: "Kongiganak, Bethel",
    },
    company: {
      display_name: "TATA Consultancy Services",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    id: "2734577808",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    description:
      "This role is based out of TCS's Central Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 Illinois, Wisconsin, Iowa, Minnesota - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. \u2026",
    salary_is_predicted: "0",
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    title: "Software Engineer - Central Hub",
    created: "2021-12-13T11:46:10Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2734577808?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=2370064011370FB3DF8B607FF5716ADEFBBBFD45",
  },
  {
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    created: "2021-12-13T11:53:10Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2734602254?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=4EE2E53D1A38CA0EB1B12D799BE5D1F26A1C53FD",
    title: "Software Engineer - Central Hub",
    id: "2734602254",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    description:
      "This role is based out of TCS's Central Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 Illinois, Wisconsin, Iowa, Minnesota - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. \u2026",
    salary_is_predicted: "0",
    location: {
      display_name: "Juneau, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Juneau"],
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "TATA Consultancy Services",
    },
    longitude: -134.533577,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNzM0NjAyMjU0In0.b3_hlOVcAJX779ZxloY5JZBvki9I6wdTWG3MdJcfdkc",
    latitude: 58.330535,
  },
  {
    category: {
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
      tag: "it-jobs",
    },
    title: "Software Engineer - Central Hub",
    created: "2021-09-08T01:56:18Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2440822968?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=9345DAB790BDFB8965307FC5EBC9474956EDAEAB",
    id: "2440822968",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    salary_is_predicted: "0",
    description:
      "This role is based out of TCS's Central Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 Illinois, Wisconsin, Iowa, Minnesota - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. \u2026",
    location: {
      display_name: "Anchorage, Alaska",
      area: ["US", "Alaska", "Anchorage"],
      __CLASS__: "Adzuna::API::Response::Location",
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "TATA Consultancy Services",
    },
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNDQwODIyOTY4In0.V46ZZ1EqxpqjTd6a1sNyF7n2-QtIdcPkWFU6om7soj0",
    longitude: -149.850373,
    latitude: 61.218923,
  },
  {
    category: {
      tag: "it-jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
    },
    redirect_url:
      "https://www.adzuna.com/land/ad/2769566484?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=C7562D4A75E23CEE7931730B4A107D8664D522C9",
    created: "2021-12-27T00:37:20Z",
    title: "Software Engineer - Midwest Hub",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    id: "2769566484",
    description:
      "This role is based out of TCS's Midwest Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 Indiana, Ohio, MIchigan, Kentucky - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. A f\u2026",
    salary_is_predicted: "0",
    location: {
      display_name: "Kongiganak, Bethel",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Bethel", "Kongiganak"],
    },
    company: {
      display_name: "Tata Consultancy Services",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    longitude: -161.79762,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNzY5NTY2NDg0In0.5ricKbmKvixTgmL7nzS5oTkBeziIzvgadZ4w7v7fvjA",
    latitude: 60.78561,
  },
  {
    title: "Software Engineer - East Hub",
    created: "2021-09-27T06:36:38Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2495655785?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=3FE32D6AE151ED8917DF44FA3E8B327FDBF15698",
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    salary_is_predicted: "0",
    description:
      "This role is based out of TCS's East Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 New Jersey, Delaware, Maryland, New York, Pennsylvania, Connecticut, Rhode Island, Virginia - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin thei\u2026",
    __CLASS__: "Adzuna::API::Response::Job",
    contract_time: "full_time",
    id: "2495655785",
    company: {
      display_name: "Tata Consultancy Services",
      __CLASS__: "Adzuna::API::Response::Company",
    },
    location: {
      display_name: "Anchorage, Alaska",
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Anchorage"],
    },
    latitude: 61.218923,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjQ5NTY1NTc4NSIsInMiOiI3RENyQmhEeDdCR1ZRTEYwYmtTczBBIn0.WujL53OuZNZ9WcTwCXnDtUwIeYvX-a9mMFYo94DbANk",
    longitude: -149.850373,
  },
  {
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNzY5NTM2NzI1In0.RpLf0UcLuEgxU9cMzLZyiZtPTMUD5d8fDKpTBsxKqTI",
    longitude: -134.533577,
    latitude: 58.330535,
    location: {
      __CLASS__: "Adzuna::API::Response::Location",
      area: ["US", "Alaska", "Juneau"],
      display_name: "Juneau, Alaska",
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Tata Consultancy Services",
    },
    contract_time: "full_time",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2769536725",
    salary_is_predicted: "0",
    description:
      "This role is based out of TCS's Midwest Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 Indiana, Ohio, MIchigan, Kentucky - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program. A f\u2026",
    category: {
      tag: "it-jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      label: "IT Jobs",
    },
    created: "2021-12-27T00:25:08Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2769536725?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=017021034465022DE605866047C02AB887276F36",
    title: "Software Engineer - Midwest Hub",
  },
  {
    location: {
      area: ["US", "Alaska", "Juneau"],
      __CLASS__: "Adzuna::API::Response::Location",
      display_name: "Juneau, Alaska",
    },
    company: {
      __CLASS__: "Adzuna::API::Response::Company",
      display_name: "Tata Consultancy Services",
    },
    longitude: -134.533577,
    adref:
      "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiN0RDckJoRHg3QkdWUUxGMGJrU3MwQSIsImkiOiIyNTU5NDI5NjI4In0.6HRBXR5W2VvE9fZysyMgbmz3VKiVsZ9KijY_n4BKWA0",
    latitude: 58.330535,
    category: {
      label: "IT Jobs",
      __CLASS__: "Adzuna::API::Response::Category",
      tag: "it-jobs",
    },
    created: "2021-10-19T17:54:47Z",
    redirect_url:
      "https://www.adzuna.com/land/ad/2559429628?se=7DCrBhDx7BGVQLF0bkSs0A&utm_medium=api&utm_source=6ddc0eff&v=16773665C266506BA9930BD51FE86FB06E1223A7",
    title: "Software Engineer - East Hub",
    contract_time: "full_time",
    __CLASS__: "Adzuna::API::Response::Job",
    id: "2559429628",
    description:
      "This role is based out of TCS's East Hub. Candidate must be open and flexible to relocate to our projects/assignments within the Hub covering states \u2013 New Jersey, Delaware, Maryland, New York, Pennsylvania, Connecticut, Rhode Island, Virginia - once it is safe to return to offices. Position Description: As a Software Engineer you will be trained to develop information systems by designing, developing, and installing software solutions to the world class clients we serve. Campus hires begin thei\u2026",
    salary_is_predicted: "0",
  },
];
