import Github from "@/components/icons/Github";

const GithubBadge = () => {

    return (
        <a href="https://github.com/mustafadalga/tooltip-generator"
           className="absolute bg-black/75 w-20 h-20 -top-10 -right-10 rotate-45 z-20">

            <div className="absolute left-1/2 -translate-x-1/2 bottom-2">
                <Github/>
            </div>

        </a>

    )
}

export default GithubBadge;