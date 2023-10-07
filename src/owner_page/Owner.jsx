import Layout from "../Layout";
import Cat from "../assets/cat.jpg"

const OwnerPage = () => {
    return (
        <Layout>
            <div className="flex flex-col flex-wrap m-9">
                <h1 className="text-5xl mb-10 self-center">Earth - Group B - 41</h1>
                <img src={Cat} alt="wonyoung" className="w-96 h-64 self-center" />
                <p className="self-center m-5 text-lg">Short Biography</p>
                <p className="text-center self-center w-2/3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quaerat, accusantium tempore ut fugiat quasi, vero est nam dicta temporibus praesentium quibusdam nulla ipsam, in nesciunt totam asperiores? Possimus velit, deleniti incidunt, optio exercitationem suscipit nulla ipsa maxime voluptates quo, voluptatibus quaerat? Odit aut maiores eos vel quo a, iusto animi adipisci delectus eligendi aliquid necessitatibus illum laboriosam architecto? Natus corrupti, praesentium id sequi molestiae debitis, voluptatem officia omnis doloremque voluptatibus possimus fugiat voluptate architecto qui ratione consectetur. Odio perspiciatis voluptates ad quaerat pariatur blanditiis sit quia deleniti, ab minus ipsum ipsa voluptatem debitis veritatis omnis esse, ullam repellendus eius.</p>
            </div>
        </Layout>
    )
}

export default OwnerPage