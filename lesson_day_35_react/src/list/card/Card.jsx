import Like from "./Like";


export default function Card({props}) {
    
    return (
        <div className="w-[230px] rounded-[8px] p-[10px] flex flex-col gap-[10px] shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)]">
            <img
                className="w-[210px] h-[140px] rounded-[8px]"
                src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eA0lr94CJdg8AHN~Ivf~zoa2o4PubmYiCC9PNKQ4gLLi3YUvbMeqlVYuyDhQuXBdUldlYS1z6mx7ejvQML5vc77SPpuiHwwhHX63BQmuZozQB89-JMX7~l9MEiWS02VRjVgcos9IJptDOI3dYaUKciKTetil~LfrDdAjRHm89dG2h5foXHy68TArGDHwILuKdmoR3NZ2hHj-gj3KYU1Jx0FrXZUu0Pqw3rNk0~3~uL2-t-bbOC0fm-UdL2wi62WBwrfikwDZqKOjsDVFYaFHRQWZuO1FJJoqQ7YerOhJE45iJg8YXNSj44MQKCoFKzqTXqyIRAkO3A~r7DVC-SiqIw__"
                alt="pic" />
            <h1>{props.title}</h1>
            <div className="flex">
                <div className="flex gap-[4px]">
                    <img 
                    className="w-[21px] h-[21px] rounded-[16.57px]"
                    src={props.profileImg}
                    alt="" />
                     <p>{props.author}</p> 
                </div>
                <p>Aug 20, 2022</p>
            </div>
            <Like/>
        </div>
    )
}