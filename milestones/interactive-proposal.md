# Yufei Mao

## Description

Using the data on the birth rate of teenage girls, I am planning to map out the longitudinal changes in the U.S. In terms of the interactive feature, audiences would be able to click on a specific state and to learn more about the data regarding its yearly changes. On the other hand, audiences could also select which year they want to focus more on by getting a glimpse of the density map of birth rates across states.

## Technical Plan re: Option A/B/C/D

I’m choosing Option C (Geospatial Visualization) because my dataset is inherently spatial (state/county birth rates across years), and a map is the most direct way to surface geographic patterns and let users dive into regions they care about. As recommended, I am planning to use MapLibreGL for the base map. To fulfill the requirement of using D3, I would build a line chart of birth rate over time for the selected state. 

Inspired by:
1. https://datacommons.org/explore#client=ui_query&q=birth+rate
2. https://yhchang717.github.io/Housing-School/

## Mockup

![Description of image](/Sketch.png)

## Data Sources
### Data Source 1: Teen Birth Rates for Age Group 15-19 in the United States by County

URL: https://catalog.data.gov/dataset/nchs-teen-birth-rates-for-age-group-15-19-in-the-united-states-by-county

Size: 56467 rows, 9 columns

This dataset from the National Center for Health Statistics (NCHS) provided model-based estimates of teen birth rates among females aged 15–19 years for all U.S. counties from 2003 through 2020. The columns represented the year, geographical information, and birth rate (including both estimation and confidence intervals) while each row refered to a county in the U.S. More specific, the estimated value demonstrated the number of live births per 1,000 females aged 15–19 in each county and year. It would be interested to look into as well as visualizing the data from multiple perspectives. For instance, one trend I am hoping to see is that the teen birth rate would decrease with time in all states/counties. I also think it would be meaningful to explore whether there are any state-level differences in given years (e.g., would red states and blue states show distinct pattern around this data?).  


## Questions

1. How can I show the difference between red and blue states (if I identify a trend) in a density map? I believe that choosing distinct colors might increase their cognitive load because it is difficult to communicate both density and state difference using a single element. 
