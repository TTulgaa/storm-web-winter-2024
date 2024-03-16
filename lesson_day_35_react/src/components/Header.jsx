
export default function Header(){
    return (
        <div className="flex justify-between w-[1091px] py-[39px] px-[48px] items-center box-border">
            <form action="">
                <input type="text" placeholder="Хайх" className="border-[#898886] py-0 px-[25px] rounded-[20px] border-solid border-[1px] w-[572px]"/>
            </form>
            <div className="flex gap-5">
            <button className="text-[#E86B02] py-[10px] px-[30px] rounded-[10px] border-solid border-[1px] border-[#DCE3EA]">Бүртгүүлэх</button>
            <button className="bg-[#E86B02] text-white py-[10px] px-[30px] rounded-[10px]">Нэвтрэх</button>
            </div>
        </div>

    )
}