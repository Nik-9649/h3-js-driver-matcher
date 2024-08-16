# H3-Based Driver-Passenger Matcher

This project uses the [H3-js](https://github.com/uber/h3-js) library to determine which drivers are within a certain proximity to a passenger based on their latitude and longitude. It leverages Uber's H3 geospatial indexing system to efficiently calculate and categorize drivers as potential or non-potential based on their distance from the passenger.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Nik-9649/h3-js-driver-matcher.git
   cd h3-js-driver-matcher
   ```

2. **Install Dependencies:**

   Ensure you have Node.js installed, then install the required packages:

   ```bash
   yarn install
   ```

## Usage

To use this tool, simply define the passenger's and drivers' locations, and the script will categorize the drivers as either potential or non-potential based on their proximity to the passenger.

### Running the Script

You can run the script using Node.js:

```bash
node index.js
```

or

```bash
yarn dev
```

## Configuration

- **Resolution:** The H3 resolution level used for indexing. Higher resolutions provide more granularity but may require more computation.
- **kDistance:** The radius of interest for potential drivers, defined in terms of H3 hexagons (1 = adjacent hexagons).

Both of these settings can be adjusted in the script:

```javascript
const resolution = 9; // Define the H3 resolution
const kDistance = 1; // Define the radius of interest (1 = adjacent hexagons)
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
