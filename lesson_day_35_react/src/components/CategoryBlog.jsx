import Card from "../list/card/Card";
import { useParams } from "react-router-dom";
import category_blog from "../data/category_blog"

export default function CategoryBlog() {

    const { category } = useParams()
    console.log(category)

    let filteredData = []

    if (category) {
        filteredData = category_blog.filter((data) => data.parent.toLowerCase() === category)
    } else {
        filteredData = category_blog
    }


    return (
        <>
            <div>
                {
                    filteredData && filteredData.map((category, idx) => {
                        return (
                            <div key={idx} className="mt-[16px]" >
                                <a className="mt-[16px]" href={category.link}>{category.parent}</a>
                                <div className="flex">
                                    {category && category.children.map((child, index) => <Card key={index} props={child} />)}
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </>
    );

}