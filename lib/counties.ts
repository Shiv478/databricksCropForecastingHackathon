export interface County {
  name: string;
  state: string;
  fips: string;
  lat: number;
  lon: number;
}

export const US_STATES = [
  "Alabama", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
  "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
  "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming"
] as const;

// Major agricultural counties with coordinates (representative set)
export const COUNTIES: County[] = [
  // Iowa
  { name: "Polk", state: "Iowa", fips: "19153", lat: 41.6852, lon: -93.5716 },
  { name: "Story", state: "Iowa", fips: "19169", lat: 42.0364, lon: -93.4783 },
  { name: "Linn", state: "Iowa", fips: "19113", lat: 42.0796, lon: -91.5985 },
  { name: "Black Hawk", state: "Iowa", fips: "19013", lat: 42.4700, lon: -92.3100 },
  { name: "Scott", state: "Iowa", fips: "19163", lat: 41.6389, lon: -90.6233 },
  { name: "Woodbury", state: "Iowa", fips: "19193", lat: 42.3900, lon: -96.1100 },
  { name: "Cerro Gordo", state: "Iowa", fips: "19033", lat: 43.0800, lon: -93.2600 },
  { name: "Pottawattamie", state: "Iowa", fips: "19155", lat: 41.3500, lon: -95.5500 },
  // Illinois
  { name: "Cook", state: "Illinois", fips: "17031", lat: 41.8402, lon: -87.8168 },
  { name: "McLean", state: "Illinois", fips: "17113", lat: 40.4913, lon: -88.8475 },
  { name: "Champaign", state: "Illinois", fips: "17019", lat: 40.1398, lon: -88.1983 },
  { name: "Sangamon", state: "Illinois", fips: "17167", lat: 39.7600, lon: -89.6700 },
  { name: "LaSalle", state: "Illinois", fips: "17099", lat: 41.3400, lon: -89.0900 },
  { name: "Macon", state: "Illinois", fips: "17115", lat: 39.8600, lon: -88.9500 },
  { name: "DeKalb", state: "Illinois", fips: "17037", lat: 41.8900, lon: -88.7700 },
  // Indiana
  { name: "Marion", state: "Indiana", fips: "18097", lat: 39.7684, lon: -86.1581 },
  { name: "Tippecanoe", state: "Indiana", fips: "18157", lat: 40.4100, lon: -86.8500 },
  { name: "Allen", state: "Indiana", fips: "18003", lat: 41.0900, lon: -85.0600 },
  { name: "Elkhart", state: "Indiana", fips: "18039", lat: 41.6000, lon: -85.8500 },
  { name: "Vigo", state: "Indiana", fips: "18167", lat: 39.4100, lon: -87.3800 },
  // Kansas
  { name: "Sedgwick", state: "Kansas", fips: "20173", lat: 37.6843, lon: -97.3358 },
  { name: "Finney", state: "Kansas", fips: "20055", lat: 37.9700, lon: -100.7400 },
  { name: "Ford", state: "Kansas", fips: "20057", lat: 37.6900, lon: -99.8900 },
  { name: "Sumner", state: "Kansas", fips: "20191", lat: 37.2300, lon: -97.4800 },
  { name: "Reno", state: "Kansas", fips: "20155", lat: 37.9600, lon: -98.0900 },
  { name: "Thomas", state: "Kansas", fips: "20193", lat: 39.3500, lon: -101.0500 },
  // Nebraska
  { name: "Lancaster", state: "Nebraska", fips: "31109", lat: 40.7837, lon: -96.6916 },
  { name: "Hall", state: "Nebraska", fips: "31079", lat: 40.8700, lon: -98.5000 },
  { name: "Buffalo", state: "Nebraska", fips: "31019", lat: 40.7400, lon: -99.0800 },
  { name: "Dawson", state: "Nebraska", fips: "31047", lat: 40.8700, lon: -99.8100 },
  { name: "York", state: "Nebraska", fips: "31185", lat: 40.8700, lon: -97.5900 },
  { name: "Cuming", state: "Nebraska", fips: "31039", lat: 41.9200, lon: -96.7900 },
  // Minnesota
  { name: "Hennepin", state: "Minnesota", fips: "27053", lat: 45.0059, lon: -93.4748 },
  { name: "Blue Earth", state: "Minnesota", fips: "27013", lat: 44.0400, lon: -94.0600 },
  { name: "Renville", state: "Minnesota", fips: "27129", lat: 44.7300, lon: -95.0200 },
  { name: "Stearns", state: "Minnesota", fips: "27145", lat: 45.5500, lon: -94.6100 },
  { name: "Otter Tail", state: "Minnesota", fips: "27111", lat: 46.4000, lon: -95.7100 },
  { name: "Martin", state: "Minnesota", fips: "27091", lat: 43.6800, lon: -94.5500 },
  // Texas
  { name: "Harris", state: "Texas", fips: "48201", lat: 29.7604, lon: -95.3698 },
  { name: "Lubbock", state: "Texas", fips: "48303", lat: 33.5779, lon: -101.8552 },
  { name: "Hidalgo", state: "Texas", fips: "48215", lat: 26.3500, lon: -98.1600 },
  { name: "Hale", state: "Texas", fips: "48189", lat: 34.0700, lon: -101.8200 },
  { name: "Cameron", state: "Texas", fips: "48061", lat: 26.1500, lon: -97.4700 },
  { name: "Nueces", state: "Texas", fips: "48355", lat: 27.7400, lon: -97.5200 },
  { name: "Parmer", state: "Texas", fips: "48369", lat: 34.5300, lon: -102.7800 },
  // California
  { name: "Fresno", state: "California", fips: "06019", lat: 36.7468, lon: -119.7726 },
  { name: "Kern", state: "California", fips: "06029", lat: 35.3473, lon: -118.7304 },
  { name: "Tulare", state: "California", fips: "06107", lat: 36.2300, lon: -118.7800 },
  { name: "San Joaquin", state: "California", fips: "06077", lat: 37.9300, lon: -121.2700 },
  { name: "Merced", state: "California", fips: "06047", lat: 37.1900, lon: -120.7200 },
  { name: "Stanislaus", state: "California", fips: "06099", lat: 37.5600, lon: -121.0000 },
  { name: "Kings", state: "California", fips: "06031", lat: 36.0800, lon: -119.8200 },
  { name: "Monterey", state: "California", fips: "06053", lat: 36.2400, lon: -121.3100 },
  // North Dakota
  { name: "Cass", state: "North Dakota", fips: "38017", lat: 46.9300, lon: -97.0400 },
  { name: "Stutsman", state: "North Dakota", fips: "38093", lat: 46.9800, lon: -98.9600 },
  { name: "Barnes", state: "North Dakota", fips: "38003", lat: 46.9300, lon: -98.0700 },
  { name: "Grand Forks", state: "North Dakota", fips: "38035", lat: 47.9200, lon: -97.4500 },
  { name: "Richland", state: "North Dakota", fips: "38077", lat: 46.2700, lon: -96.9600 },
  // South Dakota
  { name: "Minnehaha", state: "South Dakota", fips: "46099", lat: 43.6700, lon: -96.7900 },
  { name: "Brookings", state: "South Dakota", fips: "46011", lat: 44.3700, lon: -96.7900 },
  { name: "Brown", state: "South Dakota", fips: "46013", lat: 45.5900, lon: -98.3500 },
  { name: "Beadle", state: "South Dakota", fips: "46005", lat: 44.4100, lon: -98.2800 },
  // Ohio
  { name: "Franklin", state: "Ohio", fips: "39049", lat: 39.9612, lon: -82.9988 },
  { name: "Darke", state: "Ohio", fips: "39037", lat: 40.1300, lon: -84.6200 },
  { name: "Wood", state: "Ohio", fips: "39173", lat: 41.3600, lon: -83.6200 },
  { name: "Pickaway", state: "Ohio", fips: "39129", lat: 39.5400, lon: -82.7700 },
  { name: "Hancock", state: "Ohio", fips: "39063", lat: 41.0000, lon: -83.6700 },
  // Missouri
  { name: "Jackson", state: "Missouri", fips: "29095", lat: 39.0084, lon: -94.4553 },
  { name: "Nodaway", state: "Missouri", fips: "29147", lat: 40.3600, lon: -94.8800 },
  { name: "Audrain", state: "Missouri", fips: "29007", lat: 39.1600, lon: -91.8400 },
  { name: "New Madrid", state: "Missouri", fips: "29143", lat: 36.5900, lon: -89.6500 },
  // Georgia
  { name: "Colquitt", state: "Georgia", fips: "13071", lat: 31.1800, lon: -83.7700 },
  { name: "Mitchell", state: "Georgia", fips: "13205", lat: 31.2100, lon: -84.1800 },
  { name: "Tift", state: "Georgia", fips: "13277", lat: 31.4600, lon: -83.5200 },
  { name: "Decatur", state: "Georgia", fips: "13087", lat: 30.8500, lon: -84.5800 },
  // Mississippi
  { name: "Bolivar", state: "Mississippi", fips: "28011", lat: 33.7900, lon: -90.8800 },
  { name: "Washington", state: "Mississippi", fips: "28151", lat: 33.2800, lon: -90.9500 },
  { name: "Sunflower", state: "Mississippi", fips: "28133", lat: 33.5500, lon: -90.5800 },
  { name: "Leflore", state: "Mississippi", fips: "28083", lat: 33.5500, lon: -90.3000 },
  // Arkansas
  { name: "Mississippi", state: "Arkansas", fips: "05093", lat: 35.7600, lon: -90.0500 },
  { name: "Poinsett", state: "Arkansas", fips: "05111", lat: 35.5700, lon: -90.6700 },
  { name: "Crittenden", state: "Arkansas", fips: "05035", lat: 35.2100, lon: -90.3100 },
  { name: "Cross", state: "Arkansas", fips: "05037", lat: 35.3000, lon: -90.7700 },
  // Louisiana
  { name: "Vermilion", state: "Louisiana", fips: "22113", lat: 29.8600, lon: -92.3100 },
  { name: "Acadia", state: "Louisiana", fips: "22001", lat: 30.2900, lon: -92.4100 },
  { name: "Jefferson Davis", state: "Louisiana", fips: "22053", lat: 30.2600, lon: -92.8100 },
  // Montana
  { name: "Hill", state: "Montana", fips: "30041", lat: 48.6300, lon: -109.9700 },
  { name: "Chouteau", state: "Montana", fips: "30015", lat: 47.8600, lon: -110.2200 },
  { name: "Cascade", state: "Montana", fips: "30013", lat: 47.3200, lon: -111.3400 },
  // Wisconsin
  { name: "Dane", state: "Wisconsin", fips: "55025", lat: 43.0698, lon: -89.4187 },
  { name: "Marathon", state: "Wisconsin", fips: "55073", lat: 44.9000, lon: -89.7600 },
  { name: "Grant", state: "Wisconsin", fips: "55043", lat: 42.8700, lon: -90.7100 },
  // Michigan
  { name: "Saginaw", state: "Michigan", fips: "26145", lat: 43.3300, lon: -84.0500 },
  { name: "Tuscola", state: "Michigan", fips: "26157", lat: 43.4900, lon: -83.4500 },
  { name: "Huron", state: "Michigan", fips: "26063", lat: 43.9400, lon: -82.8900 },
  // Colorado
  { name: "Weld", state: "Colorado", fips: "08123", lat: 40.5500, lon: -104.3900 },
  { name: "Morgan", state: "Colorado", fips: "08075", lat: 40.2600, lon: -103.8100 },
  { name: "Kit Carson", state: "Colorado", fips: "08063", lat: 38.8300, lon: -102.6000 },
  // Oklahoma
  { name: "Texas", state: "Oklahoma", fips: "40139", lat: 36.7700, lon: -101.4900 },
  { name: "Grant", state: "Oklahoma", fips: "40053", lat: 36.8100, lon: -97.7700 },
  { name: "Kay", state: "Oklahoma", fips: "40071", lat: 36.8200, lon: -97.1400 },
  // Washington
  { name: "Whitman", state: "Washington", fips: "53075", lat: 46.9000, lon: -117.5200 },
  { name: "Grant", state: "Washington", fips: "53025", lat: 47.2100, lon: -119.4500 },
  { name: "Yakima", state: "Washington", fips: "53077", lat: 46.4600, lon: -120.7400 },
  // Oregon
  { name: "Malheur", state: "Oregon", fips: "41045", lat: 43.4200, lon: -117.6400 },
  { name: "Umatilla", state: "Oregon", fips: "41059", lat: 45.5900, lon: -118.7500 },
  // Alabama
  { name: "Baldwin", state: "Alabama", fips: "01003", lat: 30.7270, lon: -87.7220 },
  { name: "Madison", state: "Alabama", fips: "01089", lat: 34.7600, lon: -86.5500 },
  { name: "Limestone", state: "Alabama", fips: "01083", lat: 34.8100, lon: -87.1200 },
  // Florida
  { name: "Palm Beach", state: "Florida", fips: "12099", lat: 26.6500, lon: -80.4300 },
  { name: "Hendry", state: "Florida", fips: "12051", lat: 26.5800, lon: -81.1100 },
  // North Carolina
  { name: "Sampson", state: "North Carolina", fips: "37163", lat: 34.9900, lon: -78.3700 },
  { name: "Duplin", state: "North Carolina", fips: "37061", lat: 34.9400, lon: -77.9300 },
  { name: "Robeson", state: "North Carolina", fips: "37155", lat: 34.6300, lon: -79.1000 },
  // Pennsylvania
  { name: "Lancaster", state: "Pennsylvania", fips: "42071", lat: 40.0426, lon: -76.1774 },
  { name: "Chester", state: "Pennsylvania", fips: "42029", lat: 39.9700, lon: -75.7500 },
  // Virginia
  { name: "Rockingham", state: "Virginia", fips: "51165", lat: 38.5100, lon: -79.0000 },
  { name: "Augusta", state: "Virginia", fips: "51015", lat: 38.1600, lon: -79.1300 },
  // Kentucky
  { name: "Christian", state: "Kentucky", fips: "21047", lat: 36.8900, lon: -87.4900 },
  { name: "Henderson", state: "Kentucky", fips: "21101", lat: 37.8000, lon: -87.5700 },
  // Tennessee
  { name: "Obion", state: "Tennessee", fips: "47131", lat: 36.3600, lon: -89.1500 },
  { name: "Gibson", state: "Tennessee", fips: "47053", lat: 35.9900, lon: -88.9300 },
  // South Carolina
  { name: "Orangeburg", state: "South Carolina", fips: "45075", lat: 33.4500, lon: -80.8000 },
  { name: "Florence", state: "South Carolina", fips: "45041", lat: 34.0100, lon: -79.7200 },
  // Idaho
  { name: "Canyon", state: "Idaho", fips: "16027", lat: 43.6300, lon: -116.6800 },
  { name: "Twin Falls", state: "Idaho", fips: "16083", lat: 42.3600, lon: -114.6700 },
  // Arizona
  { name: "Maricopa", state: "Arizona", fips: "04013", lat: 33.3489, lon: -112.4915 },
  { name: "Yuma", state: "Arizona", fips: "04027", lat: 32.6927, lon: -114.6277 },
  { name: "Pinal", state: "Arizona", fips: "04021", lat: 32.7700, lon: -111.3900 },
  // New Mexico
  { name: "Dona Ana", state: "New Mexico", fips: "35013", lat: 32.3500, lon: -106.8300 },
  { name: "Curry", state: "New Mexico", fips: "35009", lat: 34.5700, lon: -103.3300 },
  // Wyoming
  { name: "Laramie", state: "Wyoming", fips: "56021", lat: 41.2500, lon: -104.6800 },
  { name: "Goshen", state: "Wyoming", fips: "56015", lat: 42.0800, lon: -104.3500 },
  // Nevada
  { name: "Churchill", state: "Nevada", fips: "32001", lat: 39.7100, lon: -118.3400 },
  // Utah
  { name: "Cache", state: "Utah", fips: "49005", lat: 41.7400, lon: -111.7500 },
  { name: "Box Elder", state: "Utah", fips: "49003", lat: 41.5200, lon: -113.0800 },
  // Maryland
  { name: "Caroline", state: "Maryland", fips: "24011", lat: 38.8700, lon: -75.8500 },
  { name: "Dorchester", state: "Maryland", fips: "24019", lat: 38.4200, lon: -76.0800 },
  // Delaware
  { name: "Sussex", state: "Delaware", fips: "10005", lat: 38.6800, lon: -75.3400 },
  { name: "Kent", state: "Delaware", fips: "10001", lat: 39.0800, lon: -75.5200 },
  // New Jersey
  { name: "Salem", state: "New Jersey", fips: "34033", lat: 39.5700, lon: -75.3600 },
  { name: "Cumberland", state: "New Jersey", fips: "34011", lat: 39.3600, lon: -75.1300 },
  // Connecticut
  { name: "New London", state: "Connecticut", fips: "09011", lat: 41.4700, lon: -72.1000 },
  // Massachusetts
  { name: "Berkshire", state: "Massachusetts", fips: "25003", lat: 42.3700, lon: -73.2100 },
  // New York
  { name: "Suffolk", state: "New York", fips: "36103", lat: 40.9400, lon: -72.6800 },
  { name: "Wayne", state: "New York", fips: "36117", lat: 43.0600, lon: -77.0600 },
  // Vermont
  { name: "Addison", state: "Vermont", fips: "50001", lat: 44.0300, lon: -73.1400 },
  // New Hampshire
  { name: "Grafton", state: "New Hampshire", fips: "33009", lat: 43.9500, lon: -71.8400 },
  // Maine
  { name: "Aroostook", state: "Maine", fips: "23003", lat: 46.7200, lon: -68.5900 },
  // Rhode Island
  { name: "Washington", state: "Rhode Island", fips: "44009", lat: 41.3900, lon: -71.6500 },
  // West Virginia
  { name: "Jefferson", state: "West Virginia", fips: "54037", lat: 39.2800, lon: -77.8700 },
  { name: "Hardy", state: "West Virginia", fips: "54031", lat: 39.0000, lon: -78.8600 },
];

export function getStatesFromCounties(): string[] {
  const states = new Set(COUNTIES.map((c) => c.state));
  return Array.from(states).sort();
}

export function getCountiesForState(state: string): County[] {
  return COUNTIES.filter((c) => c.state === state).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}
