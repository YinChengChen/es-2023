export default function MyNav(){
    const navList = [
        {
            name:"首頁",
            url: "#"
        },{
            name: "議程",
            url: "#agenda"
        }, {
            name: "報名",
            url: "#apply"
        }];
    
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
    )
}