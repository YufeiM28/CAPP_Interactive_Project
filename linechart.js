function renderLineChart(stateName, ratesRaw, allYears) {
  const container = d3.select("#line-chart");
  container.selectAll("*").remove();

  const stateData = ratesRaw
    .filter(d => d.state === stateName)
    .sort((a, b) => d3.ascending(a.year, b.year));

  // dimensions
  const margin = { top: 24, right: 36, bottom: 32, left: 48 };
  const containerWidth = container.node().clientWidth;
  const width = containerWidth - margin.left - margin.right;
  const height = 230;

  // title
  container.append("div")
    .text(`${stateName}: teen births per 1,000 females`)
    .style("font-weight", "600")
    .style("margin-bottom", "6px")
    .style("font-size", "0.8rem");

  // svg
  const svg = container.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // scales
  const x = d3.scaleLinear()
    .domain(d3.extent(allYears))
    .range([0, width]);

  const maxRate = d3.max(ratesRaw, d => d.rate);
  const y = d3.scaleLinear()
    .domain([0, maxRate]).nice()
    .range([height, 0]);

  // axes
  const xAxis = d3.axisBottom(x).tickFormat(d3.format("d")).ticks(10);
  const yAxis = d3.axisLeft(y).ticks(6);

  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis);

  svg.append("g").call(yAxis);

  // labels
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
    .text("Teen births");

  // line
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
  const dots = svg.selectAll(".dot")
    .data(stateData)
    .join("circle")
    .attr("class", "dot")
    .attr("cx", d => x(d.year))
    .attr("cy", d => y(d.rate))
    .attr("r", 3)
    .attr("fill", "#d90429")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1);

  // hover effect
  function onDotHover(event, d) {
    d3.select(this).attr("r", 5);
    svg.selectAll(".hover-label").remove();
    svg.append("text")
      .attr("class", "hover-label")
      .attr("x", x(d.year))
      .attr("y", y(d.rate) - 8)
      .attr("text-anchor", "middle")
      .style("font-size", "9px")
      .style("font-weight", "600")
      .text(d.rate.toFixed(1));  
  }

  function onDotLeave(event, d) {
    d3.select(this).attr("r", 3);
    svg.selectAll(".hover-label").remove();
  }
  dots
    .on("mouseover", onDotHover)
    .on("mouseout", onDotLeave);
}
