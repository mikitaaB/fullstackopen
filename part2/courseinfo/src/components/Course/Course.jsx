import Header from "../Header/Header";
import Content from "../Content/Content";
import Total from "../Total/Total";

const Course = ({ course }) => {
    return (
        <>
            <Header courseName={course.name} />
            <Content data={course.parts} />
            <Total data={course.parts} />
        </>
    );
}

export default Course;