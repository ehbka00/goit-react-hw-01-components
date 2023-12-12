export const Statistics = ({title = '', stats}) => (
    <section className ="statistics">
        {title.length > 0 ? 
            <h2 class="title">Upload stats</h2>
        : null}
  
  <ul class="stat-list">
    {stats.map(stat => (
         <li class="item"
         key={stat.id}
            style={{ backgroundColor: getRandomColor() }}
         >
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}%</span>
        </li>
    ))}
  </ul>
</section>
);

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
} 