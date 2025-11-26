function renderLineChart(stateName, ratesRaw, allYears) {
  const container = d3.select("#line-chart");
  container.selectAll("*").remove();

  const stateData = ratesRaw
    .filter(d => d.state === stateName)
    .sort((a, b) => d3.ascending(a.year, b.year));

  if (stateData.length === 0) {
    container.append("p")
      .text(`No data available for ${stateName}.`)
      .style("font-size", "0.9rem")
      .style("color", "gray");
    return;
  }

  // Dimensions
  const containerWidth = container.node().clientWidth;
  const width = containerWidth - margin.left - margin.right;

  // Title
  container.append("div")
    .text(`${stateName} · teen births per 1,000 females aged 15–19`)
    .style("font-weight", "600")
    .style("margin-bottom", "6px")
    .style("font-size", "0.85rem");

  // SVG
  const svg = container.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Scales
  const x = d3.scaleLinear()
    .domain(d3.extent(allYears))
    .range([0, width]);

  const maxRate = d3.max(ratesRaw, d => d.rate);
  const y = d3.scaleLinear()
    .domain([0, maxRate]).nice()
    .range([height, 0]);

  // Axes
  const xAxis = d3.axisBottom(x).tickFormat(d3.format("d")).ticks(10);
  const yAxis = d3.axisLeft(y).ticks(6);

  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis);

  svg.append("g").call(yAxis);

  // Labels
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + 28)
    .attr("text-anchor", "middle")
    .style("font-size", "11px")
    .text("Year");

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 12)
    .attr("text-anchor", "middle")
    .style("font-size", "11px")
    .text("Teen births per 1,000");

  // Line
  const line = d3.line()
    .x(d => x(d.year))
    .y(d => y(d.rate));

  svg.append("path")
    .datum(stateData)
    .attr("fill", "none")
    .attr("stroke", "#d90429")
    .attr("stroke-width", 2)
    .attr("d", line);

  // Points
  svg.selectAll(".dot")
    .data(stateData)
    .join("circle")
    .attr("class", "dot")
    .attr("cx", d => x(d.year))
    .attr("cy", d => y(d.rate))
    .attr("r", 3)
    .attr("fill", "#d90429")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1);
}
