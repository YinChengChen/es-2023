import "../assets/css/bootstrap.css"
import "../assets/css/custom.css"
export default function MyNav() {
  const navList = [
    {
      name: "首頁",
      url: "#home",
      style: "h5 tc-text fw-400 pr-2"
    },
    {
      name: "活動宗旨",
      url: "#issue",
      style: "h5 tc-text fw-400 pr-2"
    },
    {
      name: "競賽辦法",
      url: "#apply-rules",
      style: "h5 tc-text fw-400 pr-2"
    },
    {
      name: "比賽議程",
      url: "#agenda",
      style: "h5 tc-text fw-400 pr-2"
    },
    {
      name: "交通資訊",
      url: "#place",
      style: "h5 tc-text fw-400 pr-2"
    },
    {
      name: "主辦單位",
      url: "#office",
      style: "h5 tc-text fw-400 pr-2"
    },
    {
      name: "聯絡資訊",
      url: "#contact-us",
      style: "h5 tc-text fw-400 pr-2"
    },
  ];

  return (
    <nav>
      <ul>
        {navList.map((item) => (
          <li>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
