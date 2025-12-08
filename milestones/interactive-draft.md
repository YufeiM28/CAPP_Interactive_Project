# Teen Birth Rate Across Time and States

Yufei Mao

## Goal

My current project goal has remained consistent with the original proposal. I aim to visualize changes in teen birth rates over time through two coordinated views: a choropleth map that shows state-level teen birth rates for a selected year, and a line chart that displays longitudinal trends for any state the user clicks on. The overarching objective is to help viewers easily compare spatial patterns and temporal changes.

## Data Challenges

I am working with the real teen birth-rate dataset rather than mock data. The main challenge I encountered involves geographic resolution. My original plan was to visualize county-level data for every year, but the map quickly became visually overwhelming and difficult to interpret due to the high density of counties. To address this, I aggregated the data to the state level, which makes the choropleth more readable.

## Walk Through

The website currently features two main visual components. The choropleth map shows teen birth rates across U.S. states for any selected year. A year selector is positioned in the upper-right corner, allowing users to choose any year from 2003 to 2020. Once a year is selected, the map updates automatically. States are shaded based on a color scale, with darker regions indicating higher birth rates. The other one is a line chart that I am still working on. I am planning to make it interactive so that when a state on the map is clicked, a line chart (displayed on the right panel) would be rendered to show the state's teen birth rate changes across time.

## Questions

1. Whenever I clicked on the map, the white border highlight changed depending on the state. Some have a thicker white border, while others have a more subtle border. I wondered if it was due to the map JSON I used.
2. Another question concerns the description. I received a 0.5 point deduction from my static project for narrative, which I hope to improve in this project. In my case, I wondered if there was any additional information or context I should include to strengthen the narrative.
