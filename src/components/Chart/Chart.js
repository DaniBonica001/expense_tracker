import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart({ dataPoints }) {
    const dataPointValues = dataPoints.map((data) => data.value);
    const maximunValue = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {dataPoints.map((data) => (
        <ChartBar
          key={dataPoints.indexOf(data)}
          value={data.value}
          maxValue={maximunValue}
          label={data.label}
        />
      ))}
    </div>
  );
}

export default Chart;
