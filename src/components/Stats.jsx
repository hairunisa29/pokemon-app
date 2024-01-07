function Stats({ stat, value }) {
  const maxWidth = window.innerWidth > 768 ? 200 : 100;
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <span className="capitalize text-sm">{stat}</span>
        <span className="text-sm">{value}</span>
      </div>

      <td>
        <div
          className="h-2 bg-secondary rounded-lg"
          style={{ width: `${(maxWidth * value) / 100}px` }}
        ></div>
      </td>
    </div>
  );
}

export default Stats;
